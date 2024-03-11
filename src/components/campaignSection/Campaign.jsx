import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import campaignImg1 from '../../assets/images/campaign1.jpeg'
import campaignImg2 from '../../assets/images/campaign2.jpeg'
import campaignImg3 from '../../assets/images/campaign3.jpeg'
import ProgressLise from '../global/progressLine/ProgressLise'
import './campaign.css'


const data = [
    {
        id: 1,
        image: campaignImg1,
        tag: 'Scholarship',
        btnTitle: "See Details",
        subtitle: "We helped secure a scholarship for studying abroad",
        content: " In 2023, [Name] was awarded a scholarship to study at Yangzhou University through the Maliasha Foundation. With our support and guidance, [he/she/they] successfully secured this prestigious opportunity, enabling [him/her/them] to pursue [his/her/their] academic goals in a dynamic international environment at Yangzhou University.",
        // percentage: '35',
        // Ralsed: "$5,000"
    },
    {
        id: 2,
        image: campaignImg2,
        tag: 'Educational Instruments',
        btnTitle: "See Details",
        subtitle: "Malasha Foundation Supports Student with Educational Instruments",
        content: "The Maliasha Foundation is proud to have facilitated a student's academic journey by supplying essential educational instruments. Through our commitment to empowering learners, we aim to remove barriers to education and enable students to excel in their studies. By providing these resources, we strive to foster a conducive learning environment where every student can thrive and reach their full potential.",
        // percentage: '67',
        // Ralsed: "$5,000"
    },
    {
        id: 3,
        image: campaignImg3,
        tag: 'Financial Aid',
        btnTitle: "See Details",
        subtitle: "Maliasha Foundation's Financial Aid",
        content: " Discover the key to unlocking your educational aspirations with Maliasha Foundation's financial aid programs. Whether you're seeking scholarships, grants, or other forms of assistance, we're dedicated to supporting your journey towards academic success. Apply today and let us empower your future with the resources you need to thrive.",
        // percentage: '80',
        // Ralsed: "$5,000"
    },
]

const Campaign = () => {
    const [helpData, setHelpData] = useState([...data])

    let renderView = null;
    renderView = helpData.map((item) => (
        <div key={item.id} className="campaign_single relative">
            <div className='z-1 inline-block absolute top-5 left-2 bg-primary-container text-center py-2 px-4'>
                <h5 className="text-on-primary-container text-base font-bold">
                    {item.tag}
                </h5>
            </div>
            <div className='relative'>
                <img className='h-80 object-cover w-full roun rounded-t-md' src={item.image} alt="dfd" />
                <div className='campaign_single_btn bg-tertiary-container text-center py-3' >
                    <Link to="#" className='text-on-tertiary-container block text-lg sm:text-base font-bold m-0 break-words'>
                        {item.btnTitle}
                    </Link>
                </div>
            </div>
            <div className='z-1 relative bg-on-tertiary'>
                <h4 className='text-white pt-6 lg:text-2xl md:text-xl text-lg font-bold m-0 break-words'>{item.subtitle}</h4>
                <p className='pt-4 pb-2 leading-7 font-normal text-lg text-white m-0 break-words'>{item.content}</p>
                {/* <ProgressLise height='h-3' percentage={item.percentage} /> */}
            </div>
            {/* <div className='flex justify-between pt-5'>
                <h5 className="text-white text-base font-bold">Ralsed {item.Ralsed}</h5>
                <h5 className="text-white text-base font-bold">Ralsed {item.Ralsed}</h5>

            </div> */}
        </div>
    ))

    return (
        <div className={`py-12 sm:py-20 bg-on-tertiary`}>
            <div className='container mx-auto px-4'>
                <div className='text-center pb-14 '>
                    <h4 className='pb-1 text-tertiary-container font-bold text-sm m-0 break-words uppercase tracking-widest'>OUR CAMPAIGNS</h4>
                    <h2 className='max-w-lg w-full mx-auto auto  font-bold text-secondary-container   pb-4 text-xl lg:text-5xl md:text-3xl m-0 break-words'>Our Highest Ambition is to Help People</h2>
                    <p className='max-w-3xl w-full mx-auto leading-7 font-normal text-lg text-white m-0 break-words'>
                    The vision of the Malisha Foundation is to inspire and empower individuals to become lifelong learners and engaged members of their communities, creating a brighter and more prosperous future for all. Also, it is to create a world where everyone has access to high-quality education and the opportunity to pursue their dreams and achieve their full potential.
                    </p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 md:gap-6'>
                    {
                        renderView
                    }
                </div>
            </div>
        </div>
    )
}

export default Campaign