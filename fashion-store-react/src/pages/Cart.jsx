import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { OrderContext } from '../context/OrderContext'
function Cart() {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity
  } = useContext(CartContext)

  const { placeOrder } = useContext(OrderContext)

  // TOTAL PRICE
  const totalPrice = cart.reduce(

    (total, item) =>

      total + item.price * item.quantity,

    0

  )

  return (

    <section className="pt-32 p-10 bg-gray-100 min-h-screen">

      <h1 className="text-4xl font-bold mb-10">
        My Cart
      </h1>

      {cart.length === 0 ? (

        <p className="text-xl text-gray-500">
          Your cart is empty
        </p>

      ) : (

        <>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {cart.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-72 object-cover"
                />

                <div className="p-5">

                  <h2 className="text-2xl font-bold">
                    {item.name}
                  </h2>

                  <p className="text-lg text-gray-600 mt-2">
                    ₹ {item.price}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-4 mt-5">

                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="bg-black text-white w-10 h-10 rounded-full text-xl"
                    >
                      -
                    </button>

                    <span className="text-2xl font-bold">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="bg-black text-white w-10 h-10 rounded-full text-xl"
                    >
                      +
                    </button>

                  </div>

                  {/* Product Total */}
                  <p className="mt-5 text-xl font-bold">

                    Total: ₹ {item.price * item.quantity}

                  </p>

                </div>

              </div>

            ))}

          </div>

          {/* Grand Total */}
          <div className="mt-10 bg-white p-6 rounded-2xl shadow-xl max-w-sm">

            <h2 className="text-3xl font-bold">

              Cart Total: ₹ {totalPrice}

            </h2>

          </div>

        </>

      )}

    </section>

  )
}

export default Cart