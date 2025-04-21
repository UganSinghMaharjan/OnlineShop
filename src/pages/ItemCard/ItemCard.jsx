import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom"; // ✅ Added this line
import bc from "../../assets/images/bc.jpg";
import bc2 from "../../assets/images/bc2.jpg";

const images = [bc, bc2, bc, bc2, bc];

const ItemCard = () => {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: 1000 * index,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <div className="bg-[#9F838C] text-white flex flex-col items-center justify-center min-h-screen">

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="w-[1000px] h-[500px] overflow-hidden relative whitespace-nowrap rounded-lg shadow-2xl border border-gray-700"
      >
        <div className="flex w-max h-full">
          {images.map((img, i) => (
            <div
              key={i}
              className="w-[1000px] h-[500px] flex-shrink-0 relative group"
            >
              <img
                src={img}
                alt={`Frame ${i}`}
                className="w-full h-full object-cover"
              />

              {/* Full Blur Overlay */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <NavLink
                  to="/shop"
                  className="px-6 py-2 bg-white bg-opacity-90 text-black rounded-full font-semibold shadow-md hover:bg-opacity-100 transition"
                >
                  Shop Now
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Film Strip Dots */}
      <div className="flex space-x-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ItemCard;
