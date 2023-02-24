import React from 'react'
import "./Footer.scss"

function Footer() {
  return (
    <div className="footer " id='footer'>
       <p>--Copyright By <span>❤️</span> A.Quân 2023--</p>
       <a className='footer__icon' href='#'>
           <i className="fa-solid fa-circle-chevron-up"></i>
       </a>
    </div>
  )
}

export default Footer