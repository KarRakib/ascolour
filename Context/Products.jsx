'use client'
import React, { createContext, useState } from 'react'
import toast from 'react-hot-toast'

export const AddContext = createContext()

const ProductsContext = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [user, setUser] = useState({ name: 'John Doe', email: 'john@example.com' }) // Example user data
  
  const addToCart = (product) => {
    console.log('addID', product)
    
    // Use `find` to check if the product is already in the cart
    const alreadyExists = cartItems.find(cart => cart.id === product.id)
    
    if (alreadyExists) {
      return toast.error("This item is already in the cart.")
    } else {
      setCartItems([...cartItems, product])
      toast.success("Item added to cart!")
    }
    
    console.log('Updated cart:', cartItems)
  }

  return (
    <AddContext.Provider value={{ user, addToCart, cartItems }}>
      {children}
    </AddContext.Provider>
  )
}

export default ProductsContext
