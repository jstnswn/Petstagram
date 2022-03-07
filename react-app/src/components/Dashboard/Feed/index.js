import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSelector } from 'react-redux'
import { getFeedPostsArray } from '../../../store/feed';
import FeedPost from './FeedPost';

import './Feed.css'

export default function Feed() {
  ////////////
  ///////////
  //////////
  const allPosts = useSelector(getFeedPostsArray);
  // const test = useSelector(({ feed }) => feed)
  // const allPosts = test.posts.order.map(id => test.posts.byId[id])
  console.log('Post Desc', allPosts)
  // const postsDesc = [...allPosts].reverse();
  const [posts, setPosts] = useState(allPosts.slice(0, 5))
  const [index, setIndex] = useState(5);
  const [hasMore, setHasMore] = useState(true);

  // let posts = allPosts.slice(0, 5);

  const loadMorePosts = () => {
    if (index >= allPosts.length) {
      console.log('stop')
      setHasMore(false);
      return;
    }
    console.log("go")
    setPosts(prev => [...prev, ...allPosts.slice(index, index + 5)]);
    // posts = [...posts, ...allPosts.slice(index, index + 5)]
    setIndex(prev => prev + 5);
  };

  console.log("POSTS: ", posts)

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
