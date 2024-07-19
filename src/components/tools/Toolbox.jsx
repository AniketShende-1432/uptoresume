import React from 'react'
const Toolbox = ({img,head,parag}) => {
  return (
    <div className="tool">
        <img src={img} alt="Resume Checker" />
        <h3>{head}</h3>
        <p>{parag}</p>
        <a href="#">Learn more</a>
    </div>
  )
}

export default Toolbox