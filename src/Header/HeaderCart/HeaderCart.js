import "./headerCart.css";
import { FiShoppingCart } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "../Context/Context";
import CartItem from "../components/CartItem";
function HeaderCart() {
  const { carts, fetchData } = useContext(Context);

  useEffect(() => {
    fetchData(
      "https://serverbookstore.herokuapp.com/api/carts/" +
        JSON.parse(localStorage.getItem("user")).gmail
    );
  }, []);
  let total=0;
  const navigate = useHistory();
  return (
    <div className="top-cart-content">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="top-cart-header">
          <FiShoppingCart />
          <span>&nbsp; Giỏ hàng ({carts.length}) </span>
        </div>

        {carts.map((element) => {
          total += (parseInt(element.price)*parseInt(element.amount))
          return <CartItem key={element._id} img={element.img} bookName={element.bookName} amount={element.amount} bookPrice={element.price} />
        })}
      </div>
      <div style={{ display: "flex", padding: "12px 16px" }}>
        <div className="top-subtotal">
          <div>Thành tiền</div>
          <div>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)}&nbsp;đ</div>
        </div>
        <a href="" style={{ flex: 1 }} className="cart-btn-checkout" onClick={()=>{
              navigate.push('/checkout/cart');
            }}>
          <button
            type="button"
            title="Thanh toán"
            className="button  btn-checkout"
            style={{ width: "100%" }}
          >
            <span>
              <span style={{ color: "#ffffff", textTransform: "initial" }}>
                Xem giỏ hàng
              </span>
            </span>
          </button>
        </a>
      </div>
    </div>
  );
}
export default HeaderCart;
