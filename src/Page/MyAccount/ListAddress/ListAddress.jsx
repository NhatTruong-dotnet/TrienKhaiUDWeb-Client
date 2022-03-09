import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from '../../../Common/Button/Button'
import AddressForm from './AddressForm/AddressForm'
import AddressItem from './AddressItem/AddressItem'
import styles from './ListAddress.module.css'

function ListAddress(props) {
    const [isOpenForm, setIsOpenForm] = useState(false)
    const [ListAddressData, setListAddressData] = useState([])
    const gmail = JSON.parse(localStorage.getItem('user')).gmail

    useEffect(() => {
        const getListAddress = async () => {
            try {
                const res = await axios.get(
                    `https://serverbookstore.herokuapp.com/api/users/address/${gmail}`
                )
                console.log(moveAddressDefaultToTop(res.data))
                setListAddressData(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getListAddress()
    }, [gmail])

    return (
        <div className={styles.listAddress}>
            {isOpenForm || (
                <>
                    {ListAddressData.map(({ _id: id, address }, index) => (
                        <AddressItem
                            key={id}
                            id={id}
                            address={address}
                            isDefault={index === 0}
                        />
                    ))}

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

const moveAddressDefaultToTop = (listAddress = []) => {
    if (!Array.isArray(listAddress)) return []

    const defaultAddressIndex = listAddress.findIndex(
        ({ isDefault }) => isDefault
    )
    const [defaultAddress] = listAddress.splice(defaultAddressIndex)
    listAddress.unshift(defaultAddress)
    return listAddress
}

export default ListAddress
