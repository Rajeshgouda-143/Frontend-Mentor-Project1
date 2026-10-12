import React from 'react';
import "./Card.css";
import logo from "../../assets/images/avatar-jessica.jpeg";

const Card = () => {
  return (
    <div>
        <div className="container">
            <div className="logo">
                <img src={logo} alt="logo-image" />
            </div>

            <div className="title">
                <h1>Jessica Randall</h1>
                <p>london, United Kingdom</p>
            </div>

            <div className="skill">
                <p>"Front-end developer and avid reader."</p>
            </div>

            <div className="available">
                <button>GitHub</button>
                <button>Frontend Mentor</button>
                <button>LinkedIn</button>
                <button>Twiter</button>
                <button>Instagram</button>
            </div>
        </div>
    </div>
  )
}

export default Card