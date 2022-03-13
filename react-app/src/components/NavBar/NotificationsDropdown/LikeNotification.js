import React from 'react'
import { Link } from 'react-router-dom'

export default function LikeNotification({ likes }) {
  return (
    <>
      <p>Likes</p>
      {likes.map((like, idx) => (
        <div className='notification-container' key={idx}>
          <div className='notification like user-info'>
            <img alt='user avatar' src={like.from_user.image_url}/>
            <Link to={`/${like.from_user.username}`} className='notification-username'>{like.from_user.username}</Link>
            <p>liked your post</p>
          </div>
          <img className='post-notification-image' alt='post' src={like.post.image_url}/>
        </div>
      ))}
    </>
  )
}
