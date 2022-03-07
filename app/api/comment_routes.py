from flask import Blueprint
from flask_login import current_user
from app.models import Comment
from app.forms.comment_form import CommentForm

comment_routes = Blueprint('comment', __name__)


@comment_routes.route('/', methods=['POST'])
def create_comment():
    current_user_id = current_user.get_id()
    form = CommentForm()
