import React, { useState } from "react"
import MemberList from "../Components/MemberList/MemberList"
import ChatWall from "../Components/ChatWall/ChatWall"

const Chat = () => {
    const [memberId, setMemberId] = useState(1)

    return(
        <section>
            <div className="container py-5">
                <div className="row">
                    <MemberList setMemberId={setMemberId}/>
                    <ChatWall memberId={memberId}/>
                </div>
            </div>
            </section>
    )
}

export default Chat