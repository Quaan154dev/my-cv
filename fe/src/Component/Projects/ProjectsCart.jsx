import React from 'react'
import "./ProjectsCart.scss"

function ProjectsCart({title,techno,description,link,imageUrl}) {
  // console.log("!techno);
  return (
    <>
       <section className='project'>
               <div className="project__container flex flex-row ">
                  <div className="project__item   ">
                       <div className="project__content">
                          <label className='project__info__title'>{title}</label> 
                          <a href={link} className='project__img__container'>
                            <img className='project__img' src={imageUrl} alr={`img of:${title}`}></img>
                          </a>
                          <div className="project__show">
                             <a href={link}>
                                <i  className="fa-regular fa-circle-play"></i>       
                             </a>
                             <a href={link}>
                                <i id="icon__refo" className="fa-regular fa-circle-play"></i>
                             </a>
                          </div>

                       </div>
                      <p className='project__des'>{description}
                      </p>
                      <div className="project__skill">
                         {techno.map((item,index) => (
                           <span  
                           key={index}
                           className='project__info__techno'
                           >
                           {item}
                          </span>              
                            ))}
                      </div>
                      
                  </div>
               </div>

       </section>
    </>
  )
}

export default ProjectsCart