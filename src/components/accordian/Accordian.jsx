import React, { useState } from 'react'
import Icons from '../global/Icons'

const Accordian = ({ accOpenStatus = true, title = "", children = {}, customClass = "" }) => {
  const [accOpen, setAccOpen] = useState(accOpenStatus)
  return (
    <div className={`${customClass} border border-gray-300 rounded-2xl transition-height`}>
      <div className={`px-5 py-5 flex items-center justify-between cursor-pointer`} onClick={() => setAccOpen(!accOpen)}>
        <h5 className={`${accOpen ? 'text-gray-800' : 'text-secondary'} text-md font-bold`}>{title}</h5>
        {accOpen ? Icons.plusIcon : Icons.minusIcon}

      </div>
      <p className={`transition-height px-5 ${accOpen ? 'h-0 p-0 overflow-hidden -z-1' : 'pb-5'} text-gray-700 leading-7 font-normal text-lg m-0 break-words`}>
        {children}
      </p>
    </div>
  )
}

export default Accordian