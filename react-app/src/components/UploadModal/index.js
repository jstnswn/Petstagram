import React, { useState } from 'react'
import { Modal } from '../../context/Modal';
import UploadPostForm from './UploadPostForm';

export default function UploadModal({ option }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <i className='fa-regular fa-plus upload-button' onClick={openModal}></i>
      {showModal && (
        <Modal onClose={closeModal}>
          <UploadPostForm closeModal={closeModal}/>
        </Modal>
      )}
    </>
  )
}
