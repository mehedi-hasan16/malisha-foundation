import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import BreadCrumb from '../../components/global/breadCrumb/BreadCrumb'
import ProgressLise from '../../components/global/progressLine/ProgressLise'
import BecomeYoutuber from '../../components/becomeYoutuber/BecomeYoutuber'
import Feature from '../../components/feature/Feature'
import LatestNews from '../../components/letestNews/LatestNews'
import campaignImg1 from '../../assets/images/campaign1.jpeg'
import campaignImg2 from '../../assets/images/campaign2.jpeg'
import campaignImg3 from '../../assets/images/campaign3.jpeg'
import './causes.css'
import Pagination from '../../components/pagination/Pagination'


const data = [
  {
    id: 1,
    image: campaignImg1,
    tag: 'Children',
    btnTitle: "Donate Now",
    subtitle: "Iodine fortification of household salt",
    content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing.",
    percentage: '35',
    Ralsed: "$5,000"
  },
  {
    id: 2,
    image: campaignImg2,
    tag: 'Children',
    btnTitle: "Donate Now",
    subtitle: "Iodine fortification of household salt",
    content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing.",
    percentage: '67',
    Ralsed: "$5,000"
  },
  {
    id: 3,
    image: campaignImg3,
    tag: 'Children',
    btnTitle: "Donate Now",
    subtitle: "Iodine fortification of household salt",
    content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing.",
    percentage: '80',
    Ralsed: "$5,000"
  },
]


const Causes = () => {
  const [helpData, setHelpData] = useState([...data])

  const breadCrumbArray = [
    {
      id: 1,
      title: 'Home',
      link: '/',
      active: false,
    },
    {
      id: 2,
      title: 'Causes',
      link: '/causes ',
      active: true,
    }
  ]


  useEffect(() => {
    document.title = "Causes"
  }, [])

  let renderView = null;
  renderView = helpData.map((item) => (
    <div key={item.id} className="relative campaign_cause_single">
      <div className='absolute top-2 left-2 bg-primary-container text-center py-2 px-4'>
        <h5 className="text-on-primary-container text-base font-bold m-0 break-words">{item.tag}</h5>
      </div>
      <div className='relative'>
        <img className='h-80 object-cover w-full roun rounded-t-md' src={item.image} alt="dfd" />
        <div className='campaign_cause_single_btn bg-tertiary-container text-center py-3' >
          <Link to="#" className='text-on-tertiary-container text-lg sm:text-base font-bold m-0 break-words'>{item.btnTitle}</Link>
        </div>
      </div>
      <div className='bg-white z-1 relative'>
        <h4 className='text-gray-800 pt-6 lg:text-2xl md:text-xl text-lg font-bold m-0 break-words'>{item.subtitle}</h4>
        <p className='pt-4 leading-7 font-normal text-lg m-0 break-words text-gray-700'>
          {item.content}
        </p>
        <ProgressLise percentageColor="text-gray-800" height='h-3' percentage={item.percentage} />
      </div>
      <div className='flex justify-between pt-4'>
        <h5 className="text-gray-700 text-base font-bold m-0 break-words">{`Ralsed: ${item.Ralsed}`} </h5>
        <h5 className="text-gray-700 text-base font-bold m-0 break-words">{`Ralsed: ${item.Ralsed}`} </h5>
      </div>
    </div>
  ))

  return (
    <div className='cause'>
      <BreadCrumb title="Causes List" breadCrumbArray={breadCrumbArray} />
      <div className='py-12 sm:py-20'>
        <div className='container max-w-2xl mx-auto px-4 text-center'>
          <h4 className='pb-2 text-primary font-bold text-sm m-0 break-words uppercase tracking-widest'>OUR CAMPAIGNS</h4>
          <h2 className='pb-4 text-gray-900 text-xl lg:text-5xl md:text-3xl font-bold m-0 break-words'>Our Highest Ambition is to Help People</h2>
          <p className='pb-12 leading-7 font-normal text-lg text-white m-0 break-words text-gray-800'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et.
          </p>
        </div>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 md:gap-6'>
            {
              renderView
            }
          </div>
        </div>
        <Pagination />
      </div>
      <BecomeYoutuber />
      <Feature />
      <LatestNews />
    </div>
  )
}

export default Causes