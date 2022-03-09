from flask import Blueprint, jsonify, session, request
from flask_login import current_user
from app.models import User, Post, Comment, db, likes

follow_routes = Blueprint('follow', __name__)


@follow_routes.route('/', methods=['POST'])
def create_follow():
    follower_id = 3    #current_user.get_id()
    data = request.json
    follower = User.query.get(follower_id)

    followed = data['user_id']

    followed = User.query.get(followed)
    followed.followers.append(follower)

    db.session.commit()
    return { 'follower': follower.to_dict(),
            'followed': followed.to_dict() }


@follow_routes.route('/', methods=['DELETE'])
def delete_follow():
    