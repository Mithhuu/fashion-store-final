import { Link, useNavigate } from 'react-router-dom'

import { useContext } from 'react'

import { SearchContext } from '../context/SearchContext'

function Navbar() {

  const {
    search,
    setSearch
  } = useContext(SearchContext)

  const navigate = useNavigate()

  // SEARCH FUNCTION
  const handleSearch = (e) => {

    setSearch(e.target.value)

    // Automatically go to products page
    navigate('/products')

  }

  return (

    <nav
      className="
      fixed top-0 left-0 w-full z-50
      bg-black
      shadow-lg
      px-10 py-5
      flex justify-between items-center
    "
    >

      {/* Logo */}
      <Link to="/">

        <h1
          className="
          text-4xl
          font-extrabold
          tracking-[4px]
          text-white
          hover:text-pink-300
          transition
        "
        >
          LUXEWEAR
        </h1>

      </Link>

  {/* Search Bar */}
<div
  className="
  flex items-center
  bg-white
  rounded-full
  px-6
  py-4
  w-[520px]
  shadow-md
"
>

  {/* Search Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="rgb(236 72 153)"
    className="w-7 h-7 mr-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>

  {/* Input */}
  <input
    type="text"
    placeholder="Search for Products"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="
    w-full
    outline-none
    bg-transparent
    text-gray-700
    text-2xl
    font-medium
    placeholder:text-gray-500
  "
  />

</div>

      {/* Navigation Links */}
      <ul
        className="
        flex gap-8
        text-lg
        font-bold
        text-white
        items-center
      "
      >

        <li>
          <Link
            to="/"
            className="hover:text-pink-300 transition"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/products"
            className="hover:text-pink-300 transition"
          >
            Shop
          </Link>
        </li>

        <li>
          <Link
            to="/wishlist"
            className="hover:text-pink-300 transition"
          >
            Wishlist
          </Link>
        </li>

        <li>
          <Link
            to="/cart"
            className="hover:text-pink-300 transition"
          >
            Cart
          </Link>
        </li>

        <li>
          <Link
            to="/orders"
            className="hover:text-pink-300 transition"
          >
            Orders
          </Link>
        </li>

      </ul>

    </nav>

  )
}

export default Navbar