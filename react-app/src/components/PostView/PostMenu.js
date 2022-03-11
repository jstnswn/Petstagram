import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { deletePost as deletePostProfile } from '../../store/profile';
import { unfollow } from '../../store/dashboard';
import './PostMenu.css';
import '../Dashboard/Feed/FeedPost/PostFooter.css'
import { Modal } from '../../context/Modal';
import PostEditForm from './PostEditForm';

export default function PostMenu({ closeMenu, closePostView, post, setShowPostMenuModal, setShowUnfollowModal, option }) {
  const [showEditMenu, setShowEditMenu] = useState(false);
  const dispatch = useDispatch();
// console.log(setShowUnfollowModal)
  const user = useSelector(({ session }) => session.user)

  const userFollowing = user.following.map(user => user.id)

  const openEdit = () => setShowEditMenu(true);
  const closeEdit = () => setShowEditMenu(false);


  // const urlParam = history.location.pathname.slice(1).toLowerCase();

  const unfollowClick = () => {
    // dispatch(unfollow(post.user.id))
    setShowPostMenuModal(false)
    setShowUnfollowModal(true)
  };

  const removePost = async () => {
    if (option === 'profile') {
      await dispatch(deletePostProfile(post.id));

    } else {
      // await dispatch(deletePostFeed(post.id));
    }
    closePostView();
  }

  const openEditMenu = () => {
    // closePostView()
    openEdit();
  }

  // TODO dispatch route to remove from feed

  return (
    <div className='post-menu'>
      {user.id === post.user.id && (
        <>
          <div style={{ color: 'red' }} onClick={removePost}>Delete</div>
          <div onClick={openEditMenu}>Edit</div>
        </>
      )}
      {userFollowing.includes(post.user.id) &&
        <div className='red' onClick={unfollowClick}>Unfollow</div>
      }
      <div>Share to...</div>
      <div onClick={closeMenu}>Cancel</div>

      {showEditMenu && (
        <Modal onClose={closeEdit} option='layer'>
          <PostEditForm post={post} closeEdit={closeEdit} closeMenu={closeMenu} option={option} />
        </Modal>
      )}
    </div>
  )
}
