
import './ViewComments.css'
// import {useSelector} from 'react-redux';
import React, { useState, useSelector } from 'react';
import { NavLink } from 'react-router-dom';

import PostView from '../../../PostView';
// import PostMenu from '../../../PostView/PostMenu';
import { Modal } from '../../../../context/Modal';


function ViewComments({ post, option, closeModal }) {

    // const dashboardPosts = useSelector(({ dashboard }) => dashboard.feed.postIds);
    // const postId = post.id



    const [showModal, setShowModal] = useState(false);
    const [viewCommentModal, setViewCommentModal] = useState(false);
    // const [viewRestOfCommentModal, setViewRestOfCommentModal] = useState(false);

    // const hideForm = () => {
    //     setShowModal(false)
    // }


    // const id = post.id
    const comments = post.comments
    // const comments = useSelector(state=>state.dashboard.feed.postIds[id].comments)
    const commentsArr = Object.values(comments)

    console.log(showModal, 'this is showmodel value')
    

    //delete logic
    // const handleClick = async(e)=>{
    //     e.preventDefault();
    //     const postId = post.id;
    //     console.log(e.target.value)
    //     const commentId = commentsArr[commentsArr.length-2].id
    //     console.log(commentId, 'hehehe')

    // }

    // function moreComments (){
    //     return (
    //         <>
    //             {commentsArr.length >=2 ? 
    //             <div>
    //                 <div className="view-more" onClick={() => setViewRestOfCommentModal(true)}>more</div>
    //                 {viewRestOfCommentModal && (
    //                     <Modal onClose={() => setViewRestOfCommentModal(false) }>
    //                         <PostView post={post} option='feed' />
    //                     </Modal>
    //                 )}
    //             </div> : null
    //             }
            
            
            
    //         </>
    //     )
    // }

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

            



                {commentsArr.length > 0 ? <div className="comment1"><NavLink className='comment1-navlink'to={`/${commentsArr[commentsArr.length-1].user.username}`}>{commentsArr[commentsArr.length-1].user.username}</NavLink> {commentsArr[commentsArr.length-1].comment}</div> : null} 
                {commentsArr.length > 1 ? <div className="comment2"><NavLink className='comment2-navlink'to={`/${commentsArr[commentsArr.length-2].user.username}`}>{commentsArr[commentsArr.length-2].user.username}</NavLink> {commentsArr[commentsArr.length-2].comment}</div> : null}

        </div>
    )

}


export default ViewComments;



// {commentsArr.length > 0 && (commentsArr[commentsArr.length - 1].comment).length > 70 ? <div className="comment1"><NavLink className='comment1-navlink' to={`/${commentsArr[commentsArr.length - 1].user.username}`}>{commentsArr[commentsArr.length - 1].user.username}</NavLink> {(commentsArr[commentsArr.length - 1].comment).slice(0, 65)} ... {moreComments()} </div> : commentsArr.length > 0 ? <div className="comment1"><NavLink className='comment1-navlink' to={`/${commentsArr[commentsArr.length - 1].user.username}`}>{commentsArr[commentsArr.length - 1].user.username}</NavLink> {commentsArr[commentsArr.length - 1].comment}</div> : null}
// {commentsArr.length > 1 && (commentsArr[commentsArr.length - 2].comment).length > 70 ? <div className="comment2"><NavLink className='comment2-navlink' to={`/${commentsArr[commentsArr.length - 2].user.username}`}>{commentsArr[commentsArr.length - 2].user.username}</NavLink> {(commentsArr[commentsArr.length - 2].comment).slice(0, 65)} ... {moreComments()} </div> : commentsArr.length > 1 ? <div className="comment2"><NavLink className='comment2-navlink' to={`/${commentsArr[commentsArr.length - 2].user.username}`}>{commentsArr[commentsArr.length - 2].user.username}</NavLink> {commentsArr[commentsArr.length - 2].comment}</div> : null}
