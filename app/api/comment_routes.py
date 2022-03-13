from flask import Blueprint, request
from flask_login import current_user
from app.models import Comment, db
from app.forms.comment_form import CommentForm
from app.api.auth_routes import validation_errors_to_error_messages

from datetime import datetime

comment_routes = Blueprint('comment', __name__)


@comment_routes.route('/', methods=['POST'])
def create_comment():

    now = datetime.now()
    print(now, '-------------------')
    current_time = now.strftime("%H:%M:%S")

    data = request.json
    

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

        comment_object = comment.to_dict()
        return {"comment": comment.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400



@comment_routes.route('/', methods=['DELETE'])
def delete_comment():

    data = request.json

    comment_id = data['comment_id']
    post_id = data['post_id']

    comment = Comment.query.filter(Comment.id == comment_id).first()

    db.session.delete(comment)
    db.session.commit()
    return { "commentId": comment_id, "postId": post_id }


@comment_routes.route('/', methods=['PATCH'])
def update_comment():
    data = request.json


    comment_id = data['comment_id']
    post_id = data['post_id']
    updated_comment = data['updated_comment']

    comment = Comment.query.get(comment_id)
    comment.comment = updated_comment
    db.session.commit()

    return {"commentId": comment_id, "postId": post_id, "updatedComment": updated_comment}
