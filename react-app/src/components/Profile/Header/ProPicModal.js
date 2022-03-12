import React, { useEffect, useRef, useState } from 'react'
// import { Modal } from '../../../context/Modal';
// import UploadProPicForm from './UploadProPicForm'
import './ProPicModal.css'
import { useDispatch } from 'react-redux';
import { updateProfileImage } from '../../../store/session';

export default function ProPicModal({ user, setUser, cancelModal }) {
    const dispatch = useDispatch();
    // const [showModal, setShowModal] = useState(false);
    // const [image, setImage] = useState(null);
    const [disableEdit, setDisableEdit] = useState(false);
    const hiddenInputRef = useRef(null);

    const handleButton = () => {
        if (disableEdit) return;
        console.log("disable: edit", disableEdit)
        hiddenInputRef.current.click();
    };

    useEffect(() => {
        console.log('disable', disableEdit)
    }, [disableEdit])

    const handleFileChange = async (e) => {
        if (disableEdit) return;
        const file = e.target.files[0];
        setDisableEdit(true);
        console.log('handled', disableEdit)
        await dispatch(updateProfileImage(file))
            .then((res) => setUser(prev => {
                prev.image_url = res.imageUrl
                return prev;
            }))
            .then(setDisableEdit(false))
        cancelModal();
    };

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
