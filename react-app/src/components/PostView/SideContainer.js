import {useSelector, useDispatch} from 'react-redux';
import React, { useState } from 'react';
import CommentForm from '../CommentForm/CommentForm';
import './SideContainer.css'
// import { postLike, deleteLike } from '../../store/dashboard';
import { profilePostLike, profileDeleteLike } from '../../store/profile';
import { postLike, deleteLike } from '../../store/dashboard';
import DeleteComment from '../DeleteComment/DeleteComment';

function SideContainer ({post, closeMenu, closeModal, option}) {

    //likes variables
    const sessionUser = useSelector(state => state?.session?.user)
    const dispatch = useDispatch()
    let isLiked = post.likers.map(user => user.id).includes(sessionUser.id)
    //comments variables
    const id = post.id;

    const comments = post.comments;

    const commentsArr = Object.values(comments);




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
                            <a href={`/${post.user.username}`}>{post.user.username}</a>
                            <span>{post.caption}</span>
                        </div>
                    </div>
                </li>

                {commentsArr.length !==0 ? <>
                {commentsArr.map((comment)=>
                <li key={comment.id}>
                    <div className="comment-shell">
                        <img className="post-view-user-img"src={comment.user.image_url}></img>
                    {/* </div>
                    <div> */}
                        <a href={`/${comment.user.username}`}>{comment.user.username}</a>
                        <span>{comment.comment}</span>
                        {comment.user.id === sessionUser.id ? <DeleteComment post={post} commentId={comment.id}/>     : null}
                    </div>
                </li>

                )}
                </>
                : null}
            </ul>


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
                <CommentForm post={post}/>
            </div>
        </div>

    )

}


export default SideContainer;

{/* <ul>
    <li>
        <div className="comment-shell">
        <div>
        <img className="post-view-user-img"src={post.user.image_url}></img>
            </div>
            <div>
                <a>{post.user.username}</a>
                <span>{post.caption}</span>
            </div>
        </div>
    </li>
    {commentsArr.map((comment)=>
    <li>
    <div className="comment-shell">
            <div>
            <img className="post-view-user-img"src={comment.user.image_url}></img>
            </div>
            <div>
            <a>{comment.user.username}</a>
            <span>{comment.comment}</span>
            </div>
            </div>
            </li>
            )}
        </ul> */}



        {/* {commentsArr.length !== 0 ? [
        <ul>
        <li>
            <div className="comment-shell">
                <div>
                    <img className="post-view-user-img"src={post.user.image_url}></img>
                </div>
                <div>
                    <a href={`/${post.user.username}`}>{post.user.username}</a>
                    <span>{post.caption}</span>
                </div>
            </div>
        </li>

        {commentsArr.map((comment)=>
        <li key={comment.id}>
            <div className="comment-shell">
                <div>
                    <img className="post-view-user-img"src={comment.user.image_url}></img>
                </div>
                <div>
                    <a href={`/${comment.user.username}`}>{comment.user.username}</a>
                    <span>{comment.comment}</span>
                </div>
                {comment.user.id === sessionUser.id ? <button>Delete</button>     : null}
            </div>
        </li>
        )}
        </ul>

        ] : null} */}
