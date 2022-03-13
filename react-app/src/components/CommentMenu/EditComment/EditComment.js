import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { editCommentDashboard } from '../../../store/dashboard';
import { editCommentProfile } from '../../../store/profile';
import { updateComment } from '../../../store/dashboard';
import './EditComment.css'

export default function EditComment({ option, hideForm, post, commentId, comment, profileUser }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state?.session?.user)
  const dashboardPosts = useSelector(({ dashboard }) => dashboard.feed.postIds);

  const [prevComment, setPrevComment] = useState(comment)
  const [caption, setCaption] = useState('');

  const handleClick = async (e) => {

    const postId = post.id;

    const payload = {
      comment_id: commentId,
      updated_comment: prevComment,
      post_id: post.id
    }

    if (option === 'profile' && profileUser.username === sessionUser.username) {
      let updatedComment = dispatch(editCommentProfile(payload))
      if (updatedComment && dashboardPosts[postId]) {
        dispatch(editCommentDashboard(payload))
        hideForm();
      }
      hideForm();

    } else if (option === 'feed') {
      let updatedComment = dispatch(editCommentDashboard(payload))
      if (updatedComment) {
        hideForm();
      }

    } else if (option === 'profile') {
      let updatedComment = dispatch(editCommentProfile(payload))
      if (updatedComment && dashboardPosts[postId]) {
        const actionCreatorPayload = {
          commentId: commentId,
          postId: post.id,
          updatedComment: prevComment,
        }

        dispatch(updateComment(actionCreatorPayload))
        hideForm();
      }
      hideForm();
    }
  }

  return (
    <div id='post-form-container' className='final-form'>
      <div className='upload-post header'>
        {/* <i className='fal fa-arrow-left' onClick={() => setShowTextForm(false)}></i> */}
        <h3>Edit Comment</h3>
        {prevComment ? (
          <p
            className={`next-button `}
            style={{
              opacity: caption.length > 2200 ? '50%' : '100%',
              cursor: caption.length > 2200 ? 'default' : 'pointer'
            }}
            onClick={handleClick}
          >Submit</p>
        ) : (
          <p id='fake-submit'>Submit</p>
        )}
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
          >{`${prevComment.length}/2,200`}</p>
        </div>
      </div>
    </div>
  )
}
