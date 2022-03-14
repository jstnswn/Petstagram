from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import User, db
from app.aws import (
    upload_file_to_s3, allowed_file, get_unique_filename)

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/usernames/<username>')
@login_required
def fetch_user_by_username(username):
    #TODO error handling for no user found
    user = User.query.filter(User.username==username).one()

    return {'user': user.to_dict()}, 200

@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/profile_image', methods=['PATCH'])
@login_required
def update_profile_image():
    current_user_id = current_user.get_id()
    user = User.query.get(current_user_id)

    if 'image' not in request.files:
        return {'errors': 'image required'}, 400

    image = request.files['image']

    if not allowed_file(image.filename):
        return {'errors': 'file type not permitted'}, 400

    image.filename = get_unique_filename(image.filename)

    upload = upload_file_to_s3(image)

    if 'url' not in upload:
        return upload, 400

    url = upload['url']

    user.image_url = url
    db.session.commit()

    return {'url': url}, 200
