'use client'
import { AddContext } from '@/Context/Products'
import { useParams } from 'next/navigation'
import React, { useContext, useEffect, useState } from 'react'

const ProductDetails = () => {
    const params = useParams();
    const { addToCart } = useContext(AddContext);
    const [products, setProducts] = useState([]);
    const [mainImage, setMainImage] = useState(null); // Initialize mainImage here to avoid reordering hooks

    useEffect(() => {
        fetch('/asproducts.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const findProduct = products.find(product => product._id === params.id);

    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (findProduct) {
            // Initialize with the first available color and size if not already set
            setSelectedColor(prev => prev || findProduct?.colors?.[0] || null);
            setSelectedSize(prev => prev || findProduct?.sizes?.[0] || null);
            if (findProduct.images?.length > 0) {
                setMainImage(findProduct.images[0]);
            }
        }
    }, [findProduct]);

    const handleColorClick = (color) => {
        setSelectedColor(color);
        console.log('Selected color:', color);
    };

    const handleSizeClick = (size) => {
        setSelectedSize(size);
        console.log('Selected size:', size);
    };

    const Decrease = () => {
        setQuantity(prev => Math.max(1, prev - 1));
    };

    const Increase = () => {
        setQuantity(prev => prev + 1);
    };

    const handleProductCart = () => {
        const product = { id: findProduct._id,image:findProduct.images[0], title: findProduct.title, price: findProduct.price, quantity, size: selectedSize, color: selectedColor };
        addToCart(product);
    };

    if (!findProduct) return <div>Loading...</div>;

    const {
        category, colors, coreRange, description, images = [],
        price, productCode, sizes, title, _id
    } = findProduct;

    return (
        <div>
            <div className="bg-gray-100">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-8">
                            {mainImage && (
                                <img
                                    src={mainImage}
                                    alt="Product"
                                    className="w-full h-auto rounded-lg shadow-md mb-4"
                                    id="mainImage"
                                />
                            )}
                            <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                                {images.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                        onClick={() => setMainImage(image)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <h2 className="text-3xl font-bold mb-2">{title}</h2>
                            <p className="text-gray-600 mb-4">{productCode} </p>
                            <div className="mb-4">
                                <span className="text-2xl font-bold mr-2">${price}</span>
                                <span className="text-gray-500 line-through">$399.99</span>
                            </div>
                            <div className="flex items-center mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="size-6 text-yellow-500">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                        clip-rule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="size-6 text-yellow-500">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                        clip-rule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="size-6 text-yellow-500">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                        clip-rule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="size-6 text-yellow-500">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                        clip-rule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    className="size-6 text-yellow-500">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                        clip-rule="evenodd" />
                                </svg>
                                <span className="ml-2 text-gray-600">4.5 (120 reviews)</span>
                            </div>
                            <p className="text-gray-700 mb-6">{description}</p>

                            <div>
                                {/* Color Selection */}
                                <div className="flex space-x-2 mb-4">
                                    {colors.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => handleColorClick(color)}
                                            className={`w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color} ${color === 'black' ? 'bg-black' : color === 'gray' ? 'bg-gray-300' : 'bg-blue-500'
                                                }`}
                                        ></button>
                                    ))}
                                </div>

                                {/* Size Selection */}
                                <div className="mb-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                                    <div className="flex items-center mt-2">
                                        {sizes.map((size) => (
                                            <button
                                                key={size}
                                                onClick={() => handleSizeClick(size)}
                                                className={`bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-black ${selectedSize === size ? 'ring-2 ring-black' : ''
                                                    }`}
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
                                <form action="#">
                                    <button onClick={Decrease} type="button" className="px-5 py-2 border text-xl font-semibold bg-gray-200 rounded-md">-</button>
                                    <input id="quantity" name="quantity" min="1" value={quantity} className="w-12 mx-2 py-3 border text-center rounded-md border-gray-300 shadow-sm"
                                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))} />
                                    <button onClick={Increase} type="button" className="px-5 py-2 border text-xl font-semibold bg-gray-200 rounded-md">+</button>
                                </form>

                            </div>

                            <div className="flex space-x-4 mb-6">
                                <button onClick={() => handleProductCart(params.id)}
                                    className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                    </svg>
                                    Add to Cart
                                </button>
                                <button
                                    className="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                    Wishlist
                                </button>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>Industry-leading noise cancellation</li>
                                    <li>30-hour battery life</li>
                                    <li>Touch sensor controls</li>
                                    <li>Speak-to-chat technology</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <script>
    function changeImage(src) {
            document.getElementById('mainImage').src = src;
        }
  </script> */}
            </div>
        </div>
    )
}

export default ProductDetails