import React from 'react'
import { Link } from 'react-router-dom'

export default function PostHeader({ post }) {

  return (
    <div className='post-header'>
      <Link to={`/${post.user.username}`}>
      <img className='profile-pic' alt='profile avatar' src={post.user.image_url}/>
      </Link>
      <Link className='post-username' to={`/${post.user.username}`}>{post.user.username}</Link>
      <i className='fa-solid fa-ellipsis'></i>
    </div>
  )
}
