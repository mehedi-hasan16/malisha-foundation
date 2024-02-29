import React,{useEffect} from 'react'
import BreadCrumb from '../../components/global/breadCrumb/BreadCrumb'
import BecomeYoutuber from '../../components/becomeYoutuber/BecomeYoutuber'
import Feature from '../../components/feature/Feature'
import LatestNews from '../../components/letestNews/LatestNews'
import MeetOurTeamDetails from '../../components/meetOurTeamDetails/MeetOurTeamDetails'


const MeetTeam = () => {
  const breadCrumbArray = [
    {
      id:1,
      title:'Home',
      link:'/',
      active:false,
    },
    {
      id:2,
      title:'Volunteers',
      link:'/become-volunteer ',
      active:true,
    }
  ]
  useEffect(()=>{
    document.title="Meet Team"
  },[])
  return (
    <div className='about_us'>
        <BreadCrumb title="Volunteers" breadCrumbArray={breadCrumbArray}/>
        <MeetOurTeamDetails/>
        <BecomeYoutuber/>
        <Feature/>
        <LatestNews/>
    </div>
  )
}

export default MeetTeam