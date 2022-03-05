from flask import Blueprint, jsonify, session, request
from app.models import User, Post, Comment, Follow, Like, db

post_routes = Blueprint('post', __name__)


@post_routes.route('/')
def get_posts():
    posts = Post.query.all()
    post_list = [post.to_dict() for post in posts]

    for post in post_list:
        post_id = post['id']
        user_id = post['user_id']

        # query all comments for post
        comments = Comment.query.filter(Comment.post_id == post_id).all()

        # append comments to post object
        for comment in comments:
            post['comments'] = comment.to_dict()

        # query user for post and appends user dict to post obj
        user = User.query.get(user_id)
        post['user'] = user.to_dict()

        # query likes for post, get's like user_id and appends them to a list
        # and appends that list to post obj
        likes = Like.query.filter(Like.post_id == post_id).all()
        list = []
        for like in likes:
            list.append(like['user_id'])
        post['likers'] = list

    return { 'posts': post_list }
