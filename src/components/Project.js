import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

//{description, title, github, stack, url, image, index}
const Project = (props) => {
  return <article className="project">
    <Image fluid={props.image.childImageSharp.fluid} className="project-img" />
    <div className="project-info">
      <span className="project-number">0{props.index + 1}.</span>
      <h3>{props.title}</h3>
      <p className="project-desc">
        {props.description}
      </p>
      <div className="project-stack">
        {props.stack.map((item) => {
          return <span key={item.id}>{item.title}</span>
        })}
      </div>
      <div className="project-links">
        <a href={props.github}>
          <FaGithubSquare className="project-icon" />
        </a>
        <a href={props.url}>
          <FaShareSquare className="project-icon" />
        </a>
      </div>
    </div>
  </article>
}

Project.propTypes = {}

export default Project
