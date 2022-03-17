import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from '../../../Common/Button/Button'
import DynamicModal from '../../../Common/DynamicModal/DynamicModal'
import { emitMessage } from '../../../Common/ToastMessage/ToastMessage'
import AddressForm from './AddressForm/AddressForm'
import AddressItem from './AddressItem/AddressItem'
import styles from './ListAddress.module.css'

function ListAddress(props) {
    const [isOpenForm, setIsOpenForm] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [ListAddressData, setListAddressData] = useState([])
    const [selectedAddress, setSelectedAddress] = useState()
    const gmail = JSON.parse(localStorage.getItem('user')).gmail

    useEffect(() => {
        if (!isOpenForm) {
            setShowModal(true)
            const getListAddress = async () => {
                try {
                    const res = await axios.get(
                        `https://serverbookstore.herokuapp.com/api/users/address/${gmail}`
                    )
                    setListAddressData(moveAddressDefaultToTop(res.data))
                    setShowModal(false)
                } catch (error) {
                    console.log(error)
                    setShowModal(false)
                    emitMessage('error', error.message)
                }
            }
            getListAddress()
        }
    }, [gmail, isOpenForm])

    const handleEditAddress = selected => {
        setSelectedAddress(selected)
        setIsOpenForm(true)
    }

    const handleDeleteAddress = async id => {
        const gmail = JSON.parse(localStorage.getItem('user')).gmail

        try {
            console.log(gmail)
            const res = axios.delete(
                `https://serverbookstore.herokuapp.com/api/users/deleteAddress/${id}`,
                { gmail }
            )
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.listAddress}>
            <DynamicModal showModal={showModal} loading />
            {isOpenForm || (
                <>
                    {ListAddressData.map(({ _id: id, address, isDefault }) => (
                        <AddressItem
                            key={id}
                            id={id}
                            address={address}
                            isDefault={isDefault}
                            onEditAddress={() => {
                                handleEditAddress({ id, address, isDefault })
                            }}
                            onDeleteAddress={handleDeleteAddress}
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
                <AddressForm
                    selectedAddress={selectedAddress}
                    setSelectedAddress={setSelectedAddress}
                    handleCloseForm={() => setIsOpenForm(false)}
                />
            )}
        </div>
    )
}

const moveAddressDefaultToTop = (listAddress = []) => {
    if (!Array.isArray(listAddress)) return []
    if (listAddress.length === 0) return []

    const defaultAddressIndex = listAddress.findIndex(
        ({ isDefault }) => isDefault
    )
    const [defaultAddress] = listAddress.splice(defaultAddressIndex)
    listAddress.unshift(defaultAddress)
    return listAddress
}

export default ListAddress
