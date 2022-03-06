import React from 'react'
import { useSelector } from 'react-redux'
import { getFeedPostsArray } from '../../../store/feed';

import './Feed.css'

export default function Feed() {
  const posts = useSelector(getFeedPostsArray);
  console.log('posts: ', posts)

  return (
    <div className='feed-body'>
    {posts.map(post => (
      <div key={post.id} className='post-container'>
        <div className='post-header'>post header</div>
        <img className='post-image' src={post.image_url} alt='post content'/>
        <div className='post-footer'>post footer</div>
      </div>
      ))}
      </div>
  )
}
