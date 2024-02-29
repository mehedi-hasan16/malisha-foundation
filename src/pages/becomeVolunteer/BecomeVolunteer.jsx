import React,{useEffect} from 'react'
import BreadCrumb from '../../components/global/breadCrumb/BreadCrumb'
import BecomeYoutuber from '../../components/becomeYoutuber/BecomeYoutuber'
import Feature from '../../components/feature/Feature'
import LatestNews from '../../components/letestNews/LatestNews'
import Volunteer from '../../components/volunteer/Volunteer'


const BecomeVolunteer = () => {
  const breadCrumbArray = [
    {
      id:1,
      title:'Home',
      link:'/',
      active:false,
    },
    {
      id:2,
      title:'Become Volunteer',
      link:'/become-volunteer ',
      active:true,
    }
  ]
  useEffect(()=>{
    document.title="Become Volunteer"
  },[])
  return (
    <div className='about_us'>
        <BreadCrumb title="Become a Volunteer" breadCrumbArray={breadCrumbArray}/>
        <Volunteer wrCustomClass="py-12 sm:py-20"/>
        <BecomeYoutuber/>
        <Feature/>
        <LatestNews/>
    </div>
  )
}

export default BecomeVolunteer