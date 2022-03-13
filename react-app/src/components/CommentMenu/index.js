import React, { useState } from 'react'
import {Modal} from '../../context/Modal'
import CommentMenu from './CommentMenu';

function CommentMenuModal({ commentId, post, comment, option, profileUser}) {

    
    const [showModal, setShowModal] = useState(false);
    

    const hideForm = () => {
        setShowModal(false)
    }


    return (
        <div>
            <i onClick={() => setShowModal(true)} className='far fa-ellipsis-h post-view'/>


            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <CommentMenu profileUser={profileUser} option={option} comment={comment} post={post} hideForm={hideForm} commentId={commentId}/>
                </Modal>
            )}


        </div>

    )

}


export default CommentMenuModal;
