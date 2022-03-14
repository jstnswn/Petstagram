from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User
from sqlalchemy import or_

def check_credentials(form, field):
    credentials = field.data
    print(credentials)
    print(form.data)
    user = User.query.filter(or_(User.email == credentials, User.username == credentials)).first()

    if not user or '':
        raise ValidationError('Username or email provided not found.')

def check_password(form, field):
    password = field.data
    credentials = form.data['credentials']
    user = User.query.filter(or_(User.email == credentials, User.username == credentials)).first()
    if not user or '':
        return
    elif not user.check_password(password):
        raise ValidationError('Password was incorrect.')



class LoginForm(FlaskForm):
    credentials = StringField('credentials', validators=[DataRequired(message='Username or Email is required.'), check_credentials])
    password = StringField('password', validators=[DataRequired('Password is required.'), check_password])
