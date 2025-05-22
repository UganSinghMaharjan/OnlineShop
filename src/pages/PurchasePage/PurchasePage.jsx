import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../redux/api/api";
import Header from "../../components/Header/Header";

const PurchasePage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?._id;

  const { id: paramId } = useParams();

  const [singleProduct, setSingleProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [currentId, setCurrentId] = useState(paramId); // track current product id

  // Fetch single product by currentId
  useEffect(() => {
    const getProductById = async () => {
      try {
        const res = await API.get(`http://localhost:8000/api/v1/get/${currentId}`);
        setSingleProduct(res.data.data);
        setQuantity(1); // reset quantity when product changes
      } catch (error) {
        console.error("Failed to fetch product:", error);
        toast.error("Error loading product. Please try again later.");
      }
    };

    if (currentId) getProductById();
  }, [currentId]);

  // Fetch all products once
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await API.get("http://localhost:8000/api/v1/all/products");
        setProducts(res.data.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        toast.error("Error loading other products.");
      }
    };

    fetchProducts();
  }, []);

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
    if (!currentId) return toast.error("Invalid product.");
    if (quantity < 1) return toast.error("Quantity must be at least 1.");

    try {
      const payload = {
        userId,
        items: [{ productId: currentId, quantity }],
      };

      const res = await API.post("http://localhost:8000/api/v1/add-to-cart", payload);

      toast.success("Product added to cart!");
      console.log("Add to cart response:", res.data);
    } catch (error) {
      console.error("Error adding to cart:", error);
      const errorMsg =
        error.response?.data?.message || "Something went wrong while adding to cart.";
      toast.error(errorMsg);
    }
  };

  // When clicking a product card, swap it with the main product
  const handleProductSwap = (clickedProduct) => {
    if (!singleProduct) return;

    // Swap logic:
    // Remove clickedProduct from products list, add singleProduct back
    const filteredProducts = products.filter((p) => p._id !== clickedProduct._id);
    const newProducts = [...filteredProducts, singleProduct];

    setProducts(newProducts);
    setSingleProduct(clickedProduct);
    setQuantity(1);
    setCurrentId(clickedProduct._id);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12 flex flex-col md:flex-row gap-8 items-center">
          {singleProduct ? (
            <>
              <img
                src={`http://localhost:8000/gallery/${singleProduct.productImage}`}
                alt={singleProduct.productName}
                className="w-full max-w-sm h-90 object-cover rounded-xl flex-shrink-0"
              />

              <div className="flex-1 flex flex-col justify-center items-center space-y-4 text-center">
                <h2 className="text-3xl font-semibold">{singleProduct.productName}</h2>
                <p className="text-sm text-gray-500 italic">{singleProduct.brandName}</p>
                <p className="text-gray-700 text-lg">Rs.{singleProduct.productPrice}</p>
                <p className="text-sm text-gray-500">In Stock: {singleProduct.stock}</p>

                <div className="flex items-center space-x-4">
                  <span className="font-semibold">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
                    <button
                      onClick={decrementQty}
                      className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition"
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

        {/* Other Products Section */}
        {products.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Other Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {products
                .filter((prod) => prod._id !== currentId)
                .map((product) => (
                  <div
                    key={product._id}
                    onClick={() => handleProductSwap(product)}
                    className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center text-center cursor-pointer hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-105"
                  >
                    <img
                      src={`http://localhost:8000/gallery/${product.productImage}`}
                      alt={product.productName}
                      className="w-full h-48 object-cover rounded-lg mb-2"
                    />
                    <h4 className="font-semibold text-lg">{product.productName}</h4>
                    <p className="text-gray-500 text-sm">{product.brandName}</p>
                    <p className="text-black font-bold mt-1">Rs.{product.productPrice}</p>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default PurchasePage;
