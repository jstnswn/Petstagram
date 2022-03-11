import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const LogoutButton = ({ logoutRef }) => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <button ref={logoutRef} className='logout-button' onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
