import React from 'react'
import slideimage1 from '../assets/slideimage1.png'
import harry from '../assets/harry.webp'
import { AiFillCaretRight } from 'react-icons/ai'
import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi'
import './Testimony.css'

const Testimony = ({ image, logo, testimony, name, role }) => {
  return (
    <div className='testimony'>
        
        <div className='navigationContainer'>
            <a className='navigateLeft' href="#"><HiArrowNarrowLeft color='white' size={23}/></a>
        </div>

        <img src={slideimage1} alt={slideimage1} />

        <div className='testimony__contentContainer'>
            <img src={harry} alt={harry} />
            <p>“With a simple implementation we’ve been able to get very good results. Dynamic Re-Ranking has been a big part of our growth. That has been a massive benefit for us time as we don’t have to manually add rules while providing a positive customer experience.”</p>

            <div className='testimony__user'>
                <p>Gareth Cotiss</p>
                <span>E-commerce Development Manager @Co-Op</span>
            </div>

            <a href="#">CASE STUDY <AiFillCaretRight/> </a>
        </div>

        <div className='navigationContainer'>
            <a className='navigateRight' href="#"><HiArrowNarrowRight color='white' size={23}/></a>
        </div>
    </div>
  )
}

export default Testimony
