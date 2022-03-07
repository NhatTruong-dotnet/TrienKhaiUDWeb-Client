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
import { useEffect, useState,useContext } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { Context } from "../../Header/Context/Context";

function DetailContainer(props) {
    const { carts, fetchData } = useContext(Context);
    const [bookDetail, setBookDetail] = useState({})

    const [selectedAmount, setSelectedAmount] = useState(1)

    const { bookName } = useParams()

    const getBookDetail = async () => {
        const url = `https://serverbookstore.herokuapp.com/api/Books/${bookName}`
        try {
            const res = await axios.get(url)
            setBookDetail(res.data[0])
        } catch (error) {
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
        rating,
        price,
        numberInStock,
    } = bookDetail
    
    async function  addItemToCart(){
        let cartItem ={
            bookId: id,
            price: price,
            amount : selectedAmount,
            bookName:name
        }
        try {
            await axios.post("https://serverbookstore.herokuapp.com/api/carts/"+ JSON.parse(localStorage.getItem("user")).gmail,cartItem)
        } catch (error) {
            console.log(error);
        }
        
    }

    return (
        <GlobalStyle>
            <div className='grid wide'>
                <div className={styles.wrap}>
                    <div className='row'>
                        <div className='col l-5'>
                            <ImageView />

                            {/* handle cart here */}
                            <Button
                                icon={<RiShoppingCart2Line />}
                                eventClick={async () => {
                                    await addItemToCart();
                                    fetchData("https://serverbookstore.herokuapp.com/api/carts/" +
                                    JSON.parse(localStorage.getItem("user")).gmail)
                                }}
                            >
                                Thêm vào giỏ hàng
                            </Button>
                            <Button solid>Mua hàng</Button>
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
                    <div className={styles.header}>Thông tin sản phẩm</div>
                    <Detail bookDetail={bookDetail} />
                </div>
                <div className={styles.wrap}>
                    <div className={styles.header}>Đánh giá sản phẩm</div>
                    <Rating
                        rating={rating}
                        bookId={id}
                        getBookDetail={getBookDetail}
                    />
                    <CommentList rating={rating} />
                </div>
            </div>
        </GlobalStyle>
    )
}

export default DetailContainer
