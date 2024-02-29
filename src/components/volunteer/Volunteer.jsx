import React, { useState } from 'react'
import ReactFlagsSelect from "react-flags-select";
import featureImg from '../../assets/images/become-youtuber.jpeg'



const Volunteer = () => {

  const [selected, setSelected] = useState("BD");

  return (
    <div className={`py-12 sm:py-20`}>
      <div className='container max-w-2xl mx-auto px-4 text-center'>
        <h4 className='pb-2 text-primary font-bold text-sm m-0 break-words uppercase tracking-widest'>Register yourself with us</h4>
        <h2 className='pb-4 text-gray-900 text-xl lg:text-5xl md:text-3xl font-bold m-0 break-words'>Let’s join our community to
          become a volunteer
        </h2>
        <p className='leading-7 font-normal text-lg text-gray-800 pb-12 m-0 break-words'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et.
        </p>

      </div>
      <div className='relative'>
        <div className='container mx-auto px-4 mt-6 md:mt-0'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-6'>
            <div>
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
              <input placeholder="Date of Birth" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
              <input placeholder="Occupation" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
              <textarea placeholder="Write a Comment" className="mb-4 w-full focus:outline-none border border-gray-300 resize-none rounded-sm h-30 2xl:h-40 py-4 px-5 text-lg text-gray-800 " />
              <button className='mt-2 md:mt-8 rounded-3xl py-2 px-6 text-base font-bold tracking-0.5 transition-all duration-0.5 text-white hover:text-primary border-2 border-primary bg-primary hover:bg-transparent'>
                Appply Now
              </button>
            </div>
            <div className=' lg:w-1/2 mt-12 lg:mt-0 lg:pl-8 lg:h-full lg:absolute left-1/2 order-first md:order-last px-5 md:px-0'>
              <img className='rounded-bl-100 h-full object-cover w-full' src={featureImg} alt="decause" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Volunteer