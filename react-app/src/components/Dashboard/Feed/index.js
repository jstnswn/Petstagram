import React, { useEffect, useRef, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from 'react-redux'
import { getFeedPostsArray } from '../../../store/feed';
import FeedPost from './FeedPost';

import './Feed.css'

export default function Feed() {
  const allPosts = useSelector(getFeedPostsArray);

  const [index, setIndex] = useState(5);
  const [hasMore, setHasMore] = useState(true);
  const [posts, setPosts] = useState(allPosts.slice(0, 5));
  const [initialLength, setInitialLength] = useState(allPosts.length);

  useEffect(() => {
    if (allPosts.length > initialLength) {
      setPosts(prev => [allPosts[0], ...prev]);
    }
    setInitialLength(allPosts.length);
  }, [allPosts, initialLength])

  const loadMorePosts = () => {
    if (index >= allPosts.length) {
      console.log('stop')
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
        style={{overflow: 'hidden'}}
      >
        {posts.map((post, idx) => (
          <FeedPost key={idx} post={post}/>
          ))}
      </InfiniteScroll>
      </div>
  )
}
