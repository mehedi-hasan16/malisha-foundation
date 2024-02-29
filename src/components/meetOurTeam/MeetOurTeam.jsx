import React from 'react'
import meet1Img from '../../assets/images/meet1.jpeg'
import meet2Img from '../../assets/images/meet2.jpeg'
import meet3Img from '../../assets/images/meet3.jpeg'
import meet4Img from '../../assets/images/meet4.jpeg'
import { Link } from 'react-router-dom'
import Icons from '../global/Icons'


const MeetOurTeam = () => {

  const meetArray = [
    {
      id: 1,
      title: "Devil Roy Barman",
      subTitle: "Volunteer",
      img: meet1Img,
      socialMedia: [
        {
          id: 1,
          icon: Icons.fbIcon,
          link: '#'
        },
        {
          id: 2,
          icon: Icons.linkedinIcon,
          link: '#'
        },
        {
          id: 3,
          icon: Icons.twitterIcon,
          link: '#'
        },
      ]
    },
    {
      id: 2,
      title: "Devil Roy Barman",
      subTitle: "Volunteer",
      img: meet2Img,
      socialMedia: [
        {
          id: 1,
          icon: Icons.fbIcon,
          link: '#'
        },
        {
          id: 2,
          icon: Icons.linkedinIcon,
          link: '#'
        },
        {
          id: 3,
          icon: Icons.twitterIcon,
          link: '#'
        },
      ]
    },
    {
      id: 3,
      title: "Devil Roy Barman",
      subTitle: "Volunteer",
      img: meet3Img,
      socialMedia: [
        {
          id: 1,
          icon: Icons.fbIcon,
          link: '#'
        },
        {
          id: 2,
          icon: Icons.linkedinIcon,
          link: '#'
        },
        {
          id: 3,
          icon: Icons.twitterIcon,
          link: '#'
        },
      ]
    },
    {
      id: 4,
      title: "Devil Roy Barman",
      subTitle: "Volunteer",
      img: meet4Img,
      socialMedia: [
        {
          id: 1,
          icon: Icons.fbIcon,
          link: '#'
        },
        {
          id: 2,
          icon: Icons.linkedinIcon,
          link: '#'
        },
        {
          id: 3,
          icon: Icons.twitterIcon,
          link: '#'
        },
      ]
    }

  ]

    let contentViewRender = null
    contentViewRender = meetArray.map((item) => (
      <div className='relative overflow-hidden group' key={item.id}>
        <div className='absolute -right-11  top-3 group-hover:right-3 transition-right duration-0.5'>
          <div className="flex flex-col items-center justify-center gap-2">
            {
              item.socialMedia?.map((single) => (
                <Link to={single.link} className="cursor-pointer bg-secondary p-2 rounded-md">
                  {single.icon}
                </Link>
              ))
            }

          </div>
        </div>
        <img className=' max-h-max md:max-h-80 2xl:max-h-96 sm:h-full w-full object-cover' src={item.img} alt="team" />

        <h4 className='pt-4 pb-1 text-gray-900 lg:text-2xl md:text-xl text-lg font-bold m-0 break-words'>{item.title}</h4>
        <h5 className="text-gray-900 text-md font-bold">{item.subTitle}</h5>
      </div>
    ))

  return (
    <div className="py-12 sm:py-20">
      <div className='container mx-auto px-4 text-center'>
        <h4 className='pb-2 text-primary font-bold text-sm m-0 break-words uppercase tracking-widest'>
          We Change Your Life & World
        </h4>
        <h2 className='mx-auto w-full max-w-lg pb-4 text-gray-900 text-xl lg:text-5xl md:text-3xl font-bold m-0 break-words'>Meet Our Volunteers</h2>
        <p className='lg:max-w-5xl max-w-3xl mx-auto w-full pb-12 leading-7 font-normal text-lg text-gray-700 m-0 break-words'>
        Be the backbone of Malisha Foundation. Your dedication, passion, and skills are invaluable in helping us achieve our mission. Join us now and make a real difference!
        </p>

      </div>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {contentViewRender}
        </div>
        <div className='text-center pt-10'>
          <Link to="/meet-team" className="text-base font-bold tracking-0.5 border-primary bg-primary hover:bg-transparent py-2 px-6 rounded-3xl transition-all duration-0.5 text-white hover:text-primary border-2">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MeetOurTeam