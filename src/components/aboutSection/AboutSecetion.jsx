import React, { useState } from 'react'
import aboutImg from '../../assets/images/about.jpeg'
import { Link } from 'react-router-dom'
import Icons from '../global/Icons'


const data = [
  {
    id: 1,
    icon: Icons.scholarshipIcon,
    title: "Scholarships for Higher Study in China",
    content: 'Malisha Foundation assists in obtaining admission and Scholarships for needy but brilliant students from all over the world without taking any service charges'
  },
  {
    id: 2,
    icon: Icons.educationalInstrumentsIcon,
    title: "Educational Instruments",
    content: 'Malisha Foundation provides educational materials such as textbooks, pens, bags, and notebooks for continuing their education'
  },
  {
    id: 3,
    icon: Icons.medicalServiceIcon,
    title: "Medical Service",
    content: 'Malisha Foundation organizes free Medical Camps for underprivileged areas of different countries; through these Medical Camps, local patients/people may get free health check-ups, treatment, and essential medicine'
  }
]

const AboutSecetion = () => {

  const [items, setItems] = useState([...data])

  return (
    <div className={`py-12 sm:py-20 bg-on-primary-opacity-0.16`}>
      <div className='container mx-auto px-4'>
        <h4 className='text-primary font-bold text-sm m-0 break-words uppercase tracking-widest'>About Us</h4>
        <h4 className='font-bold m-0 break-words text-xl lg:text-5xl md:text-3xl text-gray-900 max-w-xl'>Our Highest Ambition is to Help People</h4>
        <div className='flex flex-col lg:flex-row justify-between pb-14'>
          <div className='basis-80%'>
            <p className='text-gray-700 pt-2 leading-7 font-normal text-lg m-0 break-words'>
              Malisha Foundation is a non-profit organization specializing in the education sector. It aims to uplift underprivileged students and people through educational scholarships, materials, medical services, and financial aid.
            </p>
          </div>
          <div className='basis-20% flex justify-start mt-4 lg:mt-0 lg:justify-end items-center'>
            <Link to="/about-us" className='text-base font-bold tracking-0.5 py-2 px-6 rounded-3xl transition-all duration-0.5 text-white hover:text-primary border-primary border-2 bg-primary hover:bg-transparent'>
              Learn more
            </Link>
          </div>
        </div>

        <div>
          <img className='border-b-8 border-primary rounded-custom-100' src={aboutImg} alt="" />
        </div>
        <div className='pt-14'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-4'>
            {
              items?.map((item, i) => (
                <div key={i} className='flex gap-2 sm:gap-5 flex-col sm:flex-row'>
                  <div>
                    {item.icon}
                  </div>
                  <div>
                    <h5 className='text-black font-bold text-lg sm:text-2xl'>
                      {item.title}
                    </h5>
                    <p className='leading-7 font-normal text-lg text-black m-0 break-words'>
                      {item.content}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSecetion;