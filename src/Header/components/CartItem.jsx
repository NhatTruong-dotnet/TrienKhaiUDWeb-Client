import React from 'react'
import '../HeaderCart/headerCart.css'
import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export default function CartItem(props) {
  const [bookImg, setBookImg] = useState('')
  const navigate = useHistory();
 
  return (
    <>
      <div id="cart-sidebar" className="mini-products-list" onClick={()=>{
        navigate.push('/detail/'+props.bookName)
      }}>
        <li className="item odd" style={{ padding: "12px 16px" }}>
          <a href="" title="Rèn Kĩ Năng Sống Dành Cho Học Sinh - Kĩ Năng Kiểm Soát Cảm Xúc" className="product-image">
          <img src={props.img} style={{ height: 68 }} alt="Rèn Kĩ Năng Sống Dành Cho Học Sinh - Kĩ Năng Kiểm Soát Cảm Xúc" />
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
            <span style={{ fontSize: "13px" }}> x {props.amount}{/*<span*/}</span>
          </div>
        </li>

      </div>
    </>
  )
}
