import React from "react"
import Chats from "../../Data/Chats.js"
import ChatCard from "../ChatCard/ChatCard.jsx"

const ChatWall = ({memberId}) => {
    
    const cards = []
    const chat = Chats.find(chat => chat.memberId == memberId)
    const messages = chat.messages

    for (let i = 0; i < messages.length; i++) {
        cards.push(<ChatCard message={messages[i]}/>)
    }

    return (
        <div className="col-md-6 col-lg-7 col-xl-8">
            <ul className="list-unstyled">
                {
                    cards 
                }
                <li className="bg-white mb-3">
                    <div data-mdb-input-init className="form-outline">
                    <textarea className="form-control bg-body-tertiary" id="textAreaExample2" rows="4"></textarea>
                    <label className="form-label" for="textAreaExample2">Message</label>
                    </div>
                </li>
                <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-info btn-rounded float-end">Send</button>
            </ul>
        </div>
    )
}

export default ChatWall