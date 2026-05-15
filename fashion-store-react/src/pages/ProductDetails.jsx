import { useParams } from 'react-router-dom'
import { useContext, useState } from 'react'

import products from '../data/products'

import { CartContext } from '../context/CartContext'

function ProductDetails() {

  const { id } = useParams()

  const { addToCart } = useContext(CartContext)

  const [showPopup, setShowPopup] = useState(false)

  // Find Product
  const product = products.find(

    (item) => item.id === Number(id)

  )

  // Related Products
  const relatedProducts = products.filter(

    (item) =>

      item.category === product.category &&
      item.id !== product.id

  )

  // Place Order Function
  const handleOrder = () => {

    setShowPopup(true)

  }

  return (

    <section className="pt-32 pb-16 px-10 bg-gray-100 min-h-screen">
{/* Order Success Popup */}
{showPopup && (

  <div
    className="
    fixed inset-0
    bg-black bg-opacity-50
    flex items-center justify-center
    z-50
  "
  >
<div
  className="
  bg-white
  w-[420px]
  rounded-3xl
  shadow-2xl
  p-8
  text-center
  animate-fadeIn
"
>

      {/* Success Icon */}
      <div
        className="
        w-24 h-24
        bg-green-100
        rounded-full
        flex items-center justify-center
        mx-auto
      "
      >

        <span className="text-5xl text-green-600">
          ✔
        </span>

      </div>

      {/* Heading */}
      <h2
        className="
        text-4xl
        font-extrabold
        mt-6
        text-black
      "
      >
        Order Placed!
      </h2>

      {/* Message */}
      <p
        className="
        text-gray-600
        mt-4
        text-lg
        leading-8
      "
      >
        Your order has been placed successfully.
        <br />
        Thank you for shopping with
        <span className="font-bold text-black">
          {' '}LUXEWEAR
        </span>
      </p>

      {/* Fake Delivery Info */}
      <div
        className="
        mt-6
        bg-gray-100
        rounded-2xl
        p-4
      "
      >

        <p className="text-gray-700 text-lg">
          Estimated Delivery:
        </p>

        <h3 className="text-2xl font-bold mt-2">
          3 - 5 Business Days
        </h3>

      </div>

      {/* Continue Shopping Button */}
      <button
        onClick={() => setShowPopup(false)}
        className="
        mt-8
        bg-black
        text-white
        px-10 py-4
        rounded-2xl
        text-lg
        font-bold
        hover:bg-gray-800
        transition
      "
      >
        Continue Shopping
      </button>

    </div>

  </div>

)}

      {/* Product Section */}
      <div
        className="
        bg-white
        rounded-3xl
        shadow-2xl
        p-10
        grid
        grid-cols-1 md:grid-cols-2
        gap-12
      "
      >

        {/* Product Image */}
        <div>

          <img
            src={product.image}
            alt={product.name}
            className="
            w-full
            h-[700px]
            object-cover
            rounded-3xl
          "
          />

        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">

          {/* Category */}
          <p className="text-gray-500 text-xl uppercase tracking-widest">

            {product.category}

          </p>

          {/* Product Name */}
          <h1 className="text-6xl font-extrabold mt-4">

            {product.name}

          </h1>

          {/* Price */}
          <p className="text-5xl font-bold mt-6">

            ₹ {product.price}

          </p>

          {/* Description */}
          <p className="text-gray-600 text-xl leading-10 mt-8">

            Premium quality fashion product from LuxeWear.
            Stylish design, comfortable fit, and modern look
            perfect for daily wear, casual outings,
            parties, and premium lifestyle fashion.

          </p>

          {/* Features */}
          <div className="mt-10">

            <h2 className="text-3xl font-bold mb-5">

              Product Highlights

            </h2>

            <ul className="space-y-4 text-gray-700 text-lg">

              <li>✔ Premium Fabric Quality</li>

              <li>✔ Trendy Modern Fashion</li>

              <li>✔ Comfortable & Stylish Fit</li>

              <li>✔ Long Lasting Material</li>

              <li>✔ Easy To Maintain</li>

            </ul>

          </div>

          {/* Buttons */}
          <div className="flex gap-6 mt-12">

            {/* Add To Cart */}
            <button
              onClick={() => addToCart(product)}
              className="
              bg-black
              text-white
              px-10 py-5
              rounded-2xl
              text-xl
              font-bold
              hover:bg-gray-800
              transition
            "
            >
              Add To Cart
            </button>

            {/* Place Order */}
            <button
              onClick={handleOrder}
              className="
              bg-pink-500
              text-white
              px-10 py-5
              rounded-2xl
              text-xl
              font-bold
              hover:bg-pink-600
              transition
            "
            >
              Place Order
            </button>

          </div>

        </div>

      </div>

      {/* Reviews Section */}
      <div
        className="
        mt-20
        bg-white
        rounded-3xl
        shadow-xl
        p-10
      "
      >

        <h2 className="text-4xl font-bold mb-10">

          Customer Reviews

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Review 1 */}
          <div>

            <h3 className="text-2xl font-bold">

              Aisha Khan

            </h3>

            <p className="text-yellow-500 text-xl mt-2">

              ★★★★★

            </p>

            <p className="text-gray-600 mt-3 text-lg">

              Premium fashion look and very comfortable to wear.

            </p>

          </div>

          {/* Review 2 */}
          <div>

            <h3 className="text-2xl font-bold">

              Arjun Menon

            </h3>

            <p className="text-yellow-500 text-xl mt-2">

              ★★★★☆

            </p>

            <p className="text-gray-600 mt-3 text-lg">

              Delivery was fast and the product looks exactly like the picture.

            </p>

          </div>

        </div>

      </div>

      {/* Related Products */}
      <div className="mt-20">

        <h2 className="text-4xl font-bold mb-10">

          Related Products

        </h2>

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-4
          gap-8
        "
        >

          {relatedProducts.slice(0, 4).map((item) => (

            <div
              key={item.id}
              className="
              bg-white
              rounded-3xl
              shadow-xl
              overflow-hidden
              hover:scale-105
              transition duration-300
            "
            >

              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="
                w-full
                h-72
                object-cover
              "
              />

              {/* Details */}
              <div className="p-5">

                <h3 className="text-2xl font-bold">

                  {item.name}

                </h3>

                <p className="text-gray-500 mt-2">

                  {item.category}

                </p>

                <p className="text-black text-2xl font-bold mt-3">

                  ₹ {item.price}

                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )

}

export default ProductDetails