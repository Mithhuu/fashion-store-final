import products from '../data/products'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { WishlistContext } from '../context/WishlistContext'
import { Link } from 'react-router-dom'

function FeaturedProducts() {

  // CART CONTEXT
  const {
    addToCart,
    removeFromCart,
    decreaseQuantity,
    cart
  } = useContext(CartContext)

  // WISHLIST CONTEXT
  const {
    wishlist,
    addToWishlist
  } = useContext(WishlistContext)

  // CHECK IF PRODUCT IS IN CART
  const isInCart = (id) => {
    return cart.some((item) => item.id === id)
  }

  return (

    <section className="px-6 py-10 bg-gray-100">

      {/* HEADING */}
      <h2 className="text-4xl font-bold mb-10">
        Featured Products
      </h2>

      {/* 6 COLUMN GRID */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">

        {products.map((product) => (

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
            "
          >

            {/* PRODUCT IMAGE */}
            <div className="relative">

              <Link to={`/product/${product.id}`}>

                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    w-full
                    h-44
                    object-cover
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

            </div>

            {/* PRODUCT DETAILS */}
            <div className="p-3">

              {/* PRODUCT NAME */}
              <Link to={`/product/${product.id}`}>

                <h3 className="
                  text-sm
                  font-bold
                  hover:text-pink-500
                  transition
                ">
                  {product.name}
                </h3>

              </Link>

              {/* CATEGORY */}
              <p className="text-gray-500 text-xs mt-1">
                {product.category}
              </p>

              {/* PRICE */}
              <p className="
                text-black
                font-bold
                mt-2
                text-sm
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
                    px-4
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

export default FeaturedProducts