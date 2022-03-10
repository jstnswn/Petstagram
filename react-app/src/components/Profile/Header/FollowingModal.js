import React from 'react'
import './FollowerModal.css'
import x_btn from '../../../assets/x.png'
import { Link } from 'react-router-dom'

export default function FollowingFormModal({ user, closeModal}) {
    return (
        <>
        <div className='follower-heading'>
        <div className='x-btn-container'>
            <div className='follower-title'>Following</div>
            <img className='x-btn' src={x_btn} onClick={closeModal} />
        </div>
        </div>
        <div className='follower-modal-container'>

            {user.following.map(user => (
                <div className='follower-info'>
                    <img className='modal-img' src={user.image_url}></img>
                    <div className='follower-user-full'>
                        <li className='modal-username'><Link onClick={closeModal} className='link' to={`/${user.username}`}>{user.username}</Link></li>
                        <li className='modal-fullname'>{user.full_name}</li>
                    </div>
                </div>
            ))}
        </div>
    </>
    )
}
