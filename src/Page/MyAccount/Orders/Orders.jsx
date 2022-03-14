import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import BookItem from './BookItem/BookItem'
import styles from './Orders.module.css'
import axios from 'axios'

function Orders(props) {
    const [listOrder, setListOrder] = useState([])

    const gmail = JSON.parse(localStorage.getItem('user')).gmail

    useEffect(() => {
        const getRatingUser = async () => {
            try {
                const res = await axios.get(
                    `https://serverbookstore.herokuapp.com/api/bills/${gmail}`
                )
                console.log(res.data)
                // setListOrder(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        getRatingUser()
    }, [])

    return (
        <div className={clsx(styles.container)}>
            <div className={styles.orders}>
                <BookItem imgSrc name amount price />
                <BookItem imgSrc name amount price />
                <div className={styles.orderInfo}>
                    <div className={styles.wrap}>
                        <div className={styles.text}>
                            <span className={styles.label}>Ngày mua hàng:</span>
                            13/3/2022
                        </div>
                        <div className={styles.text}>
                            <span className={styles.label}>Trạng thái:</span> đã
                            giao hàng
                        </div>
                        <div className={styles.text}>
                            <span className={styles.label}>
                                Phương thức thanh toán:
                            </span>
                            COD
                        </div>
                    </div>
                    <div className={styles.totalPayment}>
                        <span className={styles.label}>Tổng số tiền:</span> 1000
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders
