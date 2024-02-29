import React from 'react'
import { useEffect } from 'react'
import BreadCrumb from '../../components/global/breadCrumb/BreadCrumb'
import AboutSecetion from '../../components/aboutSection/AboutSecetion'
import BecomeYoutuber from '../../components/becomeYoutuber/BecomeYoutuber'
import DecauseWeCam from '../../components/decauseWeCan/DecauseWeCam'
import Feature from '../../components/feature/Feature'
import MeetOurTeam from '../../components/meetOurTeam/MeetOurTeam'
import QuestionSection from '../../components/questionSection/QuestionSection'

const AboutUs = () => {
  const breadCrumbArray = [
    {
      id:1,
      title:'Home',
      link:'/',
      active:false,
    },
    {
      id:2,
      title:'About',
      link:'/about-us',
      active:true,
    }
  ]
  useEffect(()=>{
    document.title="About us"
  },[])
  return (
    <div className='about_us'>
        <BreadCrumb title="About Us" breadCrumbArray={breadCrumbArray} />
        <AboutSecetion/>
        <DecauseWeCam/>
        <MeetOurTeam/>
        <QuestionSection/>
        <BecomeYoutuber/>
        <div className='pb-12 sm:pb-20'>
          <Feature/>
        </div>
    </div>
  )
}

export default AboutUs