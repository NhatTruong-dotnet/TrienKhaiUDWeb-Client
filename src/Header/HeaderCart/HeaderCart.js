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
  console.log(carts);
  return (
    <div className="top-cart-content">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="top-cart-header">
          <FiShoppingCart />
          <span>&nbsp; Giỏ hàng (2) </span>
        </div>

        {carts.map((element) => {
          return <CartItem key={element._id} bookName={element.bookName} bookPrice={element.price} />
        })}
      </div>
      <div style={{ display: "flex", padding: "12px 16px" }}>
        <div className="top-subtotal">
          <div>Thành tiền</div>
          <div>110.150&nbsp;đ</div>
        </div>
        <a href="" style={{ flex: 1 }} className="cart-btn-checkout">
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
