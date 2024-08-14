import React from 'react'
import { BiGlobe } from 'react-icons/bi'
import { AiFillCaretRight } from 'react-icons/ai'
import './EnterpriseFeature.css'

const EnterpriseFeature = ({ icon, title, content, linkname, link }) => {
  return (
    <div className='enterprisefeature'>
      <div>
        {icon}
      </div>
      <p>{title}</p>
      <span>{content}</span>
      { link && linkname && <a href={link}>{ linkname }&nbsp; <AiFillCaretRight size={14}/> </a>}
    </div>
  )
}

export default EnterpriseFeature
