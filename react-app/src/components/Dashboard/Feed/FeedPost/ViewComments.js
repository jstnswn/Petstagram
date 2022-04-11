
import './ViewComments.css'
// import {useSelector} from 'react-redux';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import PostView from '../../../PostView';
// import PostMenu from '../../../PostView/PostMenu';
import { Modal } from '../../../../context/Modal';


function ViewComments({ post, option, closeModal }) {
    const [viewCommentModal, setViewCommentModal] = useState(false);

    const comments = post.comments
    const commentsArr = Object.values(comments)

    const comment1 = commentsArr[commentsArr.length-1];
    const comment2 = commentsArr[commentsArr.length-2];


    let message;
    if(commentsArr.length > 2){
        message = `View all ${commentsArr.length} comments`
    }else{
        message = ''
    }


    return (
        <div className="view-comments-container">


            {commentsArr.length >= 0 ?
                <div>
                    <div className="view-all-anchor" onClick={() => setViewCommentModal(true)}>{message}</div>
                    {viewCommentModal && (
                        <Modal onClose={() => setViewCommentModal(false)}>
                            <PostView post={post} option='feed' />
                        </Modal>
                    )}
                </div> : null}

                {/* {commentsArr.length > 0 ? <div className="comment1"><NavLink className='comment1-navlink'to={`/${commentsArr[commentsArr.length-1].user.username}`}>{commentsArr[commentsArr.length-1].user.username}</NavLink> {commentsArr[commentsArr.length-1].comment}</div> : null}
                {commentsArr.length > 1 ? <div className="comment2"><NavLink className='comment2-navlink'to={`/${commentsArr[commentsArr.length-2].user.username}`}>{commentsArr[commentsArr.length-2].user.username}</NavLink> {commentsArr[commentsArr.length-2].comment}</div> : null} */}

                {commentsArr.length > 0 && comment1.comment.length < 55?

                <div className='comment1'>
                    <NavLink className='comment1-navlink' to={`/${comment1.user.username}`}>{comment1.user.username}</NavLink>
                    <div className='comment1-div'>{comment1.comment}</div>
                </div>

                :

                commentsArr.length > 0 && comment1.comment.length > 55?
                <div className='comment1'>
                    <NavLink className='comment1-navlink' to={`/${comment1.user.username}`}>{comment1.user.username}</NavLink>
                    <div className='comment1-div'>{comment1.comment.slice(0,55)}...</div>
                </div>
    
                :
                null
                }


                {commentsArr.length > 1 && comment2.comment.length < 55?

                <div className='comment2'>
                    <NavLink className='comment2-navlink' to={`/${comment2.user.username}`}>{comment2.user.username}</NavLink>
                    <div className='comment2-div'>{comment2.comment}</div>
                </div>
                :
                commentsArr.length > 1 && comment2.comment.length > 55?
                <div className='comment2'>
                    <NavLink className='comment2-navlink' to={`/${comment2.user.username}`}>{comment2.user.username}</NavLink>
                    <div className='comment2-div'>{comment2.comment.slice(0,55)}...</div>
                </div>
                :
                null
                }
        </div>
    )

}


export default ViewComments;


