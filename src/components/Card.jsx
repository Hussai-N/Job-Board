import React from 'react'

const Card = ({ children, bg = 'bg-gray-200' }) => {
  return (
    <div className={`p-6 rounded-lg shadow-md ${bg}`}>
      {children}
    </div>
  )
}

export default Card
