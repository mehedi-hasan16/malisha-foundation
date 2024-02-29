import React, { useEffect } from 'react'
import Accordian from '../../components/accordian/Accordian'
import BreadCrumb from '../../components/global/breadCrumb/BreadCrumb'
import BecomeYoutuber from '../../components/becomeYoutuber/BecomeYoutuber'
import Feature from '../../components/feature/Feature'
import LatestNews from '../../components/letestNews/LatestNews'



const Faq = () => {

  const breadCrumbArray = [
    {
      id: 1,
      title: 'Home',
      link: '/',
      active: false,
    },
    {
      id: 2,
      title: 'Faq',
      link: '/faq ',
      active: true,
    }
  ]
  useEffect(() => {
    document.title = "Faq"
  }, [])
  return (
    <div className='faq '>
      <BreadCrumb title="FAQ" breadCrumbArray={breadCrumbArray} />
      <div className='py-12 sm:py-20'>
        <div className='container max-w-2xl mx-auto px-4 text-center'>
          <h4 className='pb-2 text-primary font-bold text-sm m-0 break-words uppercase tracking-widest'>questions</h4>
          <h2 className='pb-4 text-gray-900 text-xl lg:text-5xl md:text-3xl font-bold m-0 break-words'>Recently asked questions</h2>
          <p className='pb-12 leading-7 font-normal text-lg text-white m-0 break-words text-gray-800'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et.
          </p>
        </div>
        <div className='container mx-auto px-4 '>
          <Accordian accOpenStatus={false} customClass='mb-4' title='Nulla eu purus scelerisque, dignissim diam.'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae.
          </Accordian>
          <Accordian accOpenStatus={true} customClass='mb-4' title='Nulla eu purus scelerisque, dignissim diam.'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae.
          </Accordian>
          <Accordian accOpenStatus={true} customClass='mb-4' title='Nulla eu purus scelerisque, dignissim diam.'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae.
          </Accordian>
          <Accordian accOpenStatus={true} customClass='mb-4' title='Nulla eu purus scelerisque, dignissim diam.'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae.
          </Accordian>
          <Accordian accOpenStatus={true} customClass='mb-4' title='Nulla eu purus scelerisque, dignissim diam.'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae.
          </Accordian>
          <Accordian accOpenStatus={true} title='Nulla eu purus scelerisque, dignissim diam.'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing. Mauris sit quam est dui vitae.
          </Accordian>
        </div>
      </div>
      <BecomeYoutuber />
      <Feature />
      <LatestNews />
    </div>
  )
}

export default Faq