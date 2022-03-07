import React from 'react'
import PostHeader from './PostHeader'
import './Post.css';
import PostFooter from './PostFooter';

export default function FeedPost({ post }) {
  return (
    <div className='post-container'>
      <PostHeader post={post}/>
      <img className='post-image' src={post.image_url} alt='post content' />
      <PostFooter post={post}/>
    </div>
  )
}
