import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from '../../context/Modal'
import { removeCommentDashboard } from '../../store/dashboard'
import { removeCommentProfile } from '../../store/profile'
import { deleteComment } from '../../store/dashboard'
import EditComment from './EditComment/EditComment'
import './CommentMenu.css'

function CommentMenu({ commentId, hideForm, post, comment, option, profileUser }) {

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);
    const dashboardPosts = useSelector(({ dashboard }) => dashboard.feed.postIds);
    const [showModal, setShowModal] = useState(false);


    const handleClick = async (e) => {
        const postId = post.id;
        const payload = {
            comment_id: commentId,
            post_id: postId,
        };

        if (option === 'profile' && profileUser.username === currentUser.username) {
            const deletedComment = await dispatch(removeCommentProfile(payload))
            if (deletedComment && dashboardPosts[postId]) {
                dispatch(deleteComment(deletedComment))
            }
        } else if (option === 'profile') {
            const deletedComment = await dispatch(removeCommentProfile(payload))

            if (deletedComment && dashboardPosts[postId]) {
                dispatch(deleteComment(deletedComment))
                hideForm();
            }
        } else if (option === 'feed') {
            const deletedComment = await dispatch(removeCommentDashboard(payload))
            if (deletedComment) {
                hideForm();
            }
        }
    }

    return (
        <div className="delete-comment-menu">
            <div style={{ color: 'red' }} onClick={handleClick}>Delete</div>
            <div onClick={() => setShowModal(true)}>Update</div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditComment profileUser={profileUser} option={option} hideForm={hideForm} comment={comment} commentId={commentId} post={post} />
                </Modal>
            )}
            <div onClick={hideForm}>Cancel</div>

        </div>
    )
}



export default CommentMenu;

// if(option === 'profile'){


// } else if (option === 'feed') {

//     return (
//         <div className="delete-comment-menu">
//             <div style={{color: 'red'}} onClick={deleteCommentDashboard}>Delete</div>
//             <div onClick={() => setShowModal(true)}>Update</div>
//             {showModal && (
//             <Modal onClose={() => setShowModal(false)}>
//                <EditComment option={option} hideForm={hideForm} comment={comment} commentId={commentId} post={post}/>
//             </Modal>
//             )}
//              <div onClick={hideForm}>Cancel</div>

//         </div>
//     )

// }

// const deleteCommentDashboard = async (e) => {


//     const postId = post.id;

//     const payload = {
//         comment_id: commentId,
//         post_id: postId,
//     };

//     let deletedComment = await dispatch(removeCommentDashboard(payload))
//     if (deletedComment){
//         hideForm();
//     }

// }

// const deleteCommentProfile = async (e) => {
//     const postId = post.id;

//     const payload = {
//         comment_id: commentId,
//         post_id: postId,
//     };

//     let deletedComment = await dispatch(removeCommentProfile(payload))
//     if (deletedComment){
//         hideForm();
//     }
// }
