import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import styles from './Orders.module.css'
import axios from 'axios'
import OrderItem from './OrderItem/OrderItem'

function Orders(props) {
    const [listOrder, setListOrder] = useState([])

    const gmail = JSON.parse(localStorage.getItem('user')).gmail

    useEffect(() => {
        const getRatingUser = async () => {
            try {
                const res = await axios.get(
                    `https://serverbookstore.herokuapp.com/api/bills/${gmail}`
                )
                setListOrder(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        getRatingUser()
    }, [])

    return (
        <div className={clsx(styles.container)}>
            {listOrder.map(
                (createdDate, status, paymentMethod, orders_detail, total) => (
                    <OrderItem
                        key={createdDate}
                        createdDate={createdDate}
                        status={status}
                        paymentMethod={paymentMethod}
                        total={total}
                        ordersDetail={orders_detail}
                    />
                )
            )}
            {listOrder.length === 0 ? <EmptyOrder /> : ''}
        </div>
    )
}

const EmptyOrder = () => {
    return <div className={styles.empty}>Bạn chưa có đơn hàng nào</div>
}

export default Orders
