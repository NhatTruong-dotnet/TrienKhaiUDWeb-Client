import './messenger.css'
import Conversation from '../../components/conversations/Conversation'
import Message from '../../components/message/Message'
import ChatOnline from '../../components/chatOnline/ChatOnline'
import { useContext, useEffect, useState } from 'react'
import axios from "axios"
export default function Messenger() {

  const [conversations, setConversations] = useState([]);

  return (
    <>
      <div className='messengerAdmin'>
        <div className="chatMenuAdmin">
          <div className="chatMenuWrapperAdmin">
            <input type="text" placeholder='Search for friends' className='chatMenuInputAdmin' />
            {conversations.map((element) => (
              <Conversation conversation={element} />
            ))}
              <Conversation />
            
          </div>
        </div>
        <div className="chatBoxAdmin">
          <div className="chatBoxWrapperAdmin">
            <div className="chatBoxTopAdmin">
              <Message messageText="Đăng ký khóa học của thầy chưa"/>
              <Message own={true} messageText="Em chưa thầy ạ"/>
              <Message  messageText="Khóa học của thầy nó rất là hay luôn"/>
              <Message  messageText="Tổng hợp từ kinh nghiệm thực tế từ việc giảng dạy và đi làm của thầy"/>
              <Message own={true}  messageText="Nghe có vẻ hấp dẫn quá nhỉ"/>
              <Message  messageText="Đúng như vậy, chia sẻ kiến thức để giúp đỡ các em là chính"/>
              <Message  messageText="Những kiến thức này trên trường hầu như là không dạy"/>
              <Message own={true}  messageText="À thế à"/>
              <Message />
            </div>
            <div className="chatBoxBottomAdmin">
              <textarea className='chatMessageInputAdmin' placeholder='write something'></textarea>
              <button className='chatSubmitButtonAdmin'>Send</button>
            </div>
          </div>
        </div>
        <div className="chatOnlineAdmin">
          <div className="chatOnlineWrapperAdmin">
            <ChatOnline />
          </div>
        </div>
      </div>
    </>

  )
}
