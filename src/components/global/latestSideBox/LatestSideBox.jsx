import React from 'react'
import latestPost from '../../../assets/images/latest.jpeg'
import { Link } from 'react-router-dom'


const LatestSideBox = ({ item }) => {
  return (
    <div className='flex gap-3 items-center mb-4'>
      <div className='basis-14 flex-shrink-0 h-14 '>
        <img className='object-cover rounded-lg h-full w-full' src={latestPost} alt="latest post" />
      </div>
      <div className='overflow-hidden'>
        <h5 className="text-gray-600 truncate text-base font-bold m-0 break-words">12 March, 2021</h5>
        <Link to="#" className='block text-gray-900 text-md font-bold truncate'>
          Promoting the rights of children
        </Link>
      </div>
    </div>
  )
}

export default LatestSideBox