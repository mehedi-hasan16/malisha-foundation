import React from 'react'
import { Link } from 'react-router-dom'
import breadcrumbImg from '../../../assets/images/breadcrumb.jpeg'

const bredCrumb = [
  {
    id: 1,
    title: 'home',
    link: '/',
    active: false
  },
  {
    id: 2,
    title: 'default',
    link: '#',
    active: true
  },

]

const BreadCrumb = ({ title = "", breadCrumbArray = [...bredCrumb], homeColor = "text-white", activeColor = "text-tertiary", backImg = breadcrumbImg }) => {

  let renderView = null
  renderView = breadCrumbArray.map((item) => (
    <>
      {
        item.active ?
          <li className={`${activeColor} pr-2 font-bold lg:text-2xl md:text-xl text-lg`}>
            {item.title}
          </li> :
          <li className='relative after:content-["/"] after:absolute after:text-white after:text-2xl'>
            <Link className={`${homeColor} pr-2 font-bold lg:text-2xl md:text-xl text-lg`} to={item.link}>{item.title}</Link>
          </li>
      }

    </>
  ))

  return (
    <div style={{ backgroundImage: `url(${backImg})` }} className=" py-20 sm:py-40 lg:py-96 relative before:absolute before:w-full before:h-full before:bg-black before:bg-opacity-80 flex items-center bg-cover bg-no-repeat bg-center">
      <div className='container px-4 mx-auto z-1'>
        <h1 className="pb-1 md:pb-4 text-white font-bold lg:leading-21 lg:text-7xl md:text-5xl text-3xl">{title}</h1>
        <ul className='flex items-center gap-4'>
          {
            renderView
          }
        </ul>

      </div>
    </div>
  )
}

export default BreadCrumb