import React, { useEffect, useRef, useState } from 'react'
// import { FileUploader } from 'react-drag-drop-files';
import Dropzone from 'react-dropzone'
import { useDispatch, useSelector } from 'react-redux'
import { createPost as createPostDashboard } from '../../store/dashboard';
import { loadPost as loadProfilePost } from '../../store/profile';
import dragAndDropImage from '../../assets/drag-and-drop.png'
import './UploadPostForm.css'
import { useLocation } from 'react-router-dom';


export default function UploadPostForm({ closeModal }) {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [showTextForm, setShowTextForm] = useState(false);
  const [caption, setCaption] = useState('');
  const [disableSubmit, setDisableSubmit] = useState(false);
  const [fileError, setFileError] = useState(false);
  const location = useLocation()

  const user = useSelector(({ session }) => session.user);
  const hiddenInputRef = useRef(null);

  useEffect(() => {
    if (caption.length > 2200) setDisableSubmit(true);
    else setDisableSubmit(false);
  }, [caption])

  const handleSubmit = async (e) => {
    if (disableSubmit) return
    setDisableSubmit(true);

    const payload = {
      image,
      caption
    };
      await dispatch(createPostDashboard(payload))
        .then((res) => location.pathname.includes(user.username) && dispatch(loadProfilePost(res)))
    closeModal()
  };

  const handleFileReader = (e, file) => {
    const dataUrl = e.target.result;

    const allowedFileTypes = ['pdf', 'png', 'jpg', 'jpeg'];
    const stopIdx = dataUrl.indexOf(';');
    const fileType = dataUrl.slice(11, stopIdx)

    if (!allowedFileTypes.includes(fileType)) {
      setImage(null)
      setImageUrl(null);
      setFileError('Must upload a PDF, PNG, JPG, or JPEG image.')
      return
    }
    setImageUrl(dataUrl)
    setImage(file);
    setFileError(null);
  }

  const setFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => handleFileReader(e, file);
  };

  const handleButton = (e) => {
    e.preventDefault()
    hiddenInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  let headerContent;
  if (!imageUrl) {
    headerContent = (
      <>
        <h3>Create new post</h3>
      </>
    )
  } else if (imageUrl && !showTextForm) {
    headerContent = (
      <>
        <i className='fal fa-arrow-left' onClick={() => {
          setImageUrl(null);

        }}></i>
        <p className='next-button' onClick={() => setShowTextForm(true)}>Next</p>
      </>
    )
  } else {
    headerContent = (
      <>
        <i className='fal fa-arrow-left' onClick={() => setShowTextForm(false)}></i>
        <h3>Create new post</h3>
        <p
          className='submit-button next-button'
          style={{
            opacity: disableSubmit ? '50%' : '100%',
            cursor: disableSubmit ? 'default' : 'pointer'
          }}
          onClick={handleSubmit}
        >Submit</p>
      </>
    )
  }

  let formContent;
  if (!imageUrl) {
    formContent = (
      <form
        className='upload-post-form form'
      // onSubmit={handleSubmit}
      >
        <img className='drag-and-drop' alt='drag and drop' src={dragAndDropImage}/>

        <Dropzone onDrop={(file) => setFile(file[0])}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input
                  className='ref-test'
                  {...getInputProps()}
                  style={{
                    width: '755px',
                    height: '755px',
                    postition: 'absolute',
                    opacity: 0
                  }}/>
              </div>
            </section>
          )}
        </Dropzone>

        <button
          onClick={handleButton}
          className='upload-image-button'
        >
          Select from computer
        </button>
        <input
          type='file'
          ref={hiddenInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        {fileError && <p className='file-error'>{fileError}</p>}
      </form>
    )
  } else if (imageUrl && !showTextForm) {
    formContent = (
      <img alt='post content' className='upload-image view' src={imageUrl}/>
    );
  } else {
    formContent = (
      <>
        <div className='upload-form-container final'>
          <div className='image-container'>
            <img
              alt='post content'
              className='upload-image form'
              src={imageUrl}
            />
          </div>

          <div className='upload-form side-container'>
            <div className='post-form user-info'>
              <img
                alt='profile avatar'
                className='post-form profile-picture'
                src={user.image_url}
              />
              <p className='post-form username'>{user.username}</p>
            </div>
            <textarea
              className='comment-input'
              placeholder='Write a caption...'
              value={caption}
              onChange={e => setCaption(e.target.value)}
            />
            <p
              className={`post-form word-count ${caption.length > 2200 ? 'active' : ''}`}
            >{`${caption.length}/2,200`}</p>
          </div>
        </div>
      </>
    )
  }

  return (
    <div id='post-form-container' className={showTextForm ? 'final-form' : ''}>
      <div className='upload-post header'>
        {headerContent}
      </div>
      {formContent}
    </div>
  )
}
