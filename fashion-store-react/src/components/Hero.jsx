import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import pic1 from '../assets/images/pic1.jpg'
import pic2 from '../assets/images/pic2.jpg'
import pic3 from '../assets/images/pic3.jpg'
import pic4 from '../assets/images/pic4.jpg'
import banner5 from '../assets/images/banner5.jpg'

function Hero() {

  const images = [
    pic1,
    pic2,
    pic3,
    pic4,
    banner5
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {
      nextSlide()
    }, 3000)

    return () => clearInterval(interval)

  }, [currentImage])

  const nextSlide = () => {

    setCurrentImage(
      currentImage === images.length - 1
        ? 0
        : currentImage + 1
    )

  }

  const prevSlide = () => {

    setCurrentImage(
      currentImage === 0
        ? images.length - 1
        : currentImage - 1
    )

  }

  return (

    <section
      className="
        h-screen
        bg-cover
        bg-top
        bg-no-repeat
        flex
        items-center
        justify-center
        relative
        transition-all
        duration-700
      "
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center text-white px-4">

        {/* SMALL TAG */}
        <p className="
          uppercase
          tracking-[8px]
          text-sm
          md:text-base
          mb-4
          text-gray-200
          font-semibold
        ">
          Luxury Fashion
        </p>

        {/* MAIN HEADING */}
        <h1 className="
          text-6xl
          md:text-8xl
          font-extrabold
          leading-tight
          drop-shadow-2xl
        ">

          Elevate Your

          <span className="block text-gray-200">
            Fashion Style
          </span>

        </h1>

        {/* SUBTITLE */}
        <p className="
          mt-6
          text-lg
          md:text-2xl
          text-gray-200
          max-w-2xl
          mx-auto
          drop-shadow-lg
        ">

          Discover premium outfits and modern luxury styles.

        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex gap-5 justify-center">

          <Link
            to="/products"
            className="
              bg-white
              text-black
              px-8
              py-3
              rounded-xl
              font-bold
              hover:scale-105
              hover:bg-gray-200
              transition
              duration-300
            "
          >
            Shop Now
          </Link>

          <Link
            to="/orders"
            className="
              border-2
              border-white
              px-8
              py-3
              rounded-xl
              font-bold
              hover:bg-white
              hover:text-black
              transition
              duration-300
            "
          >
            Explore
          </Link>

        </div>

      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="
          absolute
          left-5
          text-white
          text-5xl
          z-10
          hover:scale-110
          transition
        "
      >
        ❮
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="
          absolute
          right-5
          text-white
          text-5xl
          z-10
          hover:scale-110
          transition
        "
      >
        ❯
      </button>

      {/* DOTS */}
      <div className="absolute bottom-10 flex gap-3 z-10">

        {images.map((_, index) => (

          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`
              h-3
              w-3
              rounded-full
              transition
              ${
                currentImage === index
                  ? 'bg-white scale-125'
                  : 'bg-gray-400'
              }
            `}
          ></button>

        ))}

      </div>

    </section>

  )
}

export default Hero