import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { useContext, useEffect } from "react";
import { Context } from "../../Header/Context/Context";
import "./left.css";
import LeftCartItem from "./components/LeftCartItem";
function RightCart() {
  const { carts, fetchData } = useContext(Context);

  useEffect(() => {
    fetchData(
      "https://serverbookstore.herokuapp.com/api/carts/" +
        JSON.parse(localStorage.getItem("user")).gmail
    );
  }, []);
  console.log(carts);
  return (
    <div className="col-sm-8 col-xs-12">
      <div className="header-cart-item">
        <div className="checkbox-all-product">
          <input className="checkbox-add-cart" type={"checkbox"} />
        </div>
        <div>
          <span>Chọn tất cả (</span>
          <span className="num-item-checkbox">2</span>
          <span>)</span>
        </div>
        <div>Số lượng</div>
        <div>Thành tiền</div>
        <div></div>
      </div>
      <div className="product-cart-left">
        {carts.map((element) => {
          return (
            <LeftCartItem
                id={element.bookId}
              key={element._id}
              bookName={element.bookName}
              bookPrice={element.price}
              amount={element.amount}
            />
          );
        })}
      </div>
    </div>
  );
}
export default RightCart;
