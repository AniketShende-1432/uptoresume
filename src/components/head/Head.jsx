import React from 'react';
import "./head.css";
import Gbutton from '../GenerateB/Gbutton';
const Head = () => {
  return (
    <div>
        <div className="bigdiv">
            <div className="box">
                <div className="drive">
                    <h1>Drive your career
                    forward with our Resume Builder</h1>
                </div>
                <div className="confused">
                <p>Confused about how to create a stunning resume? No Worries! Our Resume Writer is here for you.</p>
                </div>
                <Gbutton />
                <div className="trusted">
                    <h4>Trusted by candidates at these companies</h4>
                </div>
                <div className="img">
                    <img src="https://cdn.apna.co/career-compass-static/paytm.svg?fm=webp" alt="paytm" />
                    <img src="https://cdn.apna.co/career-compass-static/flipkart.svg?fm=webp"alt="flipkart" />
                    <img src="https://cdn.apna.co/career-compass-static/uberLogo.svg?fm=webp"alt="uber" />
                    <img src="https://cdn.apna.co/career-compass-static/swiggyLogo.svg?fm=webp"alt="swiggy" />
                </div>
            </div>
            <div className="box1">
            </div>
        </div>
    </div>
  )
}

export default Head