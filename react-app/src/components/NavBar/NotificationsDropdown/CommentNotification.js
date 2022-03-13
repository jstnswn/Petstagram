import React from 'react'
import { Link } from 'react-router-dom'

export default function CommentNotification({ comments }) {
  return (
    <>
      <p>Comments</p>
      {comments.map((comment, idx) => (
        <div className='notification-container dd' key={idx}>
          <div className='notification comment user-info dd'>
            <img alt='user avatar' className='dd' src={comment.from_user.image_url} />
            <Link to={`/${comment.from_user.username}`} className='notification-username'>{comment.from_user.username}</Link>
              <p className='dd comment-notification'>{comment.comment.comment}</p>
          </div>
          <img className='post-notification-image' alt='post' src={comment.post.image_url} />
        </div>
      ))}
    </>
  )
}
