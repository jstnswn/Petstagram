# from app.models import like_notifications
from sqlalchemy import ForeignKey
from .db import db
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .like import likes
from .follow import follows
from .like_notification import LikeNotification # like_notifications


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(30), nullable=False)
    full_name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    image_url = db.Column(db.String(255))
    hashed_password = db.Column(db.String(255), nullable=False)


    created_at = db.Column(db.DateTime, default=datetime.now())

    posts = db.relationship('Post', back_populates='user')
    comments = db.relationship('Comment', back_populates='user')
    liked_posts = db.relationship('Post', back_populates='likers', secondary=likes)
    # comment_notifications = db.relationship('CommentNotification', back_populates='to_user')

    # like_notifications = db.relationship('LikeNotification', foreign_keys='LikeNotification.user_from_id', back_populates='from_user')
    l_from_notifications = db.relationship('LikeNotification', foreign_keys='LikeNotification.user_from_id', backref='l_to_notifications', lazy='dynamic')
    l_to_notifications = db.relationship('LikeNotification', foreign_keys='LikeNotification.user_to_id', backref='l_from_notifications', lazy='dynamic')

    # comment_notifications = db.relationship('CommentNotification', foreign_keys='CommentNotification.user_from_id', back_populates='from_user')
    c_from_notifications = db.relationship('CommentNotification', foreign_keys='CommentNotification.user_from_id', backref='c_to_notifications', lazy='dynamic')
    c_to_notifications = db.relationship('CommentNotification', foreign_keys='CommentNotification.user_to_id', backref='c_from_notifications', lazy='dynamic')

    # follow_notifications = db.relationship('FollowNotification', foreign_keys='FollowNotification.user_from_id', back_populates='from_user')
    f_from_notifications = db.relationship('FollowNotification', foreign_keys='FollowNotification.user_from_id', backref='f_to_notifications', lazy='dynamic')
    f_to_notifications = db.relationship('FollowNotification', foreign_keys='FollowNotification.user_to_id', backref='f_from_notifications', lazy='dynamic')


    followers = db.relationship(
        'User',
        secondary=follows,
        primaryjoin=(follows.c.followed_id == id),
        secondaryjoin=(follows.c.follower_id == id),
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

    def check_notifications(self):
        pass

    # Follower_to_dict to avoid recursive calling of to_dict
    def f_to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'image_url': self.image_url,
            'full_name': self.full_name,
        }

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'full_name': self.full_name,
            'email': self.email,
            'image_url': self.image_url,
            'created_at': self.created_at,
            'following': [user.f_to_dict() for user in self.following],
            'followers': [user.f_to_dict() for user in self.followers],
            'notifications': {
                'likes': [like.to_dict() for like in self.l_to_notifications],
                'comments': [comment.to_dict() for comment in self.c_to_notifications],
                'follows': [follow.to_dict() for follow in self.f_to_notifications]
            }
        }
