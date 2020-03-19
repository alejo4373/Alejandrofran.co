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
  { name: 'JavaScript ES5+', simpleName: 'js', level: 95, svgIcon: JS },
  { name: 'React.js', simpleName: 'react', level: 93, svgIcon: Reactjs },
  { name: 'Redux', simpleName: 'redux', level: 90, svgIcon: Redux },
  { name: 'Node.js', simpleName: 'node', level: 95, svgIcon: Node },
  { name: 'Express.js', simpleName: 'express', level: 95, svgIcon: Express },
  { name: 'PostgreSQL', simpleName: 'postgres', level: 89, svgIcon: Postgres },
  { name: 'Git', simpleName: 'git', level: 80, svgIcon: Git },
  { name: 'GitHub', simpleName: 'github', level: 95, svgIcon: GitHub },
  { name: 'HTML5', simpleName: 'html5', level: 90, svgIcon: HTML5 },
  { name: 'CSS3', simpleName: 'css3', level: 75, svgIcon: CSS3 },
  { name: 'aws', simpleName: 'aws', level: 50, svgIcon: Aws },
  { name: 'UNIX/LINUX', simpleName: 'unix-linux', level: 73, svgIcon: CLI },
  { name: 'GraphQL', simpleName: 'graphql', level: 45, svgIcon: GraphQL },
  { name: 'Heroku', simpleName: 'heroku', level: 78, svgIcon: Heroku }
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

