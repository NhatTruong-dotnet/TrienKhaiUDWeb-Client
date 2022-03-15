import axios from 'axios'
import { useEffect, useState } from 'react'
import RatingItem from './RatingItem/RatingItem'
import styles from './MyRating.module.css'

function MyRating(props) {
    const [listRating, setListRating] = useState([])

    const gmail = JSON.parse(localStorage.getItem('user')).gmail

    useEffect(() => {
        const getRatingUser = async () => {
            try {
                const res = await axios.get(
                    `https://serverbookstore.herokuapp.com/api/users/review/${gmail}`
                )
                setListRating(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        getRatingUser()
    }, [])

    return (
        <div>
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
