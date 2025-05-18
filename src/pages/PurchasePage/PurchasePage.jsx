import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../redux/api/api";

const PurchasePage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?._id;

  const { id } = useParams();
  const navigate = useNavigate();

  const [singleProduct, setSingleProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const getProductById = async () => {
      try {
        const res = await API.get(`http://localhost:8000/api/v1/get/${id}`);
        setSingleProduct(res.data.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        toast.error("Error loading product. Please try again later.");
      }
    };

    if (id) getProductById();
  }, [id]);

  const incrementQty = () => {
    if (singleProduct && quantity < singleProduct.stock) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decrementQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = async () => {
    if (!userId) return toast.error("Please login first.");
    if (!id) return toast.error("Invalid product.");
    if (quantity < 1) return toast.error("Quantity must be at least 1.");

    try {
      const payload = {
        userId,
        items: [{ productId: id, quantity }],
      };

      const res = await API.post(`http://localhost:8000/api/v1/add-to-cart`, payload);

      toast.success("Product added to cart!");
      console.log("Add to cart response:", res.data);
    } catch (error) {
      console.error("Error adding to cart:", error);

      const errorMsg =
        error.response?.data?.message ||
        "Something went wrong while adding to cart.";
      toast.error(errorMsg);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12 max-w-7xl mx-auto">

      {/* Back to Shop Button */}
      <button
        onClick={() => navigate("/shop")}
        className="mb-6 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold"
      >
        ← Back to Shop
      </button>

      <div className="bg-white rounded-2xl shadow-lg p-6 mb-12 flex flex-col md:flex-row gap-8 items-center">
        {singleProduct ? (
          <>
            <img
              src={`http://localhost:8000/gallery/${singleProduct.productImage}`}
              alt={singleProduct.productName}
              className="w-full max-w-sm h-90 object-cover rounded-xl flex-shrink-0"
            />

            <div className="flex-1 flex flex-col justify-center items-center space-y-4 text-center">
              <h2 className="text-3xl font-semibold">
                {singleProduct.productName}
              </h2>
              <p className="text-sm text-gray-500 italic">
                {singleProduct.brandName}
              </p>
              <p className="text-gray-700 text-lg">
                Rs.{singleProduct.productPrice}
              </p>
              <p className="text-sm text-gray-500">
                In Stock: {singleProduct.stock}
              </p>

              <div className="flex items-center space-x-4">
                <span className="font-semibold">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
                  <button
                    onClick={decrementQty}
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
                    aria-label="Decrease quantity"
                  >
                    –
                  </button>
                  <input
                    type="number"
                    className="w-16 text-center outline-none"
                    value={quantity}
                    min="1"
                    max={singleProduct.stock}
                    onChange={(e) => {
                      const val = Math.max(
                        1,
                        Math.min(singleProduct.stock, Number(e.target.value))
                      );
                      setQuantity(val);
                    }}
                  />
                  <button
                    onClick={incrementQty}
                    className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                className="w-full max-w-xs py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition font-semibold"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </>
        ) : (
          <p>Loading product...</p>
        )}
      </div>
    </div>
  );
};

export default PurchasePage;
