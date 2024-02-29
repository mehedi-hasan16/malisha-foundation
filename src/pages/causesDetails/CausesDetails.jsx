import React, { useEffect } from 'react'
import BreadCrumb from '../../components/global/breadCrumb/BreadCrumb'
import ProgressLise from '../../components/global/progressLine/ProgressLise'
import BecomeYoutuber from '../../components/becomeYoutuber/BecomeYoutuber'
import Feature from '../../components/feature/Feature'
import LatestNews from '../../components/letestNews/LatestNews'
import causeDetailsImg from '../../assets/images/cause-details.jpeg'
import latestPost1 from '../../assets/images/latest-details1.jpeg'
import latestPost2 from '../../assets/images/latest-details2.jpeg'
import LatestSideBox from '../../components/global/latestSideBox/LatestSideBox'
import Icons from '../../components/global/Icons'
import commentImg from '../../assets/images/comment.jpeg'
import { Link } from 'react-router-dom'



const item = {
    id: 1,
    image: causeDetailsImg,
    tag: 'Children',
    btnTitle: "Donate Now",
    subtitle: "Iodine fortification of household salt",
    content: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id augue semper arcu enim viverra sit ipsum. Nunc lorem a vulputate eget bibendum id et. Eget nunc, eu, molestie tellus sollicitudin vitae consequat adipiscing.",
    percentage: '35',
    Ralsed: "$5,000"
}

const breadCrumbArray = [
    {
        id: 1,
        title: 'Home',
        link: '/',
        active: false,
    },
    {
        id: 2,
        title: 'Causes',
        link: '/causes ',
        active: false,
    },
    {
        id: 3,
        title: 'Causes Details',
        link: '/causes-details ',
        active: true,
    }
]

const CausesDetails = () => {


    useEffect(() => {
        document.title = "Causes Details"
    }, [])
    return (
        <div className='cause_details'>
            <BreadCrumb title="Causes Details" breadCrumbArray={breadCrumbArray} />
            <div className='py-12 sm:py-20 container mx-auto px-4'>
                <div className='flex lg:flex-row flex-col'>
                    <div className='basis-100% lg:basis-70%'>
                        <div key={item.id} className="relative">
                            <div className='absolute top-2 left-2 bg-primary-container text-center py-2 px-4'>
                                <h5 className="text-on-primary-container text-base font-bold m-0 break-words">{item.tag}</h5>
                            </div>
                            <img className='h-80 xl:h-auto object-cover w-full roun rounded-t-md' src={item.image} alt="dfd" />
                            <div className='bg-tertiary-container text-center py-3' >
                                <Link to="/" className="block text-on-tertiary-container text-lg sm:text-base font-bold m-0 break-words">{item.btnTitle}</Link>
                            </div>
                            <h4 className='text-gray-800 pt-6 lg:text-2xl md:text-xl text-lg font-bold m-0 break-words'>{item.subtitle}</h4>
                            <p className='leading-7 pt-4 font-normal text-lg text-gray-700 m-0 break-words'>{item.content}</p>
                            <ProgressLise percentageColor="text-gray-800" height='h-3' percentage={item.percentage} />
                            <div className='flex justify-between pt-4'>
                                <h5 className="text-gray-700 text-base font-bold m-0 break-words">{`Ralsed: ${item.Ralsed}`}</h5>
                                <h5 className="text-gray-700 text-base font-bold m-0 break-words">{`Ralsed: ${item.Ralsed}`}</h5>
                            </div>
                            {/* content */}
                            <div className='pt-14'>
                                <h2 className='text-gray-800 text-xl lg:text-5xl md:text-3xl font-bold m-0 break-words'>Iodine fortification of household salt</h2>
                                <h4 className='text-gray-900 py-4 lg:text-2xl md:text-xl text-lg font-bold m-0 break-words'>Let's education for children get good life</h4>
                                <p className='leading-7 font-normal text-lg text-gray-700 m-0 break-words'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue mauris malesuada ultricies in elit non vitae. Vitae, amet venenatis lacus praesent maecenas. Praesent platea aenean praesent amet feugiat ut. Odio lacus nunc id dictum convallis consectetur semper lectus. Eu egestas non maecenas aliquet accumsan a. Suspendisse enim, blandit faucibus ut.
                                    Integer nunc mauris ultrices sagittis, ut cursus nec. Netus ullamcorper ut odio at vitae id malesuada fames scelerisque. Eget faucibus feugiat posuere lorem at rutrum interdum vestibulum non. Tellus lobortis blandit fermentum nulla. Ut quis gravida sed nam fusce at aliquam. Vestibulum, nisi vitae, ultricies ac. Nulla orci enim, neque nibh aliquam non aliquam. In imperdiet urna etiam felis, lacus urna, vitae. Proin cras nibh natoque molestie amet elementum. Augue dignissim duis et orci. Sollicitudin sit proin in diam id egestas. Iaculis nascetur morbi habitant sollicitudin neque donec elementum viverra
                                </p>
                            </div>

                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 py-8'>
                                <div className='h-80'>
                                    <img className='object-cover h-full w-full' src={latestPost1} alt="latest1" />
                                </div>
                                <div className='h-80'>
                                    <img className='object-cover h-full w-full' src={latestPost2} alt="latest1" />
                                </div>
                            </div>
                            <h4 className='text-gray-900 lg:text-2xl md:text-xl text-lg font-bold m-0 break-words'>Let's education for children get good life</h4>
                            <p className='pt-4 leading-7 font-normal text-lg text-gray-700 m-0 break-words'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies mauris ut amet, nulla vel turpis. Diam eu morbi egestas vitae. Non non volutpat tristique posuere varius vitae pellentesque cras non. Ultrices nisi in risus tristique curabitur lobortis. Habitant fusce et augue mattis massa mi, varius enim.
                            </p>
                            <div className='flex items-center gap-2 pt-8'>
                                <h5 className="text-gray-800 text-base font-bold m-0 break-words">Share:</h5>
                                <div className='p-1 flex items-center flex-start gap-3'>
                                    <Link to="/" className="cursor-pointer rounded-md">{Icons.fbBlackBgIcon}</Link>
                                    <Link to="/" className="cursor-pointer rounded-md">{Icons.linkedBlackBgIcon}</Link>
                                    <Link to="/" className="cursor-pointer rounded-md">{Icons.twitterBlackBgIcon}</Link>
                                    <Link to="/" className="cursor-pointer rounded-md">{Icons.youtubeBlackBgIcon}</Link>
                                </div>
                            </div>
                            <h5 className='pt-6 text-black font-bold text-lg sm:text-2xl'>2 comments</h5>
                            <div className=''>
                                <div className='pt-6 flex sm:flex-row flex-col gap-6 border-b border-gray-200 pb-6'>
                                    <div className='h-28 w-28 flex-shrink-0'>
                                        <img className='object-cover w-full h-full rounded' src={commentImg} alt="comment1" />
                                    </div>
                                    <div className='flex-1'>
                                        <div className='flex justify-between pb-2'>
                                            <h4 className='text-gray-800 lg:text-2xl md:text-xl text-lg font-bold m-0 break-words'>Kevin martin</h4>
                                            <button className='rounded-3xl py-0 px-6 text-base font-bold tracking-0.5 transition-all duration-0.5 text-white hover:text-primary border-2 border-secondary bg-secondary hover:border-primary hover:bg-transparent'>
                                                Reply
                                            </button>
                                        </div>
                                        <p className='leading-7 font-normal text-lg text-gray-700 m-0 break-words'>
                                            It has survived not only five centuries, but also the leap into electronic typesetting unchanged. It was popularised in the sheets containing lorem ipsum is simply free text.
                                        </p>
                                    </div>
                                </div>
                                <div className='pt-6 flex sm:flex-row flex-col gap-6  pb-6'>
                                    <div className='h-28 w-28 flex-shrink-0'>
                                        <img className='object-cover w-full h-full rounded' src={commentImg} alt="comment1" />
                                    </div>
                                    <div className='flex-1'>
                                        <div className='flex justify-between pb-2'>
                                            <h4 className='text-gray-800 lg:text-2xl md:text-xl text-lg font-bold m-0 break-words'>Kevin martin</h4>
                                            <button className='rounded-3xl py-0 px-6 text-base font-bold tracking-0.5 transition-all duration-0.5 text-white hover:text-primary border-2 border-secondary bg-secondary hover:border-primary hover:bg-transparent'>
                                                Reply
                                            </button>
                                        </div>
                                        <p color='leading-7 font-normal text-lg text-gray-700 m-0 break-words'>
                                            It has survived not only five centuries, but also the leap into electronic typesetting unchanged. It was popularised in the sheets containing lorem ipsum is simply free text.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <h4 className="text-gray-800 pt-4 pb-6 font-bold text-2xl sm:text-3x">LEAVE A REPLY</h4>
                            <div>
                                <input placeholder="First Name" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
                                <input placeholder="Email*" className="mb-4 w-full focus:outline-none border border-gray-300 rounded-sm h-12 2xl:h-14 py-4 px-5 text-lg text-gray-800 " />
                                <textarea placeholder="Write a Comment" className="mb-4 w-full focus:outline-none border border-gray-300 resize-none rounded-sm h-30 2xl:h-40 py-4 px-5 text-lg text-gray-800 " />
                                <button className='mt-2 md:mt-6 rounded-3xl py-2 px-6 text-base font-bold tracking-0.5 transition-all duration-0.5 text-white hover:text-primary border-2 border-primary bg-primary hover:bg-transparent'>
                                    Appply Now
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='basis-100% lg:basis-30% pt-12 lg:pt-0 lg:pl-16'>
                        <h5 className='pb-6 text-black font-bold text-lg sm:text-2xl'>Latest Post</h5>
                        <div>
                            <LatestSideBox />
                            <LatestSideBox />
                            <LatestSideBox />
                            <LatestSideBox />
                            <LatestSideBox />
                            <LatestSideBox />
                            <LatestSideBox />
                        </div>

                    </div>
                </div>
            </div>
            <BecomeYoutuber />
            <Feature />
            <LatestNews />
        </div>
    )
}

export default CausesDetails