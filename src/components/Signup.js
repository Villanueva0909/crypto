import React from "react";
import "./Signup.css";
import Crypto from "../assets/mb.png";

const Signup = () => {
  return (
    <div className="signup">
      <div className="container">
        {/* left */}
        <div className="left">
          <img src={Crypto} alt="" />
        </div>

        {/* right */}
        <div className="right">
          <h2>Trade Anywhere..</h2>
          <p>
          All the power of DeCrypt's cryptocurrency exchange, in the palm of your hand. Download the DeCrypt mobile crypto trading app today.
          </p>
          <div className="input-container">
            
            <button className="btn">Download from Playstore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
