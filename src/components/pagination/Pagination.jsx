import React from 'react'

const Pagination = () => {
    return (
        <div className={`pt-14 max-w-2xl w-full mx-auto`}>
            <ul className='flex justify-center' >
                <li className='inline-flex items-center justify-center gap-2 mr-6 bg-on-primary-opacity-0.16 h-8 w-8 md:h-14 md:w-36 rounded-r-50 '>
                    <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.535 17.68c.352-.352.317-.88 0-1.23l-4.254-4.044h10.125a.833.833 0 0 0 .844-.844v-1.124a.855.855 0 0 0-.844-.844H5.281l4.254-4.008c.317-.352.352-.879 0-1.23l-.773-.774a.871.871 0 0 0-1.196 0l-6.82 6.856a.77.77 0 0 0 0 1.16l6.82 6.855c.317.317.844.317 1.196 0l.773-.773Z" fill="#009CA6" />
                    </svg>
                    <h4 className='uppercase md:block hidden text-secondary text-lg sm:text-base font-bold m-0 break-words'>prev</h4>
                </li>
                <li className='cursor-pointer text-xl bg-secondary inline-flex items-center justify-center text-white h-8 w-8 md:h-14 md:w-14 rounded-r-50'>
                    <h4 className='uppercase text-white text-lg sm:text-base font-bold m-0 break-words'>1</h4>
                </li>
                <li className='group mx-0.5 hover:bg-secondary cursor-pointer text-xl inline-flex items-center justify-center text-gray-800  h-8 w-8 md:h-14 md:w-14 flex-shrink-0 rounded-r-50'>
                    <h4 className='uppercase  group-hover:text-white text-gray-800 text-lg sm:text-base font-bold m-0 break-words'>2</h4>
                </li>
                <li className='group mx-0.5 hover:bg-secondary cursor-pointer text-xl inline-flex items-center justify-center text-gray-800  h-8 w-8 md:h-14 md:w-14 flex-shrink-0 rounded-r-50'>
                    <h4 className='uppercase  group-hover:text-white text-gray-800 text-lg sm:text-base font-bold m-0 break-words'>3</h4>
                </li>
                <li className='group mx-0.5 hover:bg-secondary cursor-pointer text-xl inline-flex items-center justify-center text-gray-800  h-8 w-8 md:h-14 md:w-14 flex-shrink-0 rounded-r-50'>
                    <h4 className='uppercase group-hover:text-white text-gray-800 text-lg sm:text-base font-bold m-0 break-words'>4</h4>
                </li>
                <li className='group mx-0.5 hover:bg-secondary cursor-pointer text-xl inline-flex items-center justify-center text-gray-800 h-8 w-8  md:h-14 md:w-14 rounded-r-50'>
                     <h4 className='uppercase  group-hover:text-white text-gray-800 text-lg sm:text-base font-bold m-0 break-words'>5</h4>
                </li>
                <li className=' ml-6 cursor-pointer inline-flex justify-center items-center gap-2 bg-secondary h-8 w-8 md:h-14 md:w-36 rounded-r-50'>
                    <h4 className='uppercase md:block hidden text-white text-lg sm:text-base font-bold m-0 break-words'>Next</h4>
                    <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.18 4.355c-.352.352-.317.88 0 1.23l4.254 4.009H1.344a.833.833 0 0 0-.844.844v1.124c0 .493.352.844.844.844h10.09L7.18 16.45a.916.916 0 0 0 0 1.23l.773.774c.352.317.879.317 1.195 0l6.856-6.855c.316-.317.316-.844 0-1.196l-6.856-6.82c-.316-.316-.843-.316-1.195 0l-.773.773Z" fill="#fff" />
                    </svg>
                </li>
            </ul>
        </div>
    )
}

export default Pagination