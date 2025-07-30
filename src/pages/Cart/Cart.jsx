import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { toast } from "react-toastify";
import API from "../../redux/api/api";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [confirmingCheckout, setConfirmingCheckout] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const userId = user?._id;

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await API.get(
          `http://localhost:5000/api/v1/get-my-cart/${userId}`
        );
        const items = res.data.data.items.map((item) => ({
          id: item.productId._id,
          name: item.productId.productName,
          price: item.productId.productPrice,
          quantity: item.quantity,
          image: `http://localhost:5000/uploads/${item.productId.productImage}`,
        }));
        setCartItems(items);
      } catch (error) {
        console.error("Failed to load cart:", error);
        toast.error("Could not load cart. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchCart();
  }, [userId]);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    try {
      const res = await API.post(
        "http://localhost:5000/api/v1/add-to-order",
        { userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Order placed successfully!");
      setCartItems([]);
      setConfirmingCheckout(false);
    } catch (error) {
      console.error("Checkout failed:", error);
      toast.error("Failed to place order. Try again.");
    }
  };

  const handleConfirmClick = () => {
    setConfirmingCheckout(true);
  };

  const handleCancel = () => {
    setConfirmingCheckout(false);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#BAABBD] text-[#816F68] font-sans relative">
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
        {loading ? (
          <p className="text-center">Loading cart...</p>
        ) : cartItems.length === 0 ? (
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
                  <p className="text-[#816F68]">Rs. {item.price}</p>
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
        {!loading && cartItems.length > 0 && (
          <div className="border border-gray-200 rounded-xl p-5 text-right bg-gray-50">
            <div className="text-sm text-gray-500 mb-1">Order Total</div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Rs. {total.toFixed(2)}
            </h2>
            <button
              onClick={handleConfirmClick}
              className="mt-3 px-5 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition"
            >
              Checkout
            </button>
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      {confirmingCheckout && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl text-center space-y-4 w-80">
            <h2 className="text-lg font-semibold text-gray-800">
              Confirm Order?
            </h2>
            <p className="text-sm text-gray-600">
              Are you sure you want to place this order?
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={handleCancel}
                className="px-4 py-2 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleCheckout}
                className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 transition"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Cart;
