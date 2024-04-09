import React from 'react'

const HouseSimpleIcon: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={`house-simple_icon ${className}`}
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 256 256'
    >
      <path d='M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z'></path>
    </svg>
  )
}

export default HouseSimpleIcon
