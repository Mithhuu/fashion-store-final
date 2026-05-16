import products from '../data/products'

import { useContext } from 'react'

import { CartContext } from '../context/CartContext'
import { SearchContext } from '../context/SearchContext'
import { WishlistContext } from '../context/WishlistContext'

import { useParams, Link } from 'react-router-dom'

function Products() {

  // CART CONTEXT
  const {
    addToCart,
    decreaseQuantity,
    removeFromCart,
    cart
  } = useContext(CartContext)

  // WISHLIST CONTEXT
  const {
    wishlist,
    addToWishlist
  } = useContext(WishlistContext)

  // SEARCH CONTEXT
  const { search } = useContext(SearchContext)

  // URL PARAM
  const { category } = useParams()

  // CHECK IF PRODUCT EXISTS IN CART
  const isInCart = (id) => {

    return cart.some(
      (item) => item.id === id
    )

  }

  // CATEGORY FILTER
  const categoryProducts = category

    ? products.filter(

        (product) =>

          product.category.toLowerCase() ===
          category.toLowerCase()

      )

    : products

  // SEARCH FILTER
  const filteredProducts = categoryProducts.filter((product) => {

    return (

      product.name
        .toLowerCase()
        .includes(search.toLowerCase())

      ||

      product.category
        .toLowerCase()
        .includes(search.toLowerCase())

    )

  })

  return (

    <section className="pt-32 px-6 pb-10 bg-gray-100 min-h-screen">

      {/* PAGE HEADING */}
      <h1 className="text-4xl font-bold mb-8 text-center">

        {category ? category : 'All Products'}

      </h1>

      {/* PRODUCTS GRID */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">

        {filteredProducts.map((product) => (

          <div
            key={product.id}
            className="
              bg-white
              rounded-2xl
              shadow-lg
              overflow-hidden
              hover:scale-105
              hover:shadow-2xl
              transition duration-300
              relative
            "
          >

            {/* PRODUCT IMAGE */}
            <Link to={`/product/${product.id}`}>

              <img
                src={product.image}
                alt={product.name}
                className="
                  w-full
                  h-40
                  object-cover
                  hover:scale-105
                  transition duration-300
                "
              />

            </Link>

            {/* WISHLIST BUTTON */}
            <button
              onClick={() => addToWishlist(product)}
              className="
                absolute
                top-2
                right-2
                bg-white
                w-8
                h-8
                rounded-full
                flex
                items-center
                justify-center
                shadow-md
                text-lg
                hover:scale-110
                transition
              "
            >

              {

                wishlist.find(
                  (item) => item.id === product.id
                )

                  ?

                  <span className="text-red-500">
                    ♥
                  </span>

                  :

                  <span className="text-gray-700">
                    ♡
                  </span>

              }

            </button>

            {/* PRODUCT DETAILS */}
            <div className="p-3">

              {/* PRODUCT NAME */}
              <Link to={`/product/${product.id}`}>

                <h2 className="
                  text-sm
                  font-bold
                  hover:text-pink-500
                  transition
                  line-clamp-1
                ">
                  {product.name}
                </h2>

              </Link>

              {/* CATEGORY */}
              <p className="text-gray-500 text-xs mt-1">
                {product.category}
              </p>

              {/* PRICE */}
              <p className="
                text-black
                text-sm
                mt-2
                font-bold
              ">
                ₹ {product.price}
              </p>

              {/* CART BUTTONS */}
              <div className="
                mt-4
                flex
                items-center
                justify-center
                gap-2
              ">

                {/* MINUS BUTTON */}
                <button
                  onClick={() => decreaseQuantity(product.id)}
                  className="
                    w-8
                    h-8
                    rounded-full
                    bg-black
                    text-white
                    text-lg
                    font-bold
                    hover:bg-gray-800
                    transition
                  "
                >
                  -
                </button>

                {/* ADD / ADDED BUTTON */}
                <button
                  onClick={() =>

                    isInCart(product.id)

                      ?

                      removeFromCart(product.id)

                      :

                      addToCart(product)

                  }
                  className={`
                    px-3
                    py-2
                    rounded-lg
                    text-sm
                    transition duration-300

                    ${

                      isInCart(product.id)

                        ?

                        'bg-green-600 text-white'

                        :

                        'bg-black text-white hover:bg-gray-800'

                    }
                  `}
                >

                  {

                    isInCart(product.id)

                      ?

                      'Added ✓'

                      :

                      'Add'

                  }

                </button>

                {/* PLUS BUTTON */}
                <button
                  onClick={() => addToCart(product)}
                  className="
                    w-8
                    h-8
                    rounded-full
                    bg-black
                    text-white
                    text-lg
                    font-bold
                    hover:bg-gray-800
                    transition
                  "
                >
                  +
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  )

}

export default Products