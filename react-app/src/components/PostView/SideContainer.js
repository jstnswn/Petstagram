import {useSelector, useDispatch} from 'react-redux';
import React, { useState } from 'react';
import CommentForm from '../CommentForm/CommentForm';
import './SideContainer.css'
// import { postLike, deleteLike } from '../../store/dashboard';
import { profilePostLike, profileDeleteLike } from '../../store/profile';
import { postLike, deleteLike } from '../../store/dashboard';
import CommentMenuModal from '../CommentMenu';
// import DeleteComment from '../DeleteComment/DeleteComment';
import { NavLink } from 'react-router-dom';

function SideContainer({ post, closeMenu, closePostView, option}) {

    //likes variables
    const sessionUser = useSelector(state => state?.session?.user)
    const dispatch = useDispatch()

    let isLiked = post.likers.map(user => user.id).includes(sessionUser.id)
    //comments variables
    const id = post.id;

    const comments = post.comments;

    const commentsArr = Object.values(comments);


    //created at logic
    const timePassed = (milliseconds) => {

        const second = 1000
        const minute = 60 * second
        const hour = 60 * minute

        const pastSecond = Math.floor((milliseconds % minute) / second)
        const pastMinute = Math.floor((milliseconds % hour) / minute)
        const pastHour = Math.floor((milliseconds / hour))
        const pastDay = Math.floor(pastHour / 24)

        if (pastSecond <= 60 && pastMinute === 0 && pastHour === 0 && pastDay === 0) return `< 1m`;
        if (pastMinute <= 60 && pastHour === 0 && pastDay === 0) return `${pastMinute}m`;
        if (pastHour <= 60 && pastDay === 0) return `${pastHour-5}h`;
        if (pastDay >= 2 || pastHour > 24) return `${pastDay}d`;

    }


    //likes logic
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
          if (option === 'feed') {
              dispatch(deleteLike(payload))
          } else {
              const data = await dispatch(profileDeleteLike(payload))
          }
        } else {
          const payload = {
            userId: sessionUser.id,
            postId: post.id
          }
          if (option === 'feed') {
              dispatch(postLike(payload))
          } else {
            const data = await dispatch(profilePostLike(payload))
          }
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



    return (
        <div className="post-view-comments">
            <ul>
                <li>
                    <div className="comment-shell">
                        <div>
                            <img className="post-view-user-img"src={post.user.image_url}></img>
                        </div>
                        <div>
                            <NavLink to={`/${post.user.username}`} onClick={closePostView}>{post.user.username}</NavLink>
                            <span>{post.caption}</span>
                        </div>
                    </div>
                </li>

                {commentsArr.length !==0 ? <>
                {commentsArr.map((comment)=>
                <li key={comment.id}>
                    <div className="comment-shell">
                        <img className="post-view-user-img"src={comment.user.image_url}></img>
                        <NavLink to={`/${comment.user.username}`} onClick={closePostView}>{comment.user.username}</NavLink>
                        <span>{comment.comment}</span>
                    </div>
                    <div className='time-and-menu'>
                        <div>{timePassed(Date.parse(new Date().toString()) - Date.parse(comment?.created_at))}</div>
                        {comment.user.id === sessionUser.id ? <CommentMenuModal option={option} comment={comment.comment} post={post} commentId={comment.id}/>   : <i id='ghost'className='far fa-ellipsis-h post-view'/>}

                    </div>
                </li>

                )}
                </>
                : null}
            </ul>

            <div>{post.id}</div>
            <div className="">
                <span>
                {isLiked ?
                    <i className='fa-solid fa-heart post-icon red' onClick={onClick}></i>
                    : <i className='fa-regular fa-heart post-icon' onClick={onClick}></i>
                }
                </span>
                <span>
                     <i className='fa-regular fa-comment post-icon'></i>
                </span>
                 <span>
                     <i className='fa-regular fa-paper-plane post-icon'></i>
                </span>
                <span>
                    <i className='fa-regular fa-bookmark post-icon'></i>
                </span>
            </div>

            <div>
                <CommentForm option={option} post={post}/>
            </div>
        </div>

    )

}


export default SideContainer;
