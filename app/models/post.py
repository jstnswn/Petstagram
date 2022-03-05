from .db import db

likes = db.Table(
    'likes',
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'), primary_key=True),
    db.Column('post_id', db.Integer, db.ForeignKey('posts.id'), primary_key=True)
)

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    caption = db.Column(db.String(2200))
    image_url = db.Column(db.String(255), nullable=False)

    user = db.relationship('User', back_populates='posts')
    comments = db.relationship('Comment', back_populates='posts')
    likers = db.relationship('User', back_populates='liked_posts', secondary=likes)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'caption': self.caption,
            'likers': [liker.to_dict() for liker in self.likers]
            # maybe include comments
        }
