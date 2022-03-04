import styles from './Comment.module.css'
import Comment from './Comment/Comment'
import Paging from '../../../../../../Common/Paging/Paging'

function CommentList(props) {
    return (
        <div className={styles.commentList}>
            <Comment />
            <Comment />
            <Comment />
            <Paging totalPage={5} />
        </div>
    )
}

export default CommentList
