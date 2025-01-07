import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon}/>
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon}/>
                </div>
                <div className="card">
                    <p>Briefly summarize this concept: urban planning</p>
                    <img src={assets.bulb_icon}/>
                </div>
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.message_icon}/>
                </div>
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.code_icon}/>
                </div>

            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type='text' placeholder='Enter a prompt here'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, harum, facilis debitis assumenda ratione obcaecati at nisi officiis vitae consequuntur excepturi quia quaerat minus omnis illo quam dignissimos molestiae blanditiis.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main