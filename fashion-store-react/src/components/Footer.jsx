import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'

function Footer() {

  return (

    <footer className="bg-black text-white py-10 mt-10">

      <div className="text-center">

        {/* Store Name */}
        <h2 className="text-4xl font-bold">
          Fashion Store
        </h2>

        {/* Copyright */}
        <p className="mt-4 text-lg">
          © 2026 All Rights Reserved
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mt-6 text-3xl">

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebook />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 transition"
          >
            <FaTwitter />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaYoutube />
          </a>

        </div>

      </div>

    </footer>

  )

}

export default Footer