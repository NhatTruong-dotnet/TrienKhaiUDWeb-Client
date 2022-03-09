import React, { useState } from 'react'
import { FiMinus } from "react-icons/fi"
import { FiPlus } from "react-icons/fi"
import { FiTrash2 } from "react-icons/fi"
import { useContext, useEffect } from "react";
import { Context } from "../../../Header/Context/Context";
import axios from 'axios';

export default function LeftCartItem(props) {
    const { carts, fetchData } = useContext(Context);
    const [currentAmount, setAmount] = useState(props.amount);
    const [bookImg, setBookImg] = useState({})
    
    axios.get("https://serverbookstore.herokuapp.com/api/Books/"+props.bookName).then(res=>{
        console.log(res.data[0]);
        setBookImg(res.data[0].img[0]);
    }).catch(error=>{           
        console.error(error);
        console.log(error.message);
    });
    
    console.log(bookImg);
    
    let url="https://serverbookstore.herokuapp.com/api/carts/" +
    JSON.parse(localStorage.getItem("user")).gmail
    useEffect(() => {
        fetchData(
            url
        );
    }, [url]);
    
    async function updateSubtractAmountCartItem(key){
        setAmount(currentAmount-1);
       
        let amountUpdate={
            bookId: key,
            amount: currentAmount-1,
            price: props.bookPrice
        }
        try {
            await axios.put("https://serverbookstore.herokuapp.com/api/carts/" +JSON.parse(localStorage.getItem("user")).gmail,amountUpdate);
        } catch (error) {
          console.log(error);  
            
        }
    }
    async function updatePlusAmountCartItem(key){
        setAmount(currentAmount+1);
       
        let amountUpdate={
            bookId: key,
            amount: currentAmount+1,
            price: props.bookPrice
        }
        try {
            await axios.put("https://serverbookstore.herokuapp.com/api/carts/" +JSON.parse(localStorage.getItem("user")).gmail,amountUpdate);
        } catch (error) {
          console.log(error);  
            
        }
    }

    async function removeCartItem(key){
        let bookIdRemove={
            bookId: key
        }
        try {
            await axios.delete("https://serverbookstore.herokuapp.com/api/carts/" +JSON.parse(localStorage.getItem("user")).gmail+"/"+ key);
        } catch (error) {
          console.log(error);  
            
        }
    }
    return (
        <>
            <div className="item-product-cart">
                {/* <div className="checked-product-cart">
                    <input type={"checkbox"} className="checkbox-add-cart" />
                </div> */}
                <div className="img-product-cart">
                    <a className="product-image">
                        <img src={bookImg} width="120" height="120" alt="Rèn Kĩ Năng Sống Dành Cho Học Sinh - Kĩ Năng Kiểm Soát Cảm Xúc" />
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
                                        <span className="price">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.bookPrice)} </span>
                                    </div>
                                    <div className="fhsItem-price-old">
                                        <span className="price" style={{ fontSize: "13px" }}> 23.000 đ</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="number-product-cart">
                        <div className="product-view-quantity-box">
                            <div className="product-view-quantity-box-block">

                                {currentAmount !== 1 && <a className="btn-subtract-qty">
                                    <FiMinus   style={{ width: "12px", height: "auto", verticalAlign: "middle" }} onClick={async() => {
                                       await updateSubtractAmountCartItem(props.id);
                                        fetchData(url)

                                    }}/>
                                </a> }

                                
                                <input type="text" className="qty-carts" value={currentAmount}  style={{ maxLenght: "12", align: "center" }} disabled
                                />
                                <a className="btn-add-qty" onClick="">
                                    <FiPlus  onClick={async() => {
                                       await updatePlusAmountCartItem(props.id);
                                        fetchData(url)

                                    }} style={{ width: "12px", height: "auto", verticalAlign: "middle" }} />
                                </a>
                            </div>
                        </div>
                        <div className="cart-price-total">
                            <span className="cart-price">
                                <span className="price">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(props.bookPrice*currentAmount)} </span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="div-of-btn-remove-cart">
                    <a title="Remove Item" className="btn-remove-desktop-cart">
                        <FiTrash2 style={{ fontSize: "22px" }} onClick={async () => {
                            await removeCartItem(props.id);
                            fetchData(url)
                        }} />
                    </a>
                </div>
            </div>
            <div class="border-product"></div>

        </>
    )
}
