import React from 'react'
import GlobalStyle from '../GlobalStyle/GlobalStyle'
import ListBook from './Components/ListBook/ListBook'
import Sidebar from './Components/Sidebar/Sidebar'
import styles from './index.module.css'
import Sort from './Components/Sort/Sort'
import Paging from './Components/Paging/Paging'

function Books(props) {
    return (
        <GlobalStyle>
            <div className='grid wide'>
                <div className='row'>
                    <div className='col l-3'>
                        <Sidebar />
                    </div>
                    <div className='col l-9'>
                        <div className='shadow'>
                            <div className={styles.booksContainer}>
                                <Sort title='Sắp xếp theo' />
                                <div className={styles.line}></div>
                                <ListBook />
                            </div>
                            <Paging totalPage={5} />
                        </div>
                    </div>
                </div>
            </div>
        </GlobalStyle>
    )
}

export default Books
