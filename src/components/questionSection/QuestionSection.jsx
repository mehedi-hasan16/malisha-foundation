import React from 'react'
import Accordian from '../accordian/Accordian'

const QuestionSection = () => {

  return (
    <div className={`py-12 sm:py-20 bg-gray-50`}>
        <div className='container max-w-2xl mx-auto px-4 text-center'>
            <h4 className='text-primary pb-2 font-bold text-sm m-0 break-words uppercase tracking-widest'>Feature donor reviews</h4>
            <h2 className='text-gray-900 text-xl pb-4 lg:text-5xl md:text-3xl font-bold m-0 break-words'>What People say About Our Charity</h2>
            <p className='text-gray-800 pb-12 leading-7 font-normal text-lg text-white m-0 break-words'>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et.
            </p>   
        </div>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col gap-4'>
            <Accordian title="Transforming Lives: Malisha Foundation's Impact in Education." 
               accOpenStatus={false}>
                Malisha Foundation stands out as a beacon of hope, dedicated to transforming the lives of underprivileged students through its educational initiatives. From scholarships to essential materials and medical services, this non-profit organization leaves an indelible mark on communities by providing vital support where it's needed most.
             </Accordian>
             <Accordian title="Empowering Futures: Malisha Foundation's Commitment to Education.">
             With a steadfast commitment to education, Malisha Foundation empowers individuals from marginalized backgrounds to dream big and achieve their goals. Through a comprehensive range of scholarships, educational materials, and financial aid, this non-profit organization paves the way for brighter futures, leaving a lasting impact on countless lives.
             </Accordian>
             <Accordian title="Making a Difference: Malisha Foundation's Educational Outreach.">
             Malisha Foundation's dedication to making a positive difference in the lives of the underprivileged shines through its educational outreach programs. By providing scholarships, materials, and medical services, this non-profit organization not only addresses immediate needs but also lays the foundation for long-term success and empowerment.
             </Accordian>
             <Accordian title="Hope in Education: Malisha Foundation's Compassionate Support.">
             Malisha Foundation embodies the spirit of compassion and support in its mission to uplift underprivileged individuals through education. Through a holistic approach that includes scholarships, essential materials, and medical services, this non-profit organization offers hope and opportunities for a brighter future to those who need it most.
             </Accordian>
           
          </div>
        </div>
    </div>
  )
}

export default QuestionSection