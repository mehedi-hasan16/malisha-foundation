import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import whiteLogo from '../../assets/images/white-logo.png'
import Icons from '../../components/global/Icons'

const Footer = () => {
  const [bottomClass, setBootomClass] = useState(false)
  const scrollHandleScroll = () => {

    if (window.scrollY > 500) {
      setBootomClass(true)
    } else {
      setBootomClass(false)
    }

  }
  const upToTopWindow = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHandleScroll);
  }, []);
  return (
    <div className='bg-gray-900 pt-20'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div>
            <img src={whiteLogo} alt="footer logo" />
            <a href="https://shorturl.at/vxARZ">
            <button className='mt-6 rounded-3xl py-2 px-6 text-base font-bold tracking-0.5 transition-all duration-0.5 text-white hover:text-primary border-2 border-primary bg-primary hover:bg-transparent'>
            Apply Scholarship 
            </button>
            </a>
          </div>
          <div>
            <h4 className='pb-7 text-white lg:text-2xl md:text-xl text-lg font-bold m-0 break-words'>Quick Links</h4>
            <ul>
              <li className='py-1' onClick={upToTopWindow}>
                <Link to="/" className="text-white hover:text-primary transition duration-0.5 text-base font-normal leading-7">Home</Link>
              </li>
              <li className='py-1' onClick={upToTopWindow}>
                <Link to="/causes" className="text-white hover:text-primary transition duration-0.5 text-base font-normal leading-7">Causes</Link>
              </li>
              <li className='py-1' onClick={upToTopWindow}>
                <Link to="/about" className="text-white hover:text-primary transition duration-0.5 text-base font-normal leading-7">About</Link>
              </li>
              <li className='py-1' onClick={upToTopWindow}>
                <Link to="/event-page" className="text-white hover:text-primary transition duration-0.5 text-base font-normal leading-7">Event</Link>
              </li>
              <li className='py-1' onClick={upToTopWindow}>
                <Link to="/contact" className="text-white hover:text-primary transition duration-0.5 text-base font-normal leading-7">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className='pb-7 text-white lg:text-2xl md:text-xl text-lg font-bold m-0 break-words'>Contact US</h4>
            <div className='flex items-center gap-2 w-60 py-1'>
              <div className='flex-shrink-0'>
                {Icons.locationIcon}
              </div>
              <p className='leading-7 font-normal text-lg text-white m-0 break-words'>No. 29 Liuma Road, Huale Construction, Yuexiu District, Guangzhou</p>
            </div>
            <div className='flex items-center gap-2 py-1'>
              {Icons.emialIcon}
              <p className='leading-7 font-normal text-lg text-white m-0 break-words'>company@mail.com</p>
            </div>
            <div className='flex items-center gap-2 py-1'>
              {Icons.callIcon}
              <p className='leading-7 font-normal text-lg text-white m-0 break-words'>+86 18613114366</p>
            </div>
            <div className="flex gap-4 mt-4 items-center justify-start">
              <a href="https://www.facebook.com/MalishaFoundation" className="cursor-pointer rounded-md">{Icons.fbIcon}</a>
              <Link to="/" className="cursor-pointer rounded-md">{Icons.linkedinIcon}</Link>
              <Link to="/" className="cursor-pointer rounded-md">{Icons.twitterIcon}</Link>
            </div>
          </div>
        </div>
      </div>
      <div className='border-t-2 border-on-primary-opacity-0.12 mt-12 py-10'>
        <div className='container text-center lg:text-left mx-auto px-4'>
          <div className='flex flex-col gap-y-4 lg:flex-row justify-between'>
            <div className='text-white text-base font-normal leading-6'> © 2024 malisha foundation |
              <Link to="#" className='text-tertiary mr-0.5'> Sitemap |</Link>
              <Link to="#" className='text-tertiary'> Privacy Policy |</Link>
              <Link to="#" className='text-tertiary'> Anti-Spam Policy | </Link>
              <Link to="#" className='text-tertiary'> Click for Accessibility</Link>
            </div>
            <div className='text-white text-base font-normal leading-6'>Web Design by
              <Link to="#" className='text-tertiary'>devloper name</Link></div>
          </div>
        </div>
      </div>

      <div className={`${!bottomClass && 'hidden '} cursor-pointer fixed bottom-10 z-40 right-6 w-10 md:w-12 h-10 md:h-12 bg-gray-800 rounded-lg border-2 border-white flex items-center justify-center`} onClick={upToTopWindow}>
        <svg width="10" height="22" viewBox="0 0 10 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.67033 0.128333L0.215333 5.01417C0.105333 5.15167 0.0869993 5.29833 0.151166 5.46333C0.215333 5.62833 0.343666 5.70167 0.517833 5.70167H3.37783V21.5967C3.37783 21.7158 3.4145 21.8167 3.48783 21.89C3.56117 21.9633 3.662 22 3.78117 22H6.22867C6.34783 22 6.44867 21.9633 6.522 21.89C6.59533 21.8167 6.632 21.7158 6.632 21.5967V5.70167H9.48283C9.657 5.70167 9.77617 5.61917 9.8495 5.46333C9.91367 5.29833 9.89533 5.15167 9.77617 5.01417L5.27533 0.128333C5.18367 0.0458333 5.08283 0 4.96367 0C4.85367 0 4.75283 0.0458333 4.67033 0.128333Z" fill="white" />
        </svg>
      </div>

    </div>
  )
}

export default Footer