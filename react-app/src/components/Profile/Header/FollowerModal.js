import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { follow } from '../../../store/dashboard'
import { Modal } from '../../../context/Modal';
import Unfollow from '../../UnfollowModal/Unfollow';
import x_btn from '../../../assets/x.png'
import './FollowerModal.css'


export default function FollowerFormModal({ profileUser, setNumberFollowing, userFollowing, setUserFollowing, user, closeModal }) {
    const dispatch = useDispatch()
    const [showUnfollowModal, setShowUnfollowModal] = useState(null)

    const handleFollow = (e, follower) => {
        e.preventDefault()
        dispatch(follow(follower.id))
        setUserFollowing(prev => [...userFollowing, follower.id])
        if (profileUser.id === user.id) {
            profileUser.following.push(follower)
            setNumberFollowing(prev => ++prev)
        }
    }

    return (
        <>
            <div className='follower-heading'>
            <div className='x-btn-container'>
                <div className='follower-title'>Followers</div>
                <img className='x-btn' src={x_btn} onClick={closeModal} alt='Close Button'/>
            </div>
            </div>
            <div className='follower-modal-container'>

                {profileUser.followers.map((follower, idx) => (
                    <div className='follower-info-container' key={`${follower.id}-follower`}>
                        <div className='follower-info'>
                            <img className='modal-img' src={follower.image_url} alt='Profile'></img>
                            <div className='follower-user-full'>
                                <Link onClick={closeModal} className='link' to={`/${follower.username}`}>
                                    {follower.username}
                                </Link>
                                <li className='modal-fullname'>{follower.full_name}</li>
                            </div>
                        </div>
                        {(!userFollowing.includes(follower.id) && !(follower.id === user.id)) &&
                            <button className='modal-follow' onClick={(e) => handleFollow(e, follower)}>
                                Follow
                            </button>
                        }
                        {(userFollowing.includes(follower.id) && !(follower.id === user.id)) &&
                            <button className='modal-following' onClick={(e) => {
                                e.preventDefault()
                                setShowUnfollowModal(idx)
                            }}>
                                Following
                            </button>
                        }
                        {showUnfollowModal === idx &&
                            <Modal onClose={() => setShowUnfollowModal(false)} option='layer'>
                                <Unfollow
                                    user={follower}
                                    setShowUnfollowModal={setShowUnfollowModal}
                                    setUserFollowing={setUserFollowing}
                                    profileUser={profileUser}
                                    sessionUser={user}
                                    option='profile'
                                    setNumberFollowing={setNumberFollowing}
                                />
                            </Modal>
                        }
                    </div>
                ))}
            </div>
        </>
    )
}
