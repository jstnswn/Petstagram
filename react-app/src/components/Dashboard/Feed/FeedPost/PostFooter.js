import React from 'react'
import './PostFooter.css';

// import { useHistory } from 'react-router-dom'

export default function PostFooter({ post }) {

  // const history = useHistory()

  const onClick = (e) => {
    e.preventDefault()
    // history.push('/srkica')
  }

  return (
    <div className='post-footer'>
      <div className='footer-icons'>
        <span>
          <button id='like' onClick={onClick}>
            <i className='fa-regular fa-heart post-icon'></i>
          </button>
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
        <div>comments...</div>
      </div>
      <div className='add-comment-container'>add comment</div>
    </div>
  )
}
