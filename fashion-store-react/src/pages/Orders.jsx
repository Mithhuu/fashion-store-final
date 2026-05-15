function Orders() {

  const orders = [
    {
      id: 1,
      name: "Black Jacket",
      price: 899,
      status: "Delivered",
      image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234"
    },

    {
      id: 2,
      name: "White Sneaker",
      price: 1999,
      status: "Shipping",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },

    {
      id: 3,
      name: "Brown Linen Shirt",
      price: 1300,
      status: "Processing",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
    }
  ]

  return (

    <section className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-4xl font-bold mb-10">
        My Orders
      </h1>

      <div className="space-y-6">

        {orders.map((order) => (

          <div
            key={order.id}
            className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-6"
          >

            <img
              src={order.image}
              alt={order.name}
              className="w-32 h-32 object-cover rounded-xl"
            />

            <div className="flex-1">

              <h2 className="text-2xl font-semibold">
                {order.name}
              </h2>

              <p className="text-gray-600 mt-2">
                ₹{order.price}
              </p>

              <p className="mt-2 font-medium">
                Status:
                <span className="text-green-600 ml-2">
                  {order.status}
                </span>
              </p>

            </div>

            <button className="bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition">
              Track Order
            </button>

          </div>

        ))}

      </div>

    </section>

  )
}

export default Orders