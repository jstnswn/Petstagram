from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

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
