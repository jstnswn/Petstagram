import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getProfilePosts } from '../../store/profile';
import ProfileGrid from './ProfileGrid.js';
import './ProfilePage.css';
import { Modal } from '../../context/Modal';
import ProPicModal from './Header/ProPicModal';
import FollowerFormModal from './Header/FollowerModal';
import FollowingFormModal from './Header/FollowingModal';
import EditProfileModal from './Header/EditProfile';

export default function ProfilePage() {
  const location = useLocation();
  const urlParam = location.pathname.slice(1);
  const dispatch = useDispatch();
  const [userLoaded, setUserLoaded] = useState(false);
  const [postsLoaded, setPostsLoaded] = useState(false);
  const [profileUser, setProfileUser] = useState(null);

  const [showEditProfileModal, setShowProfileModal] = useState(false);
  const openEditProfileModal = () => setShowProfileModal(true);
  const closeEditProfileModal = () => setShowProfileModal(false);

  const [showProPicModal, setShowProPicModal] = useState(false);
  const openProPicModal = () => setShowProPicModal(true);
  const closeProPicModal = () => setShowProPicModal(false);

  const [showFollowingModal, setShowFollowingModal] = useState(false)
  const openFollowingModal = () => setShowFollowingModal(true)
  const closeFollowingModal = () => setShowFollowingModal(false)

  const [showFollowerModal, setShowFollowerModal] = useState(false)
  const openFollowerModal = () => setShowFollowerModal(true)
  const closeFollowerModal = () => setShowFollowerModal(false)

  const posts = useSelector(({profile}) => profile.posts?.order)

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`/api/users/usernames/${urlParam}`);
      const data = await response.json();
      setProfileUser(data.user);
    };
    fetchUser()
      .then(() => setUserLoaded(true));
  }, [urlParam]);



  useEffect(() => {
    if (!userLoaded) return;

    dispatch((getProfilePosts(profileUser?.id)))
      .then(() => setPostsLoaded(true));
  }, [dispatch, userLoaded, profileUser]);

  return postsLoaded && (
    <div className='profile-page-container'>
      <div className='profile-header'>
          <img
            className='profile-pic'
            alt='profile-button'
            src={profileUser.image_url}
            onClick={openProPicModal}
          />
          {showProPicModal && (
            <Modal onClose={closeProPicModal}>
              <ProPicModal profileUser={profileUser} cancelModal={closeProPicModal}/>
            </Modal>
          )}
          <div className='all-info'>
        <div className='top-column'>
        <div className='profile-username'>{profileUser.username}
        </div>
        <button onClick={openEditProfileModal} className='edit-profile'>Edit Profile</button>
        {showEditProfileModal && (
          <Modal onClose={closeEditProfileModal}>
            <EditProfileModal user={profileUser} cancelModal={closeEditProfileModal}/>
            </Modal>
        )}
        </div>
        <div className='mid-column'>
          <div className='posts-number'>{posts.length} posts</div>
          <div onClick={openFollowerModal} className='followers'>{profileUser.followers.length} followers</div>
          {showFollowerModal && (
            <Modal onClose={closeFollowerModal}>
              <FollowerFormModal profileUser={profileUser} closeModal={closeFollowerModal} />

            </Modal>
          )}
          <div onClick={openFollowingModal} className='following'>{profileUser.following.length} following</div>
          {showFollowingModal && (
            <Modal onClose={closeFollowingModal}>
              <FollowingFormModal profileUser={profileUser} closeModal={closeFollowingModal}/>
            </Modal>
          )}
        </div>
        <div className='bot-column'>{profileUser.full_name}</div>
      </div>
      </div>
      <nav className='profile-nav'>
        <p>POSTS</p>
        <p>SAVED</p>
        <p>TAGGED</p>
      </nav>
      <ProfileGrid />
    </div>
  )
}
