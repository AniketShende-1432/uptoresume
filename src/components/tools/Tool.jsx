import React from 'react'
import "./tool.css";
import img3 from "../../images/img3.jpg";
import img5 from "../../images/img5.jpg";
import imgg from "../../images/imgg.jpg";
import Toolbox from './Toolbox';
let tool1=["Resume Checker",
    "Instantly enhance your resume. Our checker suggests improvements for maximum impact."
]
let tool2=["Cover Letter Generator",
    "Craft compelling cover letters with ease, tailored to your experience and skills.",
]
let tool3=["Interview",
    "Prepare for successful interview strategies, practice questions, and get hired."
]
const Tool = () => {
  return (
    <div className="tools-container">
        <h2>Discover more tools</h2>
        <div className="tools">
            <Toolbox img={imgg} head={tool1[0]} parag={tool1[1]}/>
            <Toolbox img={img3} head={tool2[0]} parag={tool2[1]}/>
            <Toolbox img={img5} head={tool3[0]} parag={tool3[1]}/>
        </div>
    </div>
  )
}

export default Tool