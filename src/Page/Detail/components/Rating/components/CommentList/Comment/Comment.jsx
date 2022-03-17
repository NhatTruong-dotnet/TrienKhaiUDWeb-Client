import styles from './Comment.module.css'
import RatingStar from '../../../../../../../Common/RatingStar/RatingStar'
import { formatDate } from '../../../../../../../Tools/formatDate'

function Comment({ ratingDate, ratingValue, commentText, username }) {
    return (
        <div className={styles.container}>
            <div className={styles.userInfo}>
                <div className={styles.name}>{username}</div>
                <div className={styles.createdDate}>
                    {formatDate(ratingDate)}
                </div>
            </div>
            <div className={styles.content}>
                <RatingStar value={ratingValue} style={{ marginTop: 0 }} />
                <div className={styles.commentContent}>{commentText}</div>
            </div>
        </div>
    )
}

export default Comment
