import React from 'react'
import CommentNotification from './CommentNotification'
import FollowNotification from './FollowNotification'
import LikeNotification from './LikeNotification'
import './Notifications.css';



export default function NotificationsDropdown({ notifications, hasNotifications }) {
  let content;
  if (hasNotifications()) {
    content = (
      <>
        {notifications.likes.length > 0 && < LikeNotification likes = { notifications.likes } />}
        {notifications.comments.length > 0 && <CommentNotification comments={notifications.comments} /> }
        {notifications.follows.length > 0 && <FollowNotification follows={notifications.follows} /> }
      </>
    )
  } else {
    content = <div className='notifications-placeholder'>You don't have any new notifications</div>
  }



  return (
    <div className='notifications-dropdown dd'>
      {content}
    </div>
  )
}
