from flask import Blueprint, jsonify, session, request
from flask_login import current_user
from app.models import User, Post, Comment, db, likes, LikeNotification
from app.forms.post_form import PostForm


like_routes = Blueprint('like', __name__)


@like_routes.route('/', methods=['POST'])
def create_like():
    user_id = current_user.get_id()
    data = request.json
    user = User.query.get(user_id)
    post_id = data['post_id']

    post = Post.query.get(post_id)

    post.likers.append(user)

    # Create notification for like
    notification = LikeNotification(user_from_id=user_id, user_to_id=post.user.id, post_id=post.id)
    db.session.add(notification)

    db.session.commit()
    return {'user': user.f_to_dict()}, 200


@like_routes.route('/', methods=['DELETE'])
def delete_like():
    user_id = current_user.get_id()
    data = request.json
    post_id = data['post_id']

    post = Post.query.get(post_id)
    liker_to_delete = [user for user in post.likers if int(user.id) == int(user_id)][0]
    post.likers.remove(liker_to_delete)

    # Delete notification if exists
    notification: None

    try:
        notification = LikeNotification.query.filter(
            LikeNotification.user_from_id==user_id, LikeNotification.user_to_id==post.user.id, LikeNotification.post_id==post.id).one()
    except: print('Notification not found')

    if (notification):
        db.session.delete(notification)

    db.session.commit()

    return { "userId": user_id, "postId": post_id }
