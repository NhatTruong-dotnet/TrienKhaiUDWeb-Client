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

function index(props) {
    return (
        <GlobalStyle>
            <div className='grid wide'>
                <div className={styles.wrap}>
                    <div className='row'>
                        <div className='col l-5'>
                            <ImageView />
                            <Button icon={<RiShoppingCart2Line />}>
                                Thêm vào giỏ hàng
                            </Button>
                            <Button solid>Mua hàng</Button>
                        </div>
                        <div className='col l-7'>
                            <MainInfo />
                            <Quantity />
                        </div>
                    </div>
                </div>

                {/* <div className={styles.wrap}>
                    <VoucherList />
                </div> */}
                <div className={styles.wrap}>
                    <div className={styles.header}>Thông tin sản phẩm</div>
                    <Detail />
                </div>
                <div className={styles.wrap}>
                    <div className={styles.header}>Đánh giá sản phẩm</div>
                    <Rating />
                    <CommentList />
                </div>
            </div>
        </GlobalStyle>
    )
}

export default index
