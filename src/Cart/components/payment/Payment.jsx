import React, { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import styles from '../../../Page/MyAccount/AccountInfo/AccountInfo.module.css'
import Button from '../../../Common/Button/Button'
import ShippingAddress from '../shippingAddress/ShippingAddress'
import './payment.css'
import LeftCartItem from '../../LeftCart/components/LeftCartItem'
import PaymentItem from './paymentItem/PaymentItem'
import axios from 'axios'
import DynamicModal from '../../../Common/DynamicModal/DynamicModal'
import { emitMessage } from "../../../Common/ToastMessage/ToastMessage";
import { useHistory } from 'react-router-dom'

export default function Payment() {
  const[shippingAddress, setShippingAddress] = useState([])
  const [itemsCheckout,setItemsCheckOut] = useState([])
  const deliveryName = useRef();
  const phoneNumber = useRef();
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [newBillCreated, setNewBillCreated]= useState('')
  const [loadingModal, setLoadingModal] = useState(false)
  const navigate = useHistory()
  useEffect(async () => {
    setLoadingModal(true);
    const dataRes = await axios.get("https://serverbookstore.herokuapp.com/api/users/address/"+ JSON.parse(localStorage.getItem('user')).gmail);
    setShippingAddress(dataRes.data)
    
    const cartsRes = await axios.get("https://serverbookstore.herokuapp.com/api/carts/"+ JSON.parse(localStorage.getItem('user')).gmail);
    setItemsCheckOut(cartsRes.data)
    setLoadingModal(false);

},[checkoutComplete])


  let total =0;
  return (
    <>
    {!checkoutComplete &&
    <div className='container'style={{maxWidth:"1200px", margin:"0px auto"}}>
      <div class="fhs_checkout_block_title">Địa chỉ giao hàng</div>
      {
        shippingAddress.map((element) => {
          return <ShippingAddress default={element.isDefault} addressName={element.address}/>
        })
      }
      <div class="fhs_checkout_block_title" style={{ marginTop: "20px" }}>Phương thức giao hàng</div>
      <div class="form-check" style={{ padding: "4px", marginLeft: "40px" }}>
        <input class="form-check-input" type="radio" name="" id="" checked />
        <label class="form-check-label" for="flexRadioDefault1">
          <b>Giao hàng tiêu chuẩn : 15.000đ </b>
        </label>
      </div>
      <div class="fhs_checkout_block_title" style={{ marginTop: "20px" }}>Phương thức thanh toán</div>
      <div class="form-check" style={{ padding: "4px", marginLeft: "40px" }}>
        <input class="form-check-input" type="radio" name="paymentMethod" id="paymentCOD" checked value="COD"/>
        <label class="form-check-label" for="paymentCOD">
          Thanh toán tiền mặt khi nhận hàng
        </label>
      </div>
      <div class="form-check" style={{ padding: "4px", marginLeft: "40px" }}>
        <input class="form-check-input" type="radio" name="paymentMethod" id="paymentMOMO" />
        <img src="https://cdn0.fahasa.com/skin/frontend/base/default/images/payment_icon/ico_momopay.svg?q=10077" value="MOMO"/>
        <label class="form-check-label" for="paymentMOMO" >
          &nbsp;Ví MOMO
        </label>
      </div>

      <div class="fhs_checkout_block_title" style={{ marginTop: "20px"}}>Chi tiết thanh toán</div>
     
      {
          itemsCheckout.map((element) => {
            total += element.price * element.amount
            return <PaymentItem key={element._id} id={element.bookId} bookName={element.bookName} bookPrice={element.price} amount={element.amount}/>
          })
      }
      <div className="block-total-cart" style={{width:"35%", right:"150px", position:"absolute"}}>
        <div className="block-totals-cart-page">
          <div className="total-cart-page ">
            <div className="title-cart-page-left">Thành tiền</div>
            <div className="number-cart-page-right">
              <span className="price">{ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)}</span>
            </div>
          </div>
          <div className="border-product"></div>
          <div className="total-cart-page title-final-total">
            <div className="title-cart-page-left">Tổng Số Tiền (gồm VAT và phí vận chuyển)</div>
            <div className="number-cart-page-right">
              <span className="price">{ new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total +15000)} đ</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{height:"60px"}}></div>
      <div class="fhs_checkout_block_title" style={{ marginTop: "20px" }}>Thông tin người nhận</div>
      <div style={{ padding: "30px" }}> <form onSubmit={e => e.preventDefault()} className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Họ và tên</label>
          <input
            type='text'
            className={styles.input} ref={deliveryName} required
            placeholder='Họ và tên'
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Số điện thoại</label>
          <input
            type='text'
            className={styles.input} ref={phoneNumber} required
            placeholder='Số điện thoại'
          />
        </div>

        <div onClick={async () => {
          const orderId = await axios.get("https://serverbookstore.herokuapp.com/api/carts/id/"+JSON.parse(localStorage.getItem('user')).gmail);
          try {
            console.log(document.querySelector('input[name="shippingAddress"]:checked').value); 
          } catch (error) {
            emitMessage("error", "Thiếu địa chỉ giao hàng");
          }

          let newBill ={
            gmail:JSON.parse(localStorage.getItem('user')).gmail,
            phoneNumber: phoneNumber.current.value,
            totalPayment:  total+15000,
            orderId:orderId.data,
            paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value,
            deliveryAddress:document.querySelector('input[name="shippingAddress"]:checked').value,
            toUser: JSON.parse(localStorage.getItem('user')).gmail
          }
          try {
          setLoadingModal(true);
            const newBillReturn = await axios.post("https://serverbookstore.herokuapp.com/api/bills", newBill).then(async (data)=> {
            });
            setLoadingModal(false);
            emitMessage("success", "Đặt hàng thành công");
            navigate.push('/books')
          } catch (error) {
            setLoadingModal(false);
            emitMessage("error", "Có lỗi xảy ra");
          }
          
        }} className={styles.btnWrap} >
          <Button type="button" solid>Đặt hàng</Button>
        </div>
      </form>
      </div>
      </div>
    }
    <DynamicModal showModal={loadingModal} loading />

  </>
  )
  
}


