import React from 'react'
import '../HeaderCart/headerCart.css'
export default function CartItem(props) {
  return (
    <>
    <div id="cart-sidebar" className="mini-products-list">
                <li className="item odd" style={{ padding: "12px 16px" }}>
                  <a href="" title="Rèn Kĩ Năng Sống Dành Cho Học Sinh - Kĩ Năng Kiểm Soát Cảm Xúc" className="product-image">
                    <img src="https://cdn0.fahasa.com/media/catalog/product/cache/1/image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_195509_1_23407.jpg" style={{ height: 68 }} alt="Rèn Kĩ Năng Sống Dành Cho Học Sinh - Kĩ Năng Kiểm Soát Cảm Xúc" />
                  </a>
                  <div className="product-details" style={{ flex: 2, paddingLeft: 4 }}>
                    <p className="product-name-no-ellipsis">
                      <a href="" >
                        {props.bookName}
                      </a>
                    </p>
                    <span className="cart-price" >
                      {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.bookPrice)}&nbsp;đ
                    </span>
                    <span style={{fontSize:"13px"}}> x {props.amount}{/*<span*/}</span>
                  </div>
                </li>      
                
        </div>
    </>
  )
}
