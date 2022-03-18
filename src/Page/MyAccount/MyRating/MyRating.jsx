import axios from 'axios'
import { useEffect, useState } from 'react'
import RatingItem from './RatingItem/RatingItem'
import styles from './MyRating.module.css'
import { emitMessage } from '../../../Common/ToastMessage/ToastMessage'
import DynamicModal from '../../../Common/DynamicModal/DynamicModal'

function MyRating(props) {
    const [listRating, setListRating] = useState([])
    const [showModal, setShowModal] = useState(false)

    const gmail = JSON.parse(localStorage.getItem('user')).gmail

    useEffect(() => {
        const getRatingUser = async () => {
            try {
                setShowModal(true)
                const res = await axios.get(
                    `https://serverbookstore.herokuapp.com/api/users/review/${gmail}`
                )
                setListRating(res.data)
                setShowModal(false)
            } catch (error) {
                console.log(error)
                setShowModal(false)
                emitMessage('error', error)
            }
        }

        getRatingUser()
    }, [])

    return (
        <div>
            <DynamicModal showModal={showModal} loading />
            {listRating.map(({ bookName, img, review_detail }) => (
                <RatingItem
                    key={bookName}
                    bookName={bookName}
                    img={img}
                    reviewDetail={review_detail}
                />
            ))}
            {listRating.length === 0 ? <EmptyRating /> : ''}
        </div>
    )
}

const EmptyRating = () => {
    return <div className={styles.empty}>Bạn chưa có nhận xét nào</div>
}

export default MyRating
