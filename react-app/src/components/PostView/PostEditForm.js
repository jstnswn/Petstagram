import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

export default function PostEditForm({ post }) {
  const dispatch = useDispatch();
  const [caption, setCaption] = useState('');
  const [disableSubmit, setDisableSubmit] = useState(false);

  const handleSubmit = () => null

  return (

     <div id='post-form-container' className='final-form'>
      <div className='upload-post header'>
        {/* <i className='fal fa-arrow-left' onClick={() => setShowTextForm(false)}></i> */}
        <h3>Edit Post</h3>
        <p
          className={`next-button `}
          style={{
            opacity: caption.length > 2200 ? '50%' : '100%',
            cursor: caption.length > 2200 ? 'default' : 'pointer'
          }}
          onClick={handleSubmit}
        >Submit</p>
      </div>
      <div className='upload-form-container final'>
        <div className='image-container'>
          <img
            alt='post content'
            className='upload-image form'
            src={post.image_url}
          />
        </div>

        <div className='upload-form side-container'>
          <div className='post-form user-info'>
            <img
              alt='profile avatar'
              className='post-form profile-picture'
              src={post.user.image_url}
            />
            <p className='post-form username'>{post.user.username}</p>
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
    </div>



  )
}
