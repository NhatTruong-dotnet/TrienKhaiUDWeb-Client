import styles from './Comment.module.css'
import RatingStar from '../../../../../../../Common/RatingStar/RatingStar'

function Comment(props) {
    return (
        <div className={styles.container}>
            <div className={styles.userInfo}>
                <div className={styles.name}>Trong Tri</div>
                <div className={styles.createdDate}>03/03/2022</div>
            </div>
            <div className={styles.content}>
                <RatingStar style={{ marginTop: 0 }} />
                <div className={styles.commentContent}>
                    Kho báu chẳng ở nơi xa, kho báu ở ngay dưới chân mình, trong
                    tim mình và ngay trong chính bản thân mỗi chúng ta. Một
                    quyển sách hay đáng đọc.
                </div>
            </div>
        </div>
    )
}

export default Comment
