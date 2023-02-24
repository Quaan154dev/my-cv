import React from 'react'
import "./Projects.scss"
import ProjectsCart from "./ProjectsCart"

function Projects({data}) {
  return (
    <>
    <div className='projects flex ' id='project'>
      <div className="projects__container">
        <p className='projects__title'>Projects</p>
        <div className="projects__item ">
           {data.map((item) => {
              return(
                <div key={item.id} className="">
                    <ProjectsCart
                       title = {item.title}
                       techno={item.techno}
                       description={item.description}
                       link={item.link}
                       imageUrl={item.imageUrl}
                    ></ProjectsCart>
                </div>
              )
           })}  
        </div> 

      </div>
    </div>
    </>
  )
}

export default Projects