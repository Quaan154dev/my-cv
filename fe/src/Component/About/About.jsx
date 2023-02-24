import React from 'react'
import "./About.scss"
import Avata from"../../assets/images/About__avata.jpg"
import CV from "../../assets/CV_DaoBaAnhQuan.pdf"

function About() {
  return (
    <>
    <div className="about " id='about'>
        <h3 className='about__title'>About Us</h3>
        <div className="about__profile ">
                <div className="about__img">
                    <img src={Avata} alt=""></img>
                </div>
                <div className="about__info flex flex-col">
                   <h1>Hi, I'm Quân</h1>
                   <h3>Frontend Developer</h3>
                   <p>My name is Đào Bá Anh Quân . I'm a sophomore at FPT University, Dang Nang, Viet Nam. With the experience of doing many real projects, I can create beautiful and accurate UI and the most logical UX for people to experience my product. I look forward to earning your trust and and  the same work with you ! </p>
                   <div className="about__skill">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>Javascript</span>
                        <span>SCSS</span>
                        <span>Responsive</span>
                        <span>ReactJS</span>
                        <span>GitHub</span>
                        <span>Tailwindcss</span>
                        <span>Figma</span>
                        <span>Photoshop</span>
                   </div>
                   <button className='button'>
                        <a href={CV} download>Download CV</a>
                        <div/>
                   </button>
                </div>
        </div>
    </div>
    </>
  )
}

export default About;