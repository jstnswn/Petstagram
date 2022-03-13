import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from '../../context/Modal';
import { deleteNotifications } from '../../store/session'
import NotificationsDropdown from './NotificationsDropdown';

export default function Notifications() {
  const dispatch = useDispatch()
  // const likes = useSelector(({ session }) => session.user.notifications.likes)
  const notifications = useSelector(({ session }) => session.user.notifications);
  const [likes, setLikes] = useState(notifications?.likes);
  const [comments, setComments] = useState(notifications?.comments);
  const [follows, setFollows] = useState(notifications?.follows);
  const [showDrowdown, setShowDropdown] = useState(false);

  // const likes = notifications?.likes
  // const comments = notifications?.comments
  // const follows = notifications?.follows
  const hasNotifications = () => {
    return (
      likes.length > 0 ||
      comments.length > 0 ||
      follows.length > 0
    )
  }

  const showMenu = () => setShowDropdown(true);
  const hideMenu = () => setShowDropdown(false);
  // console.log('notificatiosn: ', hasNotifications())

  const openAndClear = () => {
    if (!notifications) return;
    showMenu()
    // const payload = {
    //   likes,
    //   comments,
    //   follows
    // }

    // dispatch(deleteNotifications())
  };


  return (
    <div className='likes-dropdown-container'>
      <i
        className='far fa-heart like-icon'
        style={{
          color: hasNotifications() ? 'red' : 'black'
        }}
        onClick={openAndClear}
      ></i>

        {showDrowdown && <NotificationsDropdown hideMenu={hideMenu} notifications={{ likes, comments, follows }} />}

    </div>
  )
}
