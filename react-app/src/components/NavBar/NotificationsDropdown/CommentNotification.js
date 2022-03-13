import React from 'react'

export default function CommentNotification({ comments }) {
  return (
    <>
      <p>Comments</p>
      {comments.map((comment, idx) => (
        <div className='notification-container' key={idx}>
          <div className='notification comment user-info'>
            <img alt='user avatar' src={comment.from_user.image_url} />
            <p className='notification-username'>{comment.from_user.username}</p>
            <p>{comment.comment.comment}</p>
          </div>
          <img className='post-notification-image' alt='post' src={comment.post.image_url} />
        </div>
      ))}
    </>
  )
}
