import React from 'react'
import { Link } from 'react-router-dom'

export default function LikeNotification({ likes }) {
  return (
    <>
      <p>Likes</p>
      {likes.map((like, idx) => (
        <div className='notification-container dd' key={idx}>
          <div className='notification like user-info dd'>
            <img alt='user avatar' className='dd' src={like.from_user.image_url}/>
            <Link to={`/${like.from_user.username}`} className='notification-username'>{like.from_user.username}</Link>
            <p className='dd'>liked your post</p>
          </div>
          <img className='post-notification-image dd' alt='post' src={like.post.image_url}/>
        </div>
      ))}
    </>
  )
}
