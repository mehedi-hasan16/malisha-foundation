import React from 'react'
import sliderImg from '../../assets/images/slider.jpeg'

const Slider = () => {
  return (
        <div style={{backgroundImage: `url(${sliderImg})`}} className=" pt-20 pb-36 sm:pt-0 sm:pb-0 sm:h-155 lg:h-237 flex items-center bg-cover bg-no-repeat bg-center">
            <div className='container mx-auto'>
                <div className='max-w-2xl text-white px-4 text-center lg:text-left'>
                    <h4 className='text-tertiary text-2xl sm:text-3xl font-bold m-0 break-words'>Empowering Through Education for All</h4>
                    <h1 className='text-white lg:text-7xl md:text-5xl text-3xl lg:leading-21 font-bold m-0 break-words'>A helping hand for hoping heart</h1>
                    <p className='font-normal text-white text-lg leading-7 m-0 break-words'>
                    Malisha Foundation is a non-profit organization specializing in the education sector. 
                    </p>
                    <div className='mt-6 sm:flex-row flex-col gap-y-3 flex items-center gap-x-2 sm:gap-x-8 justify-center lg:justify-start'>
                        <a href="https://shorturl.at/vxARZ"><button className='rounded-3xl py-2 px-6 text-base font-bold tracking-1.25 transition-all duration-0.5 text-white hover:text-primary border-2 border-primary bg-primary hover:bg-transparent'>
                        Apply Scholarship
                        </button></a>
                        <button className='rounded-3xl py-2 px-6 text-base font-bold tracking-1.25 transition-all duration-0.5  border-2 text-tertiary hover:text-gray-800 transparent hover:bg-tertiary hover:border-tertiary'>
                        JOIN US
                        </button>
                        
                    </div>
                </div>
                
            </div>
        </div>
  )
}

export default Slider