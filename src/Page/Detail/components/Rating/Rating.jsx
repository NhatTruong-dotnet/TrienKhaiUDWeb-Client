import styles from './Rating.module.css'

import { BiPencil } from 'react-icons/bi'
import Button from '../../../../Common/Button/Button'
import RatingStar from '../../../../Common/RatingStar/RatingStar'
import { useState } from 'react'
import Modal from '../../../../Common/Modal/Modal'
import ReviewForm from './components/ReviewForm/ReviewForm'

function Rating(props) {
    const [isOpenModal, setIsOpenModal] = useState(false)
    return (
        <div className={styles.ratingContainer}>
            <div className={styles.averageRating}>
                <div className={styles.ratingNumber}>
                    0 <span className={styles.textSm}>/5</span>
                </div>
                <RatingStar />
                <div className={styles.ratingAmount}>(0) đánh giá</div>
            </div>
            <div className={styles.wrapBtn}>
                <Button
                    icon={<BiPencil />}
                    style={{ minWidth: 360 }}
                    onOpenModal={() => setIsOpenModal(!isOpenModal)}
                >
                    Viết đánh giá
                </Button>
            </div>
            {isOpenModal && (
                <Modal>
                    <ReviewForm onCloseModal={() => setIsOpenModal(false)} />
                </Modal>
            )}
        </div>
    )
}

export default Rating
