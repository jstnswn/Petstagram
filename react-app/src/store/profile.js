import { normalizePosts, orderPostIds } from "./utils";

const LOAD_POSTS = 'profile/LOAD_POSTS';
const REMOVE_POST = 'profile/REMOVE_POST';


const ADD_COMMENT = 'profile/ADD_COMMENT';
const DELETE_COMMENT = 'profile/DELETE_COMMENT';


// Action Creators
const loadPosts = (data) => {
  return {
    type: LOAD_POSTS,
    data
  };
};

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

    default:
      return state;
  }
};
