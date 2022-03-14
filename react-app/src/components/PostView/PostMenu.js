import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deletePost as deletePostProfile } from '../../store/profile';
import { deletePost as deletePostFeed, removePost as removePostActionDashbaord } from '../../store/dashboard';
import './PostMenu.css';
import '../Dashboard/Feed/FeedPost/PostFooter.css'
import { Modal } from '../../context/Modal';
import PostEditForm from './PostEditForm';

export default function PostMenu({ setPosts, closeMenu, closePostView, post, setShowPostMenuModal, setShowUnfollowModal, option }) {
  const [showEditMenu, setShowEditMenu] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(({ session }) => session.user)
  const feedPosts = useSelector(({ dashboard }) => dashboard.feed.postIds);

  const userFollowing = user.following.map(user => user.id)


  const openEdit = () => setShowEditMenu(true);
  const closeEdit = () => setShowEditMenu(false);


  const unfollowClick = () => {
    setShowPostMenuModal(false)
    setShowUnfollowModal(true)
  };

  const removePost = async () => {

    if (option === 'profile') {
      await dispatch(deletePostProfile(post.id));
      if (feedPosts[post.id]) await dispatch(removePostActionDashbaord(post.id))
      closePostView();

    } else {
      setPosts(prev => prev.slice(1))
      await dispatch(deletePostFeed(post.id))
      closeMenu()
    }
  }

  return (
    <div className='post-menu'>
      {user.id === post.user.id && (
        <>
          <div style={{ color: 'red' }} onClick={removePost}>Delete</div>
          <div onClick={openEdit}>Edit</div>
        </>
      )}
      {userFollowing.includes(post.user.id) &&
        <div className='red' onClick={unfollowClick}>Unfollow</div>
      }
      <div onClick={closeMenu}>Cancel</div>

      {showEditMenu && (
        <Modal onClose={closeEdit} option='layer'>
          <PostEditForm post={post} closeEdit={closeEdit} closeMenu={closeMenu} option={option} />
        </Modal>
      )}
    </div>
  )
}
