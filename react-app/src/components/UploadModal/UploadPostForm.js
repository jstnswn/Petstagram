import React, { useRef, useState } from 'react'
import { FileUploader } from 'react-drag-drop-files';
import { useDispatch } from 'react-redux'
import { createPost } from '../../store/dashboard';
import './UploadPostForm.css'

export default function UploadPostForm() {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
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

  return (
    <div id='post-form-container'>
      <h3>Create new post</h3>
      <form
        className='upload-post-form form'
        onSubmit={handleSubmit}
      >
        <ul>
          {errors && (
            errors.map((error, idx) => <li key={idx}>{error}</li>)
          )}
        </ul>
        <FileUploader
          handleChange={(file) => setImage(file) }
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
          style={{display: 'none'}}
        />

      </form>
    </div>
  )
}

        // <label>Caption (optional)</label>
        // <textarea
        //   type='text'
        //   value={caption}
        //   onChange={e => setCaption(e.target.value)}
        // />
        // <p>{image ? `File name: ${image.name}` : ''}</p>
        // <button>Post</button>
