'use client'
import Image from 'next/image';
import React from 'react'

const MostProduct = () => {
  const slides = [
    { image: "/images/sale.png", title: "" },
    { image: "/images/accessorise.jpg", title: "Accessorise" },
    { image: "/images/heavy.jpg", title: "Heavy Faded" },
    { image: "/images/active.jpg", title: "Active" },
    

  ];

 

  return (

<>
<div className='grid md:grid-cols-4 grid-cols-2 md:gap-4 gap-1 py-12 md:px-4 px-1'>
{
  slides.map((slider,i)=>(
    <div className='relative' key={i}> 
    <Image className='md:w-80 md:h-60 w-44 ' src={slider.image} width={230} height={150} alt='kar' />
    <h3 className='absolute hover:underline underline-offset-4 transition hover:tra hover:-translate-y-3 bottom-2 left-5 text-lg md:text-2xl text-white font-bold'>{slider.title}</h3>
     </div>
  ))
}
</div>


</>

    // <section className="flex flex-col lg:h-svh justify-center items-center overflow-scroll">
    //   <div className="prose text-gray-500 prose-sm prose-headings:font-normal prose-headings:text-xl">
    //     <div>
    //       <h1>Animated images on hover</h1>
    //       <p className="text-balance">Hover over the images to see the animation.</p>
    //     </div>
    //   </div>
    //   <div className="flex flex-wrap mx-auto md:flex-nowrap mt-6 border-t pt-12">
    //     {
    //       slides.map((slider, i) => (
    //         <div className="relative flex flex-col items-start m-1 transition  ease-in-out duration-500  delay-150 transform  md:w-96 md:-ml-32 md:hover:-translate-x-32 md:hover:-translate-y-8 shrink-0 ">
    //           <article
    //             className="mx-auto rounded-3xl overflow-hidden bg-cover ring-2 ring-inset ring-white/50 bg-center min-h-150 relative transform duration-500 group"
    //             style={{ backgroundImage: `url(${slider.image})` }}
    //           >
    //             <div className=" relative h-full  group-hover:bg-opacity-0 min-h-150  flex flex-wrap flex-col pt-[30rem]  transform duration-500">
    //               <div className=" group-hover:bg-black/30 duration-500 group-hover:backdrop-blur p-8 lg:p-10 h-full justify-end flex flex-col ">
    //                 <p className="opacity-0 text-white text-sm 2xl:text-lg group-hover:opacity-80 transform duration-500 "> Immerse yourself in a seamless experience where every touchpoint anticipates your needs. Description one. </p>
    //               </div>
    //             </div>
    //           </article>
    //         </div>
    //       ))
    //     }
  
    //   </div>
    //   <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center p-2">
    //     <div className="pointer-events-auto flex w-full max-w-md divide-x divide-neutral-200 rounded-lg bg-white shadow-xl border">
    //     </div>
    //   </div>
    // </section>
  
  )
}

export default MostProduct