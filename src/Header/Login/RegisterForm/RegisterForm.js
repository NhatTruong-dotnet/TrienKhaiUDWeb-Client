import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./registerform.css"
function RegisterForm (){
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  const [phone,setPhone] = useState('');
  const [username,setUsername] = useState('');
  const his =useHistory();
  const signup =()=>{
    axios.post("https://serverbookstore.herokuapp.com/api/auth/signup",{
      gmail: email,
      passwordHash: pass,
      username: username,
      phone: phone
    }).then(res=>{
      if(res.data.message==="Failed! Gmail is already in use!"){
        alert(res.data.message);
      }else{
        alert(res.data.message);
        his.push('/');
        document.getElementById("login-register").classList.remove("active");
      }
    })
  }
    return(
        <div >
        <div action="home.php" method="post" id="form2">
          <div className="input-box">
            <label htmlFor="phone_signup">Số điện thoại</label>
            <input
              type="text"
              placeholder="Nhập số điện thoại"
              name="phone_signup"
              value={phone}
              onChange={e=>setPhone(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="otp">Email</label>
            <input type="email" placeholder="Nhập email" name="otp"  value={email}
                    onChange={e=>setEmail(e.target.value)}/>
          </div>
          <div className="input-box">
            <label htmlFor="username_signup">Tên đăng nhập</label>
            <input
              type="text"
              placeholder="Nhập tên đăng nhập"
              name="username_signup"
              value={username}
              onChange={e=>setUsername(e.target.value)}
            />
          </div>
          <div className="input-box">
            <label htmlFor="pass_signup">Mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              name="pass_signup"
              value={pass}
              onChange={e=>setPass(e.target.value)}
            />
          </div>
          <div className="btn-box">
            <button type="submit" onClick={signup}>Đăng ký</button>
          </div>
        </div>
      </div>
    )
}
export default RegisterForm