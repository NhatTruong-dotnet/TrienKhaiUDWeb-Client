import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function PaymentItem(props) {
    const [book, setBook] =useState([])
    useEffect( async () =>{
        let bookByID = await axios.get("https://serverbookstore.herokuapp.com/api/Books/"+props.bookName)
        setBook(bookByID.data[0]);
    },[] )
  return (
    <>
    <div className="item-product-cart">
        
        <div className="img-product-cart">
            <a className="product-image">
                <img src={book.img} width="120" height="120" alt={props.id} />
            </a>
        </div>
        <div className="group-product-info">
            <div className="info-product-cart">
                <div>
                    <h2 className="product-name-full-text">
                        <a href="">{props.bookName}
                        </a>
                    </h2>
                </div>
                <div className="price-original">
                    <div className="cart-price">
                        <div className="cart-fhsItem-price">
                            <div>
                                <span className="price">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.bookPrice)}  </span>
                            </div>
                            <div className="fhsItem-price-old">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="number-product-cart">
                <div className="product-view-quantity-box">
                    <div className="product-view-quantity-box-block">

                
                        <input type="text" className="qty-carts" value={props.amount}  style={{ maxLenght: "12", align: "center" }} disabled
                        />
                       
                    </div>
                </div>
                <div className="cart-price-total">
                    <span className="cart-price">
                        <span className="price">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.bookPrice * props.amount)}</span>
                    </span>
                </div>
            </div>
        </div>
       
    </div>
    <div class="border-product"></div>

</>
  )
}
