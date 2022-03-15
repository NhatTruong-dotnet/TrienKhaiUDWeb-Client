import React from 'react'
import styles from './RatingItem.module.css'
import RatingStar from '../../../../Common/RatingStar/RatingStar'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { formatDate } from '../../../../Tools/formatDate'

function RatingItem({ bookName, img, reviewDetail = [] }) {
    const navigate = useHistory()
    return (
        <div
            className={styles.ratingItem}
            onClick={() => navigate.push(`/detail/${bookName}`)}
        >
            <img src={img} alt={bookName} className={styles.img} />
            <div>
                {reviewDetail.map(
                    ({ _id, ratingValue, commentText, ratingDate }) => (
                        <div key={_id} className={styles.info}>
                            <div className={styles.content}>{commentText}</div>
                            <RatingStar value={ratingValue} />
                            <div className={styles.createdDate}>
                                {formatDate(ratingDate)}
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default RatingItem
