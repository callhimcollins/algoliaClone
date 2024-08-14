import React from 'react'
import './RightButton.css'


const RightButton = ({ title, icon }) => {
  return (
    <div className='rightbutton'>
      <button>
        <p>{title}</p>
        {icon}
      </button>
    </div>
  )
}

export default RightButton
