import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";
import "./CommentForm.css"
import { createCommentDashboard } from "../../store/dashboard";
import { createCommentProfile } from "../../store/profile";

function CommentForm({ post }) {
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.session.user);

    const [comment, setComment] = useState("");
    const [errors, setErrors] = useState([]);

    //useSelector on comments
    const url = document.URL;


    const handleSubmitDashboard = async (e) => {
        e.preventDefault();
        const postId = post.id


        const payload = {

            user_id: currentUser.id,
            post_id: postId,
            comment,
        }


        let newComment = await dispatch(createCommentDashboard(payload))
        // .catch(async(res)=>{
        //     const data = await res.json();
        //     if(data && data.errors) return setErrors(data.errors)
        // })
    }

    const handleSubmitProfile = async (e) => {
        e.preventDefault();
        const postId = post.id


        const payload = {

            user_id: currentUser.id,
            post_id: postId,
            comment,
        }

        let newComment = await dispatch(createCommentProfile(payload))


    }


    return (

        <div>


            {document.URL.includes(`http://localhost:3000/${currentUser.username}`) && document.URL.toString().length > 21 ?

                <form onSubmit={handleSubmitProfile}>
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
            :

            document.URL.toString().length === 22 ?

                <form onSubmit={handleSubmitDashboard}>
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

            :

                <form onSubmit={handleSubmitProfile}>
                <   div className="comment-form-container">
                    <div className="add-comment-and-post-btn">
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
                    </div>

                </form>

            }

        </div>


    )
}


export default CommentForm;
