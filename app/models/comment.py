from .db import db
from datetime import datetime

class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    comment = db.Column(db.String(2200), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())

    user = db.relationship('User', back_populates='comments')
    post = db.relationship('Post', back_populates='comments')
    comment_notifications = db.relationship('CommentNotification', back_populates='comment', cascade='all, delete-orphan')

    def to_dict(self):

        return {
            'user': self.user.f_to_dict(),
            'id': self.id,
            'user_id': self.user_id,
            'post_id': self.post_id,
            'comment': self.comment,
            'created_at': self.created_at,
        }
