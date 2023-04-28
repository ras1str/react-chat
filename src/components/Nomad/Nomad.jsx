import React from "react";
import clasess from "./Nomad.module.css"


const Nomad = () => {

    const channels  = ['#first', '#second', '#third']
    const friends = ['Orlno Iggs', 'Orlano Dig', 'Alex Lee', 'Marie Jense']

    return (

        <nav className={clasess.nav}>
            <h2 className={clasess.name}>Nomad List</h2>

            <div>
                <div className={clasess.channel}>
                    <h3 >Channels</h3>
                    <h3>3</h3>
                </div>
                <ul className={clasess.channels}>
                    {
                        channels.map((item) => {

                           return  <li key ={item}>{item}</li>

                        })
                        
                    }
                </ul>
            </div>

            <div>
               <div className={clasess.friend}>
                 <h3>Friends</h3>
                <h3>4</h3>
                </div>
                <ul className={clasess.friends}>
                    {friends.map(friend => {
                       return <li key={friend}>{friend}</li>
                    })}
                </ul>
            </div>
        </nav>

    )


}

export default Nomad