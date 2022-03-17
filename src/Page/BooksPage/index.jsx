import React, { useContext, useEffect, useState } from 'react'
import GlobalStyle from '../../GlobalStyle/GlobalStyle'
import ListBook from '../../Common/ListBook/ListBook'
import Sidebar from './Components/Sidebar/Sidebar'
import styles from './index.module.css'
// import Sort from './Components/Sort/Sort'
// import Paging from '../../Common/Paging/Paging'
import { Context } from './Context/Context'
import Conversation from './../../Chat/Conversation'
import DynamicModal from '../../Common/DynamicModal/DynamicModal'
// import ContextProvider from './Context/Context'

function Books(props) {
    const { listBook, fetchData } = useContext(Context)
    const [popupLoadingModal, setPopupLoadingModal] = useState(true)
    const url = JSON.parse(localStorage.getItem('url'))
    console.log(url)
    useEffect(() => {
        fetchData(url)
        setPopupLoadingModal(false)
    }, [url])
    console.log(listBook)

    return (
        <GlobalStyle>
            {/* <ContextProvider> */}
            <div className='grid wide'>
                <div className='row'>
                    <div className='col l-3'>
                        <Sidebar />
                    </div>
                    <div className='col l-9'>
                        <div className='shadow'>
                            <div className={styles.booksContainer}>
                                {/* <Sort title='Sắp xếp theo' /> */}
                                <div className={styles.line}></div>
                                <ListBook listBook={listBook} />
                                {/* <Paging totalPage={5} /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </ContextProvider> */}
            <Conversation />
            <DynamicModal showModal={popupLoadingModal} loading />
        </GlobalStyle>
    )
}

export default Books
