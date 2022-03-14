import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from '../../context/Modal';
import { deleteNotifications } from '../../store/session'
import NotificationsDropdown from './NotificationsDropdown';

export default function Notifications() {
  const dispatch = useDispatch()
  const notifications = useSelector(({ session }) => session.user.notifications);
  const [likes, setLikes] = useState(notifications ? notifications.likes : []);
  const [comments, setComments] = useState(notifications ? notifications.comments : []);
  const [follows, setFollows] = useState(notifications ? notifications.follows : []);
  const [showDrowdown, setShowDropdown] = useState(false);

  const hasNotifications = () => {
    return (
      likes.length > 0 ||
      comments.length > 0 ||
      follows.length > 0
    );
  };

  const showMenu = () => setShowDropdown(true);
  const hideMenu = (e) => {
    if (e.target.classList.contains('dd')) return;
    setShowDropdown(false);
    if (!notifications) return;
    setLikes(false);
    setComments(false);
    setFollows(false);
    dispatch(deleteNotifications())
  }

  useEffect(() => {
    if (!showDrowdown) return;
    document.addEventListener('click', hideMenu)

    return () => document.removeEventListener('click', hideMenu)
  })

  return (
    <div className='likes-dropdown-container'>
      <i
        className='far fa-heart like-icon'
        style={{
          color: notifications?.likes.length || notifications?.follows.length || notifications?.comments.length ? 'red' : 'black'
        }}
        onClick={showMenu}
      ></i>

        {showDrowdown && <NotificationsDropdown hideMenu={hideMenu} notifications={{ likes, comments, follows }} hasNotifications={hasNotifications}/>}

    </div>
  )
}
