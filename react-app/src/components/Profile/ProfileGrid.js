import React from 'react'
import { useSelector } from 'react-redux';
import { getProfilePostsArray } from '../../store/profile';

export default function ProfileGrid() {
  const posts = useSelector(getProfilePostsArray);

  return (
    <div className='profile-grid'>
      {posts.map((post, idx) => (
        <div key={idx}>
          <img
            className='profile-grid-item'
            src={post.image_url}
            alt='user post'
            style={{
              gridColumnStart: idx % 3 + 1
            }}
          />
        </div>
      ))}
    </div>
  )
}
