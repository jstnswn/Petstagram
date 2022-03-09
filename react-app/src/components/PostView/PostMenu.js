import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deletePost } from '../../store/profile';
import { unfollow } from '../../store/dashboard';
import './PostMenu.css';
import '../Dashboard/Feed/FeedPost/PostFooter.css'

export default function PostMenu({ closeMenu, closeModal, post }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(({ session }) => session.user)

  const postOwnerFollowers = post.user.followers

  const urlParam = history.location.pathname.slice(1).toLowerCase();
  
  const unfollowClick = () => {
    dispatch(unfollow(post.user.id))
  }

  const removePost = () => dispatch(deletePost(post.id))
    .then(() => closeModal());

  // TODO dispatch route to remove from feed

  return (
    <div className='post-menu'>
      {user.username.toLowerCase() === urlParam && (
        <div style={{color: 'red'}} onClick={removePost}>Delete</div>
      )}
      { postOwnerFollowers.includes(user.id) &&
        <div className='red' onClick={unfollowClick}>Unfollow</div>
      }
      <div>Share to...</div>
      <div onClick={closeMenu}>Cancel</div>
    </div>
  )
}
