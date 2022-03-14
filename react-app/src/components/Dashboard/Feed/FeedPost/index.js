import React from 'react'
import PostHeader from './PostHeader'
import './Post.css';
import PostFooter from './PostFooter';

export default function FeedPost({ post, setPosts }) {
  return (
    <div className='post-container'>
      <PostHeader post={post} setPosts={setPosts}/>
        <img className='post-image' src={post.image_url} alt='post content' />
      <PostFooter option='feed' post={post}/>
    </div>
  )
}
