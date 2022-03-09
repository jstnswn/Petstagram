import React from 'react'
import './FollowerModal.css'
import x_btn from '../../../assets/x.png'

export default function FollowerFormModal({ user }) {
    return (
        <>
            <div className='follower-heading'>
            <div className='x-btn-container'>
                <div className='follower-title'>Followers</div>
                <img className='x-btn' src={x_btn} />
            </div>
            </div>
            <div className='follower-modal-container'>

                {user.followers.map(follower => (
                    <div className='follower-info'>
                        <img className='modal-img' src={follower.image_url}></img>
                        <div className='follower-user-full'>
                            <li className='modal-username'>{follower.username}</li>
                            <li className='modal-fullname'>{follower.full_name}</li>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
