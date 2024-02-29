import React,{useEffect} from 'react'
import Slider from '../../components/slider/Slider'
import TopCountSection from '../../components/topCountSection/TopCountSection'
import AboutSecetion from '../../components/aboutSection/AboutSecetion'
import MissionSection from '../../components/missionSection/MissionSection'
import Campaign from '../../components/campaignSection/Campaign'
import DecauseWeCam from '../../components/decauseWeCan/DecauseWeCam'
import UpcommingEvent from '../../components/upcommingEvent/UpcommingEvent'
import MeetOurTeam from '../../components/meetOurTeam/MeetOurTeam'
import BecomeYoutuber from '../../components/becomeYoutuber/BecomeYoutuber'
import Feature from '../../components/feature/Feature'
import LatestNews from '../../components/letestNews/LatestNews'
import BrandSection from '../../components/brandSection/BrandSection'

const Home = () => {
  useEffect(()=>{
    document.title="Home"
  },[])
  return (
        <div className='home'>
          <Slider/>
          <TopCountSection/>
          <AboutSecetion/>
          <BrandSection/>
          <MissionSection/>
          <Campaign/>
          <DecauseWeCam/>
          <UpcommingEvent/>
          <MeetOurTeam/>
          {/* <BecomeYoutuber/> */}
          <Feature/>
          <LatestNews/>
        </div>
  )
}

export default Home