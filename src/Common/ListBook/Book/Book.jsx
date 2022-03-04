import clsx from 'clsx'
import { AiFillStar } from 'react-icons/ai'
import styles from './book.module.css'
import { formatCurrency } from '../../../Tools/formatCurrency'

function Book({
    imgSrc = 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_195509_1_36793.jpg',
    name = 'Nhà Giả Kim (Tái bản 2020)',
    discountPrice = 20000,
    discountPercentage = 20,
    price = 70000,
    rating = [{ ratingValue: 5 }, { ratingValue: 3 }],
}) {
    const renderRatingValue = rating => {
        const totalRatingValue = rating.reduce(
            (prev, { ratingValue }) => prev + ratingValue,
            0
        )
        const averageRatingValue = totalRatingValue / rating.length

        const result = []

        for (let i = 0; i < 5; i++) {
            if (i < averageRatingValue) {
                result.push(
                    <AiFillStar
                        key={i}
                        className={clsx(styles.ratingIcon, styles.check)}
                    />
                )
            } else {
                result.push(
                    <AiFillStar key={i} className={styles.ratingIcon} />
                )
            }
        }
        return result
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.bookItem}>
                <img src={imgSrc} alt={name} className={styles.bookImg} />
                {discountPercentage && (
                    <div className={styles.discount}>{discountPercentage}%</div>
                )}
                <div className={styles.name}>{name}</div>
                {(discountPrice || discountPercentage) && (
                    <div className={styles.discountPrice}>
                        {formatCurrency(discountPrice) ||
                            formatCurrency(
                                price - (price / 100) * discountPercentage
                            )}
                    </div>
                )}
                <div
                    className={clsx(styles.price, {
                        [styles.withDiscount]:
                            discountPrice || discountPercentage || false,
                    })}
                >
                    {formatCurrency(price)}
                </div>
                <div className={styles.rating}>
                    {renderRatingValue(rating)}
                    <span className={styles.ratingAmount}>
                        ({rating.length})
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Book
