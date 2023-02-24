import React from 'react'
import "./Banner.scss"

function Banner() {
  return (
    <>
    <div className="banner flex flex-col">
        <div className="banner__album">
              <div className="banner__item">
                  <h2>Achievements 1</h2>
              </div>
              <div className="banner__item">
                 <h2>Achievements 2</h2>
              </div>
              <div className="banner__item">
                 <h2>Achievements 3</h2>
              </div>
              <div className="banner__item">
                 <h2>Achievements 4</h2>
              </div>
              <div className="banner__item">
                 <h2>Achievements 5</h2>
              </div>
        </div>
        <div className="banner__info">
                <div className="banner__key__down flex flex-row ">
                    <span href="" className="banner__mouse-icon">
                        <i className="fa-solid fa-computer-mouse"></i>
                    </span>
                    <span  className="banner__mouse__title">Scroll down</span>
                    <span className="banner__icon">
                        <i className="fa-solid fa-arrows-up-down"></i>
                    </span>
                </div>
        </div>
    </div>
    </>

  )
}

export default Banner