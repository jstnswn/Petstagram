import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getProfilePosts } from '../../store/profile';
import ProfileGrid from './ProfileGrid';
import './ProfilePage.css';

export default function ProfilePage() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch((getProfilePosts(1)))
      .then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <div className='profile-page-container'>
      <div className='profile-header'>Profile Header</div>
      <nav className='profile-nav'>
        <p>posts</p>
        <p>saved</p>
        <p>tagged</p>
      </nav>
      <ProfileGrid />
    </div>
  )
}
