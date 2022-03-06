import {GrClose} from "react-icons/gr"
import "./login.css"
function Login(){
    return(
        <div className="login_form" id="login-register">
      <main>
        
        <div className="container">
          <div className="login-form" id="login">
          <div className="exit" id="exit" onClick={()=>{
           document.getElementById("login-register").classList.remove("active");
        }}>
          <GrClose/>
        </div>
            <div className="tabs">
              <div className="tab-item active" onClick={()=>{
                document.getElementById("formRegiister").classList.remove("active");
                document.getElementById("formLogin").classList.add("active");                 
              }}>Đăng nhập</div>
              <div className="tab-item " onClick={()=>{
                document.getElementById("formLogin").classList.remove("active");
                document.getElementById("formRegiister").classList.add("active");
              }}>Đăng ký</div>
              <div className="line" />
            </div>
            <div className="tab-pane active" id="formLogin">
              <form action="" method="post" id="form1">
                <div className="input-box">
                  <label htmlFor="email_login">Số điện thoại/Email</label>
                  <input
                    type="email"
                    placeholder="Nhập số điện thoại hoặc email"
                    id="ten"
                    name="email_login"
                  />
                  <div className="err">
                    <span />
                  </div>
                </div>
                <div className="input-box">
                  <label htmlFor="pass_login">Mật khẩu</label>
                  <input
                    type="password"
                    placeholder="Nhập mật khẩu"
                    id="pass"
                    name="pass_login"
                  />
                  <div className="err">
                    <span />
                  </div>
                </div>
                <div id="createAccount">
                  <a href="">Quên mật khẩu?</a>
                </div>
                <div className="btn-box">
                  <button type="submit">Đăng nhập</button>
                </div>
              </form>
            </div>
            {/* ====Đăng ký==== */}
            <div className="tab-pane" id="formRegiister">
              <form action="home.php" method="post" id="form2">
                <div className="input-box">
                  <label htmlFor="phone_signup">Số điện thoại</label>
                  <input
                    type="text"
                    placeholder="Nhập số điện thoại"
                    name="phone_signup"
                  />
                </div>
                <div className="input-box">
                  <label htmlFor="otp">Mã xác nhận OTP</label>
                  <input type="email" placeholder="6 ký tự" name="otp" />
                </div>
                <div className="input-box">
                  <label htmlFor="pass_signup">Mật khẩu</label>
                  <input
                    type="password"
                    placeholder="Nhập mật khẩu"
                    name="pass_signup"
                  />
                </div>
                <div className="btn-box">
                  <button type="submit">Đăng ký</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
}
export default Login