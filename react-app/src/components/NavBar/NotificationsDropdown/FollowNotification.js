import React from 'react'
import { Link } from 'react-router-dom'

export default function FollowNotification({ follows }) {
  return (
    <>
      <p>Follows</p>
      {follows.map((follow, idx) => (
        <div className='notification-container' key={idx}>
          <div className='notification follow user-info'>
            <img alt='user avatar' src={follow.from_user.image_url} />
            {/* <p className='notification-username'>{follow.from_user.username}</p> */}
            <Link to={`/${follow.from_user.username}`} className='notification-username'>{follow.from_user.username}</Link>
            <p>started following you</p>
          </div>
          {/* <img className='post-notification-image' alt='post' src={follow.post.image_url} /> */}
          <button className='modal-follow'>Follow</button>
        </div>
      ))}
    </>
  )
}
