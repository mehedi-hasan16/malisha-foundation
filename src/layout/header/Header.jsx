import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Menu from './Menu'
import Icons from '../../components/global/Icons'
import DropDownList from './DropDownList'
import whiteLogo from '../../assets/images/white-logo.png'
import './style.css'


const Header = () => {
  const [menuData, setMenuData] = useState([...Menu])
  const [mobileMenu, setMobileMenu] = useState(false)
  const [stkyClass, setStkyClass] = useState(false)
  const [mobileMenuActive, setMobileMenuActive] = useState(false)

  const mobileMenuHandle = () => {
    setMobileMenu(true)
  }
  const mobileMenuHandleClose = () => {
    setMobileMenu(false)
  }

  const scrollHandleScroll = () => {
    if (window.scrollY > 400) {
      setStkyClass(false)
    }
    else {
      setStkyClass(true)
    }
  }



  // for mobile menu click handler
  const dropDownHandler = () => {
    setMobileMenuActive(!mobileMenuActive)
  }

  const closeToggleSlide = () => {
    setMobileMenu(false)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const upToTopWindow = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }


  useEffect(() => {
    window.addEventListener('scroll', scrollHandleScroll);
    scrollHandleScroll()
  }, []);

  let renderVeiwMenu = null;
  renderVeiwMenu = menuData.map((item) => (
    <li className={`${mobileMenuActive ? "customActiveMenu" : ''} customNavMenu text-white relative`} key={item.id} onClick={item.droupMenu ? (() => dropDownHandler(item.id)) : closeToggleSlide}   >
      <NavLink
        to={item.to}
        className={({ isActive }) => (isActive ? 'active' : 'inactive') + ' customNavMenu_a transition-all duration-0.5 hover:text-primary px-4 py-3 lg:py-6 h-full customNavMenuA flex lg:items-center gap-2'}>
        {item.title}
        {
          item.droupMenu &&
          <span className='mt-1.5 lg:mt-0'>{Icons.downWihteArrowIcon}</span>
        }
        {
          item.droupMenu &&
          <ul className='customNavMenu_droupdown lg:absolute left-0 top-72px bg-white py-2 w-64'>
            <DropDownList closeToggleSlide={closeToggleSlide} dropDownArray={item.droupMenuItemList} />
          </ul>
        }
      </NavLink>
    </li>
  ))
  const handelScholarship =()=>{
    window.location.href = "https://shorturl.at/vxARZ";
  }
  return (
    <div className={`${stkyClass ? 'bg-on-primary-opacity-0.8' : 'bg-gray-800'} header w-full fixed z-20 `}>
      <div className='container  mx-auto px-4'>
        {
          stkyClass &&

          <div className='z-10 sm:flex flex-row border-b border-gray-700 py-2 hidden' >
            <div className='basis-40% flex items-center gap-2'>
              <a href="https://www.facebook.com/MalishaFoundation">{Icons.fbColorIcon}</a>
              <Link to="#">{Icons.twitterColorIcon}</Link>
              <Link to="#">{Icons.linkedinColorIcon}</Link>
              <Link to="#">{Icons.youtubeColorIcon}</Link>
            </div>
            <ul className='basis-60% flex justify-end gap-8'>
              <li className='text-white flex items-center gap-1'>
                {Icons.callIcon}
                +86 18613114366
              </li>
              <li className='text-white flex items-center gap-2'>
                {Icons.emialIcon}
                company@mail.com
              </li>

            </ul>

          </div>
        }
        <nav className='z-10 flex flex-row items-center justify-between py-4 lg:py-0'>
          <div className='basis-20%'>
            <Link to="/"><img src={whiteLogo} alt='white logo' onClick={upToTopWindow}/></Link>
          </div>
          <div className='text-white block lg:hidden' onClick={mobileMenuHandle}>
            <span>{Icons.mobileMenuIcon}</span>
          </div>
          <ul className={`${mobileMenu ? "mobile_menu_show" : ''} mobile_menu basis-80% flex justify-end`}>

            {renderVeiwMenu}

            <li className='mt-4 lg:mt-0 pl-6 flex-shrink-0 text-white flex items-center'>
              <button onClick={handelScholarship} className='rounded-3xl py-2 px-6 text-base font-bold tracking-0.5 transition-all duration-0.5 text-white hover:text-on-primary-container border-2 border-primary hover:bg-primary-container bg-primary hover:border-primary-container'>
                Apply Scholarship
              </button>
            </li>

            {/* for mobile menu */}
            <div className='lg:hidden fixed top-2 right-2 z-5 flex items-center justify-center bg-on-primary-container text-white h-8 w-8 rounded-r-50' onClick={mobileMenuHandleClose} >
              X
            </div>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header