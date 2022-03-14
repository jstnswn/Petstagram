import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { follow, unfollow } from '../../../store/dashboard';

export default function FollowNotification({ follows }) {
  const [followed, setFollowed] = useState(false);
  const [openUnfollowMenu, setOpenUnfollowMenu] = useState(false);
  const dispatch = useDispatch();

  // console.log('follows: ', follows)

  const toggleFollow = async (e, userId) => {
    e.preventDefault();

    if (!followed) {
      dispatch(follow(userId));
      setFollowed(true);

    } else if (followed) {
      await dispatch(unfollow(userId))
        .then(() => setFollowed(false))

      // closeMenu();

      // setSuggestions(prev => [...prev, ])

    }
  };

  return (
    <>
      <p>Follows</p>
      {follows.map((follow, idx) => (
        <div className='notification-container dd' key={idx}>
          <div className='notification follow user-info dd'>
            <img alt='user avatar' className='dd' src={follow.from_user.image_url} />
            {/* <p className='notification-username'>{follow.from_user.username}</p> */}
            <Link to={`/${follow.from_user.username}`} className='notification-username'>{follow.from_user.username}</Link>
            <p className='dd'>started following you</p>
          </div>
          {/* <img className='post-notification-image' alt='post' src={follow.post.image_url} /> */}
          {/* <button onClick={(e) => toggleFollow(e, follow.from_user.id)}className={!followed ? 'modal-follow dd' : 'modal-following'}>Follow</button>x */}
        </div>
      ))}
    </>
  )
}
