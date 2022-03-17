import React from 'react'
import styles from './AddressItem.module.css'
import { AiFillDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'

function AddressItem({
    id,
    isDefault,
    address,
    onEditAddress,
    onDeleteAddress,
}) {
    return (
        <div className={styles.address}>
            {isDefault && (
                <div className={styles.title}>Địa chỉ giao hàng mặc định</div>
            )}
            <div className={styles.text}>
                <span className={styles.label}>Địa chỉ:</span>
                {address}
            </div>
            <div className={styles.link}>
                <BiEdit onClick={onEditAddress} />
                <AiFillDelete
                    className={styles.delete}
                    onClick={() => {
                        onDeleteAddress(id)
                    }}
                />
            </div>
        </div>
    )
}

export default AddressItem
