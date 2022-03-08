import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProfilePosts } from '../../store/profile';
import ProfileGrid from './ProfileGrid';
import './ProfilePage.css';

export default function ProfilePage() {
  // const history = useHistory();
  // const urlParam = history.location.pathname.slice(1);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const user = useSelector(({ session }) => session.user)

  useEffect(() => {
    dispatch((getProfilePosts(user.id)))
      .then(() => setIsLoaded(true));
  }, [dispatch, user]);

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
