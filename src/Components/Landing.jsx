import React from 'react'
import "../Styles/Landing.css";

function Landing() {
  return (
    <div className="landing section black" id="landing">
      <div className="grid">
        <div className="left">
          <h1>Alejandro Franco</h1>
        </div>
        <div className="right">
          <p>Full Stack Web Developer</p>
        </div>
      </div>
      <div>
        <a href="#bio">
          <img src="/arrow.png" className="down-arrow" alt="down arrow" />
        </a>
      </div>
    </div>
  )
}

export default Landing

