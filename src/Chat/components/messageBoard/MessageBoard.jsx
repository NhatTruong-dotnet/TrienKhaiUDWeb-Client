import React, { useState } from "react";
import Message from "../message/Message";
import './messageBoard.css';

export default function MessageBoard() {
  const [guestUser, setGuestUser] = useState(false);
  const [showModal, setShowModal] = useState(true);

  let guestUserEmail = React.createRef();

  function popupModalGuestUser() {

    setGuestUser(localStorage.getItem('user.gmail') === null ? true : false)
    if (localStorage.getItem('user.gmail') === null) {
      setGuestUser(true);
      setShowModal(false);
    }
    if (guestUser) {
      setGuestUserInformation();
    }
  }
  function closeChat() {
    setShowModal(false);
  }

  function closeGuestModal(){
    setShowModal(true);
    setGuestUser(false);
  }
  function setGuestUserInformation() {
    if (guestUser) {
      localStorage.setItem('user.gmail', JSON.stringify(guestUserEmail.current.value))
      setGuestUser(false);
      setShowModal(true);
    }
  }

  return (
    <>
      {showModal && <div className="chatBox"  >
        <div className="chatBoxHeader">
          <div className="rightbarProfileImgContainer">
            <img className="rightbarProfileImg" src="https://i.pinimg.com/564x/21/a0/25/21a0250fa64bbca1e8b5aedcb9367093.jpg" alt="" />
            <span className="rightbarOnline"></span>
            <span className="rightbarUsername">Admin</span>
          </div>
          <span className="rightbarHint">Thường trả lời trong vài phút</span>
          <img onClick={closeChat} src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png" style={{ right: "8px", bottom: "30px", cursor: "pointer", position: "absolute" }} />
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
            <img onClick={popupModalGuestUser} src="https://img.icons8.com/external-gradak-royyan-wijaya/40/000000/external-chat-gradak-communikatok-solidarity-gradak-royyan-wijaya-9.png" style={{ right: "15px", bottom: "30px", cursor: "pointer", position: "absolute" }} />
          </div>
        </div>
      </div>}

      {guestUser && <div className="modalGuest">
        <form onSubmit={setGuestUserInformation}>
        <div className="modalGuestHeader">
          <img onClick={closeGuestModal} src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png" style={{ right: "8px", bottom: "5px", cursor: "pointer", position: "absolute" }} />
        </div>
          <div className="form-group">
            <label hmtlFor="guestEmail">Email address</label>
            <input required type="email" ref={guestUserEmail} className="form-control" id="guestEmail" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label hmtlFor="guestMessage">Câu hỏi của bạn</label>
            <input required type="text" className="form-control" id="guestMessage" placeholder="Bạn cần hỗ trợ gì?" />
            <div className="chatSubmitButton">
              <button type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>}
    </>
  )
}
