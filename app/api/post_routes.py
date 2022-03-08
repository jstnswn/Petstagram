from flask import Blueprint, jsonify, session, request
from flask_login import current_user
from app.models import User, Post, Comment, db
from app.forms.post_form import PostForm
from app.aws import (
    upload_file_to_s3, allowed_file, get_unique_filename)

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
    print('😬')
    current_user_id = current_user.get_id()
    posts = Post.get_posts_by_following(current_user_id)
    return {'posts': posts}

@post_routes.route('/<int:user_id>')
def get_profile_posts(user_id):
    user = User.query.get(user_id)
    posts = [post.to_dict() for post in user.posts]
    return {'posts': posts}

@post_routes.route('/', methods=['POST'])
def create_post():
    current_user_id = current_user.get_id()
    form = PostForm()
    image = form.image.data

    if 'image' not in request.files:
        return {'errors': 'image required'}, 400

    if not allowed_file(image.filename):
        return {'errors': 'file type not permitted'}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if 'url' not in upload:
        return upload, 400

    url = upload['url']

    new_post = Post(
                user_id=current_user_id,
                image_url=url,
                caption=form.caption.data)
    db.session.add(new_post)
    db.session.commit()
    return {'post': new_post.to_dict()}, 200
