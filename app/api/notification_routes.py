from flask import Blueprint, jsonify, session, request
from flask_login import current_user
from app.models import CommentNotification

notifiction_routes = Blueprint('notification', __name__)

