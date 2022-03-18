import React, { useContext, useEffect, useState } from 'react'
import GlobalStyle from '../../GlobalStyle/GlobalStyle'
import ListBook from '../../Common/ListBook/ListBook'
import Sidebar from './Components/Sidebar/Sidebar'
import styles from './index.module.css'
import { Context } from './Context/Context'
import DynamicModal from '../../Common/DynamicModal/DynamicModal'

function Books(props) {
    const { listBook, fetchData, url } = useContext(Context)
    const [popupLoadingModal, setPopupLoadingModal] = useState(true)
    useEffect(() => {
        fetchData()
        setPopupLoadingModal(false)
    }, [url])

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
                                <div className={styles.line}></div>
                                <ListBook listBook={listBook} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DynamicModal showModal={popupLoadingModal} loading />
        </GlobalStyle>
    )
}

export default Books
