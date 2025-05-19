import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const EditProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const imageURL = "http://localhost:8000/gallery";
  const navigate = useNavigate();

  const productFields = [
    { label: "S.N", key: "index" },
    { label: "Name", key: "productName" },
    { label: "Brand", key: "brand" },
    { label: "Category", key: "category" },
    { label: "Price", key: "productPrice" },
    { label: "Stock", key: "stock" },
    { label: "Image", key: "productImage" },
    { label: "Action", key: "actions" }
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/v1/all/products');
        setProducts(res.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(`http://localhost:8000/api/v1/delete/${id}`);
      const updatedProducts = products.filter(p => p._id !== id);
      setProducts(updatedProducts);
      // Adjust page if current page exceeds new total pages
      const totalPages = Math.ceil(updatedProducts.length / productsPerPage);
      if (currentPage > totalPages) {
        setCurrentPage(totalPages);
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);
  

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6">
      {loading ? (
        <p className="text-center text-lg">Loading...</p>
      ) : (
        <>
          <div className="overflow-x-auto shadow rounded-lg">
            <table className="w-full text-sm text-left border border-gray-200">
              <thead className="bg-gray-100 text-xs uppercase">
                <tr>
                  {productFields.map((field, index) => (
                    <th key={index} className="px-6 py-4">{field.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentProducts.map((product, index) => (
                  <tr key={product._id} className="border-t">
                    {productFields.map((field, idx) => (
                      <td key={idx} className="px-6 py-4">
                        {field.key === "index" ? (
                          indexOfFirstProduct + index + 1
                        ) : field.key === "productImage" ? (
                          <img
                            src={`${imageURL}/${product.productImage}`}
                            alt={product.productName}
                            className="w-10 h-10 object-contain"
                          />
                        ) : field.key === "productPrice" ? (
                          `Rs. ${product[field.key]}`
                        ) : field.key === "actions" ? (
                          <div className="flex gap-3 text-lg">
                            <button
                              onClick={() => navigate(`/editProduct/${product._id}`)}
                              className="text-blue-500 hover:text-blue-700"
                            >
                              <FaEdit />
                            </button>
                            <button
                              onClick={() => handleDelete(product._id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        ) : (
                          product[field.key]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
         <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex space-x-2">
  {Array.from({ length: totalPages }, (_, i) => (
    <button
      key={i + 1}
      onClick={() => paginate(i + 1)}
      className={`px-3 py-1 border rounded ${
        currentPage === i + 1
          ? "bg-blue-500 text-white"
          : "bg-white text-gray-700 hover:bg-blue-100"
      }`}
    >
      {i + 1}
    </button>
  ))}
</div>

        </>
      )}
    </div>
  );
};

export default EditProductList;
