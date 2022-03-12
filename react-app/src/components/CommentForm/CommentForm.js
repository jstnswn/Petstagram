import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import "./CommentForm.css"
import { createCommentDashboard } from "../../store/dashboard";
import { createCommentProfile } from "../../store/profile";
import { addComment } from "../../store/dashboard";

function CommentForm({ option, post, profileUser}) {
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.session.user);

    const [comment, setComment] = useState("");
    // const [errors, setErrors] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const postId = post.id

        const payload = {
            user_id: currentUser.id,
            post_id: postId,
            comment,
        }

        if(option === 'profile' && profileUser.username === currentUser.username){
            dispatch(createCommentProfile(payload))
        }else if(option === 'feed'){
            dispatch(createCommentDashboard(payload))
        }else{
            const newComment = await dispatch(createCommentProfile(payload))
            if(newComment){
                dispatch(addComment(newComment))
            }
        }
        setComment('')
    }

    return (

        <div>

            <form onSubmit={handleSubmit}>
                <div className="comment-form-container">
                    <textarea
                        id={post.id}
                        className="comment-form-textarea"
                        cols="74"
                        placeholder="Add a comment..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    >
                    </textarea>
                    <button className="comment-button" type="submit">Post</button>
                </div>
            </form>
        </div>
    )


}


export default CommentForm;
