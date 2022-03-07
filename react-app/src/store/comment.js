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
export const createComment = () => async dispatch => {
    const res = await fetch('/api/comment')
}
