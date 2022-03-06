from flask import Blueprint, jsonify, session, request
from app.models import User, Post, Comment, db
from flask_login import current_user

post_routes = Blueprint('post', __name__)


# @post_routes.route('/')
# def get_posts():
#     user = current_user
#     print('-------------',current_user)

#     posts = Post.query.all()
#     post_list = [post.to_dict() for post in posts]

#     for post in post_list:
#         post_id = post['id']
#         user_id = post['user_id']

#         # query all comments for post
#         comments = Comment.query.filter(Comment.post_id == post_id).all()

#         # append comments to post object
#         for comment in comments:
#             post['comments'] = comment.to_dict()

#         # query user for post and appends user dict to post obj
#         user = User.query.get(user_id)
#         post['user'] = user.to_dict()

#     return { 'posts': post_list }

@post_routes.route('/')
def get_posts():
    current_user_id = current_user.get_id()
    posts = Post.get_posts_by_following(1)
    return {'posts': posts}
