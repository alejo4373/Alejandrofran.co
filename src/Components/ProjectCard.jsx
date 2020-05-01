import React from 'react'

function ProjectCard({ project }) {
  const { title, description, imgUrl } = project
  return (
    <div className="project-card">
      <div className="inner-card">
        <div className="card-front">
          <img src={imgUrl} alt={title} />
        </div>

        <div className="card-back">
          <div className="project-info">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

