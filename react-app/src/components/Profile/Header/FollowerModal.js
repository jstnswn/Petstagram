import React, { useEffect, useState } from 'react'
import './FollowerModal.css'
import x_btn from '../../../assets/x.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { follow, unfollow } from '../../../store/dashboard'


export default function FollowerFormModal({ profileUser, closeModal }) {
    const dispatch = useDispatch()
    const user = useSelector(({ session }) => session.user);
    const [userFollowing, setUserFollowing] = useState(user.following.map(user => user.id))

    // useEffect(() => {
    //     console.log('userFollowing:', userFollowing)
    // }, [userFollowing])
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
                <div className='follower-title'>Followers</div>
                <img className='x-btn' src={x_btn} onClick={closeModal}/>
            </div>
            </div>
            <div className='follower-modal-container'>

                {profileUser.followers.map(follower => (
                    <div className='follower-info-container'>
                        <div className='follower-info'>
                            <img className='modal-img' src={follower.image_url}></img>
                            <div className='follower-user-full'>
                                <Link onClick={closeModal} className='link' to={`/${follower.username}`}>
                                    {follower.username}
                                </Link>
                                <li className='modal-fullname'>{follower.full_name}</li>
                            </div>
                        </div>
                        {(!userFollowing.includes(follower.id) && !(follower.id === user.id)) &&
                            <button className='modal-follow' onClick={(e) => handleFollow(e, follower.id)}>
                                Follow
                            </button>
                        }
                        {(userFollowing.includes(follower.id) && !(follower.id === user.id)) &&
                            <button className='modal-following' onClick={(e) => handleUnfollow(e, follower.id)}>
                                Following
                            </button>
                        }
                    </div>
                ))}
            </div>
        </>
    )
}
