'use client'
import { AddContext } from '@/Context/Products'
import Link from 'next/link'
import React, { useContext } from 'react'
import { IoMdClose } from 'react-icons/io'

const page = () => {
    const { cartItems } = useContext(AddContext)
    return (
        <div className=''>
            <div className="font-sans bg-white p-4">
                <div className=" mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-800 inline-block border-b-[3px] border-gray-800 pb-1">Checkout</h2>
                    </div>
                    <div className="grid md:grid-cols-3 px-10">
                        <div className="mt-12 col-span-2">
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="md:col-span-2">
                                    <form>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <input type="text" placeholder="First name"
                                                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                            </div>
                                            <div>
                                                <input type="text" placeholder="Last name"
                                                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                            </div>
                                            <div>
                                                <input type="email" placeholder="Email address"
                                                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                            </div>
                                            <div>
                                                <input type="number" placeholder="Phone number"
                                                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-4 mt-12">
                                <div className="md:col-span-2">
                                    <form>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <input type="text" placeholder="Street address"
                                                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                            </div>
                                            <div>
                                                <input type="text" placeholder="City"
                                                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                            </div>
                                            <div>
                                                <input type="text" placeholder="State"
                                                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                            </div>
                                            <div>
                                                <input type="number" placeholder="Zip Code"
                                                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="flex gap-4 my-12">
                                <div className="md:col-span-2">
                                    <div className="flex justify-evenly ">
                                        <div className="flex items-center">
                                            <input type="radio" className="w-5 h-5 cursor-pointer" id="card" checked />
                                            <label for="card" className="ml-4 flex gap-2 cursor-pointer">
                                                <img src="https://readymadeui.com/images/visa.webp" className="w-12" alt="card1" />
                                                <img src="https://readymadeui.com/images/american-express.webp" className="w-12" alt="card2" />
                                                <img src="https://readymadeui.com/images/master.webp" className="w-12" alt="card3" />
                                            </label>
                                        </div>

                                        <div className="flex items-center">
                                            <input type="radio" className="w-5 h-5 cursor-pointer" id="paypal" />
                                            <label for="Stripe" className="ml-4 flex gap-2 cursor-pointer">
                                                <img src="https://www.logo.wine/a/logo/Stripe_(company)/Stripe_(company)-Logo.wine.svg" className="w-20" alt="StripeCard" />
                                            </label>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="w-60">
                                            <input type="number" placeholder="Card number"
                                                className="px-4  py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                        </div>
                                        <div className='w-48'>
                                            <input type="number" placeholder="EXP."
                                                className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                        </div>
                                        <div className='w-40'>
                                            <input type="number" placeholder="CVV"
                                                className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-start gap-4 mt-12">
                                <button type="button"
                                    className="px-6 py-3 text-sm font-semibold tracking-wide bg-transparent border-2 text-gray-800 rounded-md hover:bg-gray-100">Pay later</button>
                                <button type="button"
                                    className="px-6 py-3 text-sm font-semibold tracking-wide bg-blue-600 text-white rounded-md hover:bg-blue-700"><Link href={'/pay'}>Pay now</Link></button>
                            </div>
                        </div>
                        {/* cart */}
                        <div className=" w-full bg-gray-100 p-1 rounded-md">
                            <div className='flex justify-between'>
                                <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
                               
                            </div>
                            <hr className="border-gray-300 mt-4 mb-8" />

                            <div className="space-y-4">
                                {cartItems?.map(cart => (<div className="grid grid-cols-3 items-center gap-4">
                                    <div className="col-span-2 flex items-center gap-4">
                                        <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                                            <img src={cart.image} className="w-full h-full object-contain" />
                                        </div>

                                        <div>
                                            <h3 className="text-base font-bold text-gray-800">{cart.title} </h3>
                                            <h6 className="text-xs text-red-500 cursor-pointer mt-0.5">Remove</h6>

                                            <div className="flex gap-4 mt-4 w-full">
                                                <div className="relative group">
                                                    <button type="button"
                                                        className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                        {cart.size}
                                                    </button>
                                                </div>
                                                <div>
                                                    <button type="button"
                                                        className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124">
                                                    <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                                                </svg> */}

                                                        <span className="mx-2.5"> Qty: {cart.quantity} </span>
                                                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42">
                                                    <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                                                </svg> */}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ml-auto">
                                        <h4 className="text-base font-bold text-gray-800">${(cart.quantity * cart.price).toFixed(2)}</h4>
                                    </div>
                                </div>))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default page