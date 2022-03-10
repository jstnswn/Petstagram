import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deletePost } from '../../store/profile';
import PostEditForm from './PostEditForm';
import { Modal } from '../../context/Modal';
import './PostMenu.css';

export default function PostMenu({ closeMenu, closeModal, post }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showEditForm, setShowEditForm] = useState(false);

  const urlParam = history.location.pathname.slice(1).toLowerCase();
  const user = useSelector(({ session }) => session.user)


  const removePost = () => dispatch(deletePost(post.id))
    .then(() => closeModal());

  // TODO dispatch route to remove from feed

  return (
    <>
      <div className='post-menu'>
        {user.username.toLowerCase() === urlParam && (
          <>
            <div style={{ color: 'red' }} onClick={removePost}>Delete</div>
            <div onClick={() => {
              setShowEditForm(true)
              closeModal(true)
            }}>Edit</div>
          </>
        )}
        <div>Share to...</div>
        <div onClick={closeMenu}>Cancel</div>
      </div>

      {showEditForm && (
        <Modal onClose={() => setShowEditForm(false)}>
          {/* This needs to happen in PostView to replace the current modal. Move show menu logic there */}
          <PostEditForm post={post}/>
        </Modal>
      )}
    </>
  )
}
