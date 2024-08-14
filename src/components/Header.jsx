import React, { useState, useEffect } from 'react'
import MiniHeader from './MiniHeader'
import algoliamain from '../assets/algolia-logo-pack/PNG/algoliamain.png'
import algoliasmall from '../assets/algolia-logo-pack/PNG/algoliasmall.png'
import { BiSearch } from "react-icons/bi";
import { AiOutlineCode } from "react-icons/ai";
import { HiOutlineLightningBolt } from "react-icons/hi";
import './Header.css'
import LeftButton from './LeftButton';
import RightButton from './RightButton';

const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.onscroll = function () {
      if(window.scrollY > 60) {
        setScrolled(true)
      } else setScrolled(false)
    }
  }, []);


  return (
    <div className={scrolled ? `headerwithshadow` : `header`}>
      <MiniHeader/>
      
      <div className='header__contentcontainer'>
        <img src={algoliamain} alt={algoliamain}/>

        <div className='header__links'>
          <a href="#">Platform</a>
          <a href="#">Pricing</a>
          <a href="#">Developers</a>
          <a href="#">Resources</a>
        </div>

        <div className='header__searchContainer'>
          <BiSearch color='#003FFF' size={20}/>
          <p>Search Algolia</p>
        </div>


        <div className='header__buttonContainer'>
          <LeftButton title={'GET A DEMO'} icon={<HiOutlineLightningBolt size={17} color='#003FFF'/>}/>
          <RightButton title={'START FREE'} icon={<AiOutlineCode color='white' size={18}/>}/>
        </div>

      </div>
    </div>
  )
}

export default Header
