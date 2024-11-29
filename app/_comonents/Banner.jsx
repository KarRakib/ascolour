'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuCircle } from "react-icons/lu";
const Banner = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isDragging, setIsDragging] = React.useState(false);
    const [startPos, setStartPos] = React.useState(0);
    const sliderRef = React.useRef(null);

    // Sample slide data
    const slides = [
        { image: "/images/men2.jpg", title: "Men Shop" },
        { image: "/images/woman2.jpg", title: "Woman Shop" },

    ];

    // Next and previous handlers
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
        );
    };

    // Drag start
    const handleDragStart = (e) => {
        setIsDragging(true);
        setStartPos(e.clientX || e.touches[0].clientX);
    };

    // Drag end
    const handleDragEnd = (e) => {
        if (!isDragging) return;
        setIsDragging(false);
        const endPos = e.clientX || e.changedTouches[0].clientX;
        const distance = endPos - startPos;

        // Threshold for slide change
        if (distance > 50) {
            prevSlide();
        } else if (distance < -50) {
            nextSlide();
        }
    };
    return (
        <>
            {/* Deskstop  */}
            <div className=" hidden md:flex w-full h-[450px]">
                <Link href={'/men'} className="relative group overflow-hidden">
                    <div className="group-hover:brightness-75 text-white">
                        <Image className="h-[450px]" src={'/images/men1.jpg'} width={700} height={240} alt="man1" />

                        {/* Title positioned one block down */}
                        <div className="absolute bottom-5 left-9 flex flex-col items-start space-y-2">
                            <h1 className="text-4xl font-semibold group-hover:text-white transition-colors duration-500">Mens</h1>

                            {/* Hover content */}
                            <div className="hidden group-hover:flex w-full gap-4 items-center transition-transform duration-5000 ease-out translate-y-10 group-hover:translate-y-0">
                                <ul className="flex gap-2">
                                    <li className="text-lg font-semibold hover:underline underline-offset-4 hover:-translate-y-1 transition-transform duration-500">
                                        <Link href="/">T-Shirts</Link>
                                    </li>
                                    <li className="text-lg font-semibold hover:underline underline-offset-4 hover:-translate-y-1 transition-transform duration-500">
                                        <Link href="/">Sweatshirts</Link>
                                    </li>
                                    <li className="text-lg font-semibold hover:underline underline-offset-4 hover:-translate-y-1 transition-transform duration-500">
                                        <Link href="/">Jackets</Link>
                                    </li>
                                    <li className="text-lg font-semibold hover:underline underline-offset-4 hover:-translate-y-1 transition-transform duration-500">
                                        <Link href="/">Trackpants</Link>
                                    </li>
                                </ul>
                                <button className="flex items-center px-3 py-2 border rounded-xl transition-transform duration-[3000ms] hover:scale-105">
                                    <span className="hidden hover:inline-block transition-opacity duration-[3000ms]">+</span>
                                    <Link href="/" className="ml-1">SHOP RELAX HOOD</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>
                {/* Women */}
                <Link href={'/women'} className="relative group overflow-hidden">
                    <div className="group-hover:brightness-75 text-white">
                        <Image className="h-[450px]" src={'/images/woman1.jpg'} width={700} height={240} alt="man1" />

                        {/* Title positioned one block down */}
                        <div className="absolute bottom-5 left-9 flex flex-col items-start space-y-2">
                            <h1 className="text-4xl font-semibold group-hover:text-white transition-colors duration-500">Wonens</h1>

                            {/* Hover content */}
                            <div className="hidden group-hover:flex w-full gap-4 items-center transition-transform duration-5000 ease-out translate-y-10 group-hover:translate-y-0">
                                <ul className="flex gap-2">
                                    <li className="text-lg font-semibold hover:underline underline-offset-4 hover:-translate-y-1 transition-transform duration-500">
                                        <Link href="/">T-Shirts</Link>
                                    </li>
                                    <li className="text-lg font-semibold hover:underline underline-offset-4 hover:-translate-y-1 transition-transform duration-500">
                                        <Link href="/">Sweatshirts</Link>
                                    </li>
                                    <li className="text-lg font-semibold hover:underline underline-offset-4 hover:-translate-y-1 transition-transform duration-500">
                                        <Link href="/">Trackpants</Link>
                                    </li>
                                    <li className="text-lg font-semibold hover:underline underline-offset-4 hover:-translate-y-1 transition-transform duration-500">
                                        <Link href="/">Active</Link>
                                    </li>
                                </ul>
                                <button className="flex items-center px-3 py-2 border rounded-xl transition-transform duration-[3000ms] hover:scale-105">
                                    <span className="hidden hover:inline-block transition-opacity duration-[3000ms]">+</span>
                                    <Link href="/" className="ml-1">SHOP RELAX HOOD</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </Link>

            </div>

            {/* Mobile */}

            <div
                ref={sliderRef}
                className="relative block md:hidden w-full max-w-4xl mx-auto overflow-hidden"
                onMouseDown={handleDragStart}
                onMouseUp={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchEnd={handleDragEnd}
            >
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0 relative"
                            style={{ width: "100%" }}
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-[500px] object-cover rounded-md transition-transform duration-500"
                            />
                            <h1 className="absolute bottom-5 left-5 text-4xl text-white font-bold px-4 py-2 rounded-md">
                                {slide.title}
                            </h1>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div className=''>
                <button
                    onClick={prevSlide}
                    className="absolute bottom-5 right-14  bg-white text-white  rounded-full hover:bg-opacity-75 transition"
                >
                    <LuCircle className='w-4 h-4'/>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute bottom-5 right-9  bg-white text-white  rounded-full hover:bg-opacity-75 transition"
                >
                   <LuCircle className='w-4 h-4'/>
                </button>
                </div>
            </div>

        </>

    )
}

export default Banner