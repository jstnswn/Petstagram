import React from "react";
import './unfollow.css'


export default function Unfollow( post ) {
    console.log(post.post.user)
    const user = post.post.user

    return (
        <div id='unfollow-modal-container'>
            <img src={user.image_url} className='feed-profile-pic' id='unfollow-profile-pic' alt='profile-pic'></img>
            <div>Unfollow @{user.username}</div>
            <div className="unfollow-mobal-btn-container">
                <div className='modal-unfollow-btn red'>Unfollow</div>
                <div className='modal-cancel-btn'>Cancel</div>

            </div>
        </div>
    )
}
