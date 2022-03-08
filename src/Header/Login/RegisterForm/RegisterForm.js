import "./registerform.css"
function RegisterForm (){
    return(
        <div >
        <div action="home.php" method="post" id="form2">
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
        </div>
      </div>
    )
}
export default RegisterForm