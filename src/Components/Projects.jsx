import React from 'react'
import ProjectCard from './ProjectCard'
import FA from 'react-fontawesome'

const projects = [
  {
    title: "Foobar, Drinks & Sports",
    description: "Full-Stack Web App that enables sports fanatics to find establishments that will be showing a game or fight of their interest. Built with ReactJS and AWS as backend services.",
    imgUrl: "/images/foobar.png",
    live: "https://foobar-sports-and-beer.herokuapp.com/",
    repo: "http://github.com/alejo4373/foobar"
  },

  {
    title: "GAME ON, LET'S PLAY",
    description: "Full stack PWA that allows users to connect, play and rank in sport of their liking through a platform that allows them to find games to play wherever and whenever they want. Built with ReactJS, Node/ ExpressJS and PostgreSQL.",
    imgUrl: "/images/gameon.png"
  },
  {
    title: "ULTRAVOX, NYC MORE ACCESSIBLE",
    description: "Full stack web app that enables the visually impaired to access NYC MTA bus times with voice commands. Built with ReactJS leveraging the MTA Bus Time API",
    imgUrl: "/images/ultravox.png"
  },
  {
    title: "CONCENTRATION REACT WEB GAME",
    description: "A simple classic game built using just ReactJS and with a medieval theme featuring icons from Krzysztof Dycha. The goal of the game is to find the matching pairs as fast as possible",
    imgUrl: "/images/concentration.png"
  },
]

function Projects() {
  return (
    <div className="projects">
      <div className="inner-frame">
        <h2>Projects</h2>
        <FA name="rocket" />
        <div className="grid">
          {projects.map(p => <ProjectCard project={p} />)}
        </div>
      </div>
    </div>
  )
}

export default Projects

