import React, { useEffect } from 'react'
import BreadCrumb from '../../components/global/breadCrumb/BreadCrumb'
import BecomeYoutuber from '../../components/becomeYoutuber/BecomeYoutuber'
import Feature from '../../components/feature/Feature'
import LatestNews from '../../components/letestNews/LatestNews'
import eventImg from '../../assets/images/event.jpeg'
import Pagination from '../../components/pagination/Pagination'
import Icons from '../../components/global/Icons'
import { Link } from 'react-router-dom'


const EventPage = () => {

  const data = [
    {
      id: 1,
      img: eventImg,
      title: 'Charity Auction for Children',
      date: '08:00AM, October 15, 2022 ',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc',
      location: '4102 Lynn Avenue, Hudson, United States',
      link: '#'
    },
    {
      id: 2,
      img: eventImg,
      title: 'Charity Auction for Children',
      date: '08:00AM, October 15, 2022 ',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc',
      location: '4102 Lynn Avenue, Hudson, United States',
      link: '#'
    },
    {
      id: 3,
      img: eventImg,
      title: 'Charity Auction for Children',
      date: '08:00AM, October 15, 2022 ',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc',
      location: '4102 Lynn Avenue, Hudson, United States',
      link: '#'
    },
    {
      id: 4,
      img: eventImg,
      title: 'Charity Auction for Children',
      date: '08:00AM, October 15, 2022 ',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc',
      location: '4102 Lynn Avenue, Hudson, United States',
      link: '#'
    },
    {
      id: 5,
      img: eventImg,
      title: 'Charity Auction for Children',
      date: '08:00AM, October 15, 2022 ',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc',
      location: '4102 Lynn Avenue, Hudson, United States',
      link: '#'
    },
    {
      id: 6,
      img: eventImg,
      title: 'Charity Auction for Children',
      date: '08:00AM, October 15, 2022 ',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc',
      location: '4102 Lynn Avenue, Hudson, United States',
      link: '#'
    }
  ]

  const breadCrumbArray = [
    {
      id: 1,
      title: 'Home',
      link: '/',
      active: false,
    },
    {
      id: 2,
      title: 'Event',
      link: '/event ',
      active: true,
    },
  ]

  useEffect(() => {
    document.title = "Event"
  }, [])

  let rendierViewData = null
  rendierViewData = data.map((item) => (
    <div key={item.id}>
      <img className="rounded-t-md h-auto 2xl:max-h-80 2xl:h-full" src={item.img} alt="event" />
      <div className='flex items-center gap-2 pt-6 pb-4'>
        <span className='flex-shrink-0 inline-flex'> {Icons.clockIcon}</span>
        <h5 className="text-gray-900 text-base font-bold m-0 break-words">{item.date}</h5>
      </div>
      <h4 className='text-gray-800 lg:text-2xl md:text-xl text-lg font-bold m-0 break-words'>Charity Auction for Children</h4>
      <p className='text-gray-700 leading-7 font-normal text-lg m-0 break-words py-4'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc,
      </p>
      <div className='flex items-center gap-2'>
        <span className='flex-shrink-0 inline-flex'>
          <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.5 0C4.708 0 .81 3.9.81 8.692c0 5.948 7.778 14.68 8.11 15.048a.783.783 0 0 0 1.164 0c.331-.368 8.11-9.1 8.11-15.048C18.192 3.899 14.292 0 9.5 0Zm0 13.065a4.378 4.378 0 0 1-4.373-4.373A4.378 4.378 0 0 1 9.5 4.319a4.378 4.378 0 0 1 4.373 4.373A4.378 4.378 0 0 1 9.5 13.065Z" fill="#595959" />
          </svg>
        </span>
        <h5 className="text-gray-900 text-base font-bold m-0 break-words">{item.location}</h5>
      </div>
      <Link to={item.link} className=' mt-4 flex items-center gap-2'>
        <h4 className='uppercase text-on-tertiary-container text-lg sm:text-base font-bold m-0 break-words'>Learn More</h4>
        {Icons.rightArrowIcon}
      </Link>
    </div>
  ))

  return (
    <div className='payment'>
      <BreadCrumb title="Upcoming Events" breadCrumbArray={breadCrumbArray} />
      <div className="py-12 sm:py-20">
        <div className='container max-w-2xl mx-auto px-4 text-center'>
          <h4 className='pb-2 text-primary font-bold text-sm m-0 break-words uppercase tracking-widest'>All Events</h4>
          <h2 className='pb-4 text-gray-900 text-xl lg:text-5xl md:text-3xl font-bold m-0 break-words'>Upcoming Events</h2>
          <p className='pb-12 leading-7 font-normal text-lg text-white m-0 break-words text-gray-800'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et.
          </p>
        </div>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14'>
            {
              rendierViewData
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

export default EventPage