import {FiLogIn} from "react-icons/fi"
import {FaSearch} from "react-icons/fa"
import {FiShoppingCart} from "react-icons/fi"
import {FiBell} from "react-icons/fi"
import "./Login/Login"
import "./header.css"
import Login from "./Login/Login"
import HeaderCart from "./HeaderCart/HeaderCart"
function Header (){
    return (
        <div className="hero_area">
  {/* header section strats */}
  <header className="header_section">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg custom_nav-container ">
        <a className="navbar-brand" href="#"style={{ alignItems: "center", paddingLeft: 100 }}>
          <span>Bostorek</span>
        </a>
       
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          style={{ alignItems: "center", paddingLeft: 250 }}
        >
          <ul
            className="navbar-nav"
            style={{ width: "100%", alignItems: "center" }}
          >
            <li
              className="nav-item"
              style={{ padding: "10px 25px", width: "50%" }}
            >
              <from className="search_form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search here..."
                />
                <button className="" type="submit">
                  <FaSearch/>
                </button>
              </from>
            </li>
            <li className="nav-item" style={{ textAlign: "center"}}>
              <FiBell className="header-icon"/>            
              <a className="nav-link" href="#">
                {" "}
                Thông báo
              </a>
              {/* <div class="cart-number" >
						    <span>1</span>
					     </div> */}
            </li>
            <li className="nav-item header-cart-noti" style={{ textAlign: "center" }}>
              <FiShoppingCart className="header-icon"/>            
              <a className="nav-link" href="#">
                {" "}
                Giỏ hàng
              </a>
              {/* <div class="cart-number" >
						    <span>1</span>
					     </div> */}
              <HeaderCart style={{top:"-20px"}}/>
            </li>
            <li className="nav-item " style={{ textAlign: "center" }} onClick={()=>{
              document.getElementById("login-register").classList.add("active");
            }}>
              <FiLogIn className="header-icon"/>              
              <a className="nav-link " href="#" id="myAccount">
                Đăng nhập{" "}
              </a>
            </li>
          </ul>
        </div>
        {/* </div>
         */}
      </nav>
    </div>
    {/* =============đăng nhập */}
    <Login/>
  </header>
</div>
    )
}
export default Header