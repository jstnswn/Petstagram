import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import {Modal} from '../../context/Modal'
import './CommentMenu.css'
import { removeCommentDashboard } from '../../store/dashboard'
import {removeCommentProfile} from '../../store/profile'
import EditComment from './EditComment/EditComment'

function CommentMenu ({commentId, hideForm, post, comment}) {

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);
    const [showModal, setShowModal] = useState(false);

    const deleteCommentDashboard = async (e) => {


        const postId = post.id;

        const payload = {
            comment_id: commentId,
            post_id: postId,
        };

        let deletedComment = await dispatch(removeCommentDashboard(payload))
        if (deletedComment){
            hideForm();
        }

    }

    const deleteCommentProfile = async (e) => {
        const postId = post.id;

        const payload = {
            comment_id: commentId,
            post_id: postId,
        };

        let deletedComment = await dispatch(removeCommentProfile(payload))
        if (deletedComment){
            hideForm();
        }
    }


    if(document.URL.includes(`http://localhost:3000/${currentUser.username}`) && document.URL.toString().length > 21){

        return (
            <div className="delete-comment-menu">
                <div style={{color: 'red'}} onClick={deleteCommentProfile}>Delete</div>
                <div onClick={() => setShowModal(true)}>Update</div>
                {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                   <EditComment hideForm={hideForm} comment={comment} commentId={commentId} post={post}/>
                </Modal>
                )}
                 <div onClick={hideForm}>Cancel</div>

            </div>
        )

    }else if(document.URL.toString().length === 22){

        return (
            <div className="delete-comment-menu">
                <div style={{color: 'red'}} onClick={deleteCommentDashboard}>Delete</div>
                <div onClick={() => setShowModal(true)}>Update</div>
                {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                   <EditComment hideForm={hideForm} comment={comment} commentId={commentId} post={post}/>
                </Modal>
                )}
                 <div onClick={hideForm}>Cancel</div>

            </div>
        )

    }else{

        return (
            <div className="delete-comment-menu">
                <div style={{color: 'red'}} onClick={deleteCommentProfile}>Delete</div>
                <div onClick={() => setShowModal(true)}>Update</div>
                {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                   <EditComment hideForm={hideForm} comment={comment} commentId={commentId}post={post}/>
                </Modal>
                )}

                <div onClick={hideForm}>Cancel</div>

            </div>
        )
    }

}



export default CommentMenu;
