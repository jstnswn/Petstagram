import React, { useEffect, useState } from 'react'
import './FollowerModal.css'
import x_btn from '../../../assets/x.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { follow } from '../../../store/dashboard'


export default function FollowerFormModal({ user: profileUser, closeModal }) {
    const dispatch = useDispatch()
    const user = useSelector(({ session }) => session.user);
    const [userFollowing, setUserFollowing] = useState(user.following.map(user => user.id))

    return (
        <>
            <div className='follower-heading'>
            <div className='x-btn-container'>
                <div className='follower-title'>Followers</div>
                <img className='x-btn' src={x_btn} onClick={closeModal}/>
            </div>
            </div>
            <div className='follower-modal-container'>

                {profileUser.followers.map(follower => (
                        <div className='follower-info'>
                            <img className='modal-img' src={follower.image_url}></img>
                            <div className='follower-user-full'>
                                <div className='username-follow-container'>
                                    <Link onClick={closeModal} className='link' to={`/${follower.username}`}>
                                        {follower.username}
                                    </Link>
                                    {!userFollowing.includes(follower.id) &&
                                        <div className='modal-follow' onClick={() => {
                                        dispatch(follow(follower.id))
                                        setUserFollowing(prev => [...userFollowing, follower.id])
                                    }}>Follow</div>
                                    }
                                </div>
                                <li className='modal-fullname'>{follower.full_name}</li>
                            </div>
                        </div>
                ))}
            </div>
        </>
    )
}
