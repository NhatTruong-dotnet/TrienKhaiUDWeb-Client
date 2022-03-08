import React from 'react'
import styles from './AddressItem.module.css'
import { Link } from 'react-router-dom'

function AddressItem({ isDefault }) {
    return (
        <div className={styles.address}>
            <div className={styles.title}>
                {isDefault && 'Địa chỉ giao hàng mặc định'}
            </div>
            <div className={styles.text}>
                <span className={styles.label}>Họ tên:</span> Nguyễn Trọng Trí
            </div>
            <div className={styles.text}>
                <span className={styles.label}>SĐT:</span>0833017943
            </div>
            <div className={styles.text}>
                <span className={styles.label}>Địa chỉ:</span>108 Võ Liêm Sơn,
                phường 4, quận 8
            </div>
            <div className={styles.link}>Thay đổi địa chỉ</div>
        </div>
    )
}

export default AddressItem
