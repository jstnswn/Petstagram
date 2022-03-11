import React from 'react'
import { useSelector } from 'react-redux';
import { getProfilePostsArray } from '../../store/profile';
import ProfileGridItem from './ProfileGridItem';
// import PostEditForm from '../PostView/PostEditForm';

export default function ProfileGrid({profileUser}) {
  const posts = useSelector(getProfilePostsArray);

  return (
    <div className='profile-grid'>
      {posts.map((post, idx) => (
        <ProfileGridItem profileUser={profileUser} key={idx} post={post} idx={idx}/>
      ))}
    </div>
  )
}
