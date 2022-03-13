from flask import Blueprint, jsonify, session, request
from flask_login import current_user
from app.models import User, Post, Comment, db, likes

follow_routes = Blueprint('follow', __name__)


@follow_routes.route('/', methods=['POST'])
def create_follow():
    follower_id = current_user.get_id()
    data = request.json
    follower = User.query.get(follower_id)

    followed_id = data['user_id']

    followed = User.query.get(followed_id)
    followed.followers.append(follower)

    db.session.commit()
    return { 'user': followed.to_dict()}


@follow_routes.route('/', methods=['DELETE'])
def delete_follow():
    print('-------------------', request.json)
    follower_id = current_user.get_id()
    data = request.json
    follower = User.query.get(follower_id)

    unfollowed_id = data['user_id']
    unfollowed = User.query.get(unfollowed_id)
    unfollowed.followers.remove(follower)

    db.session.commit()
    return { 'userId': unfollowed_id}

@follow_routes.route('/suggestions/')
def get_follow_suggestions():
    # Route currently gets the first 5 users that aren't followed
    current_user_id = current_user.get_id()

    c_user = User.query.get(current_user_id)
    c_following = c_user.following
    following_ids = [user.id for user in c_following]

    users = User.query.filter(User.id.not_in(following_ids)).limit(5).all()

    return {'suggestions': [user.f_to_dict() for user in users]}, 200
