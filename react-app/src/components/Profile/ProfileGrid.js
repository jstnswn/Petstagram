import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import { getProfilePostsArray } from '../../store/profile';
import PostView from '../PostView';

export default function ProfileGrid() {
  const [showIdx, setShowIdx] = useState(null);

  const posts = useSelector(getProfilePostsArray);

  const openModal = (idx) => setShowIdx(idx);
  const closeModal = () => setShowIdx(null);

  return (
    <div className='profile-grid'>
      {posts.map((post, idx) => (
        <div key={idx}>
          <img
            className='profile-grid-item'
            src={post.image_url}
            alt='user post'
            onClick={() => openModal(idx)}
            style={{
              gridColumnStart: idx % 3 + 1
            }}
          />

          {showIdx === idx && (
            <Modal onClose={closeModal}>
              <PostView post={post} closeModal={closeModal}/>
            </Modal>
          )}
        </div>
      ))}
    </div>
  )
}
