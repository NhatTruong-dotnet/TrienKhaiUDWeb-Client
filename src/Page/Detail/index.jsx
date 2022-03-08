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
import { Context } from "../../Header/Context/Context";
import { SeenListContext } from "../../Header/Context/SeenListContext";
import { useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';
function DetailContainer(props) {
    const { carts, fetchData } = useContext(Context);
    const { seenList, fetchData:renderSeenList } = useContext(SeenListContext);
    const [bookDetail, setBookDetail] = useState({})
    const navigate = useHistory();
    const [selectedAmount, setSelectedAmount] = useState(1)
    const [cartItem, setCartItem] = useState({})
    const { bookName } = useParams()

    const getBookDetail = async () => {
        const url = `https://serverbookstore.herokuapp.com/api/Books/${bookName}`
        try {
            const res = await axios.get(url)
            setBookDetail(res.data[0])

            let cartItem = {
                bookId: res.data[0]._id,
                price: res.data[0].price,
                amount: selectedAmount,
                bookName: res.data[0].name
            }
            await axios.post("https://serverbookstore.herokuapp.com/api/seenList/" + JSON.parse(localStorage.getItem("user")).gmail, cartItem).then(() =>{
                renderSeenList("https://serverbookstore.herokuapp.com/api/seenList/" + JSON.parse(localStorage.getItem("user")).gmail)
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
         getBookDetail()  
        }
    , [bookName])
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
        img,
    } = bookDetail


    async function addItemToCart() {
        let cartItem = {
            bookId: id,
            price: price,
            amount: selectedAmount,
            bookName: name
        }
        try {
            await axios.post("https://serverbookstore.herokuapp.com/api/carts/" + JSON.parse(localStorage.getItem("user")).gmail, cartItem)
        } catch (error) {
            console.log(error);
        }

    }
    const notify = () => toast.success('Thêm vào giỏ hàng thành công', {
        position: "bottom-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
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
                                    await addItemToCart();
                                    fetchData("https://serverbookstore.herokuapp.com/api/carts/" +
                                        JSON.parse(localStorage.getItem("user")).gmail)
                                    
                                    notify()
                                }}
                            >
                                Thêm vào giỏ hàng
                            </Button>
                            <Button eventClick={async () => {
                                await addItemToCart();
                                fetchData("https://serverbookstore.herokuapp.com/api/carts/" +
                                    JSON.parse(localStorage.getItem("user")).gmail)
                                navigate.push('/checkout/payment')
                            }} solid>Mua hàng</Button>
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
            <ToastContainer
                position="bottom-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </GlobalStyle>
    )
}

export default DetailContainer
