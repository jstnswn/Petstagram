from flask import Blueprint, jsonify, session, request
from flask_login import current_user
from app.models import CommentNotification, db
from app.models.follow_notification import FollowNotification
from app.models.like_notification import LikeNotification

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

@notifiction_routes.route('/likes/<int:notification_id>', methods=['DELETE'])
def delete_like_notification(notification_id):
    notification = LikeNotification.query.get(notification_id)

    db.session.delete(notification)
    db.session.commit()

    return {'message': 'Like notification deleted'}

@notifiction_routes.route('/comments/<int:notification_id>', methods=['DELETE'])
def delete_comment_notification(notification_id):
    notification = CommentNotification.query.get(notification_id)

    db.session.delete(notification)
    db.session.commit()

    return {'message': 'Comment notification deleted'}

@notifiction_routes.route('/follows/<int:notification_id>', methods=['DELETE'])
def delete_follow_notification(notification_id):
    notification = FollowNotification.query.get(notification_id)

    db.session.delete(notification)
    db.session.commit()

    return {'message': 'Follow notification deleted'}

@notifiction_routes.route('/all/', methods=['DELETE'])
def delete_all_user_notifications():
    current_user_id = current_user.get_id()

    like_notifications = None
    try:
        like_notifications = LikeNotification.query.filter(LikeNotification.user_to_id==current_user_id).all()
        [db.session.delete(notification) for notification in like_notifications]
    except:
        print('No like notifications found')

    comment_notifications = None
    try:
        comment_notifications = CommentNotification.query.filter(CommentNotification.user_to_id==current_user_id).all()
        [db.session.delete(notification) for notification in comment_notifications]
    except:
        print('No like notifications found')

    follow_notifications = None
    try:
        follow_notifications = FollowNotification.query.filter(FollowNotification.user_to_id==current_user_id).all()
        [db.session.delete(notification) for notification in follow_notifications]
    except:
        print('No like notifications found')

    db.session.commit()

    #TODO message for when there are no notifications to delete
    return {'message': 'Notifications deleted'}, 204
