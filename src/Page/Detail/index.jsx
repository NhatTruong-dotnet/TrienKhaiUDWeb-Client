import GlobalStyle from '../../GlobalStyle/GlobalStyle'
import styles from './index.module.css'
import { RiShoppingCart2Line } from 'react-icons/ri'
import ImageView from './components/ImageView/ImageView'
import Button from '../../Common/Button/Button'
import Quantity from './components/ImageView/components/Quantity/Quantity'
import MainInfo from './components/MainInfo/MainInfo'
// import VoucherList from './components/VoucherList/VoucherList'
import Detail from './components/Detail/Detail'
import Rating from './components/Rating/Rating'
import CommentList from './components/Rating/components/CommentList/CommentList'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { Context } from '../../Header/Context/Context'
import { SeenListContext } from '../../Header/Context/SeenListContext'
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import '../../../node_modules/react-toastify/dist/ReactToastify.css'
import DynamicModal from '../../Common/DynamicModal/DynamicModal'
import { emitMessage } from '../../Common/ToastMessage/ToastMessage'
function DetailContainer(props) {
    const { carts, fetchData } = useContext(Context)
    const { fetchData: renderSeenList } = useContext(SeenListContext)
    const [bookDetail, setBookDetail] = useState({})
    const [rating, setRating] = useState([])
    const navigate = useHistory()
    const [selectedAmount, setSelectedAmount] = useState(1)
    const { bookName } = useParams()
    const [popupLoadingSpinner, setPopupLoadingSpinner] = useState(false)
    const getBookDetail = async () => {
        const url = `https://serverbookstore.herokuapp.com/api/Books/${bookName}`
        try {
            setPopupLoadingSpinner(true)
            const res = await axios.get(url)
            setBookDetail(res.data[0])
            let cartItem = {
                bookId: res.data[0]._id,
                price: res.data[0].price,
                amount: selectedAmount,
                bookName: res.data[0].name,
                img: res.data[0].img[0],
            }
            console.log(cartItem)
            await axios
                .post(
                    'https://serverbookstore.herokuapp.com/api/seenList/' +
                        JSON.parse(localStorage.getItem('user')).gmail,
                    cartItem
                )
                .then(() => {
                    renderSeenList(
                        'https://serverbookstore.herokuapp.com/api/seenList/' +
                            JSON.parse(localStorage.getItem('user')).gmail
                    )
                })
            setPopupLoadingSpinner(false)
        } catch (error) {
            setPopupLoadingSpinner(false)
            console.log(error)
        }
    }
    useEffect(() => {
        getBookDetail()
    }, [bookName])

    const {
        _id: id,
        name,
        publisher,
        author,
        suppiler,
        bookLayout,
        price,
        numberInStock,
        img,
    } = bookDetail
    console.log(bookDetail)

    const getAllRatingBook = async id => {
        try {
            const res = await axios.get(
                `https://serverbookstore.herokuapp.com/api/rating-comment/commentSort/${id}`
            )
            setRating(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (id) {
            getAllRatingBook(id)
        }
    }, [id])

    async function addItemToCart() {
        setPopupLoadingSpinner(true)

        let cartItem = {
            bookId: id,
            price: price,
            amount: selectedAmount,
            bookName: name,
            img: img[0],
        }
        console.log(cartItem)
        try {
            await axios.post(
                'https://serverbookstore.herokuapp.com/api/carts/' +
                    JSON.parse(localStorage.getItem('user')).gmail,
                cartItem
            )
            setPopupLoadingSpinner(false)
        } catch (error) {
            setPopupLoadingSpinner(false)
            console.log(error)
        }
    }

    return (
        <GlobalStyle>
            <div className='grid wide'>
                <div className={styles.wrap}>
                    <div className='row'>
                        <div className='col l-5'>
                            <ImageView listImage={img} />

                            {/* handle cart here */}
                            <Button
                                icon={<RiShoppingCart2Line />}
                                eventClick={async () => {
                                    await addItemToCart()
                                    fetchData(
                                        'https://serverbookstore.herokuapp.com/api/carts/' +
                                            JSON.parse(
                                                localStorage.getItem('user')
                                            ).gmail
                                    )
                                    emitMessage(
                                        'success',
                                        'Th??m v??o gi??? h??ng th??nh c??ng'
                                    )
                                }}
                            >
                                Th??m v??o gi??? h??ng
                            </Button>
                            <Button
                                eventClick={async () => {
                                    await addItemToCart()
                                    fetchData(
                                        'https://serverbookstore.herokuapp.com/api/carts/' +
                                            JSON.parse(
                                                localStorage.getItem('user')
                                            ).gmail
                                    )
                                    navigate.push('/checkout/payment')
                                }}
                                solid
                            >
                                Mua h??ng
                            </Button>
                            {/* handle cart here */}
                        </div>
                        <div className='col l-7'>
                            <MainInfo
                                bookDetail={bookDetail}
                                name={name}
                                publisher={publisher}
                                author={author}
                                suppiler={suppiler}
                                bookLayout={bookLayout}
                                rating={rating}
                                price={price}
                            />
                            <Quantity
                                max={numberInStock}
                                value={selectedAmount}
                                onChangeValue={setSelectedAmount}
                            />
                        </div>
                    </div>
                </div>

                {/* <div className={styles.wrap}>
                    <VoucherList />
                </div> */}
                <div className={styles.wrap}>
                    <div className={styles.header}>Th??ng tin s???n ph???m</div>
                    <Detail bookDetail={bookDetail} />
                </div>
                <div className={styles.wrap}>
                    <div className={styles.header}>????nh gi?? s???n ph???m</div>
                    <Rating
                        rating={rating}
                        bookId={id}
                        getAllRatingBook={getAllRatingBook}
                    />
                    <CommentList rating={rating} />
                </div>
            </div>

            <DynamicModal showModal={popupLoadingSpinner} loading />
        </GlobalStyle>
    )
}

export default DetailContainer
