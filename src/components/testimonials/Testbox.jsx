import React from 'react'
import img1 from "../../images/img1.jpg";
const Testbox = ({star,para,parag}) => {
  return (
    <div className="testimonial">
        <div className="stars">{star}</div>
        <p>{para}</p>
        <div className="customer-info">
            <img src={img1} alt="A" />
            <div className="customer-details">
                <p>{parag}</p>
            </div>
        </div>
    </div>
  )
}

export default Testbox