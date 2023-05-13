import React from "react";
import clasess from './Chat.module.css'
import MessageList from "./Message/MessageList";
import SendMessageForm from "./Form/SendMessageForm";
const Chat = () => {
    const messages = [{
        text:'11111',
        id:1,
        senderid:1,
    },{
        text:'2221111',
        id:2,
        senderid:2,
    },{
        text:'11113333331',
        id:3,
        senderid:3,
    },{
        text:'111144444441',
        id:4,
        senderid:4,
    },{
        text:'11115555555551',
        id:6,
        senderid:6,
    }]
    return (
        <div className={clasess.wrapper}>
            <h2>#chatname</h2>

            <MessageList messages={messages} />
            
            <SendMessageForm/>

        </div>


    )

}

export default Chat