from app.models import db, Post

def seed_posts():
    posts = [
        # ----------------Posts
        Post(
            user_id=2,
            caption="I'm a bag kitty!",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/8120c8697c5d41f4a5ec4abf37c30c53.jpeg',
        ),
        Post(
            user_id=7,
            caption="Stop working, human. It's my dinner time!",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/a6115896c5eb491cbe674184a2e1d2f0.jpg',
        ),
        Post(
            user_id=6,
            caption='Favorite place to chill - the fridge',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/2ec6b176849c46928c79e98967abb85a.jpg',
        ),
        Post(
            user_id=1,
            caption="Ahh, to be young again....",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/dddcacfaa5584b33b4efe3f6c831e95e.png"
        ),
        Post(
            user_id=11,
            caption="New haircut, who dis",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/0123259acdcb412c845fedee404ee01a.jpg',
        ),

        Post(
            user_id=1,
            caption="This is my zen garden, my meditation space.",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/579bb752329d4137a4f051e869e66da4.png"
        ),
         Post(
            user_id=2,
            caption="I found the secret stash!! Hope my human doesn't find out",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/34a164253e674b5ca02b1b95e3f1a8b1.jpeg',
        ),
        Post(
            user_id=1,
            caption="It's warm in here and there's always a light buzz.",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/d1e65c394cc44f64ac36b1d46d93b132.png"
        ),
        Post(
            user_id=2,
            caption="Give me attention, human!!",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/eb59a41b99784855803212597de00edf.jpeg"
        ),
        Post(
            user_id=1,
            caption="Cosy feet, and not too stinky.",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/f0480333282b49768975efdfd585aafc.png"
        ),
        Post(
            user_id=12,
            caption="CPO - Chief Pawduct Officer oversees the acquisition of all treats!",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/e160dc4e5d7b4f998ad11d152784699c.jpg',
        ),
        Post(
            user_id=1,
            caption="Kind of weird how much my roommate likes to take picures of me while I sleep.",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/9230783037f745e899ca6f90d5ad7d97.png"
        ),

        Post(
            user_id=3,
            caption='Work hard, play hard',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/140947bb1d4b40309db01e1bd373f7b9.png'
        ),

        Post(
            user_id=2,
            caption="I think I might have found something. I'm on the hunt!",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/64fd6738ceb7425d839fdba32180cf2c.jpg',
        ),
        Post(
            user_id=3,
            caption='People don\'t understand that playtime isn\'t a game',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/76a14168f895433cb108fa265163baea.png'
        ),
        Post(
            user_id=3,
            caption='Just told her my best joke',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/7582ae9cb2fd44fe8843a803c33ca7ed.png'
        ),
        Post(
            user_id=2,
            caption="Relaxing on my gamer chair",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/1f801885188d4ef6a4be2c4b405523e4.jpeg"
        ),
        Post(
            user_id=3,
            caption='#TBT When I first met the crew 😊',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/1ef01bb4750d46cb80018f2bd8126517.png'
        ),
        Post(
            user_id=2,
            caption="I think my roommate caught me sleeping in this one.",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/8e7f836c280a40b3b85cd31712e99ec1.jpeg"
        ),
        Post(
            user_id=4,
            caption='You can never leash my inner-beast',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/c0821ba9a0f84321a3b205620fe6c275.jpeg'
        ),
        Post(
            user_id=2,
            caption="Such a cosy blanket.....Only $25.99 at target.com",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/917ec04399754aba8a5f64d5377b00aa.jpeg"
        ),
        Post(
            user_id=4,
            caption='Sometimes I wonder what it all means, then I see a squirrel and I just know what to do',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/c9ee77eee8b940f0bb790773af8cc0d7.jpeg'
        ),
        Post(
            user_id=12,
            caption="She disapproves of a camera so close to her face",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/b7c9d18e77f44f348667863d0e95fd91.jpg',
        ),
         Post(
            user_id=3,
            caption='Oh hey. I didn\'t see you there',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/f6a880e5e08242ea922e18bc96c0ea7a.png'
        ),
        Post(
            user_id=4,
            caption='Can\'t you see I\'m busy?',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/2475523cba0241f9b8aed0ac5f0ce109.jpeg'
        ),
        Post(
            user_id=4,
            caption='Felt cute, might delete later',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/57f6b160c83f407cad4cc53999e58f57.jpeg'
        ),
        Post(
            user_id=4,
            caption='Sliding into her DMs like',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/50f88ba8dde3496c82169e3f23693f3f.jpeg'
        ),
        Post(
            user_id=2,
            caption="I don't know what this creature is, but it's terrifying!!!",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/97826a9b53f74c22aa609a04cd44fc28.jpeg"
        ),
        Post(
            user_id=4,
            caption='Joyride',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/9baa49cd99b44b98a052a2bd442a2530.jpeg'
        ),

        Post(
            user_id=5,
            caption='My good side',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/9c59ac0e1121434c9dd7736c15923d9d.jpeg',
        ),
        Post(
            user_id=5,
            caption='I\'ll take my food now 🖤',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/67ee2fcb215d4060aef0204a9384c987.jpeg',
        ),
        Post(
            user_id=5,
            caption='Bad hair day',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/c4ba394a24684bf3a2f812adf6f1c054.jpeg',
        ),
        Post(
            user_id=6,
            caption='Get up already I need someone to completely ignore today',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/5e27829d803b48ef834c4256c1f87890.jpg',
        ),
        Post(
            user_id=2,
            caption="I'm beautiful!!!",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/b39686ed67c349aab9d69ef2afaa586d.jpeg"
        ),
        Post(
            user_id=6,
            caption='One year ago I was this fabulous',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/c8c8f290a0414145a9cfcfbc98122c71.jpg',
        ),
         Post(
            user_id=2,
            caption="Attention please........",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/d00e8d00ea2448b0bae31976ae4e69e7.jpeg"
        ),
        Post(
            user_id=6,
            caption='When @missdhaze is super annoying but she gives you food and shelter so you just -.-',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/8849f56107114fd0b712753d61359943.jpg',
        ),
         Post(
            user_id=2,
            caption="Are you a back sleeper or a side sleeper? I'm both.",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/a3f92c4d6ac44679a1a84644ed9c5e4c.jpeg"
        ),
        Post(
            user_id=2,
            caption="I know my belly looks inviting, but beware, touch the belly and get the teefies",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/714c3e0d885844088b6b7e6a3cd0b479.jpeg"
        ),
        Post(
            user_id=6,
            caption='Hear me roar',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/0e09a08e113b4ee1a318dfcd45ccde28.jpg',
        ),
        Post(
            user_id=2,
            caption="How do you like my bow?",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/95b080a34af74ffab4954f444fa38817.jpeg"
        ),
        Post(
            user_id=6,
            caption='Nap time',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/fade0dc7a5254e569cbe4f6ecf0115d4.jpg',
        ),
         Post(
            user_id=1,
            caption="I only do this when my roommates laundry is clean. Otherwise too stinky!!",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/d181e18f2c41480a93b5227de6146eb8.png"
        ),
        Post(
            user_id=7,
            caption='Checking his work',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/3b18328813b04027a123df2c9efd62c8.jpg',
        ),

        Post(
            user_id=2,
            caption="It's Christmas time, but this bird has my interest",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/5e288da868f343b995c168aa9b7eb972.jpg',
        ),

        Post(
            user_id=7,
            caption='Ooh, warm dryer!',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/89867e9c0f80491cac39a0ece752bac6.jpg',
        ),
        Post(
            user_id=12,
            caption="Hello human, why are you upside down?",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/0a74ebe940fe4dc7bf2207975b66c399.jpg',
        ),
        Post(
            user_id=7,
            caption='I can see the bottom of my bowl. I am starving to death. Fix it, human.',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/f9cd786e87cf4caeb11b4420a4e4a48f.jpg',
        ),
        Post(
            user_id=3,
            caption='Anyone want to go out for a puppiccino?',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/571a1257bee34afc9fa6431475dbee47.png'
        ),

        Post(
            user_id=7,
            caption='Protecting the balcony.',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/73727599db8545d2b1192b161814f4f5.jpg',
        ),
        Post(
            user_id=2,
            caption="What do you think? Is this my good side?",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/47e52355dc454a21bd357056016112d7.jpeg"
        ),
        Post(
            user_id=7,
            caption="Who doesn't love a good bag?!?",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/33819e4aa687425bbca9f563e11b3693.jpg',
        ),
        Post(
            user_id=8,
            caption="What happens behind the scenes",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/8f47ee3e45b640e3999439f6620ea2c2.jpg',
        ),
        Post(
            user_id=3,
            caption='Reach for your dreams, reach for Greenies',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/2ed2cafda091455bb761217e343e6348.png'
        ),
        Post(
            user_id=8,
            caption="Nap time",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/bc3254d81e1e47ae832dd70bfe201e8d.jpg',
        ),
        Post(
            user_id=9,
            caption="With my best friend, Harry!",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/c489ba87a5ea47ecaaa46665f895b682.jpg',
        ),
        Post(
            user_id=2,
            caption="They found me in my secret hiding place.",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/4e4d99406a69419d96dba15f6b6afd23.jpeg"
        ),
        Post(
            user_id=9,
            caption="Dont wake me up",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/d9fa4c00270646dbb62965cd4574537a.jpg',
        ),
        Post(
            user_id=8,
            caption="Dinner is my favorite time of day!",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/bf5c09a7ac634019a8dc90318eee8864.jpg',
        ),
        Post(
            user_id=9,
            caption="Hi my name is Oliver",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/bc490595733e447b9449508d701f4a05.jpg',
        ),
        Post(
            user_id=10,
            caption="Mr. Moo and I",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/8cda5b956a614bba9ed13232b04f387a.jpg',
        ),
        Post(
            user_id=10,
            caption="Say cheese!",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/0bbfdc28ffc14ba4bdb87d47b58d45e0.jpg',
        ),
         Post(
            user_id=2,
            caption="Enjoying some time in the sun. Isn't this a nice tree?",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/f0db658dd3b14ce19f2a1d5c00b51ef5.jpg',
        ),
        Post(
            user_id=10,
            caption="You will always find us together",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/0ec05035d63041fa96d9f06cda91eebb.jpg',
        ),
        Post(
            user_id=2,
            caption="These birds a huge!! Think I can still catch them? I do.",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/f4cbf159ed2e4486a6b2cbde3dce16f8.jpeg"
        ),
        Post(
            user_id=10,
            caption="Soft pillows are my favorite",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/bf682a026a0f443b9a808895d2661b41.jpg',
        ),
        Post(
            user_id=11,
            caption="Why does she always follow me",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/e43f9c752427441882103a1ec0f1bf09.jpg',
        ),
        Post(
            user_id=2,
            caption="I'm a Box kitty this time!",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/d28effd3155b4317b89ad27770ab52db.jpeg"
        ),
        Post(
            user_id=11,
            caption="Hey, I was here first!",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/d82f449bbd364a12b4df474e23608fb8.jpg',
        ),
        Post(
            user_id=2,
            caption="My humans made me pose here.",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/3cc238c3136b4b1d9e20245966a6e80a.jpeg"
        ),
        Post(
            user_id=11,
            caption="Play with me! I'm bored.",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/b19d12a11b9a496280703cab5260abe7.jpg',
        ),
        Post(
            user_id=2,
            caption='Enjoying the view out the front window.',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/7c619aaae6b743f4bee3965e7536a8b9.jpeg',
        ),
        Post(
            user_id=11,
            caption="No makeup shot",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/11aa51b2521644fab881ec4cc6ba19be.jpg',
        ),
         Post(
            user_id=2,
            caption="If I fit, I sit.",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/80b67e9e91654541be07abd05c437f23.jpeg"
        ),
        Post(
            user_id=12,
            caption="Daydreaming about food...",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/c4e9618f81e34ddea0dbad8e445ee375.png',
        ),
        Post(
            user_id=2,
            caption='This is a nice leg',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/8553da5dd6e64126bd796c95b38d96da.jpeg',
        ),
         Post(
            user_id=1,
            caption="My roommates always call me a trash kitty and I don't know why.",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/5b115c4768a74135a19c149f79e47fac.png"
        ),
         Post(
            user_id=2,
            caption='Basking in the sun!',
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/557e3f15417d491c83613c5208b9f91f.jpeg',
        ),
        Post(
            user_id=1,
            caption="Just me and my friend chillin' on the deck",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/3c3e908ec5d345ca9e6dbf712d04e8dd.png"
        ),

        Post(
            user_id=12,
            caption="One is naughty one is nice, guess which is which?",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/4762e656fec74d558cfb48aaf83cfbd2.jpg',
        ),
         Post(
            user_id=1,
            caption="I just woke up and my roommates already taking pictures of me.",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/ff4b89331f1f48cd9b01de51dc7f3594.png"
        ),

        Post(
            user_id=2,
            caption="This is my home inside my home. Holloween edition",
            image_url="http://ig-clone-bucket.s3.amazonaws.com/seeds/2e36e53f62814686b67c908b912c5324.jpeg"
        ),
        Post(
            user_id=12,
            caption="Sleeping next to my best friend",
            image_url='http://ig-clone-bucket.s3.amazonaws.com/seeds/116938a17b8a4f09a2a24cfe62c63853.jpg',
        ),
    ]

    for post in posts:
        db.session.add(post)

    db.session.commit()


def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
