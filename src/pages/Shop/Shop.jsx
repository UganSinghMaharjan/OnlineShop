import React from "react";
import Header from "../../components/Header/Header";

const products = [
  {
    id: 1,
    name: "Dreamy Denim Jacket",
    price: "$59.99",
    image: "https://source.unsplash.com/featured/?jacket",
  },
  {
    id: 2,
    name: "Whisper White Sneakers",
    price: "$89.00",
    image: "https://source.unsplash.com/featured/?sneakers",
  },
  {
    id: 3,
    name: "Cloud Cotton Tee",
    price: "$29.99",
    image: "https://source.unsplash.com/featured/?tshirt",
  },
  {
    id: 4,
    name: "Velvet Night Dress",
    price: "$75.50",
    image: "https://source.unsplash.com/featured/?dress",
  },
];

const Shop = () => {
  return (
    <>
    
    <div className="bg-gray-50 text-gray-800 min-h-screen">
    <Header/>
      {/* Hero Banner */}
      <div className="w-full h-[300px] bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 flex items-center justify-center shadow-md">
        <h1 className="text-5xl font-bold text-gray-900 drop-shadow-md">
          Explore the Collection ✨
        </h1>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 group"
            >
              <div className="w-full h-60 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
                <button className="mt-4 w-full py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition font-semibold">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Shop;
