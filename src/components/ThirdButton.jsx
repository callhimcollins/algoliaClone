import React from 'react'
import './ThirdButton.css'

const ThirdButton = ({ title, icon }) => {
  return (
    <div className='thirdbutton'>
      <button> 
        <p>{title}</p>
        {icon}
      </button>
    </div>
  )
}

export default ThirdButton
