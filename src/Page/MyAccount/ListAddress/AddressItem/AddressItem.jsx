import React from 'react'
import styles from './AddressItem.module.css'
import { Link } from 'react-router-dom'

function AddressItem({ isDefault, address, onEditAddress }) {
    return (
        <div className={styles.address}>
            {isDefault && (
                <div className={styles.title}>Địa chỉ giao hàng mặc định</div>
            )}
            {/* <div className={styles.text}>
                <span className={styles.label}>Họ tên:</span> Nguyễn Trọng Trí
            </div>
            <div className={styles.text}>
                <span className={styles.label}>SĐT:</span>0833017943
            </div> */}
            <div className={styles.text}>
                <span className={styles.label}>Địa chỉ:</span>
                {address}
            </div>
            <div className={styles.link} onClick={onEditAddress}>
                Thay đổi địa chỉ
            </div>
        </div>
    )
}

export default AddressItem
