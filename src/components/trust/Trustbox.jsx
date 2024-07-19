import React from 'react'

const Trustbox = ({img,head,parag}) => {
  return (
    <div className="box5">
            <img src={img}/>
            <div className="head">
                <h1>{head}</h1>
            </div>
            <div className="para">
                <p>{parag}</p>
            </div>
    </div>
  )
}

export default Trustbox