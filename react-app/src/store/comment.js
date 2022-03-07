import PostFooter from "../components/Dashboard/Feed/FeedPost/PostFooter";
import { normalizePosts } from "./utils";

const ADD_COMMENT = 'comment/ADD_COMMENT';

//Action Creators
const addComment = (data) => {
    return{
        type: ADD_COMMENT,
        data
    }
}


//Thunks
export const createComment = (payload) => async dispatch => {
    const res = await fetch('/api/comments/', {
        method: 'POST',
        body: payload
    })

    if (res.ok) {
        const data = await res.json()
        dispatch(addComment(data));
      } else {
        const errors = await res.json();
        return errors.errors;
      }
}


const initialState = {

}




export default function reducer(state = initialState, action) {
        
  };
