import Book from './Book/Book'
import Paging from './Paging/Paging'
import Sort from './Sort/Sort'

import styles from './listBook.module.css'

function ListBook(props) {
    return (
        <div className='shadow'>
            <div className={styles.booksContainer}>
                <Sort title='Sắp xếp theo' />
                <div className={styles.line}></div>
                <div className={styles.listBook}>
                    <Book />
                    <Book />
                    <Book />
                    <Book />
                </div>
            </div>
            <Paging totalPage={5} />
        </div>
    )
}

export default ListBook
