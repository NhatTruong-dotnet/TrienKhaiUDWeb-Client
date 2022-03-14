import styles from './BookItem.module.css'

function BookItem(props) {
    return (
        <div className={styles.bookItem}>
            <img
                src='https://www.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_242799.jpg'
                alt='img'
                className={styles.bookImage}
            />
            <div className={styles.bookInfo}>
                <div className={styles.name}>Tập Bài Hát 3 (2021)</div>
                <div className={styles.amount}>x2</div>
            </div>
            <div className={styles.price}>1123</div>
        </div>
    )
}

export default BookItem
