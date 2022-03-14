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
        picture: 'tri.png',
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
                    const { username, phone } = res.data
                    console.log(res.data)
                    setProfileUser({
                        ...profileUser,
                        username,
                        phone,
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

    const onProfileUserChange = e => {
        console.log(e.target.files)
        setProfileUser({
            ...profileUser,
            [e.target.name]:
                e.target.name === 'img' ? e.target.files[0] : e.target.value,
        })
    }

    const handleUpdateUserProfile = async e => {
        e.preventDefault()
        setShowModal(true)
        try {
            const res = await axios.put(
                `https://serverbookstore.herokuapp.com/api/users/updateProfile/${gmail}`,
                profileUser,
                {
                    headers: {
                        'content-type': 'multipart/form-data', // do not forget this
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
                        name='picture'
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
