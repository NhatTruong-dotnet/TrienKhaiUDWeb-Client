import './messenger.css'
import Conversation from '../../components/conversations/Conversation'
import Message from '../../components/message/Message'
import ChatOnline from '../../components/chatOnline/ChatOnline'
import { useContext, useEffect, useRef, useState } from 'react'
import axios from "axios"
export default function Messenger() {

  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [fetchMessagesByEmail, setEmail] = useState('');
  const [messageSendSucess, setMessageSendSucess] = useState(false);
  let currentUser = JSON.parse(localStorage.getItem('user'));
  let userToFetchConversation = '';
  let messageSend = useRef();

  try {
    userToFetchConversation = currentUser.userToFetchConversation;
  } catch (error) {
    let guestInfo = {
      "userToFetchConversation": "",
      "gmail": "admin@gmail.com"
    }
    localStorage.setItem('user', JSON.stringify(guestInfo))
  }

  useEffect(() => {
    //https://dmitripavlutin.com/react-useeffect-infinite-loop/

    const getConversations = async () => {
      try {
        const res = await axios.get("https://serverbookstore.herokuapp.com/api/conversations/");
        setConversations(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getConversations();
  }, []);

  useEffect(() => {
    //https://dmitripavlutin.com/react-useeffect-infinite-loop/
    const getConversations = async () => {
      try {
        currentUser = JSON.parse(localStorage.getItem('user'));
        userToFetchConversation = currentUser.userToFetchConversation;
        const res = await axios.get("https://serverbookstore.herokuapp.com/api/conversations/" + userToFetchConversation);
        setMessages(res.data[0].messages);
      } catch (error) {
          console.log(error);
      }
    }
    getConversations();}, [fetchMessagesByEmail,messageSendSucess]
  );

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" })}, [messages]
  );

  function fetchMessageFromConversation(gmail) {
    let guestInfo = {
      "userToFetchConversation": gmail,
      "gmail": "admin@gmail.com"
    }
    localStorage.setItem('user', JSON.stringify(guestInfo))
    setEmail(gmail);
  }

  async function  sendMessage(){
    try {
        currentUser = JSON.parse(localStorage.getItem('user'))
        const message = {gmail: currentUser.gmail, messageText:messageSend.current.value}
        const res = await axios.post("https://serverbookstore.herokuapp.com/api/conversations/"+currentUser.userToFetchConversation,message).then(() => setMessageSendSucess(!messageSendSucess));
        document.getElementById('chatMessageInputAdmin').value = '';
    } catch (error) {
        console.log(error);
    }
}
  return (
    <>
      <div className='messengerAdmin'>
        <div className="chatMenuAdmin">
          <div className="chatMenuWrapperAdmin">
            <input type="text" placeholder='Search for friends' className='chatMenuInputAdmin' />
            {
              conversations.map((element) => {

                return <div onClick={() => fetchMessageFromConversation(element['gmail'])}>
                  <Conversation key={element['gmail']} conversation={element} />
                </div>
              })
            }

          </div>
        </div>
        <div className="chatBoxAdmin">
          <div className="chatBoxWrapperAdmin">
            <div className="chatBoxTopAdmin">
              {
                messages.map((element, i) => {
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
            <div className="chatBoxBottomAdmin">
              <textarea className='chatMessageInputAdmin'  ref={messageSend} placeholder='write something'></textarea>
              <button className='chatSubmitButtonAdmin' onClick={sendMessage}>Send</button>
            </div>
          </div>
        </div>
        
      </div>
    </>

  )
}
