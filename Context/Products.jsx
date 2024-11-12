'use client'
import React, { createContext, useState } from 'react'
import toast from 'react-hot-toast'
export const AddContext = createContext()
const ProductsContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [user, setUser] = useState({ name: 'John Doe', email: 'john@example.com' }); // Example user data
  const addToCart = (id) => {
    console.log('addID',id);
    
    const alreadyExit = cartItems.find(cart=> cart.id === id)
    if (alreadyExit) {
      toast
      return toast.error("This didn't work.");
    }
    else{
      setCartItems([...cartItems,{id}])
    }
    console.log('context alrex',cartItems);
    
  }
  return (
    <AddContext.Provider value={{ user,addToCart,cartItems }}>
      {children}
    </AddContext.Provider>
  )
}

export default ProductsContext