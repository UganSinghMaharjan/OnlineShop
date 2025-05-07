import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const cartItems = [
  {
    id: 1,
    name: "Dreamy Denim Jacket",
    price: "$59.99",
    quantity: 1,
    image: "https://source.unsplash.com/featured/?jacket",
  },
  {
    id: 2,
    name: "Cloud Cotton Tee",
    price: "$29.99",
    quantity: 2,
    image: "https://source.unsplash.com/featured/?tshirt",
  },
];

const Cart = () => {
  const total = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price.replace('$', ''));
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#BAABBD] text-[#816F68] font-sans">
      <Header />

      {/* Hero Section */}
      <div className="text-center py-16 px-4 bg-[#C9C9EE] shadow-md shadow-[#816F68]/20">
        <h1 className="text-5xl font-extrabold text-[#8D7471] mb-4">
          Your Cart
        </h1>
        <p className="text-lg text-[#9F838C] max-w-xl mx-auto">
          Handpicked pieces, waiting for their place in your world. 🛍️
        </p>
      </div>

      {/* Cart Items */}
      <div className="w-11/12 md:w-4/5 mx-auto py-12 grid gap-6">
        {cartItems.length === 0 ? (
          <p className="text-center text-lg text-[#816F68]">
            Your cart is currently empty.
          </p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-lg flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl"
                />
                <div>
                  <h2 className="text-xl font-semibold text-[#8D7471]">
                    {item.name}
                  </h2>
                  <p className="text-[#816F68]">{item.price}</p>
                  <p className="text-sm text-[#9F838C]">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>
              <button className="px-4 py-2 bg-red-100 text-red-600 rounded-xl hover:bg-red-200 transition">
                Remove
              </button>
            </div>
          ))
        )}

        {/* Total Section */}
        {cartItems.length > 0 && (
         <div className="border border-gray-200 rounded-xl p-5 text-right bg-gray-50">
         <div className="text-sm text-gray-500 mb-1">Order Total</div>
         <h2 className="text-2xl font-semibold text-gray-800">${total.toFixed(2)}</h2>
         <button className="mt-3 px-5 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition">
           Checkout
         </button>
       </div>
       
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
