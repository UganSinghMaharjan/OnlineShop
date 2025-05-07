import React from 'react';
import Header from '../../components/Header/Header';
import Carousel from '../Carousel/Carousel';
import ItemCard from '../ItemCard/ItemCard';
import { NavLink } from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Carousel />

      <div className="flex flex-col justify-center items-center text-center min-h-screen bg-gradient-to-b from-[#816F68] to-[#BAABBD] px-3 text-white">
        <h1 className="text-5xl font-bold mb-6 animate-glow text-white">
          Welcome to PandaWagon s!
        </h1>

        <h2 className="text-2xl max-w-2xl mb-4">
          Your personal shopping website where you can buy and get anything that you want!
        </h2>

        <p className="text-lg max-w-xl italic text-white/90">
          From gadgets to garments, gifts to groceries—we bring it all to your doorstep with a touch of care.
        </p>

        <div className="font-bold border rounded-2xl px-4 py-2 mt-6 bg-[#697565] text-black hover:bg-[#ECDFCC] transition duration-300">
          <NavLink to="/shop">Shop Now!!</NavLink>
        </div>
      </div>

      <div className="bg-[#9F838C]  ">
        <h2 className="text-5xl font-bold text-center text-[#003249]">Featured Collections</h2>
        <ItemCard />
        <AboutUs/>
      </div>

    <Footer/>

    </>
  );
};

export default Home;
