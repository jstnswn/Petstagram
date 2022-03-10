from .db import db
from datetime import datetime
from .user import User
from .like import likes

class LikeNotification(db.Model):
    __tablename__ = 'like_notifications'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), nullable=False)
    is_checked = db.Column(db.Boolean, default=False)

    user = db.relationship('User', back_populates='like_notifications')
    post = db.relationship('Post', back_populates='like_notifications')
