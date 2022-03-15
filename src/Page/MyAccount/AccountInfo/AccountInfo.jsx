import clsx from 'clsx'
import styles from './AccountInfo.module.css'
import Button from '../../../Common/Button/Button'
import { useEffect, useState } from 'react'
import axios from 'axios'
import DynamicModal from '../../../Common/DynamicModal/DynamicModal'
import { emitMessage } from '../../../Common/ToastMessage/ToastMessage'

function AccountInfo(props) {
    const [profileUser, setProfileUser] = useState({
        username: '',
        phone: '',
        image: undefined,
    })
    const [showModal, setShowModal] = useState(false)

    const gmail = JSON.parse(localStorage.getItem('user')).gmail

    useEffect(() => {
        const getProfileUser = async () => {
            if (gmail) {
                setShowModal(true)
                try {
                    const res = await axios.get(
                        `https://serverbookstore.herokuapp.com/api/users/profile/${gmail}`
                    )
                    const { username, phone, image } = res.data
                    console.log(res.data)
                    setProfileUser({
                        ...profileUser,
                        username,
                        phone,
                        image,
                    })
                    setShowModal(false)
                } catch (error) {
                    console.log(error)
                    setShowModal(false)
                    emitMessage('error', error.message)
                }
            }
        }

        getProfileUser()
    }, [])
    console.log(profileUser)

    const onProfileUserChange = e => {
        setProfileUser({
            ...profileUser,
            [e.target.name]:
                e.target.name === 'image' ? e.target.files[0] : e.target.value,
        })
    }

    const handleUpdateUserProfile = async e => {
        e.preventDefault()
        setShowModal(true)
        try {
            const formData = new FormData()
            formData.append('username', profileUser.username)
            formData.append('phone', profileUser.phone)
            formData.append('image', profileUser.image)
            const res = await axios.put(
                `https://serverbookstore.herokuapp.com/api/users/updateProfile/${gmail}`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            )
            const { message } = res.data
            setShowModal(false)
            emitMessage('success', message)
            console.log(res.data)
        } catch (error) {
            console.log(error)
            setShowModal(false)
            emitMessage('error', error.message)
        }
    }

    return (
        <>
            <DynamicModal showModal={showModal} loading />
            <form className={styles.form} onSubmit={handleUpdateUserProfile}>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Họ và tên</label>
                    <input
                        type='text'
                        className={styles.input}
                        placeholder='Họ và tên'
                        value={profileUser.username}
                        name='username'
                        onChange={onProfileUserChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Số điện thoại</label>
                    <input
                        type='text'
                        className={styles.input}
                        placeholder='Số điện thoại'
                        name='phone'
                        value={profileUser.phone}
                        onChange={onProfileUserChange}
                    />
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label}>Chọn hình</label>
                    <input
                        type='file'
                        className={clsx(styles.input, styles.file)}
                        name='image'
                        onChange={onProfileUserChange}
                    />
                </div>

                <div className={styles.btnWrap}>
                    <Button solid>Lưu thay đổi</Button>
                </div>
            </form>
        </>
    )
}

export default AccountInfo
