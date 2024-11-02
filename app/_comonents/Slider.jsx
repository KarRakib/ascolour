'use client'
import Image from 'next/image';
import React from 'react'

const Slider = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const slides = [
        { image: "/images/new arrival.jpg", title: "New Arrival" },
        { image: "/images/sweat.jpg", title: "Sweats" },
        { image: "/images/headware.jpg", title: "Headware" },
        { image: "/images/aprons.jpg", title: "Aprons" }

    ];

    const totalSlides = 4; // Total number of slides

    // Auto-slide change with useEffect
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 5000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [totalSlides]);

    const moveSlide = (index) => {
        setCurrentIndex(index);
    };
    return (
        <>
            <div className=' hidden md:flex'>
                {
                    slides.map((slide, i) => (
                        <div key={i} className='relative'>
                            <h2 className="absolute top-5 left-5 text-white text-2xl font-bold hover:underline underline-offset-4 
                             transform transition-transform duration-500 isMenuOpen  -translate-x-1 hover:translate-x-1">
                                {slide.title}
                            </h2>
                            <Image src={slide.image} height={450} width={370} alt={slide.title} />
                        </div>

                    ))
                }

            </div>
            {/* mobile */}
            <div className="w-full overflow-hidden md:hidden block relative my-6">
                <div
                    id="slider"
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {slides.map((slide,i)=>(
                    <div key={i} className="min-w-full relative">
                    <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
                        <Image className='w-full' src={slide.image} width={350} height={250} alt={slide.title} />
                        <h3 className="text-3xl absolute top-5 left-5 font-semibold text-white"> {slide.title}</h3>
                    </div>
                </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center space-x-2 mt-8">
                    {slides.map((index) => (
                        <button
                            key={index}
                            onClick={() => moveSlide(index)}
                            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-indigo-600' : 'bg-gray-400'
                                }`}
                        ></button>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Slider