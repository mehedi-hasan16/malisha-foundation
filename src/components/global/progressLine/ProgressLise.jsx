import React from 'react'

const ProgressLise = ({
    downbg='bg-gray-700',
    upbg='bg-secondary-container',
    height='h-2',
    percentage='40',
    percentageColor='text-white'
}) => {
  return (
    <div>
        <h4 className={`pb-2 font-bold text-2xl sm:text-3xl m-0 break-words ${percentageColor}`}>{percentage}%</h4>
        <div className='relative'>
            <div className={`${downbg+' '+height} absolute  w-full top-0 left-0`}></div>
            <div style={{width:`${percentage}%`}} className={`${upbg+' '+height} absolute top-0 left-0`}></div>
        </div>
    </div>
    
  )
}

export default ProgressLise