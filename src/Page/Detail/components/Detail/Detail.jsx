import styles from './Detail.module.css'
import clsx from 'clsx'

function Detail(props) {
    return (
        <>
            <div className={styles.detailContainer}>
                <div className={styles.detailLabel}>Mã hàng</div>
                <div className={styles.detailContent}>8934974175995</div>
            </div>
            <div className={styles.detailContainer}>
                <div className={styles.detailLabel}>Tên nhà cung cấp</div>
                <div className={clsx(styles.detailContent, styles.link)}>
                    NXB Trẻ
                </div>
            </div>
        </>
    )
}

export default Detail
