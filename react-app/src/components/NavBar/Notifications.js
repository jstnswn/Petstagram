import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteNotifications } from '../../store/session'

export default function Notifications() {
  const dispatch = useDispatch()
  // const likes = useSelector(({ session }) => session.user.notifications.likes)

  const notifications = useSelector(({ session }) => session.user.notifications)
  const likes = notifications?.likes
  const comments = notifications?.comments
  const follows = notifications?.follows

  const clearNotifications = () => {
    if (!notifications) return;

    const payload = {
      likes,
      comments,
      follows
    }

    dispatch(deleteNotifications(payload))
  };


  return (
    <div className='likes-dropdown-container'>
      <i
        className='far fa-heart like-icon'
        style={{
          color: likes?.length ? 'red' : 'black'
        }}
        onClick={clearNotifications}
      ></i>

    </div>
  )
}
