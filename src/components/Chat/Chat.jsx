import React from "react";
import clasess from './Chat.module.css'
const Chat = () => {

    return (
        <div className={clasess.wrapper}>
            <h2>#chatname</h2>

            <div className={clasess.messages}>
                <div>
                    messages
                </div>
                <div>
                    messages
                </div>
                <div>
                    messages
                </div>
                <div>
                    messages
                </div>
            </div>
            <div>
                <input type="text" />
                <button>send</button>

            </div>


        </div>


    )

}

export default Chat