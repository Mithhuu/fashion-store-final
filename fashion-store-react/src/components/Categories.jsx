import { Link } from 'react-router-dom'

import menImg from '../assets/images/men.jpg'
import womenImg from '../assets/images/women.jpg'
import shoesImg from '../assets/images/shoes.jpg'
import accessoriesImg from '../assets/images/accessories.jpg'

function Categories() {

  const categories = [

    {
      name: "Men",
      image: menImg
    },

    {
      name: "Women",
      image: womenImg
    },

    {
      name: "Footwear",
      image: shoesImg
    },

    {
      name: "Accessories",
      image: accessoriesImg
    }

  ]

  return (

    <section className="p-10 bg-gray-100">

      <h2 className="text-5xl font-bold mb-10">
        Categories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {categories.map((category, index) => (

          <Link
            key={index}
            to={`/products/${category.name}`}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
          >

            <img
              src={category.image}
              alt={category.name}
              className="h-72 w-full object-cover"
            />

            <div className="p-5 text-center">

              <h3 className="text-3xl font-bold">
                {category.name}
              </h3>

              <p className="text-gray-500 mt-2">
                Explore Collection
              </p>

            </div>

          </Link>

        ))}

      </div>

    </section>

  )
}

export default Categories