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
        dispatch(addComment(data));
      } else {
        const errors = await res.json();
        return errors.errors;
      }
}




const initialState = {
    feed: {
        postIds: {},
        ordered: []
      },
    comments: {
        commentIds: {
            commentId1 : {
                userId: "user1",
                postId: "post2",
                comment: ".....",
                createdAt: "date",
            },
            commentId2 : {
                userId: "user1",
                postId: "post2",
                comment: ".....",
                createdAt: "date",
            }
        }
    }
}



export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                comments: {
                    commentIds: {
                        ...state.comments.commentIds,
                        [action.data.comment.id] : action.data.comment
                    }
                }
            }
        default:
          return state;
      }
  };
