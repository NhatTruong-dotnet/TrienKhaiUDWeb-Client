import './message.css'

export default function Message(props) {
  return (
    <div className={props.own ? "message own" : "message"}>
        <div className="messageTop">
            <img className="messageImg" src="https://i.pinimg.com/564x/c3/79/49/c3794917aa6933755fce6ce23061aee3.jpg" alt="img here" />
            <p className="messageText">{props.messageText}Text text Text textText text Text textText text Text text</p>
        </div>
        <div className="messageBottom">1 hour ago</div>
    </div>
  )
}
