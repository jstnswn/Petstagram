import React, { useState } from 'react'
import {Modal} from '../../context/Modal'
import DeleteCommentMenu from './DeleteCommentMenu';

function DeleteComment({ commentId, post, comment}) {


    const [showModal, setShowModal] = useState(false);

    const hideForm = () => {
        setShowModal(false)
    }


    return (
        <div>
            <i onClick={() => setShowModal(true)} className='far fa-ellipsis-h post-view'/>


            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <DeleteCommentMenu comment={comment} post={post} hideForm={hideForm} commentId={commentId}/>
                </Modal>
            )}


        </div>

    )

}


export default DeleteComment;
