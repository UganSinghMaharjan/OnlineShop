import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const products = [
  {
    id: 1,
    name: "Dreamy Denim Jacket",
    price: "$59.99",
    category: "Wear",
    image: "https://source.unsplash.com/featured/?jacket",
  },
  {
    id: 2,
    name: "Whisper White Sneakers",
    price: "$89.00",
    category: "Shoes",
    image: "https://source.unsplash.com/featured/?sneakers",
  },
  {
    id: 3,
    name: "Cloud Cotton Tee",
    price: "$29.99",
    category: "Wear",
    image: "https://source.unsplash.com/featured/?tshirt",
  },
  {
    id: 4,
    name: "Velvet Night Dress",
    price: "$75.50",
    category: "Wear",
    image: "https://source.unsplash.com/featured/?dress",
  },
  {
    id: 5,
    name: "Electric Toothbrush",
    price: "$39.99",
    category: "Electronics",
    image: "https://source.unsplash.com/featured/?electronics",
  },
  {
    id: 6,
    name: "Smart LED Bulb",
    price: "$19.99",
    category: "Electronics",
    image: "https://source.unsplash.com/featured/?smartbulb",
  },
  {
    id: 7,
    name: "Running Shoes",
    price: "$99.99",
    category: "Shoes",
    image: "https://source.unsplash.com/featured/?runningshoes",
  },
  {
    id: 8,
    name: "Basic Hoodie",
    price: "$49.99",
    category: "Wear",
    image: "https://source.unsplash.com/featured/?hoodie",
  },
  {
    id: 9,
    name: "Gold Hoop Earrings",
    price: "$24.99",
    category: "Accessories",
    image: "https://source.unsplash.com/featured/?earrings",
  },
  {
    id: 10,
    name: "Silk Scarf",
    price: "$35.00",
    category: "Accessories",
    image: "https://source.unsplash.com/featured/?scarf",
  },
  {
    id: 11,
    name: "Face Serum GlowUp",
    price: "$27.50",
    category: "Beauty",
    image: "https://source.unsplash.com/featured/?skincare",
  },
  {
    id: 12,
    name: "Aromatic Candle Set",
    price: "$22.00",
    category: "Home",
    image: "https://source.unsplash.com/featured/?candles",
  },
];

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      categoryFilter ? product.category === categoryFilter : true
    )
    .filter((product) => {
      const price = parseFloat(product.price.replace("$", ""));
      const min = parseFloat(minPrice) || 0;
      const max = parseFloat(maxPrice) || Infinity;
      return price >= min && price <= max;
    })
    .sort((a, b) => {
      const priceA = parseFloat(a.price.replace("$", ""));
      const priceB = parseFloat(b.price.replace("$", ""));
      if (sortOrder === "low-to-high") return priceA - priceB;
      if (sortOrder === "high-to-low") return priceB - priceA;
      return 0;
    });

  return (
    <>
      <div className="bg-gray-50 text-gray-800 min-h-screen">
        <Header />

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

          {/* Search and Sort Controls */}
          <div className="mb-8 flex flex-col sm:flex-row justify-center items-center gap-4 flex-wrap">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="">Sort by Price</option>
              <option value="low-to-high">Lowest to Highest</option>
              <option value="high-to-low">Highest to Lowest</option>
            </select>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              <option value="">All Categories</option>
              <option value="Wear">Wear</option>
              <option value="Shoes">Shoes</option>
              <option value="Electronics">Electronics</option>
              <option value="Accessories">Accessories</option>
              <option value="Beauty">Beauty</option>
              <option value="Home">Home</option>
            </select>

            {/* Price Pool Filter */}
            <input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-32 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-32 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
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
      <Footer />
    </>
  );
};

export default Shop;
