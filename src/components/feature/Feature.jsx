import React from 'react'
import Slider1 from "react-slick";
import featureImg from '../../assets/images/feature.jpeg'
import Icons from '../global/Icons';


const SampleNextArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} className='z-1  hidden absolute -bottom-0 md:-bottom-2 2xl:-bottom-3 left-0 cursor-pointer sm:inline-block transition-all duration-0.5 hover:bg-on-secondary-container bg-secondary p-1 md:p-3 2xl:p-4 rounded-lg'>{Icons.leftWihteArrow}</div>
  )
}
const SamplePrevArrow = ({ onClick }) => {
  return (
    <div onClick={onClick} className='z-1 hidden absolute -bottom-0 md:-bottom-2 2xl:-bottom-3 left-12 md:left-20  cursor-pointer sm:inline-block transition-all duration-0.5 hover:bg-on-secondary-container bg-secondary p-1 md:p-3 2xl:p-4 rounded-lg'>{Icons.rightWihteArrow}</div>
  )
}

const settings = {
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
        dots: true
      }
    },

  ]
};

const sliderArray = [
  {
    id: 1,
    name: 'Devil Roy Barman',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at fermentum id aliquet ridiculus in tellus quisque tempor. Felis diam odio ullamcorper in. Semper faucibus commodo sit at. Eget sed morbi risus quam.'
  },
  {
    id: 2,
    name: 'Devil Roy Barman',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at fermentum id aliquet ridiculus in tellus quisque tempor. Felis diam odio ullamcorper in. Semper faucibus commodo sit at. Eget sed morbi risus quam.'
  },
  {
    id: 3,
    name: 'Devil Roy Barman',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at fermentum id aliquet ridiculus in tellus quisque tempor. Felis diam odio ullamcorper in. Semper faucibus commodo sit at. Eget sed morbi risus quam.'
  },
  {
    id: 4,
    name: 'Devil Roy Barman',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at fermentum id aliquet ridiculus in tellus quisque tempor. Felis diam odio ullamcorper in. Semper faucibus commodo sit at. Eget sed morbi risus quam.'
  }
]




const Feature = () => {

  let rendarView = null
  rendarView = sliderArray.map((slide) => (
    <div className='' key={slide.id}>
      <div className='flex gap-6 items-center'>
        {Icons.googlRedIcon}
        <div className='flex gap-2 items-center'>
          {Icons.startIcon}
          {Icons.startIcon}
          {Icons.startIcon}
          {Icons.startIcon}
          {Icons.startIcon}
        </div>
      </div>
      <p className='leading-7 font-normal text-lg text-gray-800 m-0 break-words'>{slide.content}</p>
      <div className='border-y-2 border-gray-300 w-16 mt-6 mb-4'></div>
      <h5 className="text-gray-900 text-md font-bold">{slide.name}</h5>
      <div className='text-right relative -mt-10 mb-8 sm:mb-0 sm:mt-8 lg:mt-14'>
        <button className='rounded-3xl py-2 px-6 text-base font-bold tracking-0.5 transition-all duration-0.5 text-white hover:text-primary border-2 border-primary bg-primary hover:bg-transparent'>
          read More
        </button>
      </div>
    </div>
  ))

  return (
    <div>
      <div className='container max-w-2xl mx-auto px-4 text-center mt-16'>
        <h4 className='pb-2 text-primary font-bold text-sm m-0 break-words uppercase tracking-widest'>Feature donor reviews</h4>
        <h2 className='text-gray-900 pb-4 text-xl lg:text-5xl md:text-3xl font-bold m-0 break-words'>What People say About Our Charity</h2>
        <p className='leading-7 font-normal text-lg text-gray-800 pb-12 m-0 break-words'>
        Empower Change with Malisha Foundation: Join us in creating lasting impact and building a better world together. Inspiring action for a brighter future.
        </p>

      </div>
      <div className='relative pb-0 md:pb-12'>
        <div className='container mx-auto px-4 pt-0 lg:pt-24 lg:pb-32'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-6'>
            <Slider1 {...settings}>
              {
                rendarView
              }
            </Slider1>
            <div></div>
          </div>
        </div>
        <div className='overflow-hidden lg:absolute left-1/2 top-0 lg:w-1/2 h-full pt-20 lg:pt-0 px-5 lg:px-0'>
          <img className='object-cover lg:ml-10 rounded-bl-100 w-full h-full' src={featureImg} alt="decause" />
        </div>
      </div>
    </div>
  )
}

export default Feature