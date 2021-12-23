import React from 'react'
import Typical from 'react-typical'

export default function Profile() {
    return (
        <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    {/* <a href='#'>
                        <i className='fa fa-instagram'></i>
                    </a> */}
                    <a href='https://www.youtube.com/channel/UCKNL0ZMFc0ELUTxp5mxHkVg'>
                        <i className='fa fa-youtube-square'></i>
                    </a>
                    <a href='https://twitter.com/AJDavis63561360'>
                        <i className='fa fa-twitter'></i>
                    </a>
                </div>
                <div className='profile-detail-name'>
                    <span className='primary-text'>
                        {" "}
                        Hello, I'M <span className='highlighted-text'>Alexander J. Davis</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                        {" "}
                        <Typical
                            loop={Infinity}
                        // array of items-- items to be displayed
                        steps={[
                           
                            "Full-Stack Web Developer 🖥 ",
                            1000,
                            "M.B.A. 📜 ",
                            1000,
                            "MERN Stack Developer 🖱",
                            1000,
                            "SQL Developer 🔴",
                            1000,
                            "NoSQL Developer 📱",
                            1000,
                        ]}
                        />
                        </h1>
                        <span className='profile-role-tagline'>
                            Building applications with front and back-end skils.
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primar-btn'> 
                    {" "}
                    Hire Me {" "}
                    </button>
                    <a href='resumehere' download='full stack resum.pdk'>
                        <button className='btn highlighted-btn'>Get Resume</button> 
                    </a>
                </div>
            </div>
        </div>
        </div>
    )
}
