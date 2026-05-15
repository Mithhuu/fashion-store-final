import { useContext } from 'react'
import { WishlistContext } from '../context/WishlistContext'

function Wishlist() {

  const {
    wishlist,
    removeFromWishlist
  } = useContext(WishlistContext)

  return (

    <section className="pt-32 px-10 pb-10 bg-gray-100 min-h-screen">

      <h1 className="text-5xl font-bold mb-10">
        My Wishlist
      </h1>

      {

        wishlist.length === 0 ? (

          <p className="text-xl text-gray-500">
            Wishlist is empty
          </p>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {wishlist.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover"
                />

                <div className="p-5">

                  <h2 className="text-2xl font-bold">
                    {product.name}
                  </h2>

                  <p className="text-gray-500 mt-2">
                    ₹ {product.price}
                  </p>

                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="
                    mt-5
                    w-full
                    bg-red-500
                    text-white
                    py-3
                    rounded-xl
                  "
                  >
                    Remove
                  </button>

                </div>

              </div>

            ))}

          </div>

        )

      }

    </section>

  )
}

export default Wishlist