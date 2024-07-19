import React from 'react'
import "./work.css";
import Gbutton from '../GenerateB/Gbutton';
import Workbox from './Workbox';
let work1=["box2","Step 1: Choose a template",
    "Discover templates for various styles and industries to make a lasting impression."
]
let work2=["box3","Step 2: Enter your details"
    ,"Input your information and let our tool guide you, ensuring no details are missed."
]
let work3=["box4","Step 3: Review & download resume",
    "Ensure perfection in every section with a review before downloading your winning copy."
]
const Work = () => {
  return (
    <>
        <div className="work">
            <h1>How does it work?</h1>
        </div>
        <div className="resume">
            <Workbox name={work1[0]} step={work1[1]} parag={work1[2]}/>
            <Workbox name={work2[0]} step={work2[1]} parag={work2[2]}/>
            <Workbox name={work3[0]} step={work3[1]} parag={work3[2]}/>
        </div>
        <div className="button1">
            <Gbutton />
        </div>
    </>
  )
}

export default Work