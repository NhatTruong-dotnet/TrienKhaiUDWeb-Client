import {GrClose} from "react-icons/gr"
import "./login.css"
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm"
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
              <LoginForm/>
            </div>
            {/* ====Đăng ký==== */}
            <div className="tab-pane" id="formRegiister">
              <RegisterForm/>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
}
export default Login