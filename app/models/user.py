from .db import db
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from app.models.post import likes


follows = db.Table(
    'follows',
    db.Column('follower_id', db.Integer, db.ForeignKey('users.id')),
    db.Column('follower_id', db.Integer, db.ForeignKey('users.id'))
)
class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), nullable=False)
    full_name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    image_url = db.Column(db.String(255))
    hashed_password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())

    posts = db.relationhip('Post', back_populates='user')
    comments = db.relationhip('Post', back_populates='user')
    liked_posts = db.relationhip('Post', back_populates='likers', secondary=likes)

    followers = db.relationship(
        'User',
        secondary=follows,
        primaryjoin=(follows.c.follwer_id == id),
        secondaryjoin=(follows.c.follwer_id == id),
        backref=db.backref('following', lazy='dynamic'),
        lazy='dynamic'
    )

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'full_name': self.full_name,
            'email': self.email,
            'image_url': self.image_url,
            'created_at': self.created_at
        }
