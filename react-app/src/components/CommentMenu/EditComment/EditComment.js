import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editCommentDashboard } from '../../../store/dashboard';

export default function EditComment({hideForm, post, commentId, comment}){

    const [prevComment, setPrevComment] = useState(comment)

    const sessionUser = useSelector(state => state?.session?.user)

    const dispatch = useDispatch();
    const [caption, setCaption] = useState('');
    const [disableSubmit, setDisableSubmit] = useState(false);



  //handlesubmit function -. dispatch to store
  //set up if statements to dispatch to dashboard or profile store
  //add action, thunk, reducer to profile store
  //set up backend to update comment
  //change initial letter count value







    const handleSubmit = async (e) => {

      const payload = {
        comment_id : commentId,
        updated_comment : prevComment,
        post_id : post.id
      }

      let updatedComment = dispatch(editCommentDashboard(payload))
      if (updatedComment){
        hideForm();
      }

    }

    return (

       <div id='post-form-container' className='final-form'>
        <div className='upload-post header'>
          {/* <i className='fal fa-arrow-left' onClick={() => setShowTextForm(false)}></i> */}
          <h3>Edit Comment</h3>
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
                src={sessionUser.image_url}
              />
              <p className='post-form username'>{sessionUser.username}</p>
            </div>
            <textarea
              className='comment-input'
              value={prevComment}
              onChange={e => setPrevComment(e.target.value)}
            />
            <p
              className={`post-form word-count ${caption.length > 2200 ? 'active' : ''}`}
            >{`${caption.length}/2,200`}</p>
          </div>
        </div>
      </div>



    )

}
