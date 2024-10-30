'use client'
import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import Link from 'next/link';
import { IoMdClose } from "react-icons/io";
import { AddToCart } from './AddToCart';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isUser, setIsUser] = React.useState(false);
    const [shopping, setShopping] = React.useState(false);
    const [search, setSearch] = React.useState(false);

    const handleClick = () => {
        setIsMenuOpen((prev) => !prev);
    };
    const handleClickUser = () => {
        setIsUser((prev) => !prev);
        console.log(isUser);
        
    };
    const handleClickShop = () => {
        setShopping((prev) => !prev);
    };
    const handleClickSearch = () => {
        setSearch((prev) => !prev);
    };
    const closeAllModals = () => {
        setIsMenuOpen(false);
        setIsUser(false);
        setShopping(false);
        setSearch(false);
    };

    return (
        <div>


            <div className=' hidden md:block px-10 py-4 bg-black text-white'>

                <div className='flex gap-4 justify-between'>

                    <div className='flex gap-3 text-center place-items-center '>
                        <h3 className='text-xl pr-5'> Ascolour.</h3>
                        <ul className='flex gap-7'>
                            <li>Men</li>
                            <li>Women</li>
                            <li>Headwear</li>
                            <li>Accessories</li>
                            <li>Kids</li>
                            <li>About</li>
                            <li>Journal</li>
                        </ul>
                    </div>
                    <div className='flex gap-5'>
                        <button onClick={handleClickSearch}>Search</button>
                        <button onClick={handleClickShop}>Cart</button>
                        <button onClick={handleClickUser}>Sign In</button>
                        <button className='bg-[#AFD9D8] rounded-full px-2 py-1.5'>Create Account</button>
                    </div>
                </div>

            </div>
            {/* mobile */}
            <div className='px-5 py-2 md:hidden bg-black text-white flex justify-between '>
                 {isMenuOpen  || isUser|| shopping || search ? <div className='flex place-items-center'> <IoMdClose onClick={closeAllModals}/> Close  </div> :
                 <>
                 <div className='flex text-center place-items-center gap-3 '>
                    <RxHamburgerMenu onClick={handleClick} />
                    <h3 className='text-xl pr-5'> Ascolour.</h3>
                </div>
                <div className='flex gap-4 text-xl'>
                    <button><IoSearchOutline onClick={handleClickSearch} /> </button>
                    <button><AiOutlineShopping onClick={handleClickShop} /></button>
                    <button><FaRegUser onClick={handleClickUser} /> </button>
                </div>
                 </>
            }
                 {/* <div  className={`absolute top-0 right-0 w-full h-full bg-black text-white flex flex-col p-5 z-50 transform transition-transform duration-300 ${
                    isMenuOpen ? "translate-y-0" : "translate-x-full"
                  }`}>  */}
                  {/* <div  className={`absolute top-0 right-0 w-full h-full bg-black text-white flex flex-col p-5 z-50 transform transition-transform duration-300 ${
                    isMenuOpen ? "translate-y-0" : "translate-x-full"
                  }`}>  */}
               
               {/* munubar */}
                

            </div>
            <div
                    className={`absolute top-5 left-0 w-full h-full bg-[#090909] text-white flex flex-col p-5 mt-5 z-50 transform 
                        transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                        }`}>
                   
                    <ul className='space-y-5 font-bold'>
                        <Link href={'/'}>  <li className='flex place-items-center justify-between '>Men <FaAngleRight /> </li></Link>
                        <Link href={'/'}>  <li className='flex place-items-center justify-between '>Women <FaAngleRight /></li></Link>
                        <Link href={'/'}>  <li className='flex place-items-center justify-between '>Headwear <FaAngleRight /></li></Link>
                        <Link href={'/'}>  <li className='flex place-items-center justify-between '>Accessories <FaAngleRight /></li></Link>
                        <Link href={'/'}>  <li className='flex place-items-center justify-between '>Kids <FaAngleRight /></li></Link>
                        <Link href={'/'}>  <li className='flex place-items-center justify-between '>About <FaAngleRight /></li></Link>
                        <Link href={'/'}>  <li className='flex place-items-center justify-between '>Journal <FaAngleRight /></li></Link>
                    </ul>

                </div>
                {/* Login */}
                <div  className={`absolute top-5 right-0 w-full md:w-98 h-full bg-[#090909] text-white flex flex-col p-4 mt-5  z-50 transform transition-transform duration-300 ${
                    isUser ? "translate-y-0" : "translate-x-full"
                  }`}> 
                   
                   <div className=" flex items-center justify-center p-4">
    <div x-data="{ email: '', password: '', name: '' }" 
         className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl w-full max-w-md transform hover:scale-105 transition-all duration-300"
         x-init="
            gsap.from($el, {opacity: 0, y: 50, duration: 1, ease: 'back'});
            gsap.from('.input-field', {opacity: 0, x: -50, stagger: 0.2, duration: 0.8, ease: 'power2.out'});
            gsap.from('.btn', {opacity: 0, scale: 0.5, duration: 0.5, delay: 1, ease: 'elastic.out(1, 0.5)'});
         ">
        <h2 className="text-4xl font-extrabold text-white mb-6 text-center animate-pulse">Sign Up</h2>
        <form  className="space-y-6">
            <div className="input-field relative">
                <input x-model="name" type="text" id="name" required className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 focus:bg-opacity-30 focus:ring-2 focus:ring-purple-300 text-white placeholder-gray-200 transition duration-200" placeholder="Full Name"/>
                <i className="fas fa-user absolute right-3 top-3 text-white"></i>
            </div>
            <div className="input-field relative">
                <input x-model="email" type="email" id="email" required className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 focus:bg-opacity-30 focus:ring-2 focus:ring-purple-300 text-white placeholder-gray-200 transition duration-200" placeholder="Email Address"/>
                <i className="fas fa-envelope absolute right-3 top-3 text-white"></i>
            </div>
            <div className="input-field relative">
                <input x-model="password" type="password" id="password" required className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 focus:bg-opacity-30 focus:ring-2 focus:ring-purple-300 text-white placeholder-gray-200 transition duration-200" placeholder="Password"/>
                <i className="fas fa-lock absolute right-3 top-3 text-white"></i>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 focus:ring-4 focus:ring-purple-300 transition duration-300 transform hover:scale-105">
                Sign Up
                <i className="fas fa-arrow-right ml-2"></i>
            </button>
        </form>
        <p className="text-white text-center mt-6">
            Already have an account? 
            <a href="#" className="font-bold hover:underline">Log in</a>
        </p>
        <div className="mt-8 flex justify-center space-x-4">
            <a href="#" className="text-white hover:text-purple-300 transition-colors duration-200">
                <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-purple-300 transition-colors duration-200">
                <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-white hover:text-purple-300 transition-colors duration-200">
                <i className="fab fa-google text-2xl"></i>
            </a>
        </div>
    </div>
    </div>

                </div>
                {/* Shopping  */}
                <div  className={`absolute top-5 right-0 w-full h-full bg-[#090909] text-white flex flex-col p-4 mt-5 z-50 transform transition-transform duration-300 ${
                    shopping ? "translate-y-0" : "translate-x-full"
                  }`}> 
                    
<AddToCart/>
                

                </div>
                {/* searchbar  */}
                <div   className={`absolute top-5 right-0 w-full h-full bg-[#090909] text-white flex flex-col p-4 mt-5  z-50 transform transition-transform duration-300 ${
          search ? "translate-x-0" : "translate-x-full"
        }`}> 
                   
                   {search &&<form className="flex flex-col md:flex-row gap-3">
    <div className="flex">
        <input type="text" placeholder="Search for the tool you like"
			className="w-full md:w-80 px-3 h-10 rounded-l border-2 border-sky-500 focus:outline-none focus:border-sky-500"
			/>
        <button type="submit" className="bg-sky-500 text-white rounded-r px-2 md:px-3 py-0 md:py-1">Search</button>
    </div>
    <select id="pricingType" name="pricingType"
		className="w-full h-10 border-2 border-sky-500 focus:outline-none focus:border-sky-500 text-sky-500 rounded px-2 md:px-3 py-0 md:py-1 tracking-wider">
		<option value="All" selected="">All</option>
		<option value="Freemium">Freemium</option>
		<option value="Free">Free</option>
		<option value="Paid">Paid</option>
	</select>
</form>}

                    {/* <ul className='space-y-5 font-bold'>
                        <Link href={'/'}>  <li className='flex place-items-center justify-between '>Men <FaAngleRight /> </li></Link>
                        <Link href={'/'}>  <li className='flex place-items-center justify-between '>Women <FaAngleRight /></li></Link>
                        <Link href={'/'}>  <li className='flex place-items-center justify-between '>Headwear <FaAngleRight /></li></Link>
                        <Link href={'/'}>  <li className='flex place-items-center justify-between '>Accessories <FaAngleRight /></li></Link>
                        <Link href={'/'}>  <li className='flex place-items-center justify-between '>Kids <FaAngleRight /></li></Link>
                        <Link href={'/'}>  <li className='flex place-items-center justify-between '>About <FaAngleRight /></li></Link>
                        <Link href={'/'}>  <li className='flex place-items-center justify-between '>Journal <FaAngleRight /></li></Link>
                    </ul> */}

                </div>
        </div>
    )
}

export default Navbar