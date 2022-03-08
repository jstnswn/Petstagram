import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getProfilePosts } from '../../store/profile';
import ProfileGrid from './ProfileGrid.js';
import './ProfilePage.css';

export default function ProfilePage() {
  const history = useHistory();
  const urlParam = history.location.pathname.slice(1);
  const dispatch = useDispatch();
  const [userLoaded, setUserLoaded] = useState(false);
  const [postsLoaded, setPostsLoaded] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`/api/users/usernames/${urlParam}`);
      const data = await response.json();
      setUser(data.user);
    };
    fetchUser()
      .then(() => setUserLoaded(true));
  }, [urlParam]);

  // const user = useSelector(({ session }) => session.user)

  useEffect(() => {
    if (!userLoaded) return;

    dispatch((getProfilePosts(user?.id)))
      .then(() => setPostsLoaded(true));
  }, [dispatch, userLoaded, user]);

  return postsLoaded && (
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
