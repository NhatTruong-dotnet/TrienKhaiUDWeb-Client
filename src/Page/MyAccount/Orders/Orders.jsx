import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import styles from './Orders.module.css'
import axios from 'axios'
import OrderItem from './OrderItem/OrderItem'
import DynamicModal from '../../../Common/DynamicModal/DynamicModal'
import { emitMessage } from '../../../Common/ToastMessage/ToastMessage'

function Orders(props) {
    const [listOrder, setListOrder] = useState([])
    const [showModal, setShowModal] = useState(false)

    const gmail = JSON.parse(localStorage.getItem('user')).gmail

    useEffect(() => {
        const getRatingUser = async () => {
            try {
                setShowModal(true)
                const res = await axios.get(
                    `https://serverbookstore.herokuapp.com/api/bills/${gmail}`
                )
                setListOrder(res.data)
                setShowModal(false)
            } catch (error) {
                console.log(error)
                setShowModal(false)
                emitMessage('error', error)
            }
        }

        getRatingUser()
    }, [])

    return (
        <>
            <DynamicModal showModal={showModal} loading />
            {listOrder.map(
                ({
                    billId,
                    createdDate,
                    status,
                    paymentMethod,
                    orders_detail,
                    total,
                }) => (
                    <div key={billId} className={clsx(styles.container)}>
                        <OrderItem
                            createdDate={createdDate}
                            status={status}
                            paymentMethod={paymentMethod}
                            total={total}
                            ordersDetail={orders_detail}
                        />
                    </div>
                )
            )}
            {listOrder.length === 0 ? (
                <div className={clsx(styles.container)}>
                    <EmptyOrder />
                </div>
            ) : (
                ''
            )}
        </>
    )
}

const EmptyOrder = () => {
    return <div className={styles.empty}>Bạn chưa có đơn hàng nào</div>
}

export default Orders
