from flask import Blueprint, request
from flask_login import current_user
from app.models import Comment, db
from app.forms.comment_form import CommentForm

from datetime import datetime

comment_routes = Blueprint('comment', __name__)


@comment_routes.route('/', methods=['POST'])
def create_comment():

    now = datetime.now()
    current_time = now.strftime("%H:%M:%S")
    print("current time", current_time)

    data = request.json
    print(data, "-------")

    form = CommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        comment = Comment(
            user_id = data["user_id"],
            post_id = data["post_id"],
            comment = data["comment"],
            created_at = now,

        )

        db.session.add(comment)
        db.session.commit()

        return {"comment": comment.to_dict()}
