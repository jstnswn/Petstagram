import React, { useEffect, useRef, useState } from 'react'
import { FileUploader } from 'react-drag-drop-files';
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from '../../store/dashboard';
import './UploadPostForm.css'

export default function UploadPostForm({ closeModal }) {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [showTextForm, setShowTextForm] = useState(false);
  const [caption, setCaption] = useState('');
  const [errors, setErrors] = useState([]);

  const user = useSelector(({ session }) => session.user);

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      image,
      caption
    };

    // TODO error handling
    const data = await dispatch(createPost(payload))
      .then(() => closeModal())
    if (data) {
      setErrors([data]);
    }
  };

  const fileTypes = ['PDF', 'PNG', 'JPG', 'JPEG'];

  const hiddenInputRef = useRef(null);

  const handleClick = (e) => {
    hiddenInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  useEffect(() => {
    if (!image) return;

    const formData = new FormData();
    formData.append('image', image);

    (async () => {
      const response = await fetch('/api/posts/upload-image', {
        method: 'POST',
        body: formData
      })

      const data = await response.json();
      setImageUrl(data.url);
    })();

  }, [image])

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
        <i className='fal fa-arrow-left' onClick={() => setImageUrl(null)}></i>
        <h3>Placeholder</h3>
        <p className='next-button' onClick={() => setShowTextForm(true)}>Next</p>
      </>
    )
  } else {
    headerContent = (
      <>
        <i className='fal fa-arrow-left' onClick={() => setImageUrl(null)}></i>
        <h3>Create new post</h3>
        <p className='next-button' onClick={handleSubmit}>Submit</p>
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

        <FileUploader
          handleChange={(file) => setImage(file)}
          name='image'
          types={fileTypes}
        />
        <button
          onClick={handleClick}
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
      </form>
    )
  } else if (imageUrl && !showTextForm) {
    formContent = (
      <img
        alt='post content'
        className='upload-image view'
        src={imageUrl}
      />
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
              placeholder='Write a caption'
              value={caption}
              onChange={e => setCaption(e.target.value)}
            />
          <p className='post-form word-count'>{`${caption.length}/2,200`}</p>
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

