import React from 'react'
import { useDispatch } from 'react-redux';
import { deletePost } from '../../store/profile';
import './PostMenu.css';

export default function PostMenu({ closeMenu, closeModal, post }) {
  const dispatch = useDispatch();

  const removePost = () => dispatch(deletePost(post.id))
    .then(() => closeModal());

  // TODO dispatch route to remove from feed

  return (
    <div className='post-menu'>
      <div style={{color: 'red'}} onClick={removePost}>Delete</div>
      <div>Share to...</div>
      <div onClick={closeMenu}>Cancel</div>
    </div>
  )
}
