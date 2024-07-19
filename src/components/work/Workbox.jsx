import React from 'react'

const Workbox = ({name,step,parag}) => {
  return (
    <div className={name}>
        <h1>{step}</h1>
        <p>{parag}</p>
    </div>
  )
}

export default Workbox