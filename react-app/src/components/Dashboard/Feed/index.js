import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from 'react-redux'
import { getFeedPostsArray } from '../../../store/feed';

import './Feed.css'

export default function Feed() {
  const allPosts = useSelector(getFeedPostsArray);
  const [posts, setPosts] = useState(allPosts.slice(0, 5))
  const [index, setIndex] = useState(5);
  const [hasMore, setHasMore] = useState(true);

  const loadMorePosts = () => {
    console.log('posts', posts)
    console.log('index', index)
    if (index >= allPosts.length) {
      setHasMore(false);
      return;
    }
    setPosts(prev => [...prev, ...allPosts.slice(index, index + 5)]);
    setIndex(prev => prev + 5);
  };


  return (
    <div className='feed-body'>
      <InfiniteScroll
        dataLength={posts.length}
        next={loadMorePosts}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<h4 style={{textAlign: 'center'}}>You've reached the end of your feed!</h4>}

      >
        {posts.map(post => (
          <div key={post.id} className='post-container'>
            <div className='post-header'>post header</div>
            <img className='post-image' src={post.image_url} alt='post content'/>
            <div className='post-footer'>post footer</div>
          </div>
          ))}
      </InfiniteScroll>
      </div>
  )
}
