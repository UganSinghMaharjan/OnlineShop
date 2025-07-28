import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    productPrice: "",
    stock: "",
    brand: "",
    category: "",
  });

  const [productImage, setProductImage] = useState(null);
  const [productImagePreview, setProductImagePreview] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch the existing product data when the component mounts
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/get/${id}`
        );
        setProduct(response.data.data);
        setProductImagePreview(
          `http://localhost:8000/gallery/${response.data.data.productImage}`
        );
      } catch (error) {
        setMessage("Error fetching product details");
      }
    };

    fetchProduct();
  }, [id]);

  // Handle changes in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle changes in the product image upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProductImage(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImagePreview(reader.result);
      };
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", product.productName);
    formData.append("productPrice", product.productPrice);
    formData.append("stock", product.stock);
    formData.append("brand", product.brand);
    formData.append("category", product.category);
    if (productImage) {
      formData.append("productImage", productImage);
    }

    setIsLoading(true);
    setMessage("");

    try {
      const res = await axios.put(
        `http://localhost:5000/api/v1/edit/product/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Success message
      setMessage("🎉 Product updated successfully!");
      // Redirect to the product list page
      //   navigate('/EditProductlist'); // Navigate to EditProductlist
      navigate("/admin", { state: { selectedKey: "4" } });
    } catch (error) {
      // Error message
      setMessage("❌ Failed to update product.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-10 w-[80%] text-[#816F68] font-sans">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-[#8D7471]">Edit Product</h2>

        {/* Display success or error message */}
        {message && (
          <div className="mb-4 text-center font-medium text-green-600">
            {message}
          </div>
        )}

        {/* Form to edit product */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-semibold">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              value={product.productName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9F838C]"
              placeholder="e.g., Cloud Cotton Tee"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">
              Price (Rs.)
            </label>
            <input
              type="number"
              name="productPrice"
              value={product.productPrice}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9F838C]"
              placeholder="e.g., 1500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Stock</label>
            <input
              type="text"
              name="stock"
              value={product.stock}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9F838C]"
              placeholder="e.g., 50"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Brand</label>
            <input
              type="text"
              name="brand"
              value={product.brand}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9F838C]"
              placeholder="e.g., PandaWagon"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Category</label>
            <input
              type="text"
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9F838C]"
              placeholder="e.g., Apparel"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">
              Upload Product Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9F838C]"
            />
            {productImagePreview && (
              <div className="mt-3">
                <img
                  src={productImagePreview}
                  alt="Preview"
                  className="h-40 object-contain border border-dashed border-gray-300 p-2 rounded-xl"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 flex items-center justify-center gap-2 bg-[#9F838C] text-white rounded-xl hover:bg-[#8D7471] transition disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                Uploading...
              </>
            ) : (
              "Update Product"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
