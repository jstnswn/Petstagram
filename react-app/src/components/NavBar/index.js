import React from 'react'
import { NavLink } from 'react-router-dom'
import ProfileButton from './ProfileButton'
import './NavBar.css';
import UploadModal from '../UploadModal';
import petstagram from '../../assets/petstagram.png'
import Notifications from './Notifications';


export default function NavBar() {
  return (
    <div id='nav-bar-container'>
      <nav id='nav-bar'>
        <NavLink to='/' exact={true} activeClassName='active'>
          <img className='title-logo' alt='Logo' src={petstagram}></img>
        </NavLink>
        <div className='nav-bar right-section'>
          <NavLink to='/' className='home-icon-container'>
            <i className='far fa-home-alt home-icon'></i>
          </NavLink>
          <UploadModal />
          <Notifications />
          <ProfileButton />
        </div>
      </nav>
    </div>
  )
}
