import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getProfilePosts } from '../../store/profile';
import ProfileGrid from './ProfileGrid.js';
import './ProfilePage.css';
import { Modal } from '../../context/Modal';
import ProPicModal from '../UploadProPicModal';

export default function ProfilePage() {
  const history = useHistory();
  const urlParam = history.location.pathname.slice(1);
  const dispatch = useDispatch();
  const [userLoaded, setUserLoaded] = useState(false);
  const [postsLoaded, setPostsLoaded] = useState(false);
  const [user, setUser] = useState(null);

  const [showProPicModal, setShowProPicModal] = useState(false);
  const openProPicModal = () => setShowProPicModal(true);
  const closeProPicModal = () => setShowProPicModal(false);

  const [showFollowingModal, setShowFollowingModal] = useState(false)
  const openFollowingModal = () => setShowFollowingModal(true)
  const closeFollowingModal = () => setShowFollowingModal(false)

  const [showFollowerModal, setShowFollowerModal] = useState(false)
  const openFollowerModal = () => setShowFollowerModal(true)
  const closeFollowerModal = () => setShowFollowerModal(false)


  function FollowingFormModal() {
    return (
        <>
            <h2>{user.following.map(user => (
              <>
              <img className='modal-img' src={user.image_url}></img>
              <li className='modal-username'>{user.username}</li>
              <li className='modal-fullname'>{user.full_name}</li>
              </>
            ))}
            </h2>
        </>
    )
}

  function FollowerFormModal() {
    return (
      <>
      <h2>{user.followers.map(follower => (
        <>
        <img className='modal-img' src={follower.image_url}></img>
        <li className='modal-username'>{follower.username}</li>
        <li className='modal-fullname'>{follower.full_name}</li>
        </>
      ))}
      </h2>
      </>
    )
  }

  const posts = useSelector(({profile}) => profile.posts?.order)

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
      <div className='profile-header'>
          <img
            className='profile-pic'
            alt='profile-button'
            src={user.image_url}
            onClick={openProPicModal}
          />
          {showProPicModal && (
            <Modal onClose={closeProPicModal}>
              <ProPicModal />
            </Modal>
          )}
          <div className='all-info'>
        <div className='top-column'>
        <div className='profile-username'>{user.username}
        </div>
        <button className='edit-profile'>Edit Profile</button>
        </div>
        <div className='mid-column'>
          <div className='posts-number'>{posts.length} posts</div>
          <div onClick={openFollowerModal} className='followers'>{user.followers.length} followers</div>
          {showFollowerModal && (
            <Modal onClose={closeFollowerModal}>
              <FollowerFormModal />
            </Modal>
          )}
          <div onClick={openFollowingModal} className='following'>{user.following.length} following</div>
          {showFollowingModal && (
            <Modal onClose={closeFollowingModal}>
              <FollowingFormModal />
            </Modal>
          )}
        </div>
        <div className='bot-column'>{user.full_name}</div>
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
