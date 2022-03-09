import { removeUserSession,getUser } from "../../../Utils/Common"
function Logout (){
    const user = getUser();
    const handleLogout = ()=>{
        removeUserSession();
        console.log("logout");
    }
    return(
        <div className="logout">
            Xin chao {user.gmail}<br/>
            <input type="button" value="Logout" onClick={handleLogout}/>
        </div>
    )
}
export default Logout