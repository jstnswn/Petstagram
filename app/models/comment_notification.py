from .db import db
from datetime import datetime
from .user import User

class CommentNotification(db.Model):
    __tablename__ = 'comment_notifications'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    comment_id = db.Column(db.Integer, db.ForeignKey('comments.id'), nullable=False)
    is_checked = db.Column(db.Boolean, default=False)

    user = db.relationship('User', back_populates='comment_notifications')
    comment = db.relationship('Comment', back_populates='comment_notifications')

    def to_dict(self):
        return {
            'id': self.id,
            'user': self.user.f_to_dict(),
            'post_id': self.post_id,
            'comment': self.comment,
            'is_checked': self.is_checked
        }
