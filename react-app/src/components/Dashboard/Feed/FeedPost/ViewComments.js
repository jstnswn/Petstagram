
import './ViewComments.css'
// import {useSelector} from 'react-redux';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import PostView from '../../../PostView';
// import PostMenu from '../../../PostView/PostMenu';
import { Modal } from '../../../../context/Modal';


function ViewComments ({post, option, closeModal}) {

    const [showModal, setShowModal] = useState(false);

    // const hideForm = () => {
    //     setShowModal(false)
    // }


    // const id = post.id
    const comments = post.comments
    // const comments = useSelector(state=>state.dashboard.feed.postIds[id].comments)
    const commentsArr = Object.values(comments)


    //delete logic
    // const handleClick = async(e)=>{
    //     e.preventDefault();
    //     const postId = post.id;
    //     console.log(e.target.value)
    //     const commentId = commentsArr[commentsArr.length-2].id
    //     console.log(commentId, 'hehehe')

    // }



    return  (
        <div className="view-comments-container">


            {/* {commentsArr.length > 2 ? <div className="expand-view-comments">View all {commentsArr.length} comments</div> : null} */}


            {commentsArr.length > 2 ?
             <div>
                <div className="view-all-anchor" onClick={() => setShowModal(true)}>View all {commentsArr.length} comments</div>
                {showModal && (
                    <Modal onClose={() => setShowModal(false) }>
                        <PostView post={post} option='feed' />
                    </Modal>
                )}
            </div> : null}



            {commentsArr.length > 0 ? <div className="comment1"><NavLink to={`/${commentsArr[commentsArr.length-1].user.username}`}>{commentsArr[commentsArr.length-1].user.username}</NavLink> {commentsArr[commentsArr.length-1].comment}</div> : null}



            {commentsArr.length > 1 ? <div className="comment2"><NavLink to={`/${commentsArr[commentsArr.length-2].user.username}`}>{commentsArr[commentsArr.length-2].user.username}</NavLink> {commentsArr[commentsArr.length-2].comment}</div> : null}
        </div>
    )

}


export default ViewComments;
