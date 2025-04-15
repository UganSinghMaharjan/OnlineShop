import React, { useState, useEffect } from 'react';
import bc from "../../assets/images/bc.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // For the arrows

const ItemCard = () => {
  const images = [bc, bc, bc, bc]; // Array of images for the carousel
  const titles = ["Smoking Nun", "Smoking Sun", "Smoking Gun", "Smoking Run"]; 
  const description=["A spiritual journey captured in the perfect blend of smoke and serenity. The Smoking Nun is a tribute to divine mysteries wrapped in a veil of elegance.","The ethereal glow of the Smoking Sun evokes a sense of warmth and mystique. Experience the fusion of nature's beauty and celestial smoke.","A powerful symbol of action and intensity. The Smoking Gun brings a sense of urgency and drama, leaving a trail of intrigue and suspense.","A thrilling chase where smoke and speed collide. The Smoking Run captures the essence of movement, energy, and the rush of adrenaline."]// Titles for the cards
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic using useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer); // Clean up the timer when the component is unmounted
  }, [images.length]); // Dependency on images.length

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <h1 className="text-4xl bg-[#3C3D37] text-white font-bold text-center ">LETS SHOP AWAY!</h1> 

      <div className="relative flex justify-center items-center bg-[#3C3D37] py-20">
        {/* Carousel Container */}
        <div className="flex overflow-hidden max-w-full">
          {/* Cards */}
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-full px-4">
                {/* Item Card */}
                <div className="bg-[#545851] p-4 rounded-lg shadow-lg max-w-xs mx-auto">
                  <div className="flex flex-col items-center justify-center">
                    {/* Product Image */}
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="h-60 w-full object-cover rounded-lg mb-4"
                    />

                    {/* Product Name */}
                    <h1 className="text-gray-300 text-xl font-semibold text-center">
                      {titles[index]}
                    </h1>
                    <p className="text-gray-300 text-sm font- text-center">
                        {description[index]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md"
          aria-label="Previous slide"
        >
          <FaArrowLeft />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md"
          aria-label="Next slide"
        >
          <FaArrowRight />
        </button>
      </div>
    </>
  );
};

export default ItemCard;
