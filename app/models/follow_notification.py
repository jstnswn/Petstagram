from .db import db
from datetime import datetime
from .user import User

class FollowNotification(db.Model):
    __tablename__ = 'follow_notifications'

    id = db.Column(db.Integer, primary_key=True)
    user_to_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user_from_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    from_user = db.relationship('User', back_populates='f_from_notifications', viewonly=True, foreign_keys='FollowNotification.user_from_id')

    def to_dict(self):
        return {
            'id': self.id,
            'from_user': self.from_user.f_to_dict(),
            'to_user_id': self.user_to_id,
        }
