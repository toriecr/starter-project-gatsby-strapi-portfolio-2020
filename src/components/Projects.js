import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"

//{projects, title, showLink}
const Projects = (props) => {
  return (
    <section className="section projects">
      <Title title={props.title} />
      <div className="section-center projects-center">
        {
          props.projects.map((project, index)=>{
            return <Project key={project.id} index={index} {...project} />
          })
        }
      </div>
      {
        props.showLink && (
          <Link to="/projects" className="btn center-btn">
            projects
          </Link>
        )
      }
    </section>
  )
  
}

export default Projects
