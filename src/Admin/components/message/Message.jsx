import './message.css'

export default function Message(props) {
  return (
    <div className={props.own ? "message own" : "message"}>
        <div className="messageTop">
            <img className="messageImg" src="" alt="img here" />
            <p className="messageText">{props.messageText}</p>
        </div>
        <div className="messageBottom">1 hour ago</div>
    </div>
  )
}
