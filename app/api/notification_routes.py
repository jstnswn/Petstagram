from flask import Blueprint, jsonify, session, request
from flask_login import current_user
from app.models import CommentNotification, db

notifiction_routes = Blueprint('notification', __name__)

@notifiction_routes.route('/comments/', methods=['POST'])
def make_comment_notification():
    data = request.json

    user_from_id = current_user.get_id()
    user_to_id = data['user_to_id']
    comment_id = data['comment_id']
    post_id = data['post_id']

    notification = CommentNotification(
                        user_from_id=user_from_id, user_to_id=user_to_id,
                        comment_id=comment_id, post_id=post_id)

    db.session.add(notification)
    db.session.commit()

    return {'message': f'Comment notification created for post {post_id}'}
