import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import NavDropdown from './NavDropdown';

export default function ProfileButton() {
  const [showDropdown, setShowDropdown] = useState(false);

  const user = useSelector(({ session }) => session.user);

  const openDropdown = () => {
    if (showDropdown) return;
    setShowDropdown(true);
  }

  useEffect(() => {
    if (!showDropdown) return;

    const closeDropdown = (e) => {
      setShowDropdown(false);
    }

    document.addEventListener('click', closeDropdown);

    return () => document.removeEventListener('click', closeDropdown);
  }, [showDropdown]);

  return (
    <>
    <div className='profile-button-container'>
      <img
        className='profile-button'
        alt='profile-button'
        src={user.image_url}
        onClick={openDropdown}
        />
        {showDropdown && <NavDropdown />}
    </div>
    </>
  )
}
