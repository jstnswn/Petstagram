import React, { useEffect, useState } from 'react'
import './FollowerModal.css'
import x_btn from '../../../assets/x.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { follow, unfollow } from '../../../store/dashboard'

export default function FollowingFormModal({ profileUser, closeModal}) {
    const dispatch = useDispatch()
    const user = useSelector(({ session }) => session.user);
    const [userFollowing, setUserFollowing] = useState(user.following.map(user => user.id))

    const handleUnfollow = (e, id) => {
        e.preventDefault()
        dispatch(unfollow(id))
        setUserFollowing(userFollowing.filter(followId => followId !== id))
    }

    const handleFollow = (e, id) => {
        e.preventDefault()
        dispatch(follow(id))
        setUserFollowing(prev => [...userFollowing, id])
    }

    return (
        <>
        <div className='follower-heading'>
        <div className='x-btn-container'>
            <div className='follower-title'>Following</div>
            <img className='x-btn' src={x_btn} onClick={closeModal} />
        </div>
        </div>
        <div className='follower-modal-container'>

            {profileUser.following.map(followee => (
                <div className='follower-info-container'>
                    <div className='follower-info'>
                        <img className='modal-img' src={followee.image_url}></img>
                        <div className='follower-user-full'>
                            <Link onClick={closeModal} className='link' to={`/${followee.username}`}>
                                {followee.username}
                            </Link>
                            <li className='modal-fullname'>{user.full_name}</li>
                        </div>
                    </div>
                    {(!userFollowing.includes(followee.id) && !(followee.id === user.id)) &&
                        <button className='modal-follow' onClick={(e) => handleFollow(e, followee.id)}>
                            Follow
                        </button>
                    }
                    {(userFollowing.includes(followee.id) && !(followee.id === user.id)) &&
                        <button className='modal-following' onClick={(e) => handleUnfollow(e, followee.id)}>
                            Following
                        </button>
                    }
                </div>
            ))}
        </div>
    </>
    )
}
