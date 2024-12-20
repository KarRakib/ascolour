import { AddContext } from '@/Context/Products'
import Link from 'next/link'
import React, { useContext } from 'react'
import { IoMdClose } from 'react-icons/io'

export const AddToCart = ({closeAllModals}) => {
    const { cartItems, setCartItems, totalAmount,setTotalAmount } = useContext(AddContext);
    const [shopping, setShopping] = React.useState(false);
    console.log('Cart Items:', totalAmount);
    
    // Calculate totals
    const totals = cartItems.reduce(
      (acc, product) => {
        acc.totalQuantity += product.quantity;
        acc.totalPrice += product.price * product.quantity;
        return acc;
      },
      { totalQuantity: 0, totalPrice: 0 }
    );
    
    // Destructure the results
    const { totalQuantity, totalPrice } = totals;
    console.log("Total Quantity:", totalQuantity);
    
    // Tax and total calculation
    const taxRate = 0.10; // 10%
    const flatFee = 10; // Flat fee
    const tax = totalPrice * taxRate;
    const grandTotal = totalPrice + tax + flatFee;
    
    // Update context state with rounded total
    setTotalAmount(parseFloat(grandTotal.toFixed(3))); 
  const handleDelete =(id)=>{
    const restProducts = cartItems.filter(cart=> cart.id !==id)
    setCartItems(restProducts)
    localStorage.setItem('cartItems', JSON.stringify(restProducts))
  }
    const handleOff =()=>{
        setShopping(!shopping)
    }
    
    
  return (
    <div>  
        <div className="font-sans  mx-auto bg-white py-4">
            {!cartItems.length>0? <div className='h-40 bg-slate-500'> <h2 className='text-black text-2xl'>You currently have no items in your cart.</h2></div>:<div className="grid md:grid-cols- gap-4">
                <div className="md:col-span- bg-gray-100 p-1 rounded-md">
                    <div className='flex justify-between'>
                    <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
                    <button onClick={closeAllModals} className=' md:flex hidden place-items-center m-2 text-2xl font-extrabold text-black'> <IoMdClose  />  </button>
                    </div>
                    <hr className="border-gray-300 mt-4 mb-8" />

                    <div className="space-y-4">
                       { cartItems?.map(cart =>(<div className="grid grid-cols-3 items-center gap-4">
                            <div className="col-span-2 flex items-center gap-4">
                                <div className="w-24 h-24 shrink-0 bg-white p-2 rounded-md">
                                    <img src={cart.image} className="w-full h-full object-contain" />
                                </div>

                                <div>
                                    <h3 className="text-base font-bold text-gray-800">{cart.title} </h3>
                                    <h6 onClick={()=> handleDelete(cart.id)} className="text-xs text-red-500 cursor-pointer mt-0.5">Remove</h6>

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
                                <h4 className="text-base font-bold text-gray-800">${ (cart.quantity*cart.price).toFixed(2)}</h4>
                            </div>
                        </div>))}
                    </div>
                </div>

                <div className="bg-gray-100 rounded-md p-4 md:sticky top-0">
                    <div className="flex border border-blue-600 overflow-hidden rounded-md">
                        <input type="email" placeholder="Promo code"
                            className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5" />
                        <button type='button' className="flex items-center justify-center font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 px-4 text-sm text-white">
                            Apply
                        </button>
                    </div>

                    <ul className="text-gray-800 mt-8 space-y-4">
                        <li className="flex flex-wrap gap-4 text-base">Discount <span className="ml-auto font-bold">$0.00</span></li>
                        <li className="flex flex-wrap gap-4 text-base">Shipping <span className="ml-auto font-bold">$5.00</span></li>
                        <li className="flex flex-wrap gap-4 text-base">Tax 10% <span className="ml-auto font-bold">${tax}</span></li>
                        <li className="flex flex-wrap gap-4 text-base font-bold">Total <span className="ml-auto">${totalAmount} </span></li>
                    </ul>

                    <div className="mt-8 space-y-2">
                        <button onClick={()=> closeAllModals()} type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-md"><Link href={'/checkout'}>Checkout</Link> </button>
                        <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md">Continue Shopping  </button>
                    </div>
                </div>
            </div>}
        </div>
    </div>
  )
}



