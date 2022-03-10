import FeedPost from "../components/Dashboard/Feed/FeedPost";

// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const UNFOLLOW = 'follow/UNFOLLOW'
const FOLLOW = 'follow/follow'

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})

export const unfollowActionCreator = (userId) => {    // Unfollow action creator
  return {
    type: UNFOLLOW,
    userId
  }
}

export const followActionCreator = (user) => {    // Follow action creator
  return {
    type: FOLLOW,
    user
  }
}

const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
}

export const login = (email, username, password) => async (dispatch) => {
  console.log('email:', email)
  console.log('username:', username)
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      username,
      password
    })
  });


  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};


export const signUp = (username, email, password, full_name) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
      full_name
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export default function reducer(state = initialState, action) {
  let stateCopy
  switch (action.type) {
    case SET_USER:
      return { user: action.payload }

    case REMOVE_USER:
      return { user: null }

    case UNFOLLOW:
      stateCopy = {...state}
      let user_to_unfollow = action.userId
      const index = stateCopy.user.following.findIndex(user => user.id === user_to_unfollow)
      stateCopy.user.following.splice(index, 1)
      console.log('------------------',stateCopy)
      return stateCopy

    case FOLLOW:
      stateCopy = {...state}
      stateCopy.user.following.push(action.user)
      return stateCopy
      
    default:
      return state;
  }
}
