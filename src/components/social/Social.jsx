import React from 'react'
import "./social.css";
const Social = () => {
  return (
    <div className="social">
        <div className="media">
            <div className="logo">
                <div className="img-box">
                    <img src="https://cdn.razorpay.com/logos/Gp0GT4PUulocmO_large.jpg" />
                </div>
                <div className="icon-box">
                   <b> <p>Follow us on social media</p></b> 
                   <div className="icons">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-linkedin"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-youtube"></i>
                   </div>
                </div>
            </div>
            <div className="right">
                <div className="right-box">
                    <a href="#">© 2024 Apna | All rights reserved</a>
                </div>
                <div className="right-box">
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="right-box">
                    <a href="#">Terms & Condition</a>
                </div>
            </div>
        </div>

    </div>

  )
}

export default Social