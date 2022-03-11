import React, { useState } from 'react'
import { Modal } from '../../context/Modal';
import PostView from '../PostView';

export default function ProfileGridItem({ post, idx , profileUser}) {
    const [showPost, setShowPost] = useState(false);
    const [showOverlay, setShowOverlay] = useState(null);

    console.log(profileUser, 'profileUser in griditem')

    const likes = post.likers.length;
    const comments = Object.values(post?.comments)?.length

    const openPostView = () => setShowPost(true);
    const closePostView = () => setShowPost(false);
    const seeOverlay = () => setShowOverlay(true);
    const hideOverlay = () => setShowOverlay(false);

    return (
        <div
            className='grid-item-container'
            onMouseEnter={seeOverlay}
            onMouseLeave={hideOverlay}
        >
            <img
                className='profile-grid-image'
                src={post.image_url}
                alt='user post'
                onClick={() => {
                    openPostView();
                    hideOverlay();
                }}
                style={{
                    gridColumnStart: idx % 3 + 1
                }}
            />

            {showPost && (
                <Modal onClose={closePostView}>
                    <PostView profileUser={profileUser} post={post} closePostView={closePostView} option='profile' />
                </Modal>
            )}

            {showOverlay && (
                <div className='grid-item-overlay'>
                    {/* dkfadjsfl */}
                    <i className='fas fa-heart overlay icon'></i><span className='overlay'>{likes}</span>
                    <i className='fas fa-comment overlay icon'></i><span className='overalay'>{comments}</span>
                </div>
            )}

        </div>
    )
}
