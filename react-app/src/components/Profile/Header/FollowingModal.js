import React from 'react'
import './FollowerModal.css'
import x_btn from '../../../assets/x.png'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { follow, unfollow } from '../../../store/dashboard'

export default function FollowingFormModal({ profileUser, setNumberFollowing, userFollowing, setUserFollowing, user, closeModal}) {
    const dispatch = useDispatch()

    const handleUnfollow = (e, id) => {
        e.preventDefault()
        dispatch(unfollow(id))
        setUserFollowing(userFollowing.filter(followId => followId !== id))
        if (profileUser.id === user.id) {
            setNumberFollowing(prev => --prev)
        }
    }

    const handleFollow = (e, id) => {
        e.preventDefault()
        dispatch(follow(id))
        setUserFollowing(prev => [...userFollowing, id])
        if (profileUser.id === user.id) {
            setNumberFollowing(prev => ++prev)
        }
    }

    return (
        <>
        <div className='follower-heading'>
        <div className='x-btn-container'>
            <div className='follower-title'>Following</div>
            <img className='x-btn' src={x_btn} alt='Close Button'onClick={closeModal} />
        </div>
        </div>
        <div className='follower-modal-container'>

            {profileUser.following.map(followee => (
                <div className='follower-info-container' key={`${followee.id}-followee`}>
                    <div className='follower-info'>
                        <img className='modal-img' src={followee.image_url} alt='Profile'></img>
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
