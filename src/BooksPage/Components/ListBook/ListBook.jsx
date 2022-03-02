import Book from './Book/Book'

import styles from './listBook.module.css'

function ListBook(props) {
    return (
        <div className={styles.listBook}>
            <Book />
            <Book />
            <Book />
            <Book />
        </div>
    )
}

export default ListBook
