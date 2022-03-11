from app.models import db

# Likes
def undo_like_notifications():
    db.session.execute('TRUNCATE like_notifications RESTART IDENTITY CASCADE;')
    db.session.commit()
