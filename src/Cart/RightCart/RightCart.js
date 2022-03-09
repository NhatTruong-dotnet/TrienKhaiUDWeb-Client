/* eslint-disable no-lone-blocks */
import {FiAlertCircle} from "react-icons/fi"
import { useContext, useEffect } from "react";
import { Context } from "../../Header/Context/Context";
import "./right.css"
import { useHistory } from "react-router-dom";
function LeftCart(){
    const { carts, fetchData } = useContext(Context);
  var totalPrice =0;
  useEffect(() => {
    fetchData(
      "https://serverbookstore.herokuapp.com/api/carts/" +
        JSON.parse(localStorage.getItem("user")).gmail
    );
  }, []);
  {carts.map((element) => {        
            
    return (     
        totalPrice +=(parseInt(element.price)*parseInt(element.amount)) 
    );
  })}
  if(totalPrice!=0){
    document.getElementById("btnCheckout").classList.remove("btn-checkout-disable");
  }
  const navigate = useHistory();
    return (
        <div className="col-sm-4 ">
                        <div className="total-cart-right">
                            <div className="effect-scroll-cart-right">
                                <div className="cart-event-promo-outer">
                                    <div className="col-xs-12 col-sm-12 block event-promotion-block" id="block-totals" style={{display: "block"}}>
                                        <div className="totals">
                                            <div className="fhs_checkout_event_promotion">
                                                <div className="fhs-event-promo">
                                                    <div className="fhs-event-promo-title">
                                                        <div className="fhs-event-promo-title-left">
                                                            <span><img src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/promotion/ico_coupon.svg"/></span>
                                                            <span>Khuyến mãi</span>
                                                        </div>
                                                        <div className="fhs-event-promo-title-viewmore" onClick="">
                                                            <span>Xem thêm</span>
                                                            <span><img src="https://cdn0.fahasa.com/skin//frontend/ma_vanese/fahasa/images/ico_seemore_blue.svg"/></span>
                                                        </div>
                                                    </div>
                                                    <div className="fhs-event-promo-item fhs-event-promo-item-line ">
                                                        <div>
                                                            <div className="fhs-event-promo-list-item-content" onClick="">
                                                                <div>
                                                                    <div className="fhs-event-promo-list-item-content-title">
                                                                        VNPAY: GIẢM NGAY20K
                                                                    </div>
                                                                    <div className="fhs-event-promo-list-item-detail fhs_blue_link">
                                                                        Chi tiết
                                                                    </div>
                                                                    </div>
                                                                    <div className="fhs-event-promo-list-item-content-description">
                                                                        Nhập mã “QRFHS20”: Giảm 20k, đơn hàng 40k thanh toán qua VNPAY - Nhập mã tại App Banking
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div >
                                                                <div className="fhs-event-promo-item-progress-bar" style={{width:"250px",float:"left"}}>
                                                                    <div className="fhs-event-promo-item-progress">
                                                                        <hr style={{width: "0%"}}/>
                                                                       
                                                                    </div>
                                                                    <div className="fhs-event-promo-item-minmax">
                                                                        <span>Mua thêm 40.000&nbsp;đ để nhận mã</span>
                                                                        <span>40.000&nbsp;đ</span>
                                                                    </div>
                                                                </div>
                                                                <div >
                                                                    <a href="#">
                                                                        <button type="button" title="Mua Thêm" className="fhs-btn-view-promo">
                                                                            <span style={{padding:" 0px 2px"}}>Mua Thêm</span>
                                                                        </button>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                    </div>
                                                    {/* ======================================== */}
                                                    <div className="fhs-event-promo-item fhs-event-promo-item-line ">
                                                        <div>
                                                            <div className="fhs-event-promo-list-item-content" onClick="">
                                                                <div>
                                                                    <div className="fhs-event-promo-list-item-content-title">
                                                                        MÃ GIẢM 10K
                                                                    </div>
                                                                    <div className="fhs-event-promo-list-item-detail fhs_blue_link">
                                                                        Chi tiết
                                                                    </div>
                                                                    </div>
                                                                    <div className="fhs-event-promo-list-item-content-description">
                                                                    cho đơn hàng MANGA COMIC từ 150K
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div >
                                                                <div className="fhs-event-promo-item-progress-bar"style={{width:"250px",float:"left"}}>
                                                                    <div className="fhs-event-promo-item-progress">
                                                                        <hr style={{width: "0%"}}/>
                                                                        
                                                                    </div>
                                                                    <div className="fhs-event-promo-item-minmax">
                                                                        <span>Mua thêm 150.000&nbsp;đ để nhận mã</span>
                                                                        <span>&nbsp;150.000&nbsp;đ</span>
                                                                    </div>
                                                                </div>
                                                                <div >
                                                                    <a href="#">
                                                                        <button type="button" title="Mua Thêm" className="fhs-btn-view-promo">
                                                                            <span style={{padding:" 0px 2px"}}>Mua Thêm</span>
                                                                        </button>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                    </div>                                                                                                       
                                                </div>
                                               
                                                {/* ====================== */}
                                                <div className="fhs-event-promo-sumary">
                                                    <div className="fhs_label_note">
                                                        <div className="fhs_label_coupon_label_info">
                                                            <div >Có thể áp dụng đồng thời nhiều mã &nbsp; 
                                                                <FiAlertCircle style={{  fontSize:"15px"}}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* ============================= */} 
                                            </div>                           
                                        </div>
                                    </div>
                                </div> 
                                {/* ========================= */}
                                <div className="block-total-cart" >
                                    <div className="block-totals-cart-page">
                                        <div className="total-cart-page ">
                                            <div className="title-cart-page-left">Thành tiền</div>
                                            <div className="number-cart-page-right">
                                                <span className="price">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)}</span>
                                            </div>
                                        </div>
                                        <div className="border-product"></div>
                                        <div className="total-cart-page title-final-total">
                                            <div className="title-cart-page-left">Tổng Số Tiền (gồm VAT)</div>
                                            <div className="number-cart-page-right">
                                                <span className="price">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)}</span>
                                            </div>
                                        </div>
                                    </div>                                            
                                    <div className="checkout-type-button-cart" style={{textAlign:"center"}} onClick={()=> {
                                        navigate.push('/checkout/payment')
                                    }}>
                                        <div className="method-button-cart">
                                            <button onClick="" type="button" title="Thanh toán" id="btnCheckout" className="button btn-proceed-checkout btn-checkout btn-checkout-disable" style={{padding:"0px"}}>
                                                <span><span>Thanh toán</span></span>
                                            </button>
                                            <div className="retail-note"><a href="#" target="_blank">(Giảm giá trên web chỉ áp dụng cho bán lẻ)</a></div>
                                        </div>
                                    </div>
                                </div>
                                {/* ================================= */}
                                </div>
                            </div>
                        </div>
    )
}
export default LeftCart