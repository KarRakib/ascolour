'use client'
import React, { createContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export const AddContext = createContext()

const ProductsContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [totalAmount, setTotalAmount] = useState(0)
  const [user, setUser] = useState({ name: 'John Doe', email: 'john@example.com' }) // Example user data
  
  useEffect(()=>{
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    if(savedCartItems){
      setCartItems(savedCartItems)
    }
  },[])
  const addToCart = (product) => {
    // Use `find` to check if the product is already in the cart
    const alreadyExists = cartItems.find(cart => cart.id === product.id)
    if (alreadyExists) {
      return toast.error("This item is already in the cart.")
    } else {
      const updateCart = [...cartItems, product]
      setCartItems(updateCart)
      localStorage.setItem('cartItems', JSON.stringify(updateCart))
      toast.success("Item added to cart!")
    }
    
    console.log('Updated cart:', cartItems)
  }

  return (
    <AddContext.Provider value={{ user, addToCart, cartItems,setCartItems,totalAmount, setTotalAmount }}>
      {children}
    </AddContext.Provider>
  )
}

export default ProductsContext


// 
