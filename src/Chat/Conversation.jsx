import MessageBoard from './components/messageBoard/MessageBoard'
import './conversation.css'

export default function Conversation() {
    return (
        <>
        <MessageBoard />
            <div className="bubble">
                <span><img src="https://img.icons8.com/ios/27/000000/lifebuoy.png" />&nbsp;Cần trợ giúp?</span>
            </div>
        </>
    )
}
