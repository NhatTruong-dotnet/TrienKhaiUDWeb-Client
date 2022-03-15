import axios from 'axios'
import { useState } from 'react'
import Button from '../../../../Common/Button/Button'
import styles from './AddressForm.module.css'
import DynamicModal from '../../../../Common/DynamicModal/DynamicModal'
import { emitMessage } from '../../../../Common/ToastMessage/ToastMessage'

function AddressForm({ selectedAddress, setSelectedAddress, handleCloseForm }) {
    const [addressData, setAddressData] = useState(
        selectedAddress || {
            id: null,
            address: '',
            isDefault: false,
        }
    )
    const [showModal, setShowModal] = useState(false)
    const gmail = JSON.parse(localStorage.getItem('user')).gmail

    const onAddressDataChange = e => {
        setAddressData({
            ...addressData,
            [e.target.name]:
                e.target.name === 'address' ? e.target.value : e.target.checked,
        })
    }

    const handleSubmitForm = async e => {
        e.preventDefault()
        const method = addressData.id ? 'put' : 'post'
        const urlParam = addressData.id ? 'updateAddress' : 'addAddress'
        const url = `https://serverbookstore.herokuapp.com/api/users/${urlParam}/${gmail}`
        try {
            setShowModal(true)
            const res = await axios({ method, url, data: addressData })
            const { message } = res.data
            setShowModal(false)
            emitMessage('success', message)
        } catch (error) {
            setShowModal(false)
            console.log(error)
        }
    }

    return (
        <>
            <DynamicModal showModal={showModal} loading />
            <form className={styles.form} onSubmit={handleSubmitForm}>
                {/* <div className={styles.formGroup}>
                <label className={styles.label}>Họ và tên</label>
                <input
                    type='text'
                    className={styles.input}
                    placeholder='Họ và tên'
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>Số điện thoại</label>
                <input
                    type='text'
                    className={styles.input}
                    placeholder='Số điện thoại'
                />
            </div> */}

                <div className={styles.formGroup}>
                    <label className={styles.label}>Địa chỉ</label>
                    <input
                        type='text'
                        className={styles.input}
                        placeholder='Địa chỉ'
                        value={addressData.address}
                        onChange={onAddressDataChange}
                        name='address'
                    />
                </div>
                <div className={styles.checkboxContainer}>
                    <input
                        type='checkbox'
                        className={styles.checkbox}
                        onChange={onAddressDataChange}
                        name='isDefault'
                        checked={addressData.isDefault}
                    />
                    <label>Đặt làm địa chỉ mặc định</label>
                </div>
                <div className={styles.btnWrap}>
                    <div className={styles.link} onClick={handleCloseForm}>
                        Quay lại
                    </div>
                    <Button solid>Lưu thay đổi</Button>
                </div>
            </form>
        </>
    )
}

export default AddressForm
