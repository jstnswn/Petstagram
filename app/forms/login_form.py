from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User
from sqlalchemy import or_


# def user_exists_email(form, field):
#     # Checking if user exists
#     email = field.data
#     if email == '':
#         return

#     user = User.query.filter(User.email == email).first()

#     if not user:
#         raise ValidationError('Email provided not found.')

# def user_exists_username(form, field):
#     username = field.data
#     if username == '':
#         return

#     user = User.query.filter(User.username == username).first()

#     if not user or '':
#         raise ValidationError('Username provided not found.')


def check_credentials(form, field):
    credentials = field.data
    print(credentials)
    print(form.data)
    user = User.query.filter(or_(User.email == credentials, User.username == credentials)).first()

    if not user or '':
        raise ValidationError('User provided not found.')


# def password_matches(form, field):
#     # Checking if password matches
#     password = field.data
#     email = form.data['email']
#     username = form.data['username']
#     user = User.query.filter(or_(User.email == email, User.username == username)).first()
#     # print(user)
#     if not user:
#         raise ValidationError('No such user exists.')
#     if not user.check_password(password):
#         raise ValidationError('Password was incorrect.')


def check_password(form, field):
    password = field.data
    credentials = form.data['credentials']
    user = User.query.filter(or_(User.email == credentials, User.username == credentials)).first()
    if not user or '':
        return
    elif not user.check_password(password):
        raise ValidationError('Password was incorrect.')



class LoginForm(FlaskForm):
    # email = StringField('email', validators=[user_exists_email])
    # username = StringField('username', validators=[user_exists_username])
    credentials = StringField('credentials', validators=[DataRequired(), check_credentials])
    password = StringField('password', validators=[DataRequired(), check_password])
