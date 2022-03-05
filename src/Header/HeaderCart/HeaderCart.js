import "./headerCart.css"
import {FiShoppingCart} from "react-icons/fi"

function HeaderCart (){
    return(
       
          <div className="top-cart-content" >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="top-cart-header">
                <FiShoppingCart/>
                <span >&nbsp; Giỏ hàng (2) </span>
              </div>
              <div id="cart-sidebar" className="mini-products-list">
                <li className="item odd" style={{ padding: "12px 16px" }}>
                  <a href="" title="Rèn Kĩ Năng Sống Dành Cho Học Sinh - Kĩ Năng Kiểm Soát Cảm Xúc" className="product-image">
                    <img src="https://cdn0.fahasa.com/media/catalog/product/cache/1/image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_195509_1_23407.jpg" style={{ height: 68 }} alt="Rèn Kĩ Năng Sống Dành Cho Học Sinh - Kĩ Năng Kiểm Soát Cảm Xúc" />
                  </a>
                  <div className="product-details" style={{ flex: 2, paddingLeft: 4 }}>
                    <p className="product-name-no-ellipsis">
                      <a href="" >
                        Rèn Kĩ Năng Sống Dành Cho Học Sinh - Kĩ Năng Kiểm Soát Cảm Xúc
                      </a>
                    </p>
                    <span className="cart-price" >
                      14.950&nbsp;đ
                    </span>
                    <span style={{fontSize:"13px"}}> x 1{/*<span*/}</span>
                  </div>
                </li>      
                <li className="item odd" style={{ padding: "12px 16px" }}>
                  <a href="" title="Rèn Kĩ Năng Sống Dành Cho Học Sinh - Kĩ Năng Kiểm Soát Cảm Xúc" className="product-image">
                    <img src="https://cdn0.fahasa.com/media/catalog/product/cache/1/image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_195509_1_23407.jpg" style={{ height: 68 }} alt="Rèn Kĩ Năng Sống Dành Cho Học Sinh - Kĩ Năng Kiểm Soát Cảm Xúc" />
                  </a>
                  <div className="product-details" style={{ flex: 2, paddingLeft: 4 }}>
                    <p className="product-name-no-ellipsis">
                      <a href="" >
                        Rèn Kĩ Năng Sống Dành Cho Học Sinh - Kĩ Năng Kiểm Soát Cảm Xúc
                      </a>
                    </p>
                    <span className="cart-price" >
                      14.950&nbsp;đ
                    </span>
                    <span style={{fontSize:"13px"}}> x 1{/*<span*/}</span>
                  </div>
                </li>      
              </div>
              <div style={{ display: "flex", padding: "12px 16px" }}>
                <div className="top-subtotal">
                  <div>Thành tiền</div>
                  <div>110.150&nbsp;đ</div>
                </div>
                <a href="/checkout/cart" style={{ flex: 1 }} className="cart-btn-checkout">
                  <button type="button" title="Thanh toán"className="button  btn-checkout" style={{ width: "100%" }}>
                    <span>
                      <span style={{ color: "#ffffff", textTransform: "initial" }}>
                        Xem giỏ hàng
                      </span>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
      
    )
}
export default HeaderCart