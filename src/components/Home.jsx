import React, { useState } from 'react'
import { BiChevronLeft, BiChevronRight, BiGlobe, BiTrendingUp } from 'react-icons/bi'
import { AiFillCaretRight, AiOutlineCode, AiOutlineGithub } from "react-icons/ai";
import { HiOutlineBookOpen, HiOutlineLightningBolt } from "react-icons/hi";
import { RiLayout5Line, RiPulseLine, RiSettings5Line } from "react-icons/ri";
import { HiChevronRight } from "react-icons/hi";
import { TbServer } from "react-icons/tb";
import { FiTarget } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import Header from './Header'
import LeftButton from './LeftButton'
import RightButton from './RightButton'
import detailImage from '../assets/algoliamain.avif'
import connectionImage from '../assets/banner-image.avif'
import gymshark from '../assets/gymshark.svg'
import mercari from '../assets/mercari.svg'
import globe from '../assets/globehomepage.avif'
import './Home.css'
import ThirdButton from './ThirdButton';
import Testimony from './Testimony';
import EnterpriseFeature from './EnterpriseFeature';
import { BsCode, BsFillShieldFill } from 'react-icons/bs';
import Footer from './Footer';
import MobileHeader from './MobileHeader';


const developerSectionData = [
  {
    icon: <AiOutlineCode/>,
    title: 'Developer Hub',
    content: `Explore all the API clients, UI components & integrations to build search & discovery experiences.`,
    link: `#`,
  },
  {
    icon: <HiOutlineBookOpen/>,
    title: 'Documentation',
    content: `Learn from extensive developer documentation to implement search and discovery in your ecosystem.`,
    link: `#`,
  },
  {
    icon: <BsCode/>,
    title: 'Code Exchange',
    content: `Jumpstart your Algolia understanding with the building blocks of backend tools, composable UI and sample applications.`,
    link: `#`,
  },
  {
    icon: <RiLayout5Line/>,
    title: 'Integrations',
    content: `Find all one-click integrations, back-end API wrappers and front-end components for your technology stack, platform, or framework.`,
    link: `#`,
  },
]

const Home = () => {
  const [selected, setSelected] = useState(null)
  const onToggle = (i) => {
    if(selected === i){
      return setSelected(null)
    }

    setSelected(i)
    console.log(selected)
  }

  return (
    <div>
        <Header/>
        <MobileHeader/>

      <div className='home__container'>
        <div className='home__detail'>
            <div className="home__detailLeft">
              <span> <BiChevronLeft/> SEARCH & DISCOVERY PLATFORM / <BiChevronRight/> </span>
              
                <h2>Powering</h2>
                <h2>Discovery</h2>
                <h2>for your world</h2>

              <div className='home__detailbutton'>
                <LeftButton title={'GET A DEMO'} icon={<HiOutlineLightningBolt size={17} color='#003FFF'/>}/>
                <RightButton title={'START BUILDING FOR FREE'} icon={<AiOutlineCode color='white' size={18}/>}/>
              </div>

            </div>

            <div className='home__detailRight'>
              <img src={detailImage} alt={detailImage}/>
            </div>
        </div>

        <div className='dailyActive'>
          <span>150,000,000+</span>
          <p> Search experiences powered daily</p>
        </div>

        <div className='searchFeatureBanner'>
          <img src={connectionImage} alt={connectionImage} />

          <div>
            <h1>Search As You Think</h1>
            <span>Build on the world's only API-first Hybrid Search Engine</span>

            <div className='searchFeatureContent'>
              <div>
                <span><RiPulseLine size={20}/></span>
                <p>Speed at scale</p>
              </div>

              <div>
                <span><RiSettings5Line size={20}/></span>
                <p>Control</p>
              </div>

              <div>
                <span><FiTarget size={20}/></span>
                <p>Relevance</p>
              </div>

            </div>
            
            <div>
              <ThirdButton title={'PLATFORM OVERVIEW'} icon={<HiChevronRight size={18}/>}/>
            </div>
          </div>

        </div>


          <div className='stats'>
            <div>
              <p>17K queries per second</p>
              <span>during Black Friday</span>
              <img src={gymshark} alt={gymshark} />
            </div>

            <div>
              <p> 1.3 million records</p>
              <span>processed for customers every week</span>
              <img src={mercari} alt={mercari} />
            </div>

            <div>
              <p> 10 millisecond API response time</p>
              <span>across 90+ million SKUs</span>
              <img src={mercari} alt={mercari} />
            </div>

          </div>
        



        <div className='testimonyContainer'>
          <h1 className='customerNumber'>17,000+ global customers use Algolia</h1>
          <Testimony/>
        </div>


        <div className='enterPriseFeatureContainer'>
          <div className="enterPriseFeatureContainer__left">
            <h1>An Enterprise-grade platform you can trust</h1>
            <span>Algolia is the leader in globally scalable, secure, digital search and discovery experiences that are ultrafast and reliable</span>

            <div>
              <EnterpriseFeature icon={<BiGlobe/>} title={'Fast & Flexible'} content={'10,000+ servers globally'}/>
              <EnterpriseFeature icon={<BiTrendingUp/>} title={'Future proof'} content={'99.999% SLA for enterprise customers'}/>
              <EnterpriseFeature link={`#`} linkname={`Security & Compliance`} icon={<BsFillShieldFill/>} title={'Secure'} content={'SSO, SAML, SOC2, SOC3, ISO27001 & HIPPA compliant'}/>
              <EnterpriseFeature link={`#`} linkname={`Global Infrastructure`} icon={<TbServer/>} title={'Scalable'} content={'100+ data centers on 6 continents'}/>
            </div>
          </div>
          
          <div className="enterPriseFeatureContainer__right">
            <img src={globe} alt={globe} />
          </div>

        </div>


        <div className='footerMainFeatures'>
          <div>
            <h2>100%</h2>
            <p>API uptime</p>
            <a href="#">LEARN MORE &nbsp; <AiFillCaretRight/></a>
          </div>

          <div>
            <h2>99.99% SLA</h2>
            <p>for Enterprise SLA</p>
            <a href="#">LEARN MORE &nbsp; <AiFillCaretRight/></a>
          </div>

          <div>
            <h2>382% ROI</h2>
            <p>Forrester TEI report</p>
            <a href="#">LEARN MORE &nbsp; <AiFillCaretRight/></a>
          </div>
        </div>

      </div>

      <div className='developerSectionContainer'>
        <span>5M+ DEVELOPERS ON THE PLATFORM</span>
        <h1>The Composable Platform, Created for Builders</h1>
        <p className='developerSectionContainer__p'>The most powerful and easy to use APIs to build leading digital experiences.</p>

        
        <div className='developerSection__list'>

          { developerSectionData.map((item, i) => (
            <a onClick={() => onToggle(i)} className='developerSection'>
            <div className='developerSection__left'>
              {item.icon}
            </div>

            <div className='developerSection__right'>
              <h2>{item.title}</h2>
              <div className={selected === i ? `developerSection__content` : `developerSection__contentClose`}>
                <p>{item.content}</p>
                <a href="#">See More &nbsp; <AiFillCaretRight/> </a>
              </div>
              
            </div>

          </a>
          )) }
        </div>



        <div className='developerSectionContainer__buttonContainer'>
          <a className='googleButton' href="#">
            Sign Up With Google &nbsp; <FcGoogle size={20}/>
          </a>

          <a className='githubButton'>
            Sign Up With Github &nbsp; <AiOutlineGithub size={20}/>
          </a>
        </div>

      </div>


      <Footer/>


    </div>
  )
}

export default Home
