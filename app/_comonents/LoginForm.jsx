import React from 'react';
import { IoMdClose } from "react-icons/io";

const LoginForm = ({ closeAllModals }) => {
    return (
        <div >
            <button onClick={closeAllModals} className='hidden md:flex place-items-center m-2 text-xl'> <IoMdClose /> Close  </button>
            <div className=" flex items-center justify-center p-3">
                <div x-data="{ email: '', password: '', name: '' }"
                    className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl w-full max-w-md transform hover:scale-105 transition-all duration-300"
                    x-init="
                    gsap.from($el, {opacity: 0, y: 50, duration: 1, ease: 'back'});
                    gsap.from('.input-field', {opacity: 0, x: -50, stagger: 0.2, duration: 0.8, ease: 'power2.out'});
                    gsap.from('.btn', {opacity: 0, scale: 0.5, duration: 0.5, delay: 1, ease: 'elastic.out(1, 0.5)'});
                    ">
                    <h2 className="text-4xl font-extrabold text-white mb-6 text-center animate-pulse">Sign Up</h2>
                    <form className="space-y-6">
                        <div className="input-field relative">
                            <input x-model="name" type="text" id="name" required className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 focus:bg-opacity-30 focus:ring-2 focus:ring-purple-300 text-white placeholder-gray-200 transition duration-200" placeholder="Full Name" />
                            <i className="fas fa-user absolute right-3 top-3 text-white"></i>
                        </div>
                        <div className="input-field relative">
                            <input x-model="email" type="email" id="email" required className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 focus:bg-opacity-30 focus:ring-2 focus:ring-purple-300 text-white placeholder-gray-200 transition duration-200" placeholder="Email Address" />
                            <i className="fas fa-envelope absolute right-3 top-3 text-white"></i>
                        </div>
                        <div className="input-field relative">
                            <input x-model="password" type="password" id="password" required className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 focus:bg-opacity-30 focus:ring-2 focus:ring-purple-300 text-white placeholder-gray-200 transition duration-200" placeholder="Password" />
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
    )
}

export default LoginForm;