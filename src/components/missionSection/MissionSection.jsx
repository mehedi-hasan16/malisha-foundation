import React from 'react'
import missionImg from '../../assets/images/mission.jpeg'

const MissionSection = () => {
  return (
        <div className={`py-12 sm:py-20 container mx-auto px-4`}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div>
                    <img className='rounded-bra-100 object-cover' src={missionImg}  alt="img"/>
                </div>
                <div className='flex justify-center items-center'>
                    <div>
                        <h4 className='text-primary font-bold text-sm m-0 break-words uppercase tracking-widest'>Our Mission</h4>
                        <h2 className='pt-2 text-gray-900 text-xl lg:text-5xl md:text-3xl font-bold m-0 break-words'>Helping Us you Helping them</h2>
                        <h4 className='pt-4 text-gray-900 lg:text-2xl md:text-xl text-lg font-bold m-0 break-words'>Helping them</h4>
                        <p className='pt-2 leading-7 font-normal text-lg text-gray-700 m-0 break-words'>The mission of the Malisha Foundation is to empower individuals with knowledge and skills and to promote the development of a well-educated and informed society. Through the Malisha Foundation, we assist our needy but brilliant students in getting admission to a scholarship in Chinese universities and supply educational materials for continuing their studies. We also aid destitute people through financial and medical assistance to promote safety and well-being for them and the community.</p>
                        <button className='mt-10 rounded-3xl py-2 px-6 text-base font-bold tracking-0.5 transition-all duration-0.5 text-white hover:text-primary border-2 border-primary bg-primary hover:bg-transparent'>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default MissionSection