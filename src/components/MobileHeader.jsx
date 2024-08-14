import React, { useEffect, useState } from 'react'
import './MobileHeader.css'
import algoliasmall from '../assets/algolia-logo-pack/PNG/algoliasmall.png'
import { CgMenu, CgSearch } from "react-icons/cg";


const MobileHeader = () => {
    const [show, setShow] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const controlNavbar = () => {
        if(typeof window !== 'undefined') {
            if(window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(false)
            } else { // if scroll up show the navbar
                setShow(true)
            }

            setLastScrollY(window.scrollY)
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar)
            return () => {
                window.removeEventListener('scroll', controlNavbar)
            }
        }
    }, [lastScrollY])


    return (
        <div className={show ? 'mobileheader' : 'mobileheader__hidden'}>
            <div className='mobileheader__left'>
                <img src={algoliasmall} alt={algoliasmall} />
                <CgMenu size={22}/>
                <h2>MENU</h2>
            </div>

            <div className='mobileheader__right'>
                <button><CgSearch size={18}/></button>
            </div>
        </div>
    )
}

export default MobileHeader
