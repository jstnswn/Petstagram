import { normalizePosts, orderPostIds } from "./utils";

const LOAD_POSTS = 'profile/LOAD_POSTS';
const LOAD_POST = 'profile/LOAD_POST';
const REMOVE_POST = 'profile/REMOVE_POST';
const UPDATE_POST = 'profile/UPDATE_POST';


const ADD_COMMENT = 'profile/ADD_COMMENT';
const DELETE_COMMENT = 'profile/DELETE_COMMENT';


// Action Creators
const loadPosts = (data) => {
  return {
    type: LOAD_POSTS,
    data
  };
};

const loadPost = (data) => {
  return {
    type: LOAD_POST,
    data
  }
}

const updatePost = (data) => {
  return {
    type: UPDATE_POST,
    data
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
      console.log(data, "data");
      dispatch(addComment(data));
    } else {
      const errors = await res.json();
      return errors.errors;
    }
 }

export const patchPost = (payload) => async dispatch => {
  const { caption, postId} = payload;

  const res = await fetch(`/api/posts/${postId}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({caption})
  });

  if (res.ok) {
    const data = await res.json();

    // await Promise.all([
    //   dispatch(removePost(postId)),
    //   dispatch(loadPost(data))
    // ])

    dispatch(updatePost(data));
  } else {
    const errors = await res.json();
    return errors.errors;
  }

};

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
    console.log(data, "this is data from delete comment thunk")
    dispatch(deleteComment(data));
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
          postIds: {
            ...state.posts.postIds,
            [action.data.post.id]: action.data.post
          },
          order: [action.data.post.id, ...state.posts.order]
        }
      }

    case UPDATE_POST:
      stateCopy = {...state};
      post = stateCopy.posts.postIds[action.data.post.id]
      // order = stateCopy.posts.order
      post.caption = action.data.post.caption

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
      console.log("stateCopy", stateCopy)
      post = stateCopy.posts.postIds[action.data.comment.post_id]
      console.log(post, "THIS IS POSTprofile")
      post.comments[action.data.comment.id] = action.data.comment
      return stateCopy

    case DELETE_COMMENT:
      stateCopy = {...state}
      const commentsObj = stateCopy.posts.postIds[action.data.postId].comments
      delete commentsObj[action.data.commentId]
      return stateCopy

    default:
      return state;
  }
};
