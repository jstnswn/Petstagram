import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import { getProfilePostsArray } from '../../store/profile';
import PostView from '../PostView';
import PostEditForm from '../PostView/PostEditForm';

export default function ProfileGrid() {
  const [showIdx, setShowIdx] = useState(null);

  const posts = useSelector(({ profile }) => profile.posts.postIds);
  console.log('posts: ', posts)
  // const postsArray = Object.values(posts);
  const postsArray = useSelector(getProfilePostsArray);

  const openPostView = (idx) => setShowIdx(idx);
  const closePostView = () => setShowIdx(null);
  return (
    <div className='profile-grid'>
      {postsArray.map((post, idx) => (
        <div key={idx}>
          <img
            className='profile-grid-item'
            src={post.image_url}
            alt='user post'
            onClick={() => openPostView(idx)}
            style={{
              gridColumnStart: idx % 3 + 1
            }}
          />

          {showIdx === idx && (
            <Modal onClose={closePostView}>
              <PostView post={post} closePostView={closePostView} option='profile'/>
            </Modal>
          )}
        </div>
      ))}
    </div>
  )
}
