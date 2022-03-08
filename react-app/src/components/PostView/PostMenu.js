import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deletePost } from '../../store/profile';
import './PostMenu.css';

export default function PostMenu({ closeMenu, closeModal, post }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const urlParam = history.location.pathname.slice(1).toLowerCase();
  const user = useSelector(({ session }) => session.user)

  const removePost = () => dispatch(deletePost(post.id))
    .then(() => closeModal());

  // TODO dispatch route to remove from feed

  return (
    <div className='post-menu'>
      {user.username.toLowerCase() === urlParam && (
        <div style={{color: 'red'}} onClick={removePost}>Delete</div>
      )}
      <div>Share to...</div>
      <div onClick={closeMenu}>Cancel</div>
    </div>
  )
}
