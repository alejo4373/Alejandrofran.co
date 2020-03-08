import React from 'react'

function ProjectCard({ project }) {
  const { title, description, imgUrl } = project
  return (
    <div className="project-card">
      <img src={imgUrl} />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard

