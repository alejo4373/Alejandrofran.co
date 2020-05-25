import React from 'react'
import { GitHub, Rocket } from '../Logos';

function ProjectCard({ project }) {
  const { title, description, imgUrl, live, repo } = project
  return (
    <div className="project-card">
      <div className="pulsating-border"></div>
      <div className="inner-card">
        <div className="card-front">
          <img src={imgUrl} alt={title} />
        </div>

        <div className="card-back">
          <div className="project-info">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="links">
              <a href={repo}>
                <GitHub className="small-icon" />
                <p>GitHub</p>
              </a>
              <a href={live}>
                <Rocket className="small-icon" />
                <p>Live</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

