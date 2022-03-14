import { formatCurrency } from '../../../../Tools/formatCurrency'
import styles from './BookItem.module.css'

function BookItem({ amount, name, price, img }) {
    return (
        <div className={styles.bookItem}>
            <img src={img} alt={name} className={styles.bookImage} />
            <div className={styles.bookInfo}>
                <div className={styles.name}>{name}</div>
                <div className={styles.amount}>x{amount}</div>
            </div>
            <div className={styles.price}>{formatCurrency(price)}</div>
        </div>
    )
}

export default BookItem
