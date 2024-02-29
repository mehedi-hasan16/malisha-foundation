import React, { useEffect } from 'react'
import BreadCrumb from '../../components/global/breadCrumb/BreadCrumb'
import BecomeYoutuber from '../../components/becomeYoutuber/BecomeYoutuber'
import Feature from '../../components/feature/Feature'
import LatestNews from '../../components/letestNews/LatestNews'
import Icons from '../../components/global/Icons'
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};


const ContactUsPage = () => {

  const breadCrumbArray = [
    {
      id: 1,
      title: 'Home',
      link: '/',
      active: false,
    },
    {
      id: 2,
      title: 'Contact',
      link: '/contact ',
      active: true,
    },
  ]

  useEffect(() => {
    document.title = "Contact "
  }, [])

  return (
    <div className='payment'>
      <BreadCrumb title="Contact" breadCrumbArray={breadCrumbArray} />
      <div className={`py-12 sm:py-20`}>
        <div className='container max-w-full sm:max-w-3xl lg:max-w-5xl w-full mx-auto px-4'>
          <h4 className='text-primary font-bold text-sm m-0 break-words uppercase tracking-widest'>Contact Us</h4>
          <h2 className='pt-2  pb-4 text-gray-900 text-xl lg:text-5xl md:text-3xl font-bold m-0 break-words'>Get In Touch</h2>
          <p className='leading-7 font-normal text-lg m-0 break-words text-gray-800'>
          Unlock your potential and achieve your educational goals with our expert guidance. Contact us today to start your journey towards academic success!
          </p>

          <div className='grid grid-cols-1 lg:grid-cols-2  gap-8 sm:gap-14 pt-8  sm:pt-14'>
            <div className='lg:order-first order-last'>
              <input placeholder="Full Name*" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
              <input placeholder="Email*" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
              <input placeholder="Phone Number*" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
              <textarea placeholder="Write a Comment" className="mb-4 w-full focus:outline-none border border-gray-300 resize-none rounded-sm h-32 2xl:h-40 py-4 px-5 text-lg text-gray-800 " />
              <button className='rounded-3xl py-2 px-6 text-base font-bold tracking-0.5 transition-all duration-0.5 text-white hover:text-primary border-2 border-primary bg-primary hover:bg-transparent'>
                Submit
              </button>
            </div>
            <div>
              <h4 className='pb-4 text-secondary lg:text-2xl md:text-xl text-lg font-bold m-0 break-words'>Address</h4>
              <div className='flex flex-col sm:flex-row gap-8'>
                <div className='basis-100% sm:basis-50%'>
                  <div className='pb-6'>
                    <h5 className="pb-4 text-gray-900 text-md font-bold">China</h5>
                    <div className='flex items-center gap-2'>
                      <div className='flex-shrink-0'>
                        {Icons.blackLocationIcon}
                      </div>

                      <p className='leading-7 font-normal text-lg m-0 break-words text-gray-700'>
                      No. 29 Liuma Road, Huale Construction, Yuexiu District, Guangzhou
                      </p>
                    </div>
                  </div>
                  <div>
                    <h5 className="pb-4 text-gray-900 text-md font-bold">Phone</h5>
                    <div className='flex items-center gap-2'>
                      <div className='flex-shrink-0'> {Icons.blackCallIcon}</div>
                      <p className="leading-7 font-normal text-lg m-0 break-words text-gray-700">
                      +8618613114366
                      </p>
                    </div>
                  </div>
                </div>
                <div className='basis-100% sm:basis-50%'>
                  <div className='pb-6'>
                    <h5 className="pb-4 text-gray-900 text-md font-bold">Bangladesh</h5>
                    <div className='flex items-center gap-2'>
                      <div className='flex-shrink-0'>
                        {Icons.blackLocationIcon}
                      </div>

                      <p className='leading-7 font-normal text-lg m-0 break-words text-gray-700'>
                      6th Floor, House-404, Rd-29, Mohakhali DOHS
                      </p>
                    </div>
                  </div>
                  <div>
                    <h5 className="tpb-4 ext-gray-900 text-md font-bold">Phone</h5>
                    <div className='flex items-center gap-2'>
                      <div className='flex-shrink-0'> {Icons.blackCallIcon}</div>
                      <p className='leading-7 font-normal text-lg m-0 break-words text-gray-700'>
                      +8801750566412
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='pt-12 md:pt-14'>
            <LoadScript googleMapsApiKey="">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                >
                  <Marker  position={center}/>
              </GoogleMap>
           </LoadScript>
          </div>
        </div>
      </div>
      <BecomeYoutuber />
      <Feature />
      <LatestNews />
    </div>
  )
}

export default ContactUsPage