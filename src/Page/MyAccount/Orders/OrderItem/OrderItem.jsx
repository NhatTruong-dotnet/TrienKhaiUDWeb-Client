import React from 'react'
import styles from './OrderItem.module.css'
import { formatDate } from '../../../../Tools/formatDate'
import { formatCurrency } from '../../../../Tools/formatCurrency'
import BookItem from '../BookItem/BookItem'

function OrderItem({
    createdDate,
    status,
    paymentMethod,
    total,
    ordersDetail = [],
}) {
    return (
        <div className={styles.orders}>
            {ordersDetail.map(({ amount, price, name, img }) => (
                <BookItem
                    key={name}
                    name={name}
                    amount={amount}
                    price={price}
                    img={img}
                />
            ))}
            <div className={styles.orderInfo}>
                <div className={styles.wrap}>
                    <div className={styles.text}>
                        <span className={styles.label}>Ngày mua hàng:</span>
                        {formatDate(createdDate)}
                    </div>
                    <div className={styles.text}>
                        <span className={styles.label}>Trạng thái:</span>{' '}
                        {status}
                    </div>
                    <div className={styles.text}>
                        <span className={styles.label}>
                            Phương thức thanh toán:
                        </span>
                        {paymentMethod}
                    </div>
                </div>
                <div className={styles.totalPayment}>
                    <span className={styles.label}>Tổng số tiền:</span>{' '}
                    {formatCurrency(total)}
                </div>
            </div>
        </div>
    )
}

export default OrderItem
