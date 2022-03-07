import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoutButton from '../auth/LogoutButton'
import ProfileButton from './ProfileButton'
import './NavBar.css';

export default function NavBar() {
  return (
    <nav id='nav-bar'>
      <NavLink to='/' exact={true} activeClassName='active'>
        Petstagram
      </NavLink>
      {/* <LogoutButton /> */}
      <ProfileButton />
    </nav>
  )
}
