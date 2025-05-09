import React, { useState } from 'react';

const AddProducts = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    quantity: '',
    image: '',
    brand: '',
    category: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to backend API (using fetch or axios)
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error adding product');
      }

      const result = await response.json();
      console.log("Product added successfully:", result);
      alert('Product added successfully!');
      setFormData({
        name: '',
        price: '',
        quantity: '',
        image: '',
        brand: '',
        category: ''
      });
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product!');
    }
  };

  return (
    <div className="min-h-screen p-10 w-[80%] text-[#816F68] font-sans">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-[#8D7471]">Add a New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-semibold">Product Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9F838C]"
              placeholder="e.g., Cloud Cotton Tee"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Price (Rs.)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9F838C]"
              placeholder="e.g., 1500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Quantity in Stock</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9F838C]"
              placeholder="e.g., 50"
              required
            />
          </div>

          {/* Brand */}
          <div>
            <label className="block mb-1 text-sm font-semibold">Brand</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9F838C]"
              placeholder="e.g., PandaWagon"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 text-sm font-semibold">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9F838C]"
              placeholder="e.g., Apparel"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full h-25 text-center px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9F838C]"
              placeholder="Paste an image URL"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#9F838C] text-white rounded-xl hover:bg-[#8D7471] transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
