import { useEffect, useState } from 'react'

import jacket from '../assets/images/jkblk.jpg'
import sneakers from '../assets/images/wtesnk.jpg'
import baggy from '../assets/images/baggyjeans.jpg'
import bag from '../assets/images/guccibag.jpg'
import watch from '../assets/images/fossilwatch.jpg'
import sunglass from '../assets/images/sunglass.jpg'

function Loader() {

  const [hideLoader, setHideLoader] = useState(false)

  useEffect(() => {

    const timer = setTimeout(() => {
      setHideLoader(true)
    }, 3500)

    return () => clearTimeout(timer)

  }, [])

  if (hideLoader) {
    return null
  }

  return (

    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center overflow-hidden">

      {/* Left Images */}
      <div className="absolute left-10 flex flex-col gap-6 animate-bounce">

        <img
          src={jacket}
          alt=""
          className="w-24 h-24 rounded-2xl object-cover shadow-xl"
        />

        <img
          src={sunglass}
          alt=""
          className="w-20 h-20 rounded-2xl object-cover shadow-xl ml-10"
        />

        <img
          src={bag}
          alt=""
          className="w-24 h-24 rounded-2xl object-cover shadow-xl"
        />

      </div>

      {/* Right Images */}
      <div className="absolute right-10 flex flex-col gap-6 animate-pulse">

        <img
          src={sneakers}
          alt=""
          className="w-24 h-24 rounded-2xl object-cover shadow-xl"
        />

        <img
          src={watch}
          alt=""
          className="w-20 h-20 rounded-2xl object-cover shadow-xl mr-10"
        />

        <img
          src={baggy}
          alt=""
          className="w-24 h-24 rounded-2xl object-cover shadow-xl"
        />

      </div>

      {/* Center Content */}
      <div className="text-center z-10">

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-[10px] text-black animate-pulse">
          FASHION
        </h1>

        <p className="mt-5 text-gray-500 text-lg tracking-[5px] uppercase">
          Luxury Fashion Store
        </p>

        {/* Loading Bar */}
        <div className="w-72 h-2 bg-gray-200 rounded-full overflow-hidden mt-8 mx-auto">

          <div className="h-full bg-black animate-[loading_3s_linear_forwards]"></div>

        </div>

      </div>

    </div>

  )
}

export default Loader