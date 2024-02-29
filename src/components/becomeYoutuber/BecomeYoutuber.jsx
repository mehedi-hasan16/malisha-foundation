import React from 'react'
import becomeImg from  '../../assets/images/become-youtuber.jpeg'


const BecomeYoutuber = () => {

  return (
    <div style={{backgroundImage: `url(${becomeImg})`}} className={`py-16 sm:py-28 md:py-60 mb-12  sm:mb-20 relative before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-75 flex items-center bg-cover bg-no-repeat bg-center 2xl:bg-positionXY`} >
        <div className='text-center max-w-4xl mx-auto z-10'>
          <h2 className='pb-4 text-white text-xl lg:text-5xl md:text-3xl font-bold m-0 break-words'>How to Become a Volunteer?</h2>
          <p className='px-12 leading-7 font-normal text-lg text-white m-0 break-words'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing.
          </p>
          <div className='mt-10 items-center flex flex-col sm:flex-row justify-center gap-4'>
            <button className='rounded-3xl py-2 px-6 text-base font-bold tracking-0.5 transition-all duration-0.5 text-white hover:text-primary border-2 border-primary bg-primary hover:bg-transparent'>
              Become a Volunteer
            </button>
             <button className='rounded-3xl py-2 px-6 text-base font-bold tracking-1.25 transition-all duration-0.5  border-2 text-tertiary hover:text-gray-800 transparent hover:bg-tertiary hover:border-tertiary'>
             Donate Now
            </button>
          </div>
        </div>
    </div>
  )
}

export default BecomeYoutuber