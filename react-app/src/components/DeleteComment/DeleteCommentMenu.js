import { useDispatch, useSelector } from 'react-redux'
import './DeleteCommentMenu.css'
import { removeCommentDashboard } from '../../store/dashboard'
import {removeCommentProfile} from '../../store/profile'

function DeleteCommentMenu ({commentId, hideForm, post}) {

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.session.user);

    const deleteCommentDashboard = async (e) => {


        const postId = post.id;

        const payload = {
            comment_id: commentId,
            post_id: postId,
        };

        let deletedComment = await dispatch(removeCommentDashboard(payload))
        if (deletedComment){
            hideForm();
        }

    }

    const deleteCommentProfile = async (e) => {
        const postId = post.id;

        const payload = {
            comment_id: commentId,
            post_id: postId,
        };

        let deletedComment = await dispatch(removeCommentProfile(payload))
        if (deletedComment){
            hideForm();
        }
    }


    if(document.URL.includes(`http://localhost:3000/${currentUser.username}`) && document.URL.toString().length > 21){
        
        return (
            <div className="delete-comment-menu">
                <div style={{color: 'red'}} onClick={deleteCommentProfile}>Delete</div>
                <div>Update</div>
                <div onClick={hideForm}>Cancel</div>

            </div>
        )

    }else if(document.URL.toString().length === 22){

        return (
            <div className="delete-comment-menu">
                <div style={{color: 'red'}} onClick={deleteCommentDashboard}>Delete</div>
                <div>Update</div>
                <div onClick={hideForm}>Cancel</div>

            </div>
        )

    }else{

        return (
            <div className="delete-comment-menu">
                <div style={{color: 'red'}} onClick={deleteCommentProfile}>Delete</div>
                <div>Update</div>
                <div onClick={hideForm}>Cancel</div>

            </div>
        )
    }

}



export default DeleteCommentMenu;
