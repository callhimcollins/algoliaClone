import React from 'react'
import './LeftButton.css'

const LeftButton = ({ title, icon }) => {
  return (
    <div className='leftbutton'>
      <button> 
        <p>{title}</p>
        {icon}
      </button>
    </div>
  )
}

export default LeftButton
