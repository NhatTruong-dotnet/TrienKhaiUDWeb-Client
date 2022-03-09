import "./cart.css"
import RightCart from "./RightCart/RightCart"
import Conversation from './../Chat/Conversation'
import LeftCart from "./LeftCart/LeftCart"
function Cart(){
    return(
        <div className="body-cart">
            <div className="cart">
                <div className="page-title">
                    <h1 >Giỏ hàng</h1>
                    <span>(2 sản phẩm)</span>
                </div>
                <div className="row">
                    <LeftCart/>
                    <RightCart/>
                </div>
            </div>
            <Conversation />
        </div>
            
    )
}
export default Cart