import React, { useState } from 'react'
import { Modal } from '../../context/Modal';
import PostMenu from './PostMenu';
import './PostView.css';


import SideContainer from './SideContainer';

export default function PostView({ post, option, closeModal }) {
  const [showMenu, setShowMenu] = useState(false);

  let headerInfo;
  if (option === 'feed') {
    headerInfo = (
      <p>{post.user.username}<span>Following</span></p>
    )
  } else {
    headerInfo = (
      <p>{post.user.username}</p>
    )
  }

  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);

  return (
    <div className='post-view-container'>
      <div className='post-view-image-container'>
        <img
          alt='post content'
          className='post-view-image'
          src={post.image_url}
        />
      </div>
      <div className='post-view-side-container'>
        <div className='header'>
          <div className='header-box'>
            <img
              alt='profile avatar'
              src={post.user.image_url}
              style={{
                height: 32,
                width: 32,
                borderRadius: '50%'
              }}
            />
            <div className='user-header-info'>
              {headerInfo}
            </div>
          </div>
          <i className='far fa-ellipsis-h post-view'
            onClick={openMenu}
          />
        </div>
        <SideContainer post={post} />


      </div>

      {showMenu && (
        <Modal onClose={closeMenu}>
          <PostMenu closeMenu={closeMenu} closeModal={closeModal} post={post} />
        </Modal>
      )}
    </div>
  )
}
