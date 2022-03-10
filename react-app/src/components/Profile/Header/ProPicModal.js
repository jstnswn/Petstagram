import React, { useState } from 'react'
import { Modal } from '../../../context/Modal';
import UploadProPicForm from './UploadProPicForm'
import './ProPicModal.css'

export default function ProPicModal({ user, cancelModal }) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
    return (
        <>
            <div className='edit-pro-pic-heading'>
            <img
            className='profile-pic-mini'
            alt='profile-button'
            src={user.image_url} />
            <div className='profile-photo'>{user.username}</div>
            </div>
            <div className='edit-pro-pic-container'>

                <div className='edit-btn' onClick={openModal}>Edit Photo</div>
                {showModal && (
                    <Modal onClose={closeModal}>
                        <UploadProPicForm closeModal={closeModal} />
                    </Modal>
                )}
                <div className='cancel-btn' onClick={cancelModal}>Cancel</div>
            </div>
        </>
    )
}
