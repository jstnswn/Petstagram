import React, { useEffect, useRef, useState } from 'react'
import { FileUploader } from 'react-drag-drop-files';
import { useDispatch } from 'react-redux'
import { createPost } from '../../store/dashboard';
import './UploadPostForm.css'

export default function UploadPostForm() {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [showTextForm, setShowTextForm] = useState(false);
  const [caption, setCaption] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault()

    const payload = {
      image,
      caption
    };

    // TODO error handling
    const data = await dispatch(createPost(payload))
    if (data) {
      setErrors([data]);
    }
  };

  const fileTypes  = ['PDF', 'PNG', 'JPG', 'JPEG'];

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
      <h3>Create new post</h3>
    )
  }
  if (imageUrl) {
    headerContent = (
      <>
        <i className='fal fa-arrow-left' onClick={() => setImageUrl(null)}></i>
        <h3>Placeholder</h3>
        <p className='next-button' onClick={() => setShowTextForm(true)}>Next</p>
      </>
    )
  }

  let formContent;
  if (!imageUrl) {
    formContent = (
      <form
        className='upload-post-form form'
        onSubmit={handleSubmit}
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
  }

  if (imageUrl) {
    formContent = (
      <img
        alt='post content'
        className='upload-image'
        src={imageUrl}
      />
    );
  }

  return (
    <div id='post-form-container'>
      <div className='upload-post header'>
        {headerContent}
      </div>
      {formContent}
    </div>
  )
}

{/* <ul>
  {errors && (
    errors.map((error, idx) => <li key={idx}>{error}</li>)
  )}
</ul> */}
        // <label>Caption (optional)</label>
        // <textarea
        //   type='text'
        //   value={caption}
        //   onChange={e => setCaption(e.target.value)}
        // />
        // <p>{image ? `File name: ${image.name}` : ''}</p>
        // <button>Post</button>
