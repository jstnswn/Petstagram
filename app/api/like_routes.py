from flask import Blueprint, jsonify, session, request
from flask_login import current_user
from app.models import User, Post, Comment, db
from app.forms.post_form import PostForm


like_routes = Blueprint('like', __name__)


@like_routes.route('/', methods=['POST'])
def create_like():
    user_id = current_user.get_id()
    user = User.query.get(user_id)
    data = request.json
    post_id = data['post_id']

    post = Post.query.get(post_id)
    post.likers.append(user)

    db.session.commit()
    return {'post': post.to_dict()}, 200


@like_routes.route('/', methods=['DELETE'])
def delete_like():
    user_id = current_user.get_id()
    data = request.json
    post_id = data['post_id']

    post = Post.query.get(post_id)
    liker_to_delete = [x for x in post.likers if x.id == user_id][0]
    post.likers.remove(liker_to_delete)

    db.session.commit()
    return {'post': post.to_dict()}, 200
