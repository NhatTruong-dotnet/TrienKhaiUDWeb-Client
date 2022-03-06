import styles from './MainInfo.module.css'
import clsx from 'clsx'
import RatingStar from '../../../../Common/RatingStar/RatingStar'
import { formatCurrency } from '../../../../Tools/formatCurrency'

function MainInfo({
    name,
    suppiler,
    publisher,
    author,
    bookLayout,
    rating = [],
    bookDetail,
    discountPrice,
    discountPercentage,
    price,
}) {
    const totalRatingValue = rating.reduce(
        (prev, { ratingValue }) => prev + ratingValue,
        0
    )
    const averageRatingValue = totalRatingValue / rating.length

    return (
        <>
            <h1 className={styles.name}>{name}</h1>
            <div className='mainInfoContainer'>
                <div className={styles.mainInfoRow}>
                    <div className={styles.mainInfo}>
                        <span className={styles.label}>Nhà cung cấp:</span>
                        <span className={clsx(styles.content, styles.link)}>
                            {suppiler}
                        </span>
                    </div>
                    <div className={styles.mainInfo}>
                        <span className={styles.label}>Tác giả:</span>
                        <span className={styles.content}>{author}</span>
                    </div>
                </div>
                <div className={styles.mainInfoRow}>
                    <div className={styles.mainInfo}>
                        <span className={styles.label}>Nhà xuất bản:</span>
                        <span className={clsx(styles.content, styles.link)}>
                            {publisher}
                        </span>
                    </div>
                    <div className={styles.mainInfo}>
                        <span className={styles.label}>Hình thức bìa:</span>
                        <span className={styles.content}>{bookLayout}</span>
                    </div>
                </div>
                <RatingStar value={averageRatingValue}>
                    <span className={styles.ratingAmount}>
                        ({rating.length}) đánh giá
                    </span>
                </RatingStar>
                <div className={styles.priceContainer}>
                    <div className={styles.discountPrice}>
                        {formatCurrency(
                            discountPrice ||
                                price - (price / 100) * discountPercentage ||
                                price
                        )}
                    </div>
                    <div
                        className={clsx(styles.oldPrice, {
                            [styles.withDiscount]:
                                discountPrice || discountPercentage || false,
                        })}
                    >
                        {formatCurrency(price)}
                    </div>
                    {discountPercentage && (
                        <div className={styles.discountPercentage}>
                            -{discountPercentage}%
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default MainInfo
