import styles from './Rating.module.css'

import { BiPencil } from 'react-icons/bi'
import Button from '../../../../Common/Button/Button'
import RatingStar from '../../../../Common/RatingStar/RatingStar'
import { useState } from 'react'
import Modal from '../../../../Common/Modal/Modal'
import ReviewForm from './components/ReviewForm/ReviewForm'

function Rating({ rating = [], bookId, getBookDetail }) {
    const [isOpenModal, setIsOpenModal] = useState(false)

    const totalRatingValue = rating.reduce(
        (prev, { ratingValue }) => prev + ratingValue,
        0
    )
    const averageRatingValue = totalRatingValue / rating.length

    return (
        <div className={styles.ratingContainer}>
            <div className={styles.averageRating}>
                <div className={styles.ratingNumber}>
                    {averageRatingValue}{' '}
                    <span className={styles.textSm}>/5</span>
                </div>
                <RatingStar value={averageRatingValue} />
                <div className={styles.ratingAmount}>
                    ({rating.length}) đánh giá
                </div>
            </div>
            <div className={styles.wrapBtn}>
                <Button
                    icon={<BiPencil />}
                    style={{ minWidth: 360 }}
                    eventClick={() => setIsOpenModal(!isOpenModal)}
                >
                    Viết đánh giá
                </Button>
            </div>
            {isOpenModal && (
                <Modal>
                    <ReviewForm
                        onCloseModal={() => setIsOpenModal(false)}
                        bookId={bookId}
                        getBookDetail={getBookDetail}
                    />
                </Modal>
            )}
        </div>
    )
}

export default Rating
