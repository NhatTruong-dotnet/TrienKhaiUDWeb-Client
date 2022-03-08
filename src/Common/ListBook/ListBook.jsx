import Book from './Book/Book'

import styles from './listBook.module.css'

function ListBook({ listBook = [] }) {
    return (
        <div className={styles.listBook}>
            {listBook.map(({ _id, name, price, rating, img }) => (
                <Book
                    key={_id}
                    id={_id}
                    name={name}
                    price={price}
                    rating={rating}
                    imgSrc={img[0]}
                />
            ))}
        </div>
    )
}

export default ListBook
