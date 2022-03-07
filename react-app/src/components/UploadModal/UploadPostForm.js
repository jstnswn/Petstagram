import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPost } from '../../store/feed';
import './UploadPostForm.css'

export default function UploadPostForm() {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const payload = {
      image,
      caption
    };

    // TODO error handling
    dispatch(createPost(payload))
  };

  return (
    <form
      className='upload-post-form form'
      onSubmit={handleSubmit}
    >
      <h2>Select an image to upload</h2>
      <label>Image</label>
      <input
        type='file'
        onChange={handleFileInput}
      />
      <label>Caption</label>
      <textarea
        type='text'
        value={caption}
        onChange={e => setCaption(e.target.value)}
      />
      <button>Post</button>
    </form>
  )
}
