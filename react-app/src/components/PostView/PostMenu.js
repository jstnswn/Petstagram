import React from 'react'
import { useDispatch } from 'react-redux';
import './PostMenu.css';

export default function PostMenu({ closeMenu }) {
  const dispatch = useDispatch();

  // const deletePost = () => 

  return (
    <div className='post-menu'>
      <div style={{color: 'red'}}>Delete</div>
      <div>Share to...</div>
      <div onClick={closeMenu}>Cancel</div>
    </div>
  )
}
