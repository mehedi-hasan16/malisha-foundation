import React, { useState, useEffect } from 'react'
import ReactFlagsSelect from "react-flags-select";
import BreadCrumb from '../../components/global/breadCrumb/BreadCrumb'
import BecomeYoutuber from '../../components/becomeYoutuber/BecomeYoutuber'
import Feature from '../../components/feature/Feature'
import LatestNews from '../../components/letestNews/LatestNews'
import donationImg from '../../assets/images/donation.jpeg'



const Donation = () => {
  const [selected, setSelected] = useState("BD");
  const breadCrumbArray = [
    {
      id: 1,
      title: 'Home',
      link: '/',
      active: false,
    },
    {
      id: 2,
      title: 'Donation',
      link: '/donation ',
      active: true,
    },
  ]

  useEffect(() => {
    document.title = "Donation"
  }, [])

  return (
    <div className='about_us'>
      <BreadCrumb title="Donations" breadCrumbArray={breadCrumbArray} />
      <div className="py-12 sm:py-20">
        <div className='container max-w-2xl mx-auto px-4 text-center'>
          <h4 className='pb-2 text-primary font-bold text-sm m-0 break-words uppercase tracking-widest'>Donate now</h4>
          <h2 className='pb-4 text-gray-900 text-xl lg:text-5xl md:text-3xl font-bold m-0 break-words'>Iodine fortification of household salt</h2>
          <p className='pb-12 leading-7 font-normal text-lg text-white m-0 break-words text-gray-800'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et.
          </p>
        </div>
        <div className='relative'>
          <div className=' container mx-auto px-4 mt-6 md:mt-0'>
            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-6'>
              <div>
                <div className='relative'>
                  <select className='bg-transparent absolute h-12 2xl:h-14 w-7 left-2 cursor-pointer top-0 focus:outline-none'>
                    <option selected value="1">$</option>
                    <option value="1">US</option>
                    <option value="1">tk</option>
                    <option value="1">$</option>
                  </select>
                  <input placeholder="Phone*" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 pl-10 pr-5 text-lg text-gray-800 " />
                </div>
                <div className='grid grid-cols-3 sm:grid-cols-5 gap-5 mb-4'>
                  <div className='group hover:bg-secondary hover:border-bg-secondary transition-all cursor-pointer flex items-center justify-center border-2 border-secondary rounded-lg py-3 px-7'>
                    <h5 className="group-hover:text-white text-secondary text-base font-bold m-0 break-words">$10</h5>
                  </div>
                  <div className='group hover:bg-secondary hover:border-bg-secondary transition-all cursor-pointer flex items-center justify-center border-2 border-secondary rounded-lg py-3 px-7'>
                    <h5 className="group-hover:text-white text-secondary text-base font-bold m-0 break-words">$80</h5>
                  </div>
                  <div className='group hover:bg-secondary hover:border-bg-secondary transition-all cursor-pointer flex items-center justify-center border-2 border-secondary rounded-lg py-3 px-7'>
                    <h5 className="group-hover:text-white text-secondary text-base font-bold m-0 break-words">$80</h5>
                  </div>
                  <div className='group hover:bg-secondary hover:border-bg-secondary transition-all cursor-pointer flex items-center justify-center border-2 border-secondary rounded-lg py-3 px-7'>
                    <h5 className="group-hover:text-white text-secondary text-base font-bold m-0 break-words">$50</h5>
                  </div>
                  <div className='group hover:bg-secondary hover:border-bg-secondary transition-all cursor-pointer flex items-center justify-center border-2 border-secondary rounded-lg py-3 px-7'>
                    <h5 className="group-hover:text-white text-secondary text-base font-bold m-0 break-words">$30</h5>
                  </div>
                </div>
                <input placeholder="Full Name*" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
                <input placeholder="Email*" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
                <div className='relative'>
                  <input placeholder="Phone*" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 pl-20 pr-5 text-lg text-gray-800 " />
                  <div className='absolute left-0 top-2 w-20 h-full'>
                    <ReactFlagsSelect className=''
                      selectButtonClassName="!border-0"
                      selected={selected}
                      showSelectedLabel={false}
                      placeholder=" "
                      onSelect={(code) => setSelected(code)}
                    />
                  </div>
                </div>
                <input placeholder="Full Name*" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
                <input placeholder="Email*" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
                <div className='grid grid-cols-2 gap-6 mb-4'>
                  <input placeholder="Country" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
                  <input placeholder="City" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
                </div>
                <div className='grid grid-cols-2 gap-6 mb-4'>
                  <input placeholder="State" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
                  <input placeholder="Zip Code" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
                </div>
                <textarea placeholder="Write a Comment" className="mb-4 w-full focus:outline-none border border-gray-300 resize-none rounded-sm h-30 2xl:h-40 py-4 px-5 text-lg text-gray-800 " />
                <button className='mt-2 md:mt-8 rounded-3xl py-2 px-6 text-base font-bold tracking-0.5 transition-all duration-0.5 text-white hover:text-primary border-2 border-secondary hover:border-primary bg-secondary hover:bg-transparent'>
                  Next
                </button>
              </div>
              <div className='lg:absolute left-1/2 lg:h-full lg:pl-8 lg:w-1/2 order-first mb-12 lg:mb-0 lg:order-last px-5 md:px-0'>
                <img className='rounded-bl-100 h-full object-cover w-full' src={donationImg} alt="decause" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BecomeYoutuber />
      <Feature />
      <LatestNews />
    </div>
  )
}

export default Donation