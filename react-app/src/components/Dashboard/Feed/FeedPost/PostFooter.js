import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';

import { postLike, deleteLike } from '../../../../store/dashboard';
import { Modal } from '../../../../context/Modal';
import CommentForm from '../../../CommentForm/CommentForm'
import ViewComments from './ViewComments'
import PostView from '../../../PostView';
import './PostFooter.css';

export default function PostFooter({ post, option}) {
  const sessionUser = useSelector(state => state?.session?.user)
  const dispatch = useDispatch()

  let isLiked = post.likers.map(user => user.id).includes(sessionUser.id)
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
      dispatch(deleteLike(payload))
    } else {
      const payload = {
        userId: sessionUser.id,
        postId: post.id
      }
      dispatch(postLike(payload))
    }

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

  let likesCountRender;
  let likesCount;
  if (post.likers.length !== 0) {
    likesCount = post.likers.length;
    if (post.likers.length === 1) likesCountRender = `${likesCount} like`;
      else likesCountRender = `${likesCount} likes`;
  } else likesCountRender = null;

  return (
    <div className='post-footer'>
      {/* <div>{post.id}</div> */}
        <div className='footer-icons'>
        <span>
          {isLiked ?
            <i className='fa-solid fa-heart post-icon red' onClick={onClick}></i>
            : <i className='fa-regular fa-heart post-icon' onClick={onClick}></i>
          }
        </span>
        <span>
          <i id='feed-comment-icon' className='fa-regular fa-comment post-icon' onClick={onComment}></i>
        </span>
        {showModal && (
                    <Modal onClose={() => setShowModal(false) }>
                        <PostView post={post} option='feed' />
                    </Modal>
                )}
      </div>
      {likesCount > 0 ? <div className='footer-likes'>{likesCountRender}</div> : null}
      <div className='comment-container'>
        <p className='caption'>
          <span className='caption-username'>
            <NavLink to={`/${post.user.username}`} id='dashboard-caption-username'>
              {post.user.username}
            </ NavLink>
          </span>
          {post.caption.length > 60? 
          post.caption.slice(0,60) + "..."
          :
          post.caption
          }
          {/* {post.caption} */}
        </p>
        <ViewComments post={post}/>
      </div>
      <div className='add-comment-container'>
        <CommentForm option={option} post={post}/>
      </div>
    </div>
  )
}
