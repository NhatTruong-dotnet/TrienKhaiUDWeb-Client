import styles from './Comment.module.css'
import Comment from './Comment/Comment'
import Paging from '../../../../../../Common/Paging/Paging'

function CommentList({ rating = [] }) {
    return (
        <div className={styles.commentList}>
            {rating.map(
                ({ ratingDate, ratingValue, _id, commentText, username }) => (
                    <Comment
                        key={_id}
                        ratingDate={ratingDate}
                        ratingValue={ratingValue}
                        commentText={commentText}
                        username={username}
                    />
                )
            )}
            <Paging totalPage={5} />
        </div>
    )
}

export default CommentList
