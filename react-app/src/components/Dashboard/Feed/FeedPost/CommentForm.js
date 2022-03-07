import {useDispatch, useSelector} from "react-redux"
import { useState } from "react";
import "./CommentForm.css"

function CommentForm(){
    const dispatch = useDispatch();
    const [comment, setComment] = useState("");


    return (
        <form>
            <div className="comment-form-container">
                <textarea
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
