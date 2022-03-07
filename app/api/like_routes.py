from flask import Blueprint, jsonify, session, request
from flask_login import current_user
from app.models import User, Post, Comment, db
from app.forms.post_form import PostForm


like_routes = Blueprint('like', __name__)


@like_routes.route('/', methods=['POST'])
def create_like():
    # user_id = current_user.id
    user_id = 1
    user = User.query.get(user_id)
    data = request.json
    post_id = data['post_id']

    post = Post.query.get(post_id)
    post.likers.append(user)


    db.session.add(post)
    db.session.commit()
    return {'post': post.to_dict()}, 200
