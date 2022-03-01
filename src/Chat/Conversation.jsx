import { useState } from 'react'
import MessageBoard from './components/messageBoard/MessageBoard'
import './conversation.css'

export default function Conversation() {
    const [showModal, setShowModal] = useState(false);

    function openMessageBoard(){
        setShowModal(!showModal);  
    }
    return (
        <>
        {showModal && <MessageBoard />}
            <div className="bubble" onClick={openMessageBoard}>
                <span><img src="https://img.icons8.com/ios/27/000000/lifebuoy.png" />&nbsp;Cần trợ giúp?</span>
            </div>
        </>
    )
}
