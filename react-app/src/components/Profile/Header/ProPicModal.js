import React, { useRef, useState } from 'react'
import { Modal } from '../../../context/Modal';
import UploadProPicForm from './UploadProPicForm'
import './ProPicModal.css'

export default function ProPicModal({ user, cancelModal }) {
    const [showModal, setShowModal] = useState(false);
    const [image, setImage] = useState(null);
    const hiddenInputRef = useRef(null);

    const handleButton = () => hiddenInputRef.current.click();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };


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

                <div className='edit-btn' onClick={handleButton}>Edit Photo</div>
                {/* {showModal && (
                    <Modal onClose={closeModal}>
                        <UploadProPicForm closeModal={closeModal} />
                    </Modal>
                )} */}
                <div className='cancel-btn' onClick={cancelModal}>Cancel</div>
            </div>

            <input
                type='file'
                ref={hiddenInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
                accept='image/png, image/jpeg, image/png, image/jpeg'
            />
        </>
    )
}
