import Message from "../message/Message";
import './messageBoard.css'

export default function messageBoard() {
  return (
    <>

      <div className="chatBox">
        <div className="chatBoxHeader">
          <div className="rightbarProfileImgContainer">
            <img className="rightbarProfileImg" src="https://i.pinimg.com/564x/21/a0/25/21a0250fa64bbca1e8b5aedcb9367093.jpg" alt="" />
            <span className="rightbarOnline"></span>
            <span className="rightbarUsername">Admin</span>
          </div>
          <span className="rightbarHint">Thường trả lời trong vài phút</span>
          <img src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png" style={{ right: "8px", bottom: "30px", cursor: "pointer", position: "absolute" }} />
        </div>
        <div className="chatBoxWrapper">
          <div className="chatBoxTop">
            <Message />
            <Message own={true} />
            <Message own={true} />
            <Message own={true} />
            <Message />
          </div>
          <div className="chatBoxBottom">
            <textarea className='chatMessageInput' placeholder='Type something'></textarea>
            <button className='chatSubmitButton'>Send</button>
          </div>
        </div>
      </div>

      <div className="modalGuest">
      <form>
        <div class="form-group t">
          <label for="guestEmail">Email address</label>
          <input type="email" class="form-control" id="guestEmail" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div class="form-group">
          <label for="guestMessage">Câu hỏi của bạn</label>
          <input type="text" class="form-control" id="guestMessage" placeholder="Bạn cần hỗ trợ gì?" />
        </div>
      </form>  
      </div>  
   

    </>
  )
}
