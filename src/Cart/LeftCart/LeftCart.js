import {FiMinus} from "react-icons/fi"
import {FiPlus} from "react-icons/fi"
import {FiTrash2} from "react-icons/fi"
import "./left.css"
function RightCart (){
    return (
        <div className="col-sm-8 col-xs-12">
                        <div className="header-cart-item">
                            <div className="checkbox-all-product">
                                <input className="checkbox-add-cart" type={"checkbox"}/>
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
                            <div className="item-product-cart">
                                <div className="checked-product-cart">
                                    <input type={"checkbox"} className="checkbox-add-cart"/>
                                </div>
                                <div className="img-product-cart">
                                    <a className="product-image">
                                        <img src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_23407.jpg" width="120" height="120" alt="Rèn Kĩ Năng Sống Dành Cho Học Sinh - Kĩ Năng Kiểm Soát Cảm Xúc"/>
                                    </a>
                                </div>
                                <div className="group-product-info">
                                    <div className="info-product-cart">
                                        <div>
                                            <h2 className="product-name-full-text">
                                                <a href="">Rèn Kĩ Năng Sống Dành Cho Học Sinh - Kĩ Năng Kiểm Soát Cảm Xúc
                                                </a>
                                            </h2>
                                        </div>
                                        <div className="price-original">
                                            <div className="cart-price">
                                                <div className="cart-fhsItem-price">
                                                    <div>
                                                        <span className="price">14.950 đ  </span>
                                                    </div>
                                                    <div className="fhsItem-price-old">
                                                        <span className="price" style={{fontSize: "13px"}}> 23.000 đ</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="number-product-cart">
                                        <div className="product-view-quantity-box">
                                            <div className="product-view-quantity-box-block">
                                                <a className="btn-subtract-qty" onClick="">
                                                    <FiMinus style={{width: "12px", height: "auto", verticalAlign:"middle"}}/>
                                                </a>
                                                <input type="text" className="qty-carts" value="1" style={{maxLenght:"12", align:"center"}}/>
                                                <a className="btn-add-qty" onClick="">                                               
                                                    <FiPlus style={{width: "12px", height: "auto", verticalAlign:"middle"}}/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="cart-price-total">
                                            <span className="cart-price">
                                                <span className="price">14.950 đ</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="div-of-btn-remove-cart">                           
                                    <a onClick="" title="Remove Item" className="btn-remove-desktop-cart">                                   
                                        <FiTrash2 style={{fontSize:"22px"}}/>
                                    </a>
                                </div>
                            </div>
                            <div class="border-product"></div>
                            <div className="item-product-cart">
                                <div className="checked-product-cart">
                                    <input type={"checkbox"} className="checkbox-add-cart"/>
                                </div>
                                <div className="img-product-cart">
                                    <a className="product-image">
                                        <img src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_23407.jpg" width="120" height="120" alt="Rèn Kĩ Năng Sống Dành Cho Học Sinh - Kĩ Năng Kiểm Soát Cảm Xúc"/>
                                    </a>
                                </div>
                                <div className="group-product-info">
                                    <div className="info-product-cart">
                                        <div>
                                            <h2 className="product-name-full-text">
                                                <a href="">Rèn Kĩ Năng Sống Dành Cho Học Sinh - Kĩ Năng Kiểm Soát Cảm Xúc
                                                </a>
                                            </h2>
                                        </div>
                                        <div className="price-original">
                                            <div className="cart-price">
                                                <div className="cart-fhsItem-price">
                                                    <div>
                                                        <span className="price">14.950 đ  </span>
                                                    </div>
                                                    <div className="fhsItem-price-old">
                                                        <span className="price" style={{fontSize: "13px"}}> 23.000 đ</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="number-product-cart">
                                        <div className="product-view-quantity-box">
                                            <div className="product-view-quantity-box-block">
                                                <a className="btn-subtract-qty" onClick="">
                                                    <FiMinus style={{width: "12px", height: "auto", verticalAlign:"middle"}}/>
                                                </a>
                                                <input type="text" className="qty-carts" value="1" style={{maxLenght:"12", align:"center"}}/>
                                                <a className="btn-add-qty" onClick="">                                               
                                                    <FiPlus style={{width: "12px", height: "auto", verticalAlign:"middle"}}/>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="cart-price-total">
                                            <span className="cart-price">
                                                <span className="price">14.950 đ</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="div-of-btn-remove-cart">                           
                                    <a onClick="" title="Remove Item" className="btn-remove-desktop-cart">                                   
                                        <FiTrash2 style={{fontSize:"22px"}}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}
export default RightCart