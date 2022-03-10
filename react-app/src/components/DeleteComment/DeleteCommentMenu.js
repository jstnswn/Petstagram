import { useDispatch } from 'react-redux'
import './DeleteCommentMenu.css'
import { removeCommentDashboard } from '../../store/dashboard'

function DeleteCommentMenu ({commentId, hideForm, post}) {

    const dispatch = useDispatch();




    const deleteCommentDashboard = async (e) => {


        const postId = post.id

        const payload = {
            comment_id: commentId,
            post_id: postId,
        }

        let deletedComment = await dispatch(removeCommentDashboard(payload))


    }




    return (
        <div className="delete-comment-menu">
            <div style={{color: 'red'}} onClick={deleteCommentDashboard}>Delete</div>
            <div onClick={hideForm}>Cancel</div>

        </div>
    )
}



export default DeleteCommentMenu;
