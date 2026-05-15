import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter } from 'react-router-dom'

import CartProvider from './context/CartContext'
import SearchProvider from './context/SearchContext'
import WishlistProvider from './context/WishlistContext'
import OrderProvider from './context/OrderContext'
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <BrowserRouter>

      <SearchProvider>

        <CartProvider>

          <WishlistProvider>

            <OrderProvider>

              <App />

            </OrderProvider>

          </WishlistProvider>

        </CartProvider>

      </SearchProvider>

    </BrowserRouter>

  </React.StrictMode>

)