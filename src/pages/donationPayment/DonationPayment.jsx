import React, { useState, useEffect } from 'react'
import BreadCrumb from '../../components/global/breadCrumb/BreadCrumb'
import BecomeYoutuber from '../../components/becomeYoutuber/BecomeYoutuber'
import Feature from '../../components/feature/Feature'
import LatestNews from '../../components/letestNews/LatestNews'
import donationImg from '../../assets/images/donation.jpeg'
import Icons from '../../components/global/Icons';





const DonationPayment = () => {
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
    document.title = "Donation payment"
  }, [])
  return (
    <div className='payment'>
      <BreadCrumb title="Donations" breadCrumbArray={breadCrumbArray} />
      <div className="pt-12 lg:pt-20 pb-12 lg:pb-60">
        <div className='container max-w-2xl mx-auto px-4 text-center'>
          <h4 className='pb-2 text-primary font-bold text-sm m-0 break-words uppercase tracking-widest'>Donate now</h4>
          <h2 className='pb-4 text-gray-900 text-xl lg:text-5xl md:text-3xl font-bold m-0 break-words'>Iodine fortification of household salt</h2>
          <p className='pb-12 leading-7 font-normal text-lg text-white m-0 break-words text-gray-800'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et.
          </p>
        </div>
        <div className='relative'>
          <div className='container mx-auto px-4 mt-6 md:mt-0'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-6 '>
              <div className='lg:pb-32'>
                <h5 className="pb-3 text-gray-900 text-base font-bold m-0 break-words">Payment Option</h5>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-5 mb-4'>
                  <div className='group text-center  hover:border-primary transition-all cursor-pointer flex items-center justify-center border border-gray-300 rounded-lg py-3 px-7'>
                    <div>
                      <span className='inline-flex'>{Icons.creditCardIcon}</span>
                      <p className="text-gray-800 group-hover:text-primary text-base font-normal leading-6"> Visa/Credit Card</p>
                    </div>
                  </div>
                  <div className='group text-center  hover:border-primary transition-all cursor-pointer flex items-center justify-center border border-gray-300 rounded-lg py-3 px-7'>
                    <div>
                      <span className='inline-flex'>{Icons.googleIcon}</span>
                      <p className="text-gray-800 group-hover:text-primary text-base font-normal leading-6">Google Pay</p>
                    </div>
                  </div>
                  <div className='group text-center  hover:border-primary transition-all cursor-pointer flex items-center justify-center border border-gray-300 rounded-lg py-3 px-7'>
                    <div>
                      <span className='inline-flex'>{Icons.paypalIcon}</span>
                      <p className="text-gray-800 group-hover:text-primary text-base font-normal leading-6"> Paypal</p>
                    </div>
                  </div>
                </div>
                <input placeholder="Card Number*" type="number" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
                <div className='grid grid-cols-2 gap-6 mb-4'>
                  <input placeholder="CVV*" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
                  <input placeholder="CVV*" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
                </div>
                <button className='rounded-3xl mt-2 py-2 px-8 text-base font-bold tracking-0.5 transition-all duration-0.5 text-white hover:text-primary border-2 border-secondary hover:border-primary bg-secondary hover:bg-transparent'>
                  Next
                </button>
              </div>
              <div className='lg:absolute left-1/2 lg:w-1/2 lg:h-155 h-full lg:pl-8 order-first pb-6 lg:pb-0 lg:order-last px-5 md:px-0'>
                <img className='rounded-bl-100 h-full  object-cover w-full ' src={donationImg} alt="decause" />
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

export default DonationPayment