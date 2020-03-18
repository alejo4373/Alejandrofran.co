import React from 'react'
import '../Styles/Skills.css'
import JS from '../Logos/JS'
import Reactjs from '../Logos/Reactjs'
import Redux from '../Logos/Redux'
import Node from '../Logos/Node'
import SkillProgressBar from './SkillProgressBar'

function Skills() {
  return (
    <div className="skills section white">
      <h2 className="title">Skills</h2>
      <div class="content">
        <div className="left">
          <ul>
            <li>
              <JS id={'js'} className={'svg-logo'} />
            </li>
            <li>
              <Redux id={'redux'} className={'svg-logo'} />
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>
              <Reactjs id={'reactjs'} className={'svg-logo'} />
              <h4>React.js</h4>
              <SkillProgressBar level={95} />
            </li>
            <li>
              <Node id={'node'} className={'svg-logo'} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills

