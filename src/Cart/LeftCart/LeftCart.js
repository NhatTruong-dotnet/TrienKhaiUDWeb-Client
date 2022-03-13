import { useContext, useEffect } from "react";
import { Context } from "../../Header/Context/Context";
import "./left.css";
import LeftCartItem from "./components/LeftCartItem";
function RightCart() {
  const { carts, fetchData } = useContext(Context);
  var quantity =0;
  useEffect(() => {
    fetchData(
      "https://serverbookstore.herokuapp.com/api/carts/" +
        JSON.parse(localStorage.getItem("user")).gmail
    );
  }, [true]);
  console.log(carts);
  carts.map((e)=>{
    return quantity++;
  })
  return (
    <div className="col-sm-8 col-xs-12">
      <div className="header-cart-item">
        <div className="checkbox-all-product">
          {/* <input className="checkbox-add-cart" type={"checkbox"} /> */}
        </div>
        <div>
          <span>Tất cả (</span>
          <span className="num-item-checkbox">{quantity}</span>
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
