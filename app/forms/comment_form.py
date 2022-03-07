from flask_wtf import FlaskForm
from wtforms import IntegerField, TextAreaField, DateField
from wtforms.validators import DataRequired, ValidationError
from app.models import Comment


#TODO form validations

class CommentForm(FlaskForm):
    userId = IntegerField('userId')
    postId = IntegerField('postId')
    comment = TextAreaField('comment')
    createdAt = DateField('createdAt')
