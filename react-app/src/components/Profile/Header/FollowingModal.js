import React from 'react'
import './FollowerModal.css'
import x_btn from '../../../assets/x.png'

export default function FollowingFormModal({ user }) {
    return (
        <>
        <div className='follower-heading'>
        <div className='x-btn-container'>
            <div className='follower-title'>Following</div>
            <img className='x-btn' src={x_btn} />
        </div>
        </div>
        <div className='follower-modal-container'>

            {user.following.map(user => (
                <div className='follower-info'>
                    <img className='modal-img' src={user.image_url}></img>
                    <div className='follower-user-full'>
                        <li className='modal-username'>{user.username}</li>
                        <li className='modal-fullname'>{user.full_name}</li>
                    </div>
                </div>
            ))}
        </div>
    </>
    )
}
