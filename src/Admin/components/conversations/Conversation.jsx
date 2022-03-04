import "./conversation.css"
import {useEffect, useState} from "react";

export default function Conversation(conversation) {
  return (
    <div className="conversation" >
        <img src="https://www.w3schools.com/howto/img_avatar.png" className="conversationImg" alt="img Here" />
        <span className="conversationName">{conversation.conversation.gmail}</span>
    </div>
  )
}
