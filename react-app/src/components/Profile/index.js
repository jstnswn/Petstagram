import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { getProfilePosts } from '../../store/profile';
import { Modal } from '../../context/Modal';
import { follow } from '../../store/dashboard';
import Unfollow from '../UnfollowModal/Unfollow';
import ProfileGrid from './ProfileGrid.js';
import ProPicModal from './Header/ProPicModal';
import FollowerFormModal from './Header/FollowerModal';
import FollowingFormModal from './Header/FollowingModal';
import EditProfileModal from './Header/EditProfile';
import './ProfilePage.css';

export default function ProfilePage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const urlParam = location.pathname.slice(1);
  const user = useSelector(({ session }) => session.user);
  const [userFollowing, setUserFollowing] = useState(user.following.map(user => user.id))

  const [userLoaded, setUserLoaded] = useState(false);
  const [postsLoaded, setPostsLoaded] = useState(false);
  const [profileUser, setProfileUser] = useState(null);
  const [disableEdit, setDisableEdit] = useState(false);
  const [showEditProfileModal, setShowProfileModal] = useState(false);

  const closeEditProfileModal = () => setShowProfileModal(false);

  const [showProPicModal, setShowProPicModal] = useState(false);
  const openProPicModal = () => {
    if (user.id !== profileUser.id || disableEdit) return;
    setShowProPicModal(true);
  }
  const closeProPicModal = () => setShowProPicModal(false);

  const [showFollowingModal, setShowFollowingModal] = useState(false)
  const openFollowingModal = () => setShowFollowingModal(true)
  const closeFollowingModal = () => setShowFollowingModal(false)

  const [showFollowerModal, setShowFollowerModal] = useState(false)
  const openFollowerModal = () => setShowFollowerModal(true)
  const closeFollowerModal = () => setShowFollowerModal(false)

  const [showUnfollowModal, setShowUnfollowModal] = useState(false)

  const posts = useSelector(({ profile }) => profile.posts?.order)

  const [numberFollowing, setNumberFollowing] = useState(null)
  const [numberFollowers, setNumberFollowers] = useState(null)


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
    if (profileUser) {
      setNumberFollowing(profileUser.following.length)
      setNumberFollowers(profileUser.followers.length)
    }
  }, [profileUser])

  useEffect(() => {
    if (!userLoaded) return;

    dispatch((getProfilePosts(profileUser?.id)))
      .then(() => setPostsLoaded(true));
  }, [dispatch, userLoaded, profileUser]);

  const handleFollow = (e) => {
    e.preventDefault()
    dispatch(follow(profileUser.id))
    setUserFollowing(prev => [...prev, profileUser.id])
    setNumberFollowers(prev => ++prev)
  }


  if (profileUser) {
    if (profileUser.id === user.id) {
      const headerProfilePic = document.getElementById('my-profile-pic')
      if (headerProfilePic) {
        headerProfilePic.style.cursor="pointer"
      }
    }
  }

  return postsLoaded && (
    <div className='profile-page-container'>
      <div className='profile-header'>
        <div className='profile-header-pic-container'>
          <img
            id='my-profile-pic'
            className='header-profile-pic'
            alt='profile-button'
            src={profileUser.image_url}
            onClick={openProPicModal}
          />

        </div>
        {showProPicModal && (
          <Modal onClose={closeProPicModal}>
            <ProPicModal user={profileUser} setUser={setProfileUser} cancelModal={closeProPicModal} />
          </Modal>
        )}
        <div className='header-info'>
          <div className='top-column'>
            <div className='profile-username'>{profileUser.username}
            </div>

            {!userFollowing.includes(profileUser.id) && !(profileUser.id === user.id) &&
              <button onClick={handleFollow} className='modal-follow'>Follow</button>
            }
            {userFollowing.includes(profileUser.id) && !(profileUser.id === user.id) &&
              <div id='profile-unfollow-btn' onClick={() => setShowUnfollowModal(true)}><i className="fa-solid fa-user-check"></i></div>
            }
            {showUnfollowModal &&
              <Modal onClose={() => setShowUnfollowModal(false)}>
                <Unfollow
                  user={profileUser}
                  setShowUnfollowModal={setShowUnfollowModal}
                  option='profile-direct'
                  setNumberFollowers={setNumberFollowers}
                  setUserFollowing={setUserFollowing}
                />
              </Modal>
            }
            {showEditProfileModal && (
              <Modal onClose={closeEditProfileModal}>
                <EditProfileModal user={profileUser} cancelModal={closeEditProfileModal} />
              </Modal>
            )}
          </div>
          <div className='mid-column'>
            <div className='posts-number'>{posts.length} posts</div>
            <div onClick={openFollowerModal} className='followers'>{numberFollowers} followers</div>
            {showFollowerModal && (
              <Modal onClose={closeFollowerModal}>
                <FollowerFormModal
                  user={user}
                  profileUser={profileUser}
                  userFollowing={userFollowing}
                  setNumberFollowing={setNumberFollowing}
                  setUserFollowing={setUserFollowing}
                  setProfileUser={setProfileUser}
                  closeModal={closeFollowerModal}
                />

              </Modal>
            )}
            <div onClick={openFollowingModal} className='following'>{numberFollowing} following</div>
            {showFollowingModal && (
              <Modal onClose={closeFollowingModal}>
                <FollowingFormModal
                  user={user}
                  profileUser={profileUser}
                  userFollowing={userFollowing}
                  setNumberFollowing={setNumberFollowing}
                  setUserFollowing={setUserFollowing}
                  setProfileUser={setProfileUser}
                  closeModal={closeFollowingModal}
                />
              </Modal>
            )}
          </div>
          <div className='bot-column'>{profileUser.full_name}</div>
        </div>
      </div>
      <ProfileGrid profileUser={profileUser} setUserFollowing={setUserFollowing} setNumberFollowers={setNumberFollowers}/>
    </div>
  )
}
