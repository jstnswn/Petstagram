import React from 'react'
import './PostFooter.css';

export default function PostFooter({ post }) {
  return (
    <div className='post-footer'>
      <div className='footer-icons'>
        <span>
          <i className='fa-regular fa-heart post-icon'></i>
        </span>
        <span>
          <i className='fa-regular fa-comment post-icon' ></i>
        </span>
        <span>
          <i className='fa-regular fa-paper-plane post-icon'></i>
        </span>
        <span>
          <i className='fa-regular fa-bookmark post-icon'></i>
        </span>

      </div>
      <div className='footer-likes'>likes</div>
      <div className='comment-container'>
        <p className='caption'><span className='caption-username'>{post.user.username}</span>{post.caption}</p>
        <div>View all comments</div>
      </div>
      <div className='add-comment-container'>Add a comment</div>
    </div>
  )
}
