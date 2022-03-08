import { normalizePosts, orderPostIds } from "./utils";

const LOAD_POSTS = 'feed/LOAD_POSTS';
const LOAD_POST = 'feed/LOAD_POST';

const ADD_COMMENT = 'comment/ADD_COMMENT';

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

const addComment = (data) => {
  return{
      type: ADD_COMMENT,
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
    console.log(errors.errors);
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
    return errors.errors;
  }
};

export const createComment = (payload) => async dispatch => {

  const res = await fetch('/api/comments/', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          user_id: payload.user_id,
          post_id: payload.post_id,
          comment: payload.comment,
      })
  })

  if (res.ok) {
      const data = await res.json()
      console.log(data, "data")
      dispatch(addComment(data));
    } else {
      const errors = await res.json();
      return errors.errors;
    }
}

// Helper Functions
export const getFeedPostsArray = (state) => {
  const orderedIds = state.dashboard.feed.order;
  return orderedIds.map(id => state.dashboard.feed.postIds[id]);
};


// Reducer
const initialState = {
  feed: {
    postIds: {},
    ordered: []
  }
};

export default function reducer(state = initialState, action) {
  let stateCopy;
  switch(action.type) {
    case LOAD_POSTS:
      const posts = normalizePosts(action.data.posts);
      const orderedIds = orderPostIds(action.data.posts)
      return {
        ...state,
        feed: {
          postIds: posts,
          order: orderedIds
        }
      }
    case LOAD_POST:
      return {
        ...state,
        feed: {
          order: [action.data.post.id, ...state.feed.order],
          postIds: {
            ...state.feed.postIds,
            [action.data.post.id] : action.data.post
          }
        }
      }
    case ADD_COMMENT:
      stateCopy = {...state}
      const post = stateCopy.feed.postIds[action.data.comment.post_id]
      post.comments[action.data.comment.id] = action.data.comment
      return stateCopy

    default:
      return state
  }
};
