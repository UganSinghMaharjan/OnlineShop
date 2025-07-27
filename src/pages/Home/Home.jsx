import React from "react";
import Header from "../../components/Header/Header";
import Carousel from "../Carousel/Carousel";
import ItemCard from "../ItemCard/ItemCard";
import { NavLink } from "react-router-dom";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import HomeAni from "../HomeAni/HomeAni";

const Home = () => {
  return (
    <>
      <Header />
      <Carousel />

      <div className="flex flex-col justify-center items-center text-center min-h-screen bg-gradient-to-b from-[#816F68] to-[#BAABBD] px-3 text-white">
        <h1 className="text-5xl font-bold mb-8 animate-glow text-white">
          Welcome to PandaWagon s!
        </h1>

        <h2 className="text-2xl max-w-2xl mb-4">
          Your personal shopping website where you can buy and get anything that
          you want!
        </h2>

        <p className="text-lg max-w-xl italic text-white/90">
          From gadgets to garments, gifts to groceries—we bring it all to your
          doorstep with a touch of care.
        </p>

        <HomeAni />

        <div className="font-bold border rounded-2xl px-4 py-2 mt-6 bg-[#a8a8a8] text-black hover:bg-[#ECDFCC] transition duration-300">
          <NavLink to="/shop">Shop Now!!</NavLink>
        </div>
      </div>

      <ItemCard />
      <AboutUs />

      <Footer />
    </>
  );
};

export default Home;
