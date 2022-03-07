import { normalizePosts } from "./utils";

const LOAD_POSTS = 'feed/LOAD_POSTS';
const LOAD_POST = 'feed/LOAD_POST';

// Action Creators
const loadPosts = (data) => {
  return {
    type: LOAD_POSTS,
    data
  }
};

const loadPost = (data) => {
  return {
    type: LOAD_POST,
    data
  }
}

// Thunks
export const getFeedPosts = () => async dispatch => {
  const res = await fetch('/api/posts/');

  if (res.ok) {
    const data = await res.json();
    dispatch(loadPosts(data));
  } else {
    const errors = await res.json();
    console.log(errors);
  }
};

export const createPost = (payload) => async dispatch => {
  const { image, caption } = payload;

  const formData = new FormData();
  formData.append('image', image);
  formData.append('caption', caption);

  const res = await fetch('/api/posts/', {
    method: 'POST',
    body: formData
  });

  if (res.ok) {
    const data = await res.json()
    dispatch(loadPost(data));
  } else {
    const errors = await res.json();
    console.log(errors);
  }
};


// Helper Functions
export const getFeedPostsArray = (state) => Object.values(state.feed.posts);


const initialState = {
  posts: null,
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_POSTS:
      const posts = normalizePosts(action.data.posts);
      return {
        ...state,
        posts: posts
      }
    case LOAD_POST:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.data.post.id]: action.data.post
        }
      }
    default:
      return state
  }
};
