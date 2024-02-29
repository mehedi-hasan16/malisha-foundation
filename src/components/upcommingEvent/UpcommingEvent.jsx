import React from 'react'
import Slider1 from "react-slick";
import slideDataArray from './SlideData'
import Icons from '../global/Icons'
import { useState } from 'react';
import upcommingImg from '../../assets/images/upcomming-event.jpeg'
import './upcomming-event.css'

const SampleNextArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} className='z-1  hidden absolute -top-0 lg:-top-16 right-14 md:right-20 cursor-pointer sm:inline-block transition-all duration-0.5 hover:bg-on-secondary-container bg-secondary p-1.5 md:p-3 2xl:p-4 rounded-lg'>{Icons.leftWihteArrow}</div>
  )
}
const SamplePrevArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} className='z-1 absolute hidden -top-0 lg:-top-16 right-0  cursor-pointer sm:inline-block transition-all duration-0.5 hover:bg-on-secondary-container bg-secondary p-1.5 md:p-3 2xl:p-4 rounded-lg'>{Icons.rightWihteArrow}</div>
  )
}


const UpcommingEvent = ({ wrCustomClass = "" }) => {
  const [data, setData] = useState([...slideDataArray])

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          dots: true,
        }
      },
    ]
  };


  let datarenderView = null;
  datarenderView = data.map((item) => (
    <div key={item.id}>
      {
        item?.data?.map((single) => (
          <div key={single.id} className="pb-10 group sm:last:pb-0">
            <h4 className='text-gray-800 group-hover:text-primary transition duration-0.5 lg:text-2xl md:text-xl text-lg font-bold m-0 break-words'>{single.title}</h4>
            <h5 className="text-secondary pt-2 pb-4 text-base font-bold m-0 break-words">{single.date}</h5>
            <p className='leading-7 font-normal text-lg text-gray-700 m-0 break-words'>{single.content}</p>
            <div className='flex items-center gap-2 pt-4'>
              <svg className='flex-shrink-0' width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C4.006 0 .757 3.25.757 7.243c0 4.957 6.482 12.233 6.758 12.54a.65.65 0 0 0 .97 0c.276-.307 6.758-7.583 6.758-12.54C15.243 3.25 11.994 0 8 0Zm0 10.887a3.648 3.648 0 0 1-3.644-3.644A3.648 3.648 0 0 1 8 3.6a3.648 3.648 0 0 1 3.644 3.644A3.648 3.648 0 0 1 8 10.887Z" fill="#7E1810" /></svg>
              <h5 className="text-on-primary-container text-base font-bold m-0 break-words">{single.location}</h5>
            </div>
          </div>
        ))
      }
    </div>
  ))


  return (
    <div className={`${wrCustomClass} upcomming_event`}>
      <div className='container mx-auto px-4 mb-14'>
        <h4 className='pb-2 text-primary font-bold text-sm m-0 break-words uppercase tracking-widest'>Upcoming Evernts</h4>
        <h2 className='text-gray-900 max-w-lg pb-4 text-xl lg:text-5xl md:text-3xl font-bold m-0 break-words'>Join Upcoming Events Replays & Webinars</h2>
        <p className='lg:max-w-5xl max-w-3xl leading-7 font-normal text-lg text-gray-700 m-0 break-words'>
        Join Malisha Foundation at our upcoming event as we come together to help you guys. Enjoy an evening filled with hope, all in support of our mission to success. Don't miss this opportunity to make a meaningful impact and connect with like-minded individuals who share our vision for a better tomorrow. Reserve your spot now and be a part of something truly special!.
        </p>
      </div>
      <div className='relative  pb-0 md:pb-12'>
        <div className='mb-4 lg:mb-0 lg:absolute h-full top-0 left-0 lg:pr-10 w-full lg:w-1/2'>
          <img className='px-5 md:px-0 rounded-br-100 object-cover h-full w-full' src={upcommingImg} alt="decause" />
        </div>
        <div className='container mx-auto px-4 '>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-9'>
            <div></div>
            <Slider1 {...settings}>
              {datarenderView}
            </Slider1>

          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcommingEvent