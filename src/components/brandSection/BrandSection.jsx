import React from 'react'
import { Link } from 'react-router-dom'
import BrandImg1 from '../../assets/images/brand-1.png'
import BrandImg2 from '../../assets/images/brand-2.png'
import BrandImg3 from '../../assets/images/brand-3.png'
import BrandImg4 from '../../assets/images/brand-4.png'

const BrandSection = ({ wrCustomClass = "" }) => {

  const brandArray = [
    {
      id: 1,
      to: '#',
      title: "brand1",
      img: BrandImg1
    },
    {
      id: 2,
      to: '#',
      title: "brand2",
      img: BrandImg2
    },
    {
      id: 3,
      to: '#',
      title: "brand3",
      img: BrandImg3
    },
    {
      id: 4,
      to: '#',
      title: "brand4",
      img: BrandImg4
    }
  ]

  let renderView = null
  renderView = brandArray.map((item) => (
    <Link to={item.to} key={item.id} className="text-center p-4 sm:p-10 md:p-14">
      <img className='inline-block w-20 sm:w-auto' src={item.img} alt={item.title} />
    </Link>
  ))
  return (
    <div className={`pb-20 bg-on-primary-opacity-0.16`}>
      <div className='container mx-auto px-4 '>
        <div className=' py-4 sm:py-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 shadow-md bg-white rounded-md'>
          {renderView}
        </div>
      </div>
    </div>
  )
}

export default BrandSection