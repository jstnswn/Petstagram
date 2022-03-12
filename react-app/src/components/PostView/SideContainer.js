import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { profilePostLike, profileDeleteLike } from '../../store/profile';
import { postLike, deleteLike, postLikeActionCreator ,deleteLikeActionCreator } from '../../store/dashboard';
import CommentForm from '../CommentForm/CommentForm';
import CommentMenuModal from '../CommentMenu';
import './SideContainer.css'
// import { postLike, deleteLike } from '../../store/dashboard';
// import DeleteComment from '../DeleteComment/DeleteComment';

function SideContainer({ post, closeMenu, closePostView, option, profileUser}) {

    //likes variables
    const sessionUser = useSelector(state => state?.session?.user)
    const dispatch = useDispatch()

    let isLiked = post.likers.map(user => user.id).includes(sessionUser.id)
    //comments variables
    // const id = post.id;

    const comments = post.comments;

    const commentsArr = Object.values(comments);
    const reverseArr = [...commentsArr].reverse();
    console.log(reverseArr, 'reverseArr')


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
        if (likers.includes(sessionUser.id)) { // already liked
          const payload = {
            postId: post.id
          }
          if (option === 'feed') {
              dispatch(deleteLike(payload))
          } else {
            dispatch(profileDeleteLike(payload))
            dispatch(deleteLikeActionCreator(sessionUser.id, post.id))
          }
        } else {                               // not liked yet
          const payload = {
            userId: sessionUser.id,
            postId: post.id
          }
          if (option === 'feed') {
              dispatch(postLike(payload))
          } else {
            dispatch(profilePostLike(payload))
            dispatch(postLikeActionCreator(sessionUser, post.id))
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

    let likesCountRender;
    let likesCount;
        if (post.likers.length !== 0) {
        likesCount = post.likers.length;
        if (post.likers.length === 1) likesCountRender = `${likesCount} like`;
        else likesCountRender = `${likesCount} likes`;
    } else likesCountRender = null;



    return (
        <div className="post-view-comments">
            <ul>
                <li>
                    <div className="caption-shell">
                        <div>
                            <img className="post-view-user-img"src={post.user.image_url} alt='profile'></img>
                        </div>
                        <div>
                            <NavLink to={`/${post.user.username}`} onClick={closePostView}>{post.user.username}</NavLink>
                            <span>{post.caption}</span>
                        </div>
                    </div>
                </li>

                {commentsArr.length !==0 ? <>
                {reverseArr.map((comment)=>
                <li key={comment.id}>
                    <div className="comment-shell">
                        <img className="post-view-user-img"src={comment.user.image_url} alt='profile'></img>
                        <NavLink to={`/${comment.user.username}`}>{comment.user.username}</NavLink>
                        <span>{comment.comment}</span>
                    </div>
                    <div className='time-and-menu'>
                        <div className='time-passed'>{timePassed(Date.parse(new Date().toString()) - Date.parse(comment?.created_at))}</div>
                        {comment.user.id === sessionUser.id ? <CommentMenuModal profileUser={profileUser} option={option} comment={comment.comment} post={post} commentId={comment.id}/>   : <i id='ghost'className='far fa-ellipsis-h post-view'/>}

                    </div>
                </li>

                )}
                </>
                : null}
            </ul>



            <div className="footer-icons">
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
            {likesCount > 0 ? <div className='footer-likes'>{likesCountRender}</div> : null}

            <div>
                <CommentForm profileUser={profileUser} option={option} post={post}/>
            </div>
        </div>

    )

}


export default SideContainer;
