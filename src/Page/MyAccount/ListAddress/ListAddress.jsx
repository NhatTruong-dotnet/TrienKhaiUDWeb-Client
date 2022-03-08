import React, { useState } from 'react'
import Button from '../../../Common/Button/Button'
import AddressForm from './AddressForm/AddressForm'
import AddressItem from './AddressItem/AddressItem'
import styles from './ListAddress.module.css'

function ListAddress(props) {
    const [isOpenForm, setIsOpenForm] = useState(false)
    return (
        <div className={styles.listAddress}>
            {isOpenForm || (
                <>
                    <AddressItem isDefault />
                    <AddressItem />
                    <AddressItem />
                    <div className={styles.wrap}>
                        <Button solid eventClick={() => setIsOpenForm(true)}>
                            THÊM ĐỊA CHỈ MỚI
                        </Button>
                    </div>
                </>
            )}
            {isOpenForm && (
                <AddressForm handleCloseForm={() => setIsOpenForm(false)} />
            )}
        </div>
    )
}

export default ListAddress
