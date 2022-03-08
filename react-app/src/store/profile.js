import { normalizePosts, orderPostIds } from "./utils";

const LOAD_POSTS = 'profile/LOAD_POSTS';

// Action Creators
const loadPosts = (data) => {
  return {
    type: LOAD_POSTS,
    data
  };
};

// Thunks
export const getProfilePosts = (userId) => async dispatch => {
  const res = await fetch(`/api/posts/${userId}`);

  if (res.ok) {
    const data = await res.json();
    console.log("DATA: ',", data)
    dispatch(loadPosts(data));
  } else {
    const errors = await res.json();
    console.log(errors.errors)
  }
};

// Helper Functions
export const getProfilePostsArray = (state) => {
  const orderedIds = state.profile.posts.order;
  return orderedIds.map(id => state.profile.posts.postIds[id]);
};

// Reducer
const initialState = {
  user: {},
  followers: [],
  follows: [],
  posts: {
    postIds: {},
    order: []
  }
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_POSTS:
      const posts = normalizePosts(action.data.posts);
      const orderedIds = orderPostIds(action.data.posts);
      return {
        posts: {
          postIds: posts,
          order: orderedIds
        }
      }
    default:
      return state;
  }
};
