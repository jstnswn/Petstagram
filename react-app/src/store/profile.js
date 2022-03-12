import { normalizePosts, orderPostIds } from "./utils";

const LOAD_POSTS = 'profile/LOAD_POSTS';
const LOAD_POST = 'profile/LOAD_POST';
const REMOVE_POST = 'profile/REMOVE_POST';
const UPDATE_POST = 'profile/UPDATE_POST';

const ADD_COMMENT = 'profile/ADD_COMMENT';
const DELETE_COMMENT = 'profile/DELETE_COMMENT';
const UPDATE_COMMENT = 'profile/UPDATE_COMMENT';

const PROFILE_POST_LIKE = 'profile/PROFILE_POST_LIKE' // Post like action type
const PROFILE_DELETE_LIKE = 'profile/PROFILE_DELETE_LIKE'

// Action Creators
const loadPosts = (data) => {
  return {
    type: LOAD_POSTS,
    data
  };
};

export const loadPost = (data) => {
  return {
    type: LOAD_POST,
    data
  }
}

const updatePost = (postId, caption) => {
  return {
    type: UPDATE_POST,
    postId,
    caption
  }
}

const removePost = (postId) => {
  return {
    type: REMOVE_POST,
    postId
  };
};

const addComment = (data) => {
  return{
      type: ADD_COMMENT,
      data
  }
}

const deleteComment = (data) => {
  return {
    type: DELETE_COMMENT,
    data
  }
}

const updateComment = (data) => {
  return {
    type: UPDATE_COMMENT,
    data
  }
}

const profilePostLikeActionCreator = (user, postId) => { // Post like action creator
  return {
    type: PROFILE_POST_LIKE,
    user, postId
  }
}

const profileDeleteLikeActionCreator = (userId, postId) => { // Post like action creator
  return {
    type: PROFILE_DELETE_LIKE,
    userId, postId
  }
}


// Thunks
export const getProfilePosts = (userId) => async dispatch => {
  const res = await fetch(`/api/posts/${userId}`);

  if (res.ok) {
    const data = await res.json();
    dispatch(loadPosts(data));
  } else {
    const errors = await res.json();
    console.log(errors.errors)
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


export const patchPost = (payload) => async dispatch => {
  const { postId, caption } = payload;

  const res = await fetch(`/api/posts/${postId}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({caption})
  });

  if (res.ok) {
    dispatch(updatePost(postId, caption));
  } else {
    const data = await res.json();
    return data.errors;
  }

};


  export const createCommentProfile = (payload) => async dispatch => {

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
        console.log('data in the thunk', data)
        dispatch(addComment(data));
        return data;
      } else {
        const errors = await res.json();
        return errors.errors;
      }
   }
    // const data = await res.json();

  //   dispatch(updatePost(postId, caption));
  // } else {
  //   const errors = await res.json();
  //   return errors.errors;
  // }


export const removeCommentProfile = (payload) => async dispatch => {
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
    dispatch(deleteComment(data));
    return data;
  }
}

export const editCommentProfile = (payload) => async dispatch => {
  const res = await fetch('/api/comments/', {
    method:'PATCH',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({
      comment_id: payload.comment_id,
      post_id: payload.post_id,
      updated_comment: payload.updated_comment,
  })
  });

  if (res.ok){
    const data = await res.json();
    dispatch(updateComment(data));
    return data;
  }
}

export const deletePost = (postId) => async dispatch => {
  const res = await fetch(`/api/posts/${postId}`, {
    method: 'DELETE'
  });

  if (res.ok) {
      // const data = await res.json();
      console.log('Post Deleted');
      dispatch(removePost(postId));
  } else {
    console.log('Internal server error')
  }

};

export const profilePostLike = payload => async dispatch => {
  const { postId: post_id } = payload
  const res = await fetch('/api/likes/', {
    method: 'POST',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({post_id})
  })
  const data = await res.json()

  if (res.ok) {
    dispatch(profilePostLikeActionCreator(data.user, payload.postId))
  } else {
    throw res
  }
  return data

}

// Delete like thunk creator
export const profileDeleteLike = payload => async dispatch => {
  const { postId: post_id } = payload
  const res = await fetch('/api/likes/', {
    method: 'DELETE',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({post_id})
  })
  const data = await res.json()

  if (res.ok) {
    dispatch(profileDeleteLikeActionCreator(data.userId, data.postId))
  } else {
    throw res
  }
  return data
}

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
  let post;
  let stateCopy;
  let idx;
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
    case LOAD_POST:
      return {
        ...state,
        posts: {
          order: [action.data.post.id, ...state.posts.order],
          postIds: {
            ...state.posts.postIds,
            [action.data.post.id]: action.data.post
          }
        }
      }

    case UPDATE_POST:
      stateCopy = {...state};
      post = stateCopy.posts.postIds[action.postId]
      // order = stateCopy.posts.order
      post.caption = action.caption

      return stateCopy;

    case REMOVE_POST:
      stateCopy = {...state};
      const postsOrder = stateCopy.posts.order;

      idx = postsOrder.findIndex(id => id === action.postId);

      postsOrder.splice(idx, 1);
      delete stateCopy.posts[action.postId]
      return stateCopy;

    case ADD_COMMENT:
      stateCopy = {...state}
      post = stateCopy.posts.postIds[action.data.comment.post_id]
      post.comments[action.data.comment.id] = action.data.comment
      return stateCopy

    case DELETE_COMMENT:
      stateCopy = {...state}
      const commentsObj = stateCopy.posts.postIds[action.data.postId].comments
      delete commentsObj[action.data.commentId]
      return stateCopy

    case UPDATE_COMMENT:
      stateCopy = {...state}
      console.log("end of reducer")
      const comment = stateCopy.posts.postIds[action.data.postId].comments[action.data.commentId]
      comment.comment = action.data.updatedComment
      return stateCopy;

    case PROFILE_POST_LIKE:
      stateCopy = {...state}
      stateCopy.posts.postIds[action.postId].likers.push(action.user)
      return stateCopy

    case PROFILE_DELETE_LIKE:
      stateCopy = {...state}
      const likers = stateCopy.posts.postIds[action.postId].likers
      console.log('likers',likers)
      console.log(action.userId)
      const newLikers = likers.filter(user => user.id !== parseInt(action.userId))
      stateCopy.posts.postIds[action.postId].likers = newLikers
      return stateCopy

    default:
      return state;
  }
};
