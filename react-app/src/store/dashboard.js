import { normalizePosts, orderPostIds } from "./utils";
import { unfollowActionCreator } from "./session";
import { followActionCreator } from "./session";

const LOAD_POSTS = 'feed/LOAD_POSTS';
const LOAD_POST = 'feed/LOAD_POST';
const UPDATE_POST = 'feed/UPDATE_POST';
const POST_LIKE = 'feed/POST_LIKE' // Post like action type
const DELETE_LIKE = 'feed/DELETE_LIKE' // Delete like action type

const ADD_COMMENT = 'feed/ADD_COMMENT';
const DELETE_COMMENT = 'feed/DELETE_COMMENT';

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

export const updatePost = (postId, caption) => {
  return {
    type: UPDATE_POST,
    postId,
    caption
  }
}

const deleteComment = (data) => {
  return {
    type: DELETE_COMMENT,
    data
  }
}

const postLikeActionCreator = (user, postId) => { // Post like action creator
  return {
    type: POST_LIKE,
    user, postId
  }
}

const deleteLikeActionCreator = (userId, postId)=> { // Delete like action creator
  return {
    type: DELETE_LIKE,
    userId, postId
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
    const data = await res.json();
    dispatch(loadPost(data));
  } else {
    const errors = await res.json();
    return errors.errors;
  }
};


export const createCommentDashboard = (payload) => async dispatch => {

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
  });

  if (res.ok) {
      const data = await res.json();
      dispatch(addComment(data));
    } else {
      const errors = await res.json();
      return errors.errors;
    }
 }

export const removeCommentDashboard = (payload) => async dispatch => {
  const res = await fetch('/api/comments/', {
    method:'DELETE',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({
      comment_id: payload.comment_id,
      post_id: payload.post_id,
  })
  });

  if (res.ok){
    const data = await res.json();
    console.log(data, "this is data from delete comment thunk")
    dispatch(deleteComment(data));
    return data;
  }
}

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

// Delete like thunk creator
export const deleteLike = payload => async dispatch => {
  const { postId: post_id } = payload
  const res = await fetch('/api/likes/', {
    method: 'DELETE',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({post_id})
  })
  const data = await res.json()

  if (res.ok) {
    dispatch(deleteLikeActionCreator(data.userId, data.postId))
  } else {
    throw res
  }
  return data
}

export const follow = payload => async dispatch => {
  const res = await fetch('/api/follows/', {
    method: 'POST',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({"user_id": payload})
  })
  const data = await res.json()

  // console.log('data:', data)

  if (res.ok) {
    dispatch(followActionCreator(data.user))
  } else {
    throw res
  }
  return data
}

export const unfollow = payload => async dispatch => {
  const res = await fetch('/api/follows/', {
    method: 'DELETE',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({"user_id": payload})
  })
  const data = await res.json()

  if (res.ok) {
    dispatch(unfollowActionCreator(data.userId))
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
  },
};

export default function reducer(state = initialState, action) {
  let post;
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

    case UPDATE_POST:
        stateCopy = {...state};
        post = stateCopy.feed.postIds[action.postId];
        post.caption = action.caption;

        return stateCopy;

    case ADD_COMMENT:
      stateCopy = {...state}
      console.log("stateCopy", stateCopy)
      post = stateCopy.feed.postIds[action.data.comment.post_id]
      console.log(post.comments, "post.comments")
      post.comments[action.data.comment.id] = action.data.comment
      return stateCopy

    case DELETE_COMMENT:
      stateCopy = {...state}
      const commentsObj = stateCopy.feed.postIds[action.data.postId].comments
      delete commentsObj[action.data.commentId]
      return stateCopy

      // post like
    case POST_LIKE:
      stateCopy = {...state}
      post = stateCopy.feed.postIds[action.postId]
      post.likers.push(action.user)
      return stateCopy

      // delete like
    case DELETE_LIKE:
      stateCopy = {...state}
      let likers = stateCopy.feed.postIds[action.postId].likers
      let newLikers = likers.filter(user => user.id != action.userId)
      stateCopy.feed.postIds[action.postId].likers = newLikers
      return stateCopy

    default:
      return state
  }
};
