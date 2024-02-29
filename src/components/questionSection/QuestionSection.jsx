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
            <Accordian title="Nulla eu purus scelerisque, dignissim diam." 
               accOpenStatus={false}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae.
             </Accordian>
             <Accordian title="Nulla eu purus scelerisque, dignissim diam.">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae.
             </Accordian>
             <Accordian title="Nulla eu purus scelerisque, dignissim diam.">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae.
             </Accordian>
             <Accordian title="Nulla eu purus scelerisque, dignissim diam.">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae.
             </Accordian>
           
          </div>
        </div>
    </div>
  )
}

export default QuestionSection