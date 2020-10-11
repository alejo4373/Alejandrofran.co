import React from 'react'
import ProjectCard from './ProjectCard'
import '../Styles/Projects.css';

const projects = [
  {
    title: "Covidit.world",
    description: "A website to share aspirations, reflections and appreciations through a post it note with the world after and during the COVID-19 Pandemic. There are three categories under which you can share a note, Want to Do, Learned & Grateful For.",
    imgUrl: "/images/covidit.png",
    live: "https://covidit.world/",
    repo: "http://github.com/alejo4373/covid-it"
  },
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
    <div className="projects section black" id="projects">
      <h2 className="title">Projects</h2>
      <div className="grid-container" >
        <div className="grid">
          {projects.map(p => <ProjectCard project={p} />)}
        </div>
      </div>
    </div>
  )
}

export default Projects

