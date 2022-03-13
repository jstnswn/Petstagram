from app.models import db, Comment
from random import randint

def seed_comments():
    comments = [
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You are so cute!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="OMG adorable!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="This is amazing!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Can i adopt you!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="<3",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="mhm slayyyy",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="caption game on point",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Adorbs"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="ily <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="so cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="very cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="so so cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Soooo cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Yes i love it!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You are so adorable!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="YAYAYA",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="This is amazing!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="YOU NEED TO BE MINE",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="<3",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="mhm slayyyy",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="caption game on point",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Adorbs"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="ily <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Let me adopt you pls <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="So cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="hehehehe ily"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="IM DYING OF CUTENESS!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="i love you and i love cuteness!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="GUSHING"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="This is amazing!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="<3!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="<3",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="mhm slayyyy",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="caption game on point",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Adorbs"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="ily <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Let me adopt you pls <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="So cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="mwah mwah kisses"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="MWAH KISSES"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="omgomgomg",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="UGH YES",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="This is amazing!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="XOXOXOXO",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="<3",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="mhm slayyyy",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="caption game on point",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Adorbs"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="ily <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Let me adopt you pls <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="So cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="i love this so much"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="IM GUSHING"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="xoxo",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="OMG ILY",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="This is amazing!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="I AM DYING FROM THE CUTENESS",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="<3",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="mhm slayyyy",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="caption game on point",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Adorbs"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="ily <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Let me adopt you pls <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="So cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="am dead"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="AHHHH! <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="MORE PICS",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="SO ADORABLE",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="This is amazing!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="LOVEEEE",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="<3",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="mhm slayyyy",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="caption game on point",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Adorbs"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="ily <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Let me adopt you pls <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="So cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="So freaking cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="OMGGGGG!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="I NEED MOAR!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="OMG adorable!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="This is amazing!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="YESSSSS",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="<3",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="mhm slayyyy",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="caption game on point",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Adorbs"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="ily <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Let me adopt you pls <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="So cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Soooo cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="YESSSS!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="THIS NEEDS MORE LIKES",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="OMG adorable!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="This is amazing!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="SO FREAKING CUTE OMG",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="<3",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="mhm slayyyy",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="caption game on point",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Adorbs"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="ily <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Let me adopt you pls <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="So cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="So very mucho cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="This is awesome :D"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="This is awesome :D"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="This is awesome :D"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="This is awesome :D"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="nice!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="nice!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="nice!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="nice!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="I love my furry friends"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="I love my furry friends"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="I love my furry friends"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="I love my furry friends"
        ),
         Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You are so cute!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="OMG adorable!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="This is amazing!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Can i adopt you!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="<3",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="mhm slayyyy",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="caption game on point",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Adorbs"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="ily <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="so cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="very cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="so so cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Soooo cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Yes i love it!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You are so adorable!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="YAYAYA",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="This is amazing!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="YOU NEED TO BE MINE",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="<3",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="mhm slayyyy",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="caption game on point",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Adorbs"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="ily <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Let me adopt you pls <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="So cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="hehehehe ily"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="IM DYING OF CUTENESS!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="i love you and i love cuteness!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="GUSHING"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="This is amazing!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="<3!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="<3",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="mhm slayyyy",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="caption game on point",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Adorbs"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="ily <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Let me adopt you pls <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="So cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="mwah mwah kisses"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="MWAH KISSES"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="omgomgomg",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="UGH YES",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="This is amazing!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="XOXOXOXO",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="<3",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="mhm slayyyy",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="caption game on point",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Adorbs"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="ily <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Let me adopt you pls <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="So cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="i love this so much"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="IM GUSHING"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="xoxo",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="OMG ILY",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="This is amazing!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="I AM DYING FROM THE CUTENESS",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="<3",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="mhm slayyyy",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="caption game on point",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Adorbs"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="ily <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Let me adopt you pls <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="So cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="am dead"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="AHHHH! <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="MORE PICS",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="SO ADORABLE",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="This is amazing!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="LOVEEEE",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="<3",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="mhm slayyyy",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="caption game on point",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Adorbs"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="ily <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Let me adopt you pls <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="So cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="So freaking cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="OMGGGGG!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="I NEED MOAR!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="OMG adorable!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="This is amazing!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="YESSSSS",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="<3",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="mhm slayyyy",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="caption game on point",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Adorbs"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="ily <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Let me adopt you pls <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="So cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Soooo cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="YESSSS!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="THIS NEEDS MORE LIKES",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="OMG adorable!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="This is amazing!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="SO FREAKING CUTE OMG",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="<3",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="mhm slayyyy",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="caption game on point",
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Adorbs"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="ily <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="You look so good here!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="Let me adopt you pls <3"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="So cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="So very mucho cute"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="This is awesome :D"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="This is awesome :D"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="This is awesome :D"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="This is awesome :D"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="nice!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="nice!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="nice!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="nice!"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="I love my furry friends"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="I love my furry friends"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="I love my furry friends"
        ),
        Comment(
            user_id=randint(1,12),
            post_id=randint(1,82),
            comment="I love my furry friends"
        ),



    ]

    for comment in comments:
        db.session.add(comment)

    db.session.commit()

def undo_comments():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
