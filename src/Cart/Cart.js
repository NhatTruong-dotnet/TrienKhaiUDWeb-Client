import "./cart.css"
import RightCart from "./RightCart/RightCart"
import Conversation from './../Chat/Conversation'
import LeftCart from "./LeftCart/LeftCart"
import { useContext, useEffect } from "react";
import { Context } from "../Header/Context/Context";
function Cart(){
    const { carts, fetchData } = useContext(Context);
    var quantity =0;
  useEffect(() => {
    fetchData(
      "https://serverbookstore.herokuapp.com/api/carts/" +
        JSON.parse(localStorage.getItem("user")).gmail
    );
  }, []);
  carts.map((e)=>{
    return quantity++;
  })
    return(
        <div className="body-cart">
            <div className="cart">
                <div className="page-title">
                    <h1 >Giỏ hàng</h1>
                    <span>({quantity} sản phẩm)</span>
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