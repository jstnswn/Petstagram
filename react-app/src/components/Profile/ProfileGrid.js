import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import { getProfilePostsArray } from '../../store/profile';
import PostView from '../PostView';
import PostEditForm from '../PostView/PostEditForm';

export default function ProfileGrid() {
  const [showIdx, setShowIdx] = useState(null);
  const [showEditMenu, setShowEditMenu] = useState(false);

  const posts = useSelector(getProfilePostsArray);

  const openPostView = (idx) => setShowIdx(idx);
  const closePostView = () => setShowIdx(null);

  const openEdit = () => setShowEditMenu(true);
  const closeEdit = () => setShowEditMenu(false);

  return (
    <div className='profile-grid'>
      {posts.map((post, idx) => (
        <div key={idx}>
          <img
            className='profile-grid-item'
            src={post.image_url}
            alt='user post'
            onClick={() => openPostView(idx)}
            style={{
              gridColumnStart: idx % 3 + 1
            }}
          />

          {showIdx === idx && (
            <Modal onClose={closePostView}>
              <PostView post={post} openEdit={openEdit} closeEdit={closeEdit} closePostView={closePostView}/>
            </Modal>
          )}

          {showEditMenu && (
            <Modal onClose={closeEdit}>
              <PostEditForm post={post} closeEdit={closeEdit}/>
            </Modal>
          )}
        </div>
      ))}
    </div>
  )
}
