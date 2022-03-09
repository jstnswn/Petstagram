import React from 'react'
import { NavLink } from 'react-router-dom'
import ProfileButton from './ProfileButton'
import './NavBar.css';
import UploadModal from '../UploadModal';
import petstagram from '../../assets/petstagram.png'


export default function NavBar() {
  return (
    <nav id='nav-bar'>
      <NavLink to='/' exact={true} activeClassName='active'>
      <img className='title-logo' src={petstagram}></img>
      </NavLink>
      <UploadModal />
      <ProfileButton />
    </nav>
  )
}
