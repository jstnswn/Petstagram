import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { Modal } from '../../../context/Modal';
import { follow, unfollow } from '../../../store/dashboard';
import Unollow from './Unollow';

export default function FollowSuggestion({ user, setSuggestions }) {
  const [followed, setFollowed] = useState(false);
  const [openUnfollowMenu, setOpenUnfollowMenu] = useState(false);
  const dispatch = useDispatch();

  const openMenu = () => setOpenUnfollowMenu(true);
  const closeMenu = () => setOpenUnfollowMenu(false);

  const toggleFollow = async () => {
    if (!followed) {
      dispatch(follow(user.id));

      setFollowed(true);

    } else if (followed) {
      await dispatch(unfollow(user.id))
        .then(() => setFollowed(false))

      closeMenu();
    }
  };

  return (
    <>
      <div className='suggestion-item-container'>
        <Link to={`/${user.username}`}>
          <img className='suggestion-avatar' alt='profile avatar' src={user.image_url} />
        </Link>
        <Link to={`/${user.username}`}>{user.username}</Link>
        <p
          className={`suggestion-follow-button ${followed ? 'followed' : ''}`}
          onClick={!followed ? toggleFollow : openMenu}
        >{followed ? 'following' : 'follow'}</p>
      </div>

      {openUnfollowMenu && (
        <Modal onClose={closeMenu}>
          <Unollow user={user} closeMenu={closeMenu} toggleFollow={toggleFollow}/>
        </Modal>
      )}
    </>
  )
}
