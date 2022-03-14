import "./seenCart.css";
import { FiShoppingCart } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { SeenListContext } from "../Context/SeenListContext";
import CartItem from "../components/CartItem";
import axios from "axios";

function SeenCart() {
  const { seenList, fetchData } = useContext(SeenListContext);
  const currentUser = JSON.parse(localStorage.getItem("user"));
  try {
    let gmailUser = currentUser.gmail
  } catch (error) {
    let userObj ={
      "gmail":""
    }

    localStorage.setItem('user', JSON.stringify(userObj))
    localStorage.setItem('url', JSON.stringify("https://serverbookstore.herokuapp.com/api/books/"))
  }
  useEffect(() => {

    fetchData(
      "https://serverbookstore.herokuapp.com/api/seenList/" +
        JSON.parse(localStorage.getItem("user")).gmail
    );
  }, []);
  return (
    <div className="top-cart-content">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="top-cart-header">
          <FiShoppingCart />
          <span>&nbsp; Danh sách đã xem</span>
        </div>
        {seenList.map((element) => {
          return (
            <CartItem
              key={element._id}
              bookName={element.bookName}
              amount={element.amount}
              bookPrice={element.price}
              img={element.img}
            />
          );
        })}
      </div>
    </div>
  );
}
export default SeenCart;
