import { useEffect, useState } from 'react';

const EditProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('Fetching products...');
        const response = await fetch('http://localhost:8000/api/v1/all/products');

        // Log the status to check if the request is successful
        console.log('Response Status:', response.status);
        
        // Check if the response is OK (status 200)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Fetched data:', data);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error.message); // Set error message to state
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="p-8 bg-gray-50 rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Edit Product List</h1>
      
      {error && (
        <div className="text-red-500 text-center mb-4">
          <strong>Error: </strong>{error}
        </div>
      )}

      <table className="min-w-full bg-white border-collapse">
        <thead>
          <tr>
            <th className="py-3 px-4 text-left text-white bg-green-600">Product Name</th>
            <th className="py-3 px-4 text-left text-white bg-green-600">Price</th>
            <th className="py-3 px-4 text-left text-white bg-green-600">Category</th>
            <th className="py-3 px-4 text-left text-white bg-green-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan="4" className="py-3 px-4 text-center text-gray-500 italic">
                No products available
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <td className="py-3 px-4">{product.name}</td>
                <td className="py-3 px-4">${product.price}</td>
                <td className="py-3 px-4">{product.category}</td>
                <td className="py-3 px-4">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mr-2">
                    Edit
                  </button>
                  <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EditProductList;
