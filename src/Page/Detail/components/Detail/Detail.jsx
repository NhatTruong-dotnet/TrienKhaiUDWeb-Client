import styles from './Detail.module.css'
import clsx from 'clsx'

function Detail({
    bookDetail: {
        name,
        suppiler,
        author,
        translator,
        bookLayout,
        numberInStock,
        price,
        publisher,
        quantityOfPage,
    },
}) {
    return (
        <>
            <div className={styles.detailContainer}>
                <div className={styles.detailLabel}>Tên sách</div>
                <div className={styles.detailContent}>{name}</div>
            </div>
            <div className={styles.detailContainer}>
                <div className={styles.detailLabel}>Tên nhà cung cấp</div>
                <div className={clsx(styles.detailContent, styles.link)}>
                    {suppiler}
                </div>
            </div>
            <div className={styles.detailContainer}>
                <div className={styles.detailLabel}>Tác giả</div>
                <div className={styles.detailContent}>{author}</div>
            </div>
            {translator && (
                <div className={styles.detailContainer}>
                    <div className={styles.detailLabel}>Dịch giả</div>
                    <div className={styles.detailContent}>{translator}</div>
                </div>
            )}
            <div className={styles.detailContainer}>
                <div className={styles.detailLabel}>Hình thức bìa</div>
                <div className={styles.detailContent}>{bookLayout}</div>
            </div>
            <div className={styles.detailContainer}>
                <div className={styles.detailLabel}>Số lượng còn lại</div>
                <div className={styles.detailContent}>{numberInStock}</div>
            </div>
            <div className={styles.detailContainer}>
                <div className={styles.detailLabel}>Giá</div>
                <div className={styles.detailContent}>{price}</div>
            </div>
            <div className={styles.detailContainer}>
                <div className={styles.detailLabel}>Năm xuất bản</div>
                <div className={styles.detailContent}>{publisher}</div>
            </div>
            <div className={styles.detailContainer}>
                <div className={styles.detailLabel}>Số trang</div>
                <div className={styles.detailContent}>{quantityOfPage}</div>
            </div>
        </>
    )
}

export default Detail
