import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Productions = () => {
    const banners = [
        {
            image:"/images/banner1.jpg",
            title:"Designed in New Zealand",
            description:"Proudly New Zealand owned and operated since 2005. We're passionate about designing premium blank apparel for the creators and makers of today.",
            button:"Learn more about us"
        },
        {
            image:"/images/banner2.jpg",
            title:"Our new warehouse,servicing the East Coast: Charlotte",
            description:"Our second distribution centre in Charlotte, North Carolina, is now servicing the East Coast. This 240,000 sq ft facility is our largest yet, and will enable faster shipping times and hold bigger volumes across all products and styles..",
            button:"View all showrooms"
        }
    ]
  return (
   <>
   <div className='md:flex md:p-8 p-6 gap-4 flex-col lg:flex-row-reverse '>
   <div className='md:w-1/2 w-full block'>
        <Image className='w-full' src={'/images/banner1.jpg'} width={990} height={680} alt='banner'/>
    </div>
    <div className='md:relative block py-3 md:py-0 md:w-1/2'>
        <h1 className='md:text-5xl text-base tracking-tight font-bold md:absolute md:top-24'>Designed in <br className='hidden md:block' /> New Zealand</h1>
        <p className='md:absolute md:top-60 py-6 md:py-0 md:font-bold'>Proudly New Zealand owned and operated since 2005. We're passionate about designing premium blank apparel for the creators and makers of today. </p>
        <button className='md:absolute md:top-80 flex items-center gap-4 font-extrabold text-lg group group-hover:underline underline-offset-4   transition duration-300 cursor-pointer'>Learn more about us <FaArrowRightLong/>
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </button>
    </div>
    
   </div>

   <div className='md:flex col p-8 gap-8  '>
   <div className='md:w-1/2 w-full'>
        <Image className='w-full' src={'/images/banner2.jpg'} width={990} height={680} alt='banner'/>
    </div>
    <div className='md:relative bg-[#F9F9F9] w-full md:py-0 py-3 md:w-1/2'>
        <h1 className='md:text-5xl text-base tracking-tight font-bold md:absolute md:top-20'>Our new warehouse,
        servicing the East Coast: Charlotte</h1>
        <p className='md:absolute md:top-60 py-6 md:py-0 md:font-bold'>Our second distribution centre in Charlotte, North Carolina, is now servicing the East Coast. This 240,000 sq ft facility is our largest yet, and will enable faster shipping times and hold bigger volumes across all products and styles. </p>
        <button className='md:absolute md:top-96 flex items-center gap-4 font-extrabold text-lg group group-hover:underline underline-offset-4   transition duration-300 cursor-pointer'>View all showrooms <FaArrowRightLong/>
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
        </button>
    </div>
    
   </div>
   
   </>
  )
}

export default Productions