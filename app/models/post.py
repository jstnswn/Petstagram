from datetime import datetime
from sqlalchemy import desc, asc
from .db import db
from .like import likes
from .user import User

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    caption = db.Column(db.String(2200))
    image_url = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now())

    user = db.relationship('User', back_populates='posts')
    comments = db.relationship('Comment', back_populates='post', cascade='all, delete-orphan')
    likers = db.relationship('User', back_populates='liked_posts', secondary=likes)
    like_notifications = db.relationship('LikeNotification', back_populates='post', cascade='all, delete-orphan')

    @staticmethod
    def get_posts_by_following(current_user_id):
        current_user = User.query.get(current_user_id)
        following = current_user.following
        following_ids = [user.id for user in following]
        posts = Post.query.filter(Post.user_id.in_(following_ids)).all()

        return [post.to_dict() for post in posts]

    def to_dict(self):
        return {
            'id': self.id,
            'user': self.user.f_to_dict(),
            'image_url': self.image_url,
            'caption': self.caption,
            'likers': [liker.f_to_dict() for liker in self.likers],
            'comments': [comment.to_dict() for comment in self.comments],
            'created_at': self.created_at
        }

    # added static method, dict comments, and dict image_url
    # added created_at so posts can be ordered
