import React from 'react'
import algoliarecommend from '../assets/algoliarecommend.svg'
import algoliafooterbottomlogo from '../assets/algolia-logo-pack/SVG/Algolia-mark-white.svg'
import { AiOutlineCode, AiFillCaretRight } from "react-icons/ai";
import { BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TfiLinkedin } from "react-icons/tfi";
import './Footer.css'

const Footer = () => {

  return (
    <footer>

      <div className='footer__SVGContainer'>
        <div className='footer__SVGContainer_word'>
          <h1>Enable anyone to build great Search & Discovery</h1>
        </div>

        <div className='footer__SVGContainer_button'>
          <button className='firstButton'>Start Free &nbsp; <AiOutlineCode color='white' size={20}/> </button>
          <button className='secondButton'> Get A Demo &nbsp; <AiOutlineCode color='black' size={20}/></button>
        </div>

        <div className='footer__SVGContainer_buttonMobile'>
          <button className='firstButton'>Start Free</button>
          <button className='secondButton'> Get A Demo</button>
        </div>
        
      </div>

      <div className='footer__algoliarecommend'>
        <img  src={algoliarecommend} alt={algoliarecommend} />
      </div>

    <div className='footer__topLinks'>
      <a href="#">Build Search & Discovery For Enterprises <AiFillCaretRight/> </a>
      <a href="#">PLATFORM & PRODUCTS - SEARCH API, RECOMMEND API & MORE <AiFillCaretRight/> </a>
      <a href="#">BUILD SEARCH & DISCOVERY ACROSS INDUSTRIES <AiFillCaretRight/> </a>
    </div>

    <div className='footer__mainLinks'>

      <div>
          <div className='footer__mainLink'>
              <h2>Products</h2>
              <div>
                <a href='#'>Overview</a>
                <a href='#'>Search API</a>
                <a href='#'>Recommend API</a>
                <a href='#'>Algolia AI search</a>
                <a href='#'>Pricing</a>
              </div>
            </div>
            
            <div className='footer__mainLink'>
              <h2>Industries</h2>
              <div>
                <a href='#'>Overview</a>
                <a href='#'>B2C ecommerce</a>
                <a href='#'>B2B ecommerce</a>
                <a href='#'>Marketplaces</a>
                <a href='#'>Saas</a>
                <a href='#'>Media</a>
                <a href='#'>Startups</a>
              </div>
            </div>
      </div>
      <div>
          <div className='footer__mainLink'>
              <h2>Solutions</h2>
              <div>
                <a href='#'>Overview</a>
                <a href='#'>Enterprise search</a>
                <a href='#'>Headless commerce</a>
                <a href='#'>Mobile & app search</a>
                <a href='#'>Voice search</a>
                <a href='#'>Image search</a>
              </div>
            </div>
            
            <div className='footer__mainLink'>
              <h2>Integrations</h2>
              <div>
                <a href='#'>Salesforce Commerce Cloud B2C</a>
                <a href='#'>Shopify</a>
                <a href='#'>Adobe Commerce</a>
                <a href='#'>Netlify</a>
                <a href='#'>Zendesk</a>
              </div>
            </div>
      </div>
      <div>
          <div className='footer__mainLink'>
              <h2>Developers</h2>
              <div>
                <a href='#'>Developer Hub</a>
                <a href='#'>Documentation</a>
                <a href='#'>Code Exchange</a>
                <a href='#'>Integrations</a>
                <a href='#'>UI Components</a>
                <a href='#'>Autocomplete</a>
                <a href='#'>Engineering Blog</a>
                <a href='#'>Discourse community</a>
                <a href='#'>Search API</a>
                <a href='#'>Recommend API</a>
                <a href='#'>Quick start guide</a>
                <a href='#'>API status</a>
                <a href='#'>For Open Source</a>
                <a href='#'>DocSearch</a>
              </div>
            </div>
            
            <div className='footer__mainLink'>
              <h2>Resources</h2>
              <div>
                <a href='#'>Resource center</a>
                <a href='#'>Blog</a>
                <a href='#'>Inspiration Library</a>
                <a href='#'>Market reports</a>
                <a href='#'>Customers</a>
                <a href='#'>Advocacy program</a>
                <a href='#'>Algolia Academy</a>
                <a href='#'>Customer Onboarding</a>
                <a href='#'>Merchandising Playbook</a>
                <a href='#'>Support center</a>
                <a href='#'>Demo request</a>
                <a href='#'>Algolia vs Elasticsearch</a>
                <a href='#'>Ecommerce Search Grader</a>
                <a href='#'>Ecommerce Search Audit</a>
                <a href='#'>Ecommerce Profit Simulator</a>
              </div>
            </div>
      </div>
      <div>
          <div className='footer__mainLink'>
              <h2>Distributed & Secure</h2>
              <div>
                <a href='#'>Global infrastructure</a>
                <a href='#'>Security & compliance</a>
                <a href='#'>Azure</a>
              </div>
            </div>
            
            <div className='footer__mainLink'>
              <h2>Company</h2>
              <div>
                <a href='#'>About Algolia</a>
                <a href='#'>Algolia news</a>
                <a href='#'>Leadership</a>
                <a href='#'>Events</a>
                <a href='#'>Careers</a>
                <a href='#'>Contact us</a>
                <a href='#'>Social impact</a>
                <a href='#'>Partners portal</a>
                <a href='#'>Partners directory</a>
              </div>


              <div className='footer__mainLink_socialContainer'>
                <h2>Social Networks</h2>

                <div>
                  <a href="#"> <TfiLinkedin size={14}/> </a>
                  <a href="#"> <BsTwitter size={14}/> </a>
                  <a href="#"> <FaFacebookF size={14}/> </a>
                  <a href="#"> <BsInstagram size={14}/> </a>
                  <a href="#"> <BsYoutube size={14}/> </a>
                </div>
              </div>
            </div>
      </div>
        

      </div>
      

      <div className='footer__bottom'>

        <div>
          <a href="#">Cookie settings</a>
          <a href="#"> Privacy policy</a>
          <a href="#">Terms of service</a>
          <a href="#">Acceptable use policy</a>
          <a href="#">Anti-Modern Slavery Statement</a>
        </div>

        <div className='footer__bottom_copyrights'>
            <img src={algoliafooterbottomlogo} alt={algoliafooterbottomlogo} />
        </div>

        <p>©2023 Algolia - All rights reserved.</p>


      </div>

    </footer>
  )
}

export default Footer
