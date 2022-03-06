import React from 'react'
import { useSelector } from 'react-redux'
import { getFeedPostsArray } from '../../../store/feed';

export default function Feed() {
  const posts = useSelector(getFeedPostsArray);

  return (
    <>
    {posts.map((post, idx) => (
      <img src={post.image_url} alt='post' key={post.id}/>
      ))}
      </>
  )
}
