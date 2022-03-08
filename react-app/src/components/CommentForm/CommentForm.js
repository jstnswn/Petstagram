import {useDispatch, useSelector} from "react-redux"
import { useState } from "react";
import "./CommentForm.css"
import { createComment } from "../../store/dashboard";

function CommentForm({post}){
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.session.user);

    const [comment, setComment] = useState("");
    const [errors, setErrors] = useState([]);

    //useSelector on comments

    const handleSubmit = async (e) => {
        e.preventDefault();
        const postId = post.id


        const payload = {
            user_id: currentUser.id,
            post_id: postId,
            comment,
        }


        let newComment = await dispatch(createComment(payload))
        // .catch(async(res)=>{
        //     const data = await res.json();
        //     if(data && data.errors) return setErrors(data.errors)
        // })
    }


    return (
        <form onSubmit={handleSubmit}>
            <div className="comment-form-container">
                <textarea
                id={post.id}
                className="comment-form-textarea"
                cols = "74"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e)=> setComment(e.target.value)}
                >
                </textarea>
                <button className="comment-button" type="submit">Post</button>
            </div>
        </form>
    )
}


export default CommentForm;
