import React from 'react'
import '../Styles/ToolBelt.css'
import BeltItem from './BeltItem'
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
  Heroku,
  Jest,
  VScode,
  Vim,
} from '../Logos'

const client = [
  { id: 'js', name: 'JavaScript', svgIcon: JS },
  { id: 'html5', name: 'HTML5', svgIcon: HTML5 },
  { id: 'css3', name: 'CSS3', svgIcon: CSS3 },
  { id: 'react', name: 'React.js', svgIcon: Reactjs },
  { id: 'redux', name: 'Redux', svgIcon: Redux },
  { id: 'jest', name: 'Jest', svgIcon: Jest }
]

const server = [
  { id: 'node', name: 'Node.js', svgIcon: Node },
  { id: 'express', name: 'Express.js', svgIcon: Express },
  { id: 'postgres', name: 'PostgreSQL', svgIcon: Postgres },
  { id: 'graphql', name: 'GraphQL', svgIcon: GraphQL },
]

const devOps = [
  { id: 'unix-linux', name: 'Unix/Linux', svgIcon: CLI },
  { id: 'git', name: 'Git', svgIcon: Git },
  { id: 'github', name: 'GitHub', svgIcon: GitHub },
  { id: 'vscode', name: 'VS Code', svgIcon: VScode },
  { id: 'vim', name: 'Vim', svgIcon: Vim }
]

const deploymentPlatforms = [
  { id: 'heroku', name: 'Heroku', svgIcon: Heroku },
  { id: 'aws', name: 'aws', svgIcon: Aws },
]

const toolbelt = [
  { name: "Client-side", items: client },
  { name: "Server-side", items: server },
  { name: "Deployment", items: deploymentPlatforms },
  { name: "DevOps Tools", items: devOps }
]

function ToolBelt() {
  return (
    <div className="toolbelt section white" id="toolbelt">
      <h2 className="title">Tool Belt</h2>{
        toolbelt.map(section => (
          <div className="belt-section">
            <h3>{section.name}</h3>
            <ul className="items">
              {section.items.map(item => (
                <BeltItem item={item} />
              ))}
            </ul>
          </div>
        ))
      }
    </div >
  )
}

export default ToolBelt

