from .db import db
from .like import likes
from .user import User

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    caption = db.Column(db.String(2200))
    image_url = db.Column(db.String(255), nullable=False)

    user = db.relationship('User', back_populates='posts')
    comments = db.relationship('Comment', back_populates='post')
    likers = db.relationship('User', back_populates='liked_posts', secondary=likes)

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
            'user_id': self.user_id,
            'image_url': self.image_url,
            'caption': self.caption,
            'likers': [liker.to_dict() for liker in self.likers],
            'comments': [comment.to_dict() for comment in self.comments]
        }

    # added static method, dict comments, and dict image_url
