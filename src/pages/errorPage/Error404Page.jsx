import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ErrorPage from '../../assets/images/error.jpeg'


const Error404Page = () => {
  useEffect(() => {
    document.title = "Error"
  }, [])
  return (
    <div style={{ backgroundImage: `url(${ErrorPage})` }} className=" py-32 sm:py-52 lg:py-96 bg-cover bg-no-repeat bg-center relative before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-80 flex items-center">
      <div className='container mx-auto px-4 z-2 '>
        <h1 className="text-white font-bold lg:leading-21 lg:text-7xl md:text-5xl text-3xl">404</h1>
        <h4 className="text-tertiary my-4 font-bold text-2xl sm:text-3x">Something went wrong.</h4>
        <p className='mb-12 max-w-2xl w-full leading-7 font-normal text-lg text-white m-0 break-words'>
          We can't find the page you are looking for. You can check out our Help Center
          or head back to the Homepage.
        </p>
        <Link to="/" className="text-base font-bold tracking-0.5 border-primary bg-primary hover:bg-transparent uppercase py-3 px-6 rounded-3xl transition-all duration-0.5 text-white hover:text-primary border-2">
          Back to Homepage
        </Link>
      </div>
    </div>
  )
}

export default Error404Page