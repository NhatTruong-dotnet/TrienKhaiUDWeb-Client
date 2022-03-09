import clsx from 'clsx'
import styles from './AccountInfo.module.css'
import Button from '../../../Common/Button/Button'
import { useEffect, useState } from 'react'
import axios from 'axios'

function AccountInfo(props) {
    const [profileUser, setProfileUser] = useState({
        name: '',
        numberPhone: '',
        img: null,
    })

    const gmail = JSON.parse(localStorage.getItem('user')).gmail

    useEffect(() => {
        const getProfileUser = async () => {
            if (gmail) {
                try {
                    const res = await axios.get(
                        `https://serverbookstore.herokuapp.com/api/users/profile/${gmail}`
                    )
                    const { username, phone } = res.data
                    setProfileUser({
                        ...profileUser,
                        name: username,
                        numberPhone: phone,
                    })
                } catch (error) {
                    console.log(error)
                }
            }
        }

        getProfileUser()
    }, [])

    const onProfileUserChange = e => {
        setProfileUser({
            ...profileUser,
            [e.target.name]:
                e.target.name === 'img' ? e.target.files[0] : e.target.value,
        })
    }

    const onSubmitForm = async () => {
        try {
            const res = await axios.post(
                `https://serverbookstore.herokuapp.com/api/users/updateProfile/${gmail}`
            )
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className={styles.form} onSubmit={onSubmitForm}>
            <div className={styles.formGroup}>
                <label className={styles.label}>Họ và tên</label>
                <input
                    type='text'
                    className={styles.input}
                    placeholder='Họ và tên'
                    value={profileUser.name}
                    name='name'
                    onChange={onProfileUserChange}
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>Số điện thoại</label>
                <input
                    type='text'
                    className={styles.input}
                    placeholder='Số điện thoại'
                    name='numberPhone'
                    value={profileUser.numberPhone}
                    onChange={onProfileUserChange}
                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.label}>Chọn hình</label>
                <input
                    type='file'
                    className={clsx(styles.input, styles.file)}
                    name='img'
                    onChange={onProfileUserChange}
                />
            </div>

            <div className={styles.btnWrap}>
                <Button solid>Lưu thay đổi</Button>
            </div>
        </form>
    )
}

export default AccountInfo
