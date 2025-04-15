import React from 'react';
import Header from '../../components/Header/Header';
import Carousel from '../Carousel/Carousel';
import ItemCard from '../ItemCard/ItemCard';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <Header/>
    <Carousel/>
    <div className="flex flex-col justify-center items-center text-center min-h-screen bg-center bg-[#3C3D37] px-3 text-white">
    <h1 className="text-5xl font-bold mb-6 animate-glow text-white">
  Welcome to Panda Shops!
</h1>

      <h2 className="text-2xl max-w-2xl">
        Your personal shopping website where you can buy and get anything that you want!
      </h2>
      <div className='font-bold border rounded-2xl px-4 py-2 mt-5 bg-[#697565] text-black hover:bg-[#ECDFCC]'>
        <NavLink to="/home">Shop Now!!</NavLink>
      </div>
    </div>
    <ItemCard/>
    </>
  );
};

export default Home;
