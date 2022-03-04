import React from 'react'
import styles from './ReviewForm.module.css'
import { IoCloseOutline } from 'react-icons/io5'
import RatingStar from '../../../../../../Common/RatingStar/RatingStar'
import Button from '../../../../../../Common/Button/Button'
import { useState } from 'react'

function ReviewForm({ onCloseModal }) {
    const [ratingValue, setRatingValue] = useState(5)
    return (
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
            <form>
                <div className='formGroup'>
                    <input
                        type='text'
                        placeholder='Nhập tên sẽ hiển thi khi đánh giá'
                        className={styles.nameInput}
                    />
                </div>
                <div className={styles.formGroup}>
                    <textarea
                        className={styles.reviewInput}
                        placeholder='Nhập nhận xét của bạn về sản phẩm'
                    ></textarea>
                </div>
                <div className={styles.controlBtn}>
                    <span className={styles.closeModal} onClick={onCloseModal}>
                        Hủy
                    </span>
                    <Button solid>Gửi nhận xét</Button>
                </div>
            </form>
        </div>
    )
}

export default ReviewForm
