import React from 'react'

export default function Unollow({ user, closeMenu, toggleFollow }) {
  return (
    <div id='unfollow-modal-container'>
      <img src={user.image_url} className='feed-profile-pic' id='unfollow-profile-pic' alt='profile-pic'></img>
      <div className="unfollow-modal-username">Unfollow @{user.username}?</div>
      <div className="unfollow-mobal-btn-container">
        <div className='modal-unfollow-btn red' onClick={toggleFollow}>Unfollow</div>
        <div className='modal-cancel-btn' onClick={closeMenu}>Cancel</div>
      </div>
    </div>
  )
}
