import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function OfferPopup() {

  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {

    // Check if popup was already closed before
    const popupClosed = localStorage.getItem('offerPopupClosed')

    if (!popupClosed) {

      const timer = setTimeout(() => {
        setShowPopup(true)
      }, 2500)

      return () => clearTimeout(timer)
    }

  }, [])

  // Close popup permanently
  const closePopup = () => {
    setShowPopup(false)

    localStorage.setItem('offerPopupClosed', 'true')
  }

  if (!showPopup) {
    return null
  }

  return (

    <div className="fixed inset-0 bg-black/50 z-[9999] flex items-center justify-center px-4">

      {/* Popup Box */}
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full relative">

        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-5 text-3xl font-bold text-gray-500 hover:text-black z-10"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2">

          {/* Left Image */}
          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050"
            alt="Fashion"
            className="h-full w-full object-cover"
          />

          {/* Right Content */}
          <div className="p-10 flex flex-col justify-center">

            <p className="uppercase tracking-[5px] text-pink-500 font-bold">
              Limited Offer
            </p>

            <h1 className="text-5xl font-extrabold mt-4 leading-tight">

              50% OFF

              <span className="block text-gray-700 text-3xl mt-2">
                New Fashion Collection
              </span>

            </h1>

            <p className="text-gray-500 mt-6 text-lg">

              Upgrade your style with premium fashion,
              trending outfits, and luxury accessories.

            </p>

            <Link
              to="/products"
              onClick={closePopup}
              className="mt-8 bg-black text-white px-8 py-4 rounded-xl text-center font-bold hover:bg-gray-800 transition"
            >
              Shop Now
            </Link>

          </div>

        </div>

      </div>

    </div>

  )
}

export default OfferPopup