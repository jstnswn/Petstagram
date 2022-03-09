
import './ViewComments.css'
import {useSelector} from 'react-redux';
import PostView from '../../../PostView';



function ViewComments ({post}) {

    const id = post.id

    const comments = useSelector(state=>state.dashboard.feed.postIds[id].comments)
    const commentsArr = Object.values(comments)


    //delete logic
    const handleClick = async(e)=>{
        e.preventDefault();
        const postId = post.id;
        console.log(e.target.value)
        const commentId = commentsArr[commentsArr.length-2].id
        console.log(commentId, 'hehehe')

        // const payload = {

        // }
    }


    return  (
        <div className="view-comments-container">


            {commentsArr.length > 2 ? <div className="expand-view-comments">View all {commentsArr.length} comments</div> : null}



            {commentsArr.length > 0 ? <div>{commentsArr[commentsArr.length-1].comment}</div> : null}



            {commentsArr.length > 1 ? <div>{commentsArr[commentsArr.length-2].comment}</div> : null}
        </div>
    )

}


export default ViewComments;
