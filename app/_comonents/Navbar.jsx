import Image from 'next/image'
import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { IoSearchOutline } from "react-icons/io5";
const Navbar = () => {
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
                        <button>Search</button>
                        <button>Cart</button>
                        <button>Sign In</button>
                        <button className='bg-[#AFD9D8] rounded-full px-2 py-1.5'>Create Account</button>
                    </div>
                </div>

            </div>
            {/* mobile */}
            <div  className='px-5 py-2 md:hidden bg-black text-white flex justify-between '>
                <div className='flex text-center place-items-center gap-3 '>
                    <RxHamburgerMenu/>
                    <h3 className='text-xl pr-5'> Ascolour.</h3>
                </div>
                <div className='flex gap-4 text-xl'>
                    <button><IoSearchOutline/> </button>
                    <button><AiOutlineShopping/></button>
                    <button><FaRegUser/> </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar