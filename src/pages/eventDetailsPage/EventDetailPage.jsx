import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';
import BreadCrumb from '../../components/global/breadCrumb/BreadCrumb'
import BecomeYoutuber from '../../components/becomeYoutuber/BecomeYoutuber'
import Feature from '../../components/feature/Feature'
import LatestNews from '../../components/letestNews/LatestNews'
import eventImg1 from '../../assets/images/latest.jpeg'
import eventImg2 from '../../assets/images/latest2.jpeg'
import Icons from '../../components/global/Icons';



const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const EventDetailPage = () => {

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
      active: false,
    },
    {
      id: 3,
      title: 'Event Details',
      link: '/event-details ',
      active: true,
    },
  ]

  useEffect(() => {
    document.title = "Event Details"
  }, [])

  return (
    <div className='payment'>
      <BreadCrumb title="Event Details" breadCrumbArray={breadCrumbArray} />
      <div className="py-12 sm:py-20">
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row'>
            <div className='xl:basis-70% md:basis-60% basis-100%'>
              <h2 className='text-gray-800 text-xl lg:text-5xl md:text-3xl font-bold m-0 break-words'>Play for the world</h2>
              <h4 className='py-4 text-gray-900 lg:text-2xl md:text-xl text-lg font-bold m-0 break-words'>Let's education for children get good life</h4>
              <p className='pb-7 leading-7 font-normal text-lg text-gray-700 break-words'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue mauris malesuada ultricies in elit non vitae. Vitae, amet venenatis lacus praesent maecenas. Praesent platea aenean praesent amet feugiat ut. Odio lacus nunc id dictum convallis consectetur semper lectus. Eu egestas non maecenas aliquet accumsan a. Suspendisse enim, blandit faucibus ut.
                Integer nunc mauris ultrices sagittis, ut cursus nec. Netus ullamcorper ut odio at vitae id malesuada fames scelerisque. Eget faucibus feugiat posuere lorem at rutrum interdum vestibulum non. Tellus lobortis blandit fermentum nulla. Ut quis gravida sed nam fusce at aliquam. Vestibulum, nisi vitae, ultricies ac. Nulla orci enim, neque nibh aliquam non aliquam. In imperdiet urna etiam felis, lacus urna, vitae. Proin cras nibh natoque molestie amet elementum. Augue dignissim duis et orci. Sollicitudin sit proin in diam id egestas. Iaculis nascetur morbi habitant sollicitudin neque donec elementum viverra.
              </p>

              <div className='grid grid-cols-2 gap-6'>
                <img src={eventImg1} alt="img" />
                <img src={eventImg2} alt="img" />
              </div>
              <h4 className='mt-6 text-gray-900 lg:text-2xl md:text-xl text-lg font-bold m-0 break-words'>Let's education for children get good life</h4>
              <p className="mt-4 mb-8 leading-7 font-normal text-lg text-gray-900 break-words">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies mauris ut amet, nulla vel turpis. Diam eu morbi egestas vitae. Non non volutpat tristique posuere varius vitae pellentesque cras non. Ultrices nisi in risus tristique curabitur lobortis. Habitant fusce et augue mattis massa mi, varius enim.
              </p>
              <button className='rounded-3xl py-2 px-6 text-base font-bold tracking-0.5 transition-all duration-0.5 text-white hover:text-primary border-2 border-primary bg-primary hover:bg-transparent'>
                Sign Up
              </button>
            </div>
            <div className='xl:basis-30% md:basis-40% basis-100% pt-8 md:pt-0 md:pl-14'>
              <div className='pb-4'>
                <h5 className="text-gray-600 text-base font-bold m-0 break-words">Location:</h5>
                <h5 className="text-gray-900 text-base font-bold m-0 break-words">Broklyn, New York</h5>
              </div>
              <div className='pb-4'>
                <h5 className="text-gray-600 text-base font-bold m-0 break-words">Date:</h5>
                <h5 className="text-gray-900 text-base font-bold m-0 break-words">8:00 am to 12:30 pm</h5>
              </div>
              <div className='pb-4'>
                <h5 className="text-gray-600 text-base font-bold m-0 break-words">Category:</h5>
                <h5 className="text-gray-900 text-base font-bold m-0 break-words">harity,Food</h5>
              </div>
              <div className='pb-4'>
                <h5 className="text-gray-600 text-base font-bold m-0 break-words">Duration:</h5>
                <h5 className="text-gray-900 text-base font-bold m-0 break-words">150 Days</h5>
              </div>
              <div className='pb-4'>
                <h5 className="text-gray-600 text-base font-bold m-0 break-words">Type:</h5>
                <h5 className="text-gray-900 text-base font-bold m-0 break-words">Open</h5>
              </div>
              <div className='pb-4'>
                <h5 className="text-gray-600 text-base font-bold m-0 break-words">Category:</h5>
                <h5 className="text-gray-900 text-base font-bold m-0 break-words">harity,Food</h5>
              </div>
              <div className='pb-4'>
                <h5 className="text-gray-600 text-base font-bold m-0 break-words">Entrance:</h5>
                <h5 className="text-gray-900 text-base font-bold m-0 break-words">Unlimited</h5>
              </div>

              <div className='pb-4 flex items-center gap-2'>
                <h5 className="text-gray-600 text-base font-bold m-0 break-words">Share:</h5>
                <div className="flex items-center justify-center">
                  <Link to="/" className="cursor-pointer  p-2 rounded-md">
                    {Icons.fbBlackBgIcon}
                  </Link>
                  <Link to="/" className="cursor-pointer  p-2 rounded-md">
                    {Icons.linkedBlackBgIcon}
                  </Link>
                  <Link to="/" className="cursor-pointer  p-2 rounded-md">
                    {Icons.twitterBlackBgIcon}
                  </Link>
                  <Link to="/" className="cursor-pointer  p-2 rounded-md">
                    {Icons.youtubeBlackBgIcon}
                  </Link>
                </div>
              </div>
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
      </div>
      <BecomeYoutuber />
      <Feature />
      <LatestNews />
    </div>
  )
}

export default EventDetailPage