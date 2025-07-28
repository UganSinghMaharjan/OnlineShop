import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

// Combined insertion sort & price filter function
const insertionSortWithPriceFilter = (
  arr,
  order = "asc",
  minPrice = 0,
  maxPrice = Infinity
) => {
  const filteredSortedArr = [];

  const min = parseFloat(minPrice) || 0;
  const max = parseFloat(maxPrice) || Infinity;

  for (let i = 0; i < arr.length; i++) {
    const price = parseFloat(arr[i].productPrice);

    if (price >= min && price <= max) {
      let current = arr[i];
      let j = filteredSortedArr.length - 1;

      while (
        j >= 0 &&
        (order === "asc"
          ? parseFloat(filteredSortedArr[j].productPrice) > price
          : parseFloat(filteredSortedArr[j].productPrice) < price)
      ) {
        filteredSortedArr[j + 1] = filteredSortedArr[j];
        j--;
      }
      filteredSortedArr[j + 1] = current;
    }
  }

  return filteredSortedArr;
};

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/v1/all/products"
        );
        setProducts(res.data.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Step 1: filter by searchTerm and category
  let filteredProducts = products.filter((product) => {
    const term = searchTerm.trim().toLowerCase();
    const matchesSearch =
      term === "" || product.productName.toLowerCase().startsWith(term);
    const matchesCategory =
      categoryFilter === "" ||
      product.category.toLowerCase() === categoryFilter.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  // Step 2 & 3: filter by price AND sort by price (if needed) in one combined function
  if (sortOrder === "low-to-high" || sortOrder === "high-to-low") {
    const order = sortOrder === "low-to-high" ? "asc" : "desc";
    filteredProducts = insertionSortWithPriceFilter(
      filteredProducts,
      order,
      minPrice,
      maxPrice
    );
  } else {
    // If no sorting, just filter by price alone
    const min = parseFloat(minPrice) || 0;
    const max = parseFloat(maxPrice) || Infinity;
    filteredProducts = filteredProducts.filter((product) => {
      const price = parseFloat(product.productPrice);
      return price >= min && price <= max;
    });
  }

  return (
    <>
      <div className="bg-gray-50 text-gray-800 min-h-screen">
        <Header />

        <div className="w-full h-[300px] bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 flex items-center justify-center shadow-md">
          <h1 className="text-5xl font-bold text-gray-900 drop-shadow-md">
            Explore the Collection ✨
          </h1>
        </div>

        <div className="max-w-6xl mx-auto py-12 px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">
            Featured Products
          </h2>

          {/* Filters */}
          <div className="mb-8 flex flex-col sm:flex-row justify-center items-center gap-4 flex-wrap">
            <input
              type="text"
              placeholder="Search products by first letters..."
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
            <input
              type="number"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-32 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              min="0"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-32 px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              min="0"
            />
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product._id}
                  onClick={() => navigate(`/product/${product._id}`)}
                  className="cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 group"
                >
                  <div className="w-full h-60 overflow-hidden">
                    <img
                      src={`http://localhost:5000/uploads/${product.productImage}`}
                      alt={product.productName}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium">
                      {product.productName}
                    </h3>
                    <p className="text-gray-600 mb-1">
                      Rs.{product.productPrice}
                    </p>
                    <p className="text-sm text-gray-500">
                      In Stock: {product.stock}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500 text-xl">
                No products found. Try adjusting your filters.
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
