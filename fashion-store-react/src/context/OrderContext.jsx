import { createContext, useState } from 'react'

export const OrderContext = createContext()

function OrderProvider({ children }) {

  const [orders, setOrders] = useState([])

  // PLACE ORDER
  const placeOrder = (products) => {

    setOrders(products)

  }

  return (

    <OrderContext.Provider
      value={{
        orders,
        placeOrder
      }}
    >

      {children}

    </OrderContext.Provider>

  )

}

export default OrderProvider