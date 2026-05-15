import { createContext, useState } from 'react'

export const WishlistContext = createContext()

function WishlistProvider({ children }) {

  const [wishlist, setWishlist] = useState([])

  // Add To Wishlist
  const addToWishlist = (product) => {

    const existingProduct = wishlist.find(
      (item) => item.id === product.id
    )

    if (!existingProduct) {
      setWishlist([...wishlist, product])
    }
  }

  // Remove From Wishlist
  const removeFromWishlist = (id) => {

    setWishlist(
      wishlist.filter((item) => item.id !== id)
    )
  }

  return (

    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>

  )
}

export default WishlistProvider