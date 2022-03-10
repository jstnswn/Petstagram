import React from 'react'
import './FollowerModal.css'
import x_btn from '../../../assets/x.png'
import { Link } from 'react-router-dom'



export default function FollowerFormModal({ user, closeModal }) {
    return (
        <>
            <div className='follower-heading'>
            <div className='x-btn-container'>
                <div className='follower-title'>Followers</div>
                <img className='x-btn' src={x_btn} onClick={closeModal}/>
            </div>
            </div>
            <div className='follower-modal-container'>

                {user.followers.map(follower => (
                    <div className='follower-info'>
                        <img className='modal-img' src={follower.image_url}></img>
                        <div className='follower-user-full'>
                        <li className='modal-username'><Link onClick={closeModal} className='link' to={`/${follower.username}`}>{follower.username}</Link></li>
                            <li className='modal-fullname'>{follower.full_name}</li>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
