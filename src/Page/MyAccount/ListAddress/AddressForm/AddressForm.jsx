import axios from 'axios'
import { useState } from 'react'
import Button from '../../../../Common/Button/Button'
import styles from './AddressForm.module.css'

function AddressForm({ handleCloseForm }) {
    const [addressData, setAddressData] = useState({
        address: '',
        isDefault: false,
    })

    const gmail = JSON.parse(localStorage.getItem('user')).gmail

    const onAddressDataChange = e => {
        setAddressData({
            ...addressData,
            [e.target.name]:
                e.target.name === 'address' ? e.target.value : e.target.checked,
        })
    }

    // const handleSubmitForm = async() => {
    //     try {
    //         const res = await axios.post(`https://serverbookstore.herokuapp.com/api/users/addAddress/${gmail}`, )
    //     } catch (error) {

    //     }
    // }

    return (
        <form className={styles.form}>
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
    )
}

export default AddressForm
