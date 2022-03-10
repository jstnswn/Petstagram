import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton'

export default function NavDropdown() {
  const user = useSelector(({ session }) => session.user);

  return (
    <ul className='nav-dropdown'>
      <li id='profile-btn'>
        <Link to={`/${user.username}`}>Profile</Link>
        {/* <i class="fas fa-user-circle"></i> */}
      </li>
      <li id='logout-btn'>
        <LogoutButton />
      </li>
    </ul>
  )
}
