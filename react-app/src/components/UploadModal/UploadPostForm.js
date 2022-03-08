import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../../store/dashboard';
import './UploadPostForm.css'

export default function UploadPostForm() {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [errors, setErrors] = useState([]);

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

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

  return (
    <form
      className='upload-post-form form'
      onSubmit={handleSubmit}
    >
      <h2>Select an image to upload</h2>
      <ul>
        {errors && (
          errors.map((error, idx) => <li key={idx}>{error}</li>)
      )}
      </ul>
      <label>Image</label>
      <input
        type='file'
        onChange={handleFileInput}
      />
      <label>Caption (optional)</label>
      <textarea
        type='text'
        value={caption}
        onChange={e => setCaption(e.target.value)}
      />
      <button>Post</button>
    </form>
  )
}
