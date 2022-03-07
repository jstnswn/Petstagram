from flask import Blueprint
from app.models import Comment


comment_routes = Blueprint('comment', __name__)
