import axios from 'axios';
import React, { useState, useEffect, useRef,useContext} from 'react'
import Message from './components/message/Message';
import { Context } from "../Admin/Context/Context";

import './conversation.css'
export default function Conversation(props) {
    const [showModal, setShowModal] = useState(false);
    const [messageSendSucess, setMessageSendSucess] = useState(false);
    let currentUser = JSON.parse(localStorage.getItem('user'));
    const [guestUser, setGuestUser] = useState(false);
    const [conversations, setConversations] = useState([]);
    const scrollRef = useRef();
    let guestUserEmail = React.createRef();
    let messageSend = useRef();
    const [enabledSendIcon, setEnabledSendIcon] = useState(false);
    const { newMessageCome, fetchData } = useContext(Context);

    function openMessageBoard() {
        try {
            console.log(currentUser.gmail);
        } catch (error) {
            let guestInfo = {
                "gmail": ""
            }
            localStorage.setItem('user', JSON.stringify(guestInfo))
        }
        

        setShowModal(!showModal);
    }

    useEffect(() => {
        //https://dmitripavlutin.com/react-useeffect-infinite-loop/

        const getConversations = async () => {

            try {
                currentUser = JSON.parse(localStorage.getItem('user'));
                if(currentUser.gmail !==""){
                    const res = await axios.get("https://serverbookstore.herokuapp.com/api/conversations/" + currentUser.gmail);
                    setConversations(res.data[0].messages);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getConversations();
    }, [showModal, messageSendSucess,newMessageCome])


    async function  sendMessage(){
        try {
            currentUser = JSON.parse(localStorage.getItem('user'))
            const message = {gmail: currentUser.gmail, messageText:messageSend.current.value}
            await axios.post("https://serverbookstore.herokuapp.com/api/conversations/"+currentUser.gmail,message).then(() => setMessageSendSucess(!messageSendSucess));
            document.getElementById('chatMessageInput').value = '';
            await fetchData("admin")
            setEnabledSendIcon(false)

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      scrollRef.current?.scrollIntoView({behavior:"smooth"});
    }, [conversations])

    function isPopupModalGuestUser() {
        currentUser = JSON.parse(localStorage.getItem('user'))
        if (currentUser.gmail === "" || currentUser === null) {
            setGuestUser(true)
            setShowModal(false);
        }
        else if (guestUser) {
            setGuestUserInformation();
        }
        else {
            sendMessage();
        }
    }

    function closeChat() {
        setShowModal(false);
    }

    function closeGuestModal() {
        setShowModal(true);
        setGuestUser(false);
    }

    function setGuestUserInformation() {
        if (guestUser) {
            let guestInfo = {
                "gmail": guestUserEmail.current.value
            }
            localStorage.setItem('user', JSON.stringify(guestInfo))
            
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
                <div className="chatBoxWrapper" style={{ backgroundColor: '#f8f6f0' }}>
                    <div className="chatBoxTop" id="messageBoard" >
                        {
                            /*https://stackoverflow.com/questions/22876978/loop-inside-react-jsx */
                            conversations.map((element, i) => {
                                return <div ref={scrollRef}>
                                        <Message key={i}
                                            messageText={element.messageText}
                                            //https://www.javascripttutorial.net/web-apis/javascript-localstorage/#:~:text=The%20localStorage%20can%20store%20only,the%20localStorage%20using%20the%20JSON.
                                            own={element.gmail === currentUser.gmail ? true : false}
                                            chatTime={element.chatTime}
                                        />
                                </div>

                            })
                        }
                    </div>
                    <div className="chatBoxBottom">
                        <textarea className='chatMessageInput' id='chatMessageInput'  ref={messageSend} placeholder='Type something' 
                            onChange={() => {document.getElementById('chatMessageInput').value ==="" ? setEnabledSendIcon(false):setEnabledSendIcon(true) }}>
                        
                        </textarea>
                        { enabledSendIcon && < img onClick={isPopupModalGuestUser} src="https://img.icons8.com/external-gradak-royyan-wijaya/40/000000/external-chat-gradak-communikatok-solidarity-gradak-royyan-wijaya-9.png" style={{ right: "15px", bottom: "30px", cursor: "pointer", position: "absolute" }} />}
                    </div>
                </div>
            </div>}

            <div className="bubble" onClick={openMessageBoard}>
                <span><img src="https://img.icons8.com/ios/27/000000/lifebuoy.png" />&nbsp;Cần trợ giúp?</span>
            </div>


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
                        <div className="chatSubmitButton">
                            <button type="submit">Send</button>
                        </div>
                    </div>
                </form>
            </div>}
        </>
    )
}
