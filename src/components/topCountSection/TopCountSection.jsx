import React, { useState } from 'react'
import Icons from '../global/Icons'

const data = [
  {
    id: 1,
    icon: Icons.charitySupport,
    count: 9320,
    subTitle: 'People help Last year'
  },
  {
    id: 2,
    icon: Icons.donateMoneyIcon1,
    count: 1780,
    subTitle: 'People help Last year'
  },
  {
    id: 3,
    icon: Icons.calendarColorIcon,
    count: 1520,
    subTitle: 'People help Last year'
  },
  {
    id: 4,
    icon: Icons.foodBoxIcon,
    count: 8920,
    subTitle: 'People help Last year'
  }
]
const TopCountSection = () => {
  const [dataArray, setDataArry] = useState([...data])
  return (
    <div className={`relative -top-24 container mx-auto px-4`}>
      <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-4 shadow-md bg-white rounded-md`}>
        {
          dataArray?.map((item) => (
            <div className='p-5 md:p-10 text-center flex items-center flex-col'>
            {item.icon}
            <h5 className='text-black font-bold pt-1 md:pt-6 text-lg sm:text-2xl m-0 break-words'>{item.count}</h5>
            <h6 className='text-gray-900 ext-base font-bold m-0 break-words'>{item.subTitle}</h6>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TopCountSection