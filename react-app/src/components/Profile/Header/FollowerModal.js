import React from 'react'
import './FollowerModal.css'
import x_btn from '../../../assets/x.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { follow } from '../../../store/dashboard'


export default function FollowerFormModal({ user, closeModal }) {
    const dispatch = useDispatch()
    const userFollowing = user.following.map(user => user.id)

    console.log(userFollowing)

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
                                <div className='username-follow-container'>
                                    <Link onClick={closeModal} className='link' to={`/${follower.username}`}>
                                        {follower.username}
                                    </Link>
                                    { !userFollowing.includes(follower.id) &&
                                    <div className='modal-follow' onClick={() => dispatch(follow(follower.id))}>Follow</div>
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
