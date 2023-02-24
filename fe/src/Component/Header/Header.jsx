import Logo from"../../assets/images/Logo.png"
import { Route, Routes } from "react-router";
import React, { useEffect, useState , useRef} from "react";
import { Link } from "react-router-dom";
import "./Header.scss"

function Header() {
  const [isMobileMenu,setIsMobileMenu] = useState(false); 
  const handleClick = () => {
     setIsMobileMenu(!isMobileMenu);
  }

  return (
  <div className="header flex flex-row">
    <a href="#" className="header__logo">
          <img src={Logo} alt=""></img>
    </a>
    <div className="header__nav flex flex-row">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
    </div>
    {/* className="header__icon flex flex-row"  */}
    <nav 
    className={isMobileMenu ? "header__icon active" : "header__icon" }
    >
            <a href="https://www.facebook.com/profile.php?id=100022877893393">
               <i className="fa fa-facebook-square active" id="facebook"></i>
            </a>

            <a href="https://github.com/Quaan154dev active">
              <i className="fa fa-github-square github" id="github"></i>
            </a>    

            <a href="">
              <i className="fa-brands fa-youtube active" id="youtobe"></i>
            </a> 

            <a href="https://twitter.com/QunoBAnh2">
              <i className="fa fa-twitter active" id="twitter"></i>
            </a>     

    </nav>
    <div className='header__mobile' 
    onClick={() => setIsMobileMenu(!isMobileMenu)}
    >
        {
        isMobileMenu 
        ? <i className="fa-solid fa-bars"></i> 
        : <i className="fa-solid fa-xmark"></i>
        }    
    </div>
</div>
  )
}

export default Header