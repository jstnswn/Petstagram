import React from 'react'
import { useSelector } from 'react-redux'

export default function LikesDropdown() {
  const likes = useSelector(({ session }) => session.user.notifications.likes)
  return (
    <div className='likes-dropdown-container'>
      <i
        className='far fa-heart like-icon'
        style={{
          color: likes.length ? 'red' : 'black'
        }}
      ></i>

    </div>
  )
}
