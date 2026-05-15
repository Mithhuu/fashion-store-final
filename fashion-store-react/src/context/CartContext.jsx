import { createContext, useState } from 'react'

export const CartContext = createContext()

function CartProvider({ children }) {

  const [cart, setCart] = useState([])

  // REMOVE FROM CART
  const removeFromCart = (id) => {

    setCart(

      cart.filter((item) => item.id !== id)

    )

  }

  // ADD TO CART
  const addToCart = (product) => {

    const existingProduct = cart.find(
      (item) => item.id === product.id
    )

    if (existingProduct) {

      const updatedCart = cart.map((item) =>

        item.id === product.id

          ? {
              ...item,
              quantity: item.quantity + 1
            }

          : item

      )

      setCart(updatedCart)

    }

    else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1
        }
      ])

    }

  }

  // DECREASE QUANTITY
  const decreaseQuantity = (id) => {

    const existingProduct = cart.find(
      (item) => item.id === id
    )

    if (!existingProduct) return

    if (existingProduct.quantity === 1) {

      const updatedCart = cart.filter(
        (item) => item.id !== id
      )

      setCart(updatedCart)

    }

    else {

      const updatedCart = cart.map((item) =>

        item.id === id

          ? {
              ...item,
              quantity: item.quantity - 1
            }

          : item

      )

      setCart(updatedCart)

    }

  }

  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        decreaseQuantity,
        removeFromCart
      }}
    >

      {children}

    </CartContext.Provider>

  )

}

export default CartProvider