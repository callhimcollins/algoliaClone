import React from 'react'
import './MiniHeader.css'
import { BsArrowRightShort } from "react-icons/bs";
import { RiUser3Line } from "react-icons/ri";
import { FiGlobe } from "react-icons/fi";
import { RxChevronDown } from "react-icons/rx";

const MiniHeader = () => {
  return (
    <div className='miniheader__maincontainer'>

      <div className='miniheader__contentcontainer'>
          <div className='miniheader__leftcontent'>
            <div>
              <p><span>Upcoming Event:  </span>Meet with us at ShopTalk March 26-29, Las Vegas </p>
            </div>

            <a href="#">Let's talk shop <BsArrowRightShort/> </a>
          </div>

          <div className='miniheader__rightcontent'>
            <a href="#">Company</a>
            <a href="#">Partners</a>
            <a href="#">Support</a>

            <div className='login'>
              <RiUser3Line color='#003FFF'/>
              <p>Login</p>
            </div>

            <div className='language'>
              <FiGlobe color='#003FFF'/>
              <p>Eng</p>
              <RxChevronDown/>
            </div>

            


          </div>
      </div>


    </div>
  )
}

export default MiniHeader
