import React from 'react'
import SkillProgressBar from './SkillProgressBar';

const Skill = ({ skill }) => {
  const {
    svgIcon: SvgIcon,
    name,
    simpleName,
    level
  } = skill
  return (
    <li>
      <SvgIcon id={simpleName} className={'svg-logo'} />
      <h4>{name}</h4>
      <SkillProgressBar level={level} />
    </li>
  )
}

export default Skill
