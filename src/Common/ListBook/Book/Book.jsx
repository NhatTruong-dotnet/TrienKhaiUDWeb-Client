import clsx from 'clsx'
import { AiFillStar } from 'react-icons/ai'
import styles from './book.module.css'
import { formatCurrency } from '../../../Tools/formatCurrency'
import { useHistory } from 'react-router-dom'

function Book({
    id,
    imgSrc,
    name,
    discountPrice,
    discountPercentage,
    price,
    rating,
}) {
    const history = useHistory()
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

    const handleSelectBook = () => {
        localStorage.setItem(
            'selectedBook',
            JSON.stringify({ id, bookName: name })
        )
        history.push(`/detail/${name}`)
    }

    return (
        <div className={styles.wrap} onClick={handleSelectBook}>
            <div className={styles.bookItem}>
                <img src={imgSrc} alt={name} className={styles.bookImg} />

                {discountPercentage && (
                    <div className={styles.discount}>{discountPercentage}%</div>
                )}

                <div className={styles.name}>{name}</div>

                <div className={styles.discountPrice}>
                    {formatCurrency(
                        discountPrice ||
                            price - (price / 100) * discountPercentage ||
                            price
                    )}
                </div>

                {/* {(discountPrice || discountPercentage) && (
                    
                )} */}
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
