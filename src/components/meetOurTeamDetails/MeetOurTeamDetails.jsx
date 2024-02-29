import React, { useState } from 'react'
import TeamData from './TeamData'
import Pagination from '../pagination/Pagination'
import { Link } from 'react-router-dom'


const MeetOurTeamDetails = () => {
  const [meetArray, setMeetArray] = useState([...TeamData])

  let contentViewRender = null
  contentViewRender = meetArray?.map((item) => (
    <div className='relative overflow-hidden group' key={item.id}>
      <div className='absolute -right-11  top-3 group-hover:right-3 transition-right duration-0.5'>
        <div className="flex flex-col items-center justify-center gap-2">
          {
            item.socialMedia?.map((single) => (
              <Link to={single.link} className="cursor-pointer bg-secondary p-2 rounded-md">
                {single.icon}
              </Link>
            ))
          }
        </div>
      </div>
      <img className=' max-h-max md:max-h-80 2xl:max-h-96 sm:h-full w-full object-cover' src={item.img} alt="team" />
      <h4 className='pt-4 pb-1 text-gray-900 lg:text-2xl md:text-xl text-lg font-bold m-0 break-words'>{item.title}</h4>
      <h5 className="text-gray-900 text-md font-bold">{item.subTitle}</h5>
    </div>
  ))


  return (
    <div className='py-12 sm:py-20'>
      <div className='container mx-auto px-4 text-center'>
        <h4 className='pb-2 text-primary font-bold text-sm m-0 break-words uppercase tracking-widest'>We Change Your Life & World</h4>
        <h2 className='mx-auto w-full max-w-lg text-gray-900 text-xl lg:text-5xl md:text-3xl font-bold m-0 break-words'>Meet Our Volunteers</h2>
        <p className="lg:max-w-5xl max-w-3xl mx-auto w-full pb-12 text-gray-700 leading-7 font-normal text-lg m-0 break-words">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing.
        </p>
      </div>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {contentViewRender}
        </div>
        <Pagination />
      </div>
    </div>
  )
}

export default MeetOurTeamDetails