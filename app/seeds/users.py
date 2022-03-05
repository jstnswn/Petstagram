from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    users = [
        User(
            username='MisterJackson',
            full_name='Jackson Young-Summers',
            email='Jackson@Young-Summers.com',
            password='password',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/d3fcf1ade62e4db5936cd484616af0f3.png'
        ),
        User(
            username='Mango',
            full_name='Mango Voisin',
            email='Mango@Voisin.com',
            password='password',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/f2f34ca48fc94467b93d815e299475e6.jpg'
        ),
        User(
            username='Dennis',
            full_name="Dennis Heidel",
            email='greenieboi@yahoo.com',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/132bcd0ac4e54542a310bc7f3131607c.png',
            password='greenies'
        ),
        User(
            username='chopper_the_aussie',
            full_name='Chopper ChopChop Choi',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/2475523cba0241f9b8aed0ac5f0ce109.jpeg',
            email='choiboi@goodestdoge.com',
            password='password'
        ),
        User(
            username='nana_banana',
            full_name='Nana Shin',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/67ee2fcb215d4060aef0204a9384c987.jpeg',
            email='nanaBanana@goodestdoge.com',
            password='password'
        ),
        User(
            username='shelbytheblack',
            full_name='Šelbi Demijan Šelbić',
            email='shelby@shelby.com',
            password='password',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/5029525edd384d9391b5510317bd1935.jpg'
        ),
        User(
            username='kingbenjarino',
            full_name='Benji',
            email='benji@benji.com',
            password='password',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/73e32be727ed4c5d811ce7269fa7468d.jpg'
        ),
        User(
            username='harry_berry',
            full_name='Harry Pham',
            email='harryberry@dogmail.com',
            password='password',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/bc3254d81e1e47ae832dd70bfe201e8d.jpg'
        ),
        User(
            username='OliThePoodle',
            full_name='Oliver Pham',
            email='olithepoodle@dogmail.com',
            password='password',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/d9fa4c00270646dbb62965cd4574537a.jpg'
        ),
        User(
            username='PrincessHarper',
            full_name='Harper Lee',
            email='princessharper@dogmail.com',
            password='password',
            image_url=' http://ig-clone-bucket.s3.amazonaws.com/seeds/bf682a026a0f443b9a808895d2661b41.jpg'
        ),
        User(
            username='MrMoo',
            full_name='Maru Lee',
            email='mrmoo@dogmail.com',
            password='password',
            image_url=' http://ig-clone-bucket.s3.amazonaws.com/seeds/694089c066544ffbaf7aaf8602037c76.jpg'
        )
    ]

    for user in users:
        db.session.add(user)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
