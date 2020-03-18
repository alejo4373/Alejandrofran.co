import React from 'react'

const SkillProgressBar = ({ level }) => {
  return (
    <div className='progress-bar'>
      <div className='progress-value' style={{ width: `${level}%` }}></div>
    </div>
  )
}

export default SkillProgressBar
