import React from 'react'
import ProfileGrid from './ProfileGrid';
import './ProfilePage.css';

export default function ProfilePage() {

  const posts = new Array(20).fill('http://ig-clone-bucket.s3.amazonaws.com/seeds/3cc238c3136b4b1d9e20245966a6e80a.jpeg');

  return (
    <div className='profile-page-container'>
      <div className='profile-header'>Profile Header</div>
      <nav className='profile-nav'>
        <p>posts</p>
        <p>saved</p>
        <p>tagged</p>
      </nav>
      <ProfileGrid posts={posts}/>
    </div>
  )
}
