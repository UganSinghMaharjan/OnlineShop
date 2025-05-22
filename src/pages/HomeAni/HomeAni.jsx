import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { motion, useAnimation } from "framer-motion";

const HomeAni = () => {
  const [products, setProducts] = useState([]);
  const controls = useAnimation();
  const carouselRef = useRef(null);

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/all/products");
        setProducts(res.data.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
  if (products.length === 0) return;

  const carouselWidth = carouselRef.current.scrollWidth / 2; // because duplicated

  controls.start({
    x: [0, -carouselWidth],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 12,
        ease: "linear",
      },
    },
  });
}, [products, controls]);


  if (products.length === 0) {
    return (
      <div className="w-full py-20 flex justify-center text-white text-lg">
        Loading products...
      </div>
    );
  }

  // Duplicate products for seamless infinite scroll
  const duplicatedProducts = [...products, ...products];

  return (
    <>
    
      <h2 className="text-4xl mt-7 font-bold text-white mb-8 ">
        ✨ Shop Highlights
      </h2>

      <div
        className="relative w-full max-w-7xl overflow-hidden"
        
      >
        <motion.div
          ref={carouselRef}
          animate={controls}
          className="flex w-max"
        >
          {duplicatedProducts.map((product, i) => (
            <motion.div
              key={product._id + "-" + i}
              whileHover={{ scale: 1.1 }}
              className="flex-shrink-0 w-56 h-56 m-4 rounded-lg overflow-hidden shadow-lg"
              title={product.productName}
            >
              <img
                src={`http://localhost:8000/gallery/${product.productImage}`}
                alt={product.productName}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    
    </>
  );
};

export default HomeAni;
