import React from 'react'
import './PostFooter.css';
import { useDispatch, useSelector } from 'react-redux'
import { postLike, deleteLike } from '../../../../store/dashboard';
import { useState } from 'react';

export default function PostFooter({ post }) {
  const sessionUser = useSelector(state => state?.session?.user)
  const dispatch = useDispatch()

  const onClick = async e => {
    e.preventDefault()
    let likers = []
    post.likers.forEach((obj) => {
      likers.push(obj.id)
    })
    if (likers.includes(sessionUser.id)) {
      const payload = {
        postId: post.id
      }
      const data = await dispatch(deleteLike(payload))
    } else {
      const payload = {
        userId: sessionUser.id,
        postId: post.id
      }
      const data = await dispatch(postLike(payload))
    }


    const icon = e.target
    if (icon.classList.contains('fa-regular')) {
      icon.style.color = 'red'
      icon.classList.add('fa-solid')
      icon.classList.remove('fa-regular')
    }
    else {
      icon.style.color = 'black'
      icon.classList.add('fa-regular')
      icon.classList.remove('fa-solid')
    }
  }

  return (
    <div className='post-footer'>
      <div className='footer-icons'>
        <span>
          <i className='fa-regular fa-heart post-icon' onClick={onClick}></i>
        </span>
        <span>
          <i className='fa-regular fa-comment post-icon'></i>
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
