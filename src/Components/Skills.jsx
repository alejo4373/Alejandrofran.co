import React from 'react'
import '../Styles/Skills.css'
import Skill from './Skill'
import { JS, Reactjs, Redux, Node, Postgres, Git, GitHub, HTML5, CSS3 } from '../Logos'

const skills = [
  { name: 'JavaScript ES5+', level: 95, svgIcon: JS },
  { name: 'Reactjs', level: 93, svgIcon: Reactjs },
  { name: 'Redux', level: 90, svgIcon: Redux },
  { name: 'Express.js', level: 95, svgIcon: Node },
  { name: 'PostgreSQL', level: 89, svgIcon: Postgres },
  { name: 'Git', level: 80, svgIcon: Git },
  { name: 'GitHub', level: 95, svgIcon: GitHub },
  { name: 'HTML5', level: 90, svgIcon: HTML5 },
  { name: 'CSS3', level: 75, svgIcon: CSS3 },
  { name: 'aws', level: 50, svgIcon: Node },
  { name: 'UNIX/LINUX', level: 73, svgIcon: Node },
  { name: 'GraphQL', level: 45, svgIcon: Node }
]


function Skills() {
  return (
    <div className="skills section white">
      <h2 className="title">Skills</h2>
      <ul class="content">
        {skills.map(skill => (
          <Skill skill={skill} />
        ))}
      </ul>
    </div >
  )
}

export default Skills

