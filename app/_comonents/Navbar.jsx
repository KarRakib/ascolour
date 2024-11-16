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
import LoginForm from './LoginForm';
import SearchBar from './SearchBar';
import { AddContext } from '@/Context/Products';
import { useUser } from '@clerk/nextjs';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const {user} = useUser()
    const [isUser, setIsUser] = React.useState(false);
    const [shopping, setShopping] = React.useState(false);
    const [search, setSearch] = React.useState(false);
    const { cartItems } = React.useContext(AddContext);
console.log('user', user);

    const handleClick = () => {
        setIsMenuOpen((prev) => !prev);
    };
    const handleClickUser = () => {
        // setIsUser((prev) => !prev);
        // console.log(isUser);

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
    const navs = [
        { slug: 'men', title: 'Men' },
        { slug: 'women', title: 'Women' },
        { slug: 'headwear', title: 'Headwear' },
        { slug: 'Accessories', title: 'Accessories' },
        { slug: 'Kids', title: 'Kids' },
        { slug: 'About', title: 'About' },
        { slug: 'Journal', title: 'Journal' },
        // Add more posts as needed
    ];
    return (
        <div className=''>
            <div className=' hidden md:block px-10 py-4 bg-black text-white'>
                <div className='flex gap-4 justify-between'>
                    <div className='flex gap-3 text-center place-items-center '>
                        <Link href={'/'} className='text-xl pr-5'> Ascolour.</Link>
                        <ul className='flex gap-7'>
                            {navs.map((nav, i) => (
                                <Link key={i} href={`/${nav.slug}`}> <li>{nav.title}</li></Link>
                            ))}

                        </ul>
                    </div>
                    {search ? <SearchBar closeAllModals={closeAllModals} /> : <div className='flex gap-5 place-items-center'>
                        <button onClick={handleClickSearch}>Search</button>
                        <button className='relative' onClick={handleClickShop}>Cart {cartItems.length > 0 && <span className='absolute bottom-5 left-6 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full'>{cartItems?.length}</span>}</button>
                        {user? <img className='w-8 h-8 rounded-full' src={user.imageUrl} alt="" srcset="" /> : <button onClick={handleClickUser}>Sign In</button>}
                        <button className='bg-[#AFD9D8] rounded-full px-2 py-1.5'>Create Account</button>
                    </div>}
                </div>

            </div>
            {/* mobile */}
            <div className='px-5 py-2 md:hidden bg-black text-white flex justify-between '>
                {isMenuOpen || user || shopping || search ? <><div className='flex place-items-center'> <IoMdClose onClick={closeAllModals} /> Close  </div>  {search && <SearchBar />}</>
                    : <>
                        <div className='flex text-center place-items-center gap-3 '>
                            <RxHamburgerMenu onClick={handleClick} />
                            <h3 className='text-xl pr-5'> Ascolour.</h3>
                        </div>
                        <div className='flex gap-4 text-xl'>
                            <button><IoSearchOutline onClick={handleClickSearch} /> </button>
                            <button onClick={handleClickShop} className="relative">
                                <AiOutlineShopping className="text-xl" />
                                {cartItems.length > 0 && (
                                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                                        {cartItems.length}
                                    </span>
                                )}
                            </button>
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
                    {navs.map((nav, i) => (
                        <Link onClick={closeAllModals} key={i} href={`/${nav.slug}`}>  <li className='flex place-items-center justify-between '>{nav.title} <FaAngleRight /> </li></Link>
                    ))}
                </ul>

            </div>
            {/* Login */}
            {user && <div className={`absolute top-5 md:top-10  right-0 w-full md:w-96 h-full bg-[#090909] text-white flex flex-col p-4 mt-5  z-50 transform transition-transform duration-300 ${isUser ? "translate-y-0" : "translate-x-full"
                }`}>
                <LoginForm closeAllModals={closeAllModals} isUser={isUser} />
            </div>}

            {/* Shopping  */}
            {shopping && <div className={`absolute top-5 md:top-10 right-0 w-full md:w-4/12 h-full bg-[#090909] text-white flex flex-col p-4 mt-5 z-50 transform transition-transform duration-300 ${shopping ? "translate-y-0" : "translate-x-full"
                }`}>
                <AddToCart closeAllModals={closeAllModals} />
            </div>}
            {/* searchbar  */}
            {/* <div className={`absolute top-5 right-0 w-full h-full bg-[#090909] text-white flex flex-col p-4 mt-5  z-50 transform transition-transform duration-300 ${search ? "translate-x-0" : "translate-x-full" */}
            {/* }`}> */}

            {/* {search && <SearchBar/>} */}

            {/* </div> */}
        </div>
    )
}

export default Navbar