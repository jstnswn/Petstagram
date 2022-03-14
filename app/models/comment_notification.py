from .db import db
from datetime import datetime
from .user import User

class CommentNotification(db.Model):
    __tablename__ = 'comment_notifications'

    id = db.Column(db.Integer, primary_key=True)
    user_to_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user_from_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    comment_id = db.Column(db.Integer, db.ForeignKey('comments.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)

    from_user = db.relationship('User', back_populates='c_from_notifications', viewonly=True, foreign_keys='CommentNotification.user_from_id')
    comment = db.relationship('Comment', back_populates='comment_notifications')
    post = db.relationship('Post', back_populates='comment_notifications')

    def to_dict(self):
        return {
            'id': self.id,
            'from_user': self.from_user.f_to_dict(),
            # 'to_user_id': self.user_to_id,
            'post': self.post.n_to_dict(),
            'comment': self.comment.to_dict(),
        }
