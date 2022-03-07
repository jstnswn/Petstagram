from flask_wtf import FlaskForm
from wtforms import StringField, FileField
from wtforms.validators import DataRequired, ValidationError
from app.models import Post

#TODO form validations

class PostForm(FlaskForm):
    caption = StringField('caption', validators=[DataRequired()])
    image = FileField('image')
