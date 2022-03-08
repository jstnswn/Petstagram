import React from 'react'

export default function ProfileGrid({ posts }) {
  console.log('post', posts)
  return (
    <div className='profile-grid'>
      {posts.map((post, idx) => (
        <div key={idx}>
          <img
            className='profile-grid-item'
            src={post}
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
