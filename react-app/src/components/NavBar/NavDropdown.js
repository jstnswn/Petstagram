import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton'

export default function NavDropdown() {
  const user = useSelector(({ session }) => session.user);
  const profileRef = useRef(null);
  const logoutRef = useRef(null);

  return (
    <ul className='nav-dropdown'>
      <li className='profile-btn' onClick={() => profileRef.current.click()}>
        <Link ref={profileRef} to={`/${user.username}`}><span className='fal fa-user-circle dropdown icon'></span>Profile</Link>
      </li>
      <li className='logout-btn-container' onClick={() => logoutRef.current.click()}>
        <LogoutButton logoutRef={logoutRef}/>
      </li>
    </ul>
  )
}
