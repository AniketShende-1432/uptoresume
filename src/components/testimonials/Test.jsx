import React from 'react'
import "./test.css";
import Testbox from './Testbox';
let test1=["★★★★☆ 4/5","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, dolor vel laborum repellendus eaque dolores natus rerum sit? Aut soluta id ad saepe tempora sequi obcaecati! Ratione ea commodi itaque.",
    "Satya Varma, Web Development Intern"
]
let test2=["★★★★★ 5/5","Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at mollitia tenetur? Veniam fugit officia cupiditate nesciunt quaerat id impedit sed exercitationem sunt enim sint laborum vel, cumque quos ducimus!",
    "Satya Varma, Web Development Intern"
]
let test3=["★★★★☆ 4/5","Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit expedita sunt impedit mollitia perspiciatis velit non fugiat, ratione quod vel? Neque commodi autem tempora nostrum similique quidem odit quibusdam pariatur.",
    "Satya Varma, Web Development Intern"
]
const Test = () => {
  return (
    <div className="testimonials-container">
        <h2>Why our customers love us</h2>
        <div className="testimonials">
            <Testbox star={test1[0]} para={test1[1]} parag={test1[2]}/>
            <Testbox star={test2[0]} para={test2[1]} parag={test2[2]}/>
            <Testbox star={test3[0]} para={test3[1]} parag={test3[2]}/>
            <div className="testimonial-page" id="page-2"> 
            </div>
        </div>
        <div className="navigation">
            <button className="prev" id="prev">❮</button>
            <span id="page-number">1/2</span>
            <button className="next" id="next">❯</button>
        </div>
    </div>
  )
}

export default Test