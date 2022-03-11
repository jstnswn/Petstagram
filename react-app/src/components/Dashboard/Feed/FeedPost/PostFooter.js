import React from 'react'
import './PostFooter.css';


import CommentForm from '../../../CommentForm/CommentForm'
import ViewComments from './ViewComments'
import { Modal } from '../../../../context/Modal';
import PostView from '../../../PostView';

import { useDispatch, useSelector } from 'react-redux'
import { postLike, deleteLike } from '../../../../store/dashboard';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function PostFooter({ post, option}) {
  const sessionUser = useSelector(state => state?.session?.user)
  const dispatch = useDispatch()
  const history = useHistory()


  let isLiked = post.likers.map(user => user.id).includes(sessionUser.id)
  // console.log(isLiked)
  const [showModal, setShowModal] = useState(false);// test

  const onClick = async e => {
    e.preventDefault()
    let likers = []
    post.likers.forEach((obj) => {
      likers.push(obj.id)
    })
    if (likers.includes(sessionUser.id)) {
      const payload = {
        postId: post.id
      }
      const data = await dispatch(deleteLike(payload))
    } else {
      const payload = {
        userId: sessionUser.id,
        postId: post.id
      }
      const data = await dispatch(postLike(payload))
    }

    console.log('inside event listener',isLiked)
    const icon = e.target
    if (!isLiked) {
      icon.classList.add('red')
      icon.classList.add('fa-solid')
      icon.classList.remove('fa-regular')
    }
    else {
      icon.classList.remove('red')
      icon.classList.add('fa-regular')
      icon.classList.remove('fa-solid')
    }
  }

  const onComment = () => {
    setShowModal(true)
  }

  return (
    <div className='post-footer'>
      <div>{post.id}</div>
        <div className='footer-icons'>
        <span>
          {isLiked ?
            <i className='fa-solid fa-heart post-icon red' onClick={onClick}></i>
            : <i className='fa-regular fa-heart post-icon' onClick={onClick}></i>
          }
        </span>
        <span>
          <i className='fa-regular fa-comment post-icon' onClick={onComment}></i>
        </span>
        {showModal && (
                    <Modal onClose={() => setShowModal(false) }>
                        <PostView post={post} option='feed' />
                    </Modal>
                )}
        <span>
          <i className='fa-regular fa-paper-plane post-icon'></i>
        </span>
        <span>
          <i className='fa-regular fa-bookmark post-icon'></i>
        </span>
      </div>
      <div className='footer-likes'>likes</div>
      <div className='comment-container'>
        <p className='caption'><span className='caption-username'>{post.user.username}</span>{post.caption}</p>
        <ViewComments post={post}/>
      </div>
      <div className='add-comment-container'>
        <CommentForm option={option} post={post}/>
      </div>
    </div>
  )
}
