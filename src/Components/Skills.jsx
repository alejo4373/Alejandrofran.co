import React from 'react'
import '../Styles/Skills.css'
import Skill from './Skill'
import {
  JS,
  Reactjs,
  Redux,
  Node,
  Express,
  Postgres,
  Git,
  GitHub,
  HTML5,
  CSS3,
  Aws,
  GraphQL,
  CLI,
  Heroku
} from '../Logos'

const skills = [
  { name: 'JavaScript ES5+', level: 95, svgIcon: JS },
  { name: 'Reactjs', level: 93, svgIcon: Reactjs },
  { name: 'Redux', level: 90, svgIcon: Redux },
  { name: 'Node.js', level: 95, svgIcon: Node },
  { name: 'Express.js', level: 95, svgIcon: Express },
  { name: 'PostgreSQL', level: 89, svgIcon: Postgres },
  { name: 'Git', level: 80, svgIcon: Git },
  { name: 'GitHub', level: 95, svgIcon: GitHub },
  { name: 'HTML5', level: 90, svgIcon: HTML5 },
  { name: 'CSS3', level: 75, svgIcon: CSS3 },
  { name: 'aws', level: 50, svgIcon: Aws },
  { name: 'UNIX/LINUX', level: 73, svgIcon: CLI },
  { name: 'GraphQL', level: 45, svgIcon: GraphQL },
  { name: 'Heroku', level: 78, svgIcon: Heroku }
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

