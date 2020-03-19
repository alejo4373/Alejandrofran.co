import React from 'react'

const CLI = ({ className, id }) => {
  return (
    <svg className={className} id={id} viewBox="0 0 65 65" >
      <rect width="65" height="65" />
      <path
        transform="translate(-15.5,10)"
        d="m24.427.7v3.3l8.9 5.2-8.9 5.2v3.3l14.8-8.5zm14.7 14.4v3h14.8v-3z"
        fill="#ecf0f1" />
    </svg >
  )
}

export default CLI

