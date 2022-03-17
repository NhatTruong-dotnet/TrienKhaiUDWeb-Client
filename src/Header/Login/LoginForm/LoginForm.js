import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { setUserSession } from "../../../Utils/Common";
import { emitMessage } from "../../../Common/ToastMessage/ToastMessage";
import "./loginform.css";
import DynamicModal from "../../../Common/DynamicModal/DynamicModal";
function LoginForm() {
  var mess = null;
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);
  const his = useHistory();
  const[popupLoadingSpinner, setPopupLoadingSpinner]  = useState(false);
  const login = () => {
    setPopupLoadingSpinner(true);
    setError(null);
    axios
      .post("https://serverbookstore.herokuapp.com/api/auth/signin", {
        gmail: email,
        passwordHash: pass,
      })
      .then((res) => {
        if (res.data.message === "Login successful") {
          console.log(res.data.USER);
          localStorage.setItem("user", JSON.stringify(res.data.USER));
          setUserSession(res.data.USER.accessToken, res.data.USER);
          console.log(res.data.USER);
          setPopupLoadingSpinner(false);
          emitMessage("success", "Đăng nhập thành công");
          if(email ==="admin@gmail.com"){
           window.open("https://admin-portalbookstore.herokuapp.com/","_self")
          }else{
            his.push("/");
          }
          document.getElementById("login-register").classList.remove("active");
          document
            .getElementById("userAccount")
            .classList.remove("display_none");
          document.getElementById("iconLogin").classList.add("display_none");
        } else if (res.data.message === "User not found") {
          setPopupLoadingSpinner(false);
          emitMessage("error", "Sai mật khẩu hoặc tài khoản");
        } else {
          setPopupLoadingSpinner(false);
          emitMessage("error", "Sai mật khẩu hoặc tài khoản");
        }
      })
      .catch((error) => {
        console.error(error);
        console.log(error.message);
      });
    console.log(mess);
    console.log(email);
    console.log(pass);
  };
  return (
    <div>
      <div id="form1">
        <div className="input-box">
          <label htmlFor="email_login">Số điện thoại/Email</label>
          <input
            type="email"
            placeholder="Nhập số điện thoại hoặc email"
            id="ten"
            name="email_login"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <div className="err">
            <span />
          </div>
        </div>
        <div id="createAccount">
          <a href="">Quên mật khẩu?</a>
        </div>
        <div className="btn-box">
          {/* <button type="submit">Đăng nhập</button> */}
          <input type="button" value="Đăng nhập" onClick={login} />
        </div>
      </div>
      <DynamicModal showModal={popupLoadingSpinner} loading />
    </div>
  );
}
export default LoginForm;
