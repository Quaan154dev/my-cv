import React from 'react'
import "./Nav.scss"

function Nav() {
  return (
    <div className="nav">
        <nav className="nav__album">
            <ul>
                <li>
                   <a href="#">
                    <i className="fa-solid fa-house"></i>
                   </a>
                </li>
                <li>
                  <a href="#about">
                    <i className="fa-solid fa-user"></i>
                  </a>
                </li>
                <li>
                  <a href="#project">
                  <i class="fa-brands fa-product-hunt"></i>
                  </a>
                </li>
                <li>
                  <a href="#contact">
                  <i class="fa-regular fa-handshake"></i>
                  </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav