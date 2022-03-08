import { normalizePosts, orderPostIds } from "./utils";

const LOAD_POSTS = 'feed/LOAD_POSTS';
const LOAD_POST = 'feed/LOAD_POST';
const POST_LIKE = 'feed/POST_LIKE' // Post like action type

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

export const postLikeActionCreator = (user, postId) => { // Post like action creator
  return { type: POST_LIKE, user, postId }
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

// Post like thunk creator
export const postLike = payload => async dispatch => {
  const { postId: post_id } = payload
  const res = await fetch('/api/likes/', {
    method: 'POST',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({post_id})
  })
  const data = await res.json()

  if (res.ok) {
    dispatch(postLikeActionCreator(data.user, payload.postId))
  } else {
    throw res
  }
  return data
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
      // post like
      case POST_LIKE:
        stateCopy = {...state}
        const post = stateCopy.feed.postIds[action.postId]
        post.likers.push(action.user)
        console.log('postId', action.postId)
        return stateCopy
    default:
      return state
  }

};
