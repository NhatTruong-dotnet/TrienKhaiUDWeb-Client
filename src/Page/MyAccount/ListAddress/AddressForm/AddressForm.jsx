import axios from 'axios'
import { useState } from 'react'
import Button from '../../../../Common/Button/Button'
import styles from './AddressForm.module.css'
import DynamicModal from '../../../../Common/DynamicModal/DynamicModal'
import { emitMessage } from '../../../../Common/ToastMessage/ToastMessage'
import validator from 'validator'
import clsx from 'clsx'

function AddressForm({ selectedAddress, setSelectedAddress, handleCloseForm }) {
    const [addressData, setAddressData] = useState(
        selectedAddress || {
            id: null,
            address: '',
            isDefault: false,
        }
    )

    const [validationMessage, setValidationMessage] = useState({
        address: '',
    })
    const [isFirstSubmit, setIsFirstSubmit] = useState(true)

    const [showModal, setShowModal] = useState(false)
    const gmail = JSON.parse(localStorage.getItem('user')).gmail

    const validateForm = () => {
        if (validator.isEmpty(addressData.address)) {
            setValidationMessage(prevState => ({
                ...prevState,
                address: 'Trường này là bắt buộc',
            }))
            return false
        }

        return true
    }
    const validateFormAfterFirstSubmit = () => {
        if (!isFirstSubmit) {
            validateForm()
        }
    }
    const onAddressDataChange = e => {
        if (e.target.name === 'address' && validationMessage['address']) {
            setValidationMessage({
                ...validationMessage,
                [e.target.name]: '',
            })
        }

        setAddressData({
            ...addressData,
            [e.target.name]:
                e.target.name === 'address' ? e.target.value : e.target.checked,
        })
    }

    const handleSubmitForm = async e => {
        e.preventDefault()
        setIsFirstSubmit(false)

        const validForm = validateForm()
        if (validForm) {
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
    }

    return (
        <>
            <DynamicModal showModal={showModal} loading />
            <form className={styles.form} onSubmit={handleSubmitForm}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Địa chỉ</label>
                    <input
                        type='text'
                        className={styles.input}
                        placeholder='Địa chỉ'
                        value={addressData.address}
                        onBlur={validateFormAfterFirstSubmit}
                        onChange={onAddressDataChange}
                        name='address'
                    />
                    <div className={styles.message}>
                        {validationMessage.address}
                    </div>
                </div>
                <div className={styles.checkboxContainer}>
                    <input
                        type='checkbox'
                        className={styles.checkbox}
                        onBlur={validateFormAfterFirstSubmit}
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
