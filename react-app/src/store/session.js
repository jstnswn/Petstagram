// import FeedPost from "../components/Dashboard/Feed/FeedPost";

// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const UNFOLLOW = 'follow/UNFOLLOW'
const FOLLOW = 'follow/follow'
const SET_PROFILE_IMAGE = 'session/SET_PROFILE_IMAGE';

const REMOVE_NOTIFICATIONS = 'session/REMOVE_NOTIFICATIONS'

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

export const removeNotifications = () => {
  return {
    type: REMOVE_NOTIFICATIONS
  }
}

const initialState = {
  user: null
};

const setProfileImage = (imageUrl) => {
  return {
    type: SET_PROFILE_IMAGE,
    imageUrl
  }
}



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

export const login = (credentials, password) => async (dispatch) => {
  // console.log('email:', email)
  // console.log('username:', username)
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      credentials,
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

// Helper Functions
export const deleteNotifications = () => async dispatch => {

  const res = await fetch('/api/notifications/all/', {
    method: 'DELETE',
    headers: { "Content-Type": "application/json" },
  })

  if (res.ok) {
    dispatch(removeNotifications())
  }

  // return
};


export const updateProfileImage = (image) => async dispatch => {
  const formData = new FormData();
  formData.append('image', image);

  const res = await fetch('api/users/profile_image', {
    method: 'PATCH',
    body: formData
  })

  if (res.ok) {
    const data = await res.json();
    const imageUrl = data.url;
    dispatch(setProfileImage(imageUrl));
      return {imageUrl};
  } else {
    const data = await res.json();
    return data.errors;
  }

};

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

    case REMOVE_NOTIFICATIONS:
      stateCopy = {...state}
      stateCopy.user.notifications = null;
      return stateCopy;
    case SET_PROFILE_IMAGE:
      stateCopy = {...state};
      stateCopy.user.image_url = action.imageUrl;
      return stateCopy;

    default:
      return state;
  }
}
