import React from 'react'
import latestImg from '../../assets/images/latest.jpeg'
import latestImg2 from '../../assets/images/latest2.jpeg'
import latestImg3 from '../../assets/images/latest3.jpeg'
import { Link } from 'react-router-dom'
import Icons from '../global/Icons'

const LatestNews = () => {
  const latestArray = [
    {
      id: 1,
      title: "We supported him with financial aid",
      text: "Learn More",
      link: "#",
      img: latestImg,
      comment: 1,
      date: '12 March, 2021'
    },
    {
      id: 2,
      title: "We secured a scholarship for higher studies",
      text: "Learn More",
      link: "#",
      img: latestImg2,
      comment: 1,
      date: '2 January, 2022'
    },
    {
      id: 3,
      title: "We aided him in acquiring educational tools",
      text: "Learn More",
      link: "#",
      img: latestImg3,
      comment: 1,
      date: '25 March, 2023'
    },


  ]

  let contentViewRender = null
  contentViewRender = latestArray.map((item) => (
    <div className='group overflow-hidden' key={item.id}>
      <div className=' h-auto sm:min-h-80 '>
        <img className="object-cover h-full sm:min-h-80 w-full group-hover:scale-110 transition-all duration-0.5 rounded-t-md" src={item.img} alt="latest" />
      </div>
      <div className='bg-white relative'>
        <div className='flex gap-5 pt-6'>
          <div className='flex gap-1 sm:gap-2'>
            {Icons.commentAlt1Icon}
            <h5 className="text-gray-900 text-base font-bold m-0 break-words">{item.comment} Comment</h5>
          </div>
          <div className='border-r-2 h-6 border-gray-300'>
          </div>
          <div className='flex gap-2'>
            {Icons.calendarIcon}
            <h5 className="text-gray-900 text-base font-bold m-0 break-words">{item.date}</h5>
          </div>
        </div>
        <h4 className='py-1 sm:py-4 truncate text-gray-900 lg:text-2xl md:text-xl text-lg font-bold m-0 break-words'>{item.title}</h4>
        <Link to={item.link} className='flex gap-2 items-center text-on-tertiary-container text-lg sm:text-base font-bold m-0 break-words'>
          {item.text}
          {Icons.rightArrowIcon}
        </Link>
      </div>
    </div>
  ))

  return (
    <div className={`py-12 sm:py-20`}>
      <div className='container mx-auto px-4 text-center'>
        <h4 className='text-primary pb-2 font-bold text-sm m-0 break-words uppercase tracking-widest'>LATEST NEWS</h4>
        <h2 className='text-gray-900 mx-auto w-full max-w-lg pb-4 text-xl lg:text-5xl md:text-3xl font-bold m-0 break-words'>Keep memories in these posts</h2>
        <p className='leading-7 lg:max-w-5xl max-w-3xl mx-auto w-full pb-12 font-normal text-lg text-gray-700 m-0 break-words'>
        Legacy of Memories: Embrace the Power of Remembrance, Share Stories, and Preserve Lifelong Memories in Timeless Posts
        </p>
      </div>
      <div className='container mx-auto px-4 '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {contentViewRender}
        </div>
      </div>
    </div>
  )
}

export default LatestNews