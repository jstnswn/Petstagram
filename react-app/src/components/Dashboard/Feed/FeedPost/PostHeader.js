import React from 'react'
import { Link } from 'react-router-dom'

export default function PostHeader({ post }) {
  return (
    <div className='post-header'>
      <img className='profile-pic' alt='profile avatar' src={post.user.image_url}/>
      <p className='post-username'>{post.user.username}</p>
      <i className='fa-solid fa-ellipsis'></i>
    </div>
  )
}
