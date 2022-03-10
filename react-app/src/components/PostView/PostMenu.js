import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { deletePost } from '../../store/profile';
import { unfollow } from '../../store/dashboard';
import './PostMenu.css';
import '../Dashboard/Feed/FeedPost/PostFooter.css'

export default function PostMenu({ closeMenu, closePostView, post, setShowPostMenuModal, openEdit, closeEdit }) {
  // const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector(({ session }) => session.user)

  const userFollowing = user.following.map(user => user.id)

  console.log('post user: ', post.user.id)
  console.log('user: ', user.id)


  // const urlParam = history.location.pathname.slice(1).toLowerCase();

  const unfollowClick = () => {
    dispatch(unfollow(post.user.id))
    setShowPostMenuModal(false)
  };

  const removePost = () => dispatch(deletePost(post.id))
    .then(() => closePostView());

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
    </div>
  )
}
