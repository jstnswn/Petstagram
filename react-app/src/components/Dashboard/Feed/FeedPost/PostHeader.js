import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from '../../../../context/Modal'
import PostMenu from '../../../PostView/PostMenu'

export default function PostHeader({ post }) {
  const [showPostMenuModal, setShowPostMenuModal] = useState(false)

  const showPostModal = () => {
    setShowPostMenuModal(true)
  }

  const closePostModal = () => {
    setShowPostMenuModal(false)
  }

  return (
    <div className='post-header'>
      <img className='profile-pic' alt='profile avatar' src={post.user.image_url}/>
        <Link className='post-username' to={`/${post.user.username}`}>{post.user.username}</Link>
      <i className='fa-solid fa-ellipsis' onClick={showPostModal}></i>
      {showPostMenuModal && (
        <Modal onClose={closePostModal}>
          <PostMenu post={post}/>
        </Modal>
      )}
    </div>
  )
}
