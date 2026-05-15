import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Orders from './pages/Orders'

import Navbar from './components/Navbar'
import Loader from './components/Loader'
import OfferPopup from './components/OfferPopup'
import Wishlist from './pages/Wishlist'
import ProductDetails from './pages/ProductDetails'
function App() {

  return (

    <>
    
      <Loader />

      <Navbar />
<OfferPopup />
      <Routes>

  <Route path="/" element={<Home />} />

  <Route path="/products" element={<Products />} />

  <Route path="/products/:category" element={<Products />} />

  <Route path="/product/:id" element={<ProductDetails />} />

  <Route path="/cart" element={<Cart />} />

  <Route path="/orders" element={<Orders />} />

  <Route path="/wishlist" element={<Wishlist />} />

</Routes>

    </>

  )
}

export default App