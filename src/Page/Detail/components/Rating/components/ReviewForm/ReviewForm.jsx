import React from 'react'
import styles from './ReviewForm.module.css'
import { IoCloseOutline } from 'react-icons/io5'
import RatingStar from '../../../../../../Common/RatingStar/RatingStar'
import Button from '../../../../../../Common/Button/Button'
import { useState } from 'react'
import axios from 'axios'
import validator from 'validator'
import DynamicModal from '../../../../../../Common/DynamicModal/DynamicModal'
import { emitMessage } from '../../../../../../Common/ToastMessage/ToastMessage'

function ReviewForm({ onCloseModal, bookId, getAllRatingBook }) {
    const [ratingValue, setRatingValue] = useState(5)
    const [commentText, setCommentText] = useState('')
    const [validationMessage, setValidationMessage] = useState('')
    const [isFirstSubmit, setIsFirstSubmit] = useState(true)
    const [showModal, setShowModal] = useState(false)

    const validateFormData = () => {
        let validFormData = true
        if (validator.isEmpty(commentText)) {
            validFormData = false
            setValidationMessage('Trường này là bắt buộc')
        }
        return validFormData
    }

    const validateAfterFirstSubmit = () => {
        if (!isFirstSubmit) {
            validateFormData()
        }
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setIsFirstSubmit(false)
        const isValid = validateFormData()

        if (isValid) {
            try {
                setShowModal(true)
                const gmail = JSON.parse(localStorage.getItem('user')).gmail
                const formData = {
                    gmail,
                    ratingValue,
                    commentText,
                }
                await axios.post(
                    `https://serverbookstore.herokuapp.com/api/rating-comment/${bookId}`,
                    formData
                )
                await getAllRatingBook(bookId)
                setShowModal(false)
                emitMessage('success', 'Thêm thành công')
            } catch (error) {
                setShowModal(false)
                emitMessage('error', error)
                console.log(error)
            }
            onCloseModal()
        }
    }

    const handleCommentTextChange = e => {
        if (commentText) {
            setValidationMessage('')
        }
        setCommentText(e.target.value)
    }

    return (
        <>
            <DynamicModal showModal={showModal} loading />
            <div className={styles.reviewForm}>
                <div className={styles.header}>
                    VIẾT ĐÁNH GIÁ SẢN PHẨM
                    <IoCloseOutline
                        className={styles.icon}
                        onClick={onCloseModal}
                    />
                </div>
                <div className={styles.ratingChoice}>
                    <RatingStar
                        value={ratingValue}
                        onRating={setRatingValue}
                        large
                    />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <textarea
                            className={styles.reviewInput}
                            placeholder='Nhập nhận xét của bạn về sản phẩm'
                            onChange={handleCommentTextChange}
                            onBlur={validateAfterFirstSubmit}
                            value={commentText}
                        />
                        <div className={styles.message}>
                            {validationMessage}
                        </div>
                    </div>
                    <div className={styles.controlBtn}>
                        <span
                            className={styles.closeModal}
                            onClick={onCloseModal}
                        >
                            Hủy
                        </span>
                        <Button solid>Gửi nhận xét</Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ReviewForm
