import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Modal } from '../../../../context/Modal'
import PostMenu from '../../../PostView/PostMenu'
import { follow } from '../../../../store/dashboard'

export default function PostHeader({ post }) {
  const user = useSelector(({ session }) => session.user)
  const dispatch = useDispatch();
  const [showPostMenuModal, setShowPostMenuModal] = useState(false)

  const userFollowing = user.following.map(user => user.id)

  const showPostModal = () => {
    setShowPostMenuModal(true)
  }

  const closePostModal = () => {
    setShowPostMenuModal(false)
  }

  const handleFollow = () => {
    dispatch(follow(post.user.id))
  }

  return (
    <div className='post-header'>
      <div id='post-header-left'>
        <Link id='post-header-links' to={`/${post.user.username}`}>
          <img className='feed-profile-pic' alt='profile avatar' src={post.user.image_url}/>
          <p className='post-username'>{post.user.username}</p>
        </Link>
        {!userFollowing.includes(post.user.id) &&
          <div id='post-header-follow'onClick={handleFollow}>Follow</div>
        }
      </div>
      <i className='fa-solid fa-ellipsis' onClick={showPostModal}></i>
      {showPostMenuModal && (
        <Modal onClose={closePostModal}>
          <PostMenu post={post} setShowPostMenuModal={setShowPostMenuModal}/>
        </Modal>
      )}
    </div>
  )
}
