import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Login from './components/Login/Login';
import Home from './pages/Home/home';
import Shop from './pages/Shop/shop';
import Header from './components/Header/Header';
import Carousel from './pages/Carousel/Carousel';
import ItemCard from './pages/ItemCard/ItemCard';
import SignIn from './components/SignIn/SignIn';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import AboutUs from './pages/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import MaboutUs from './components/MaboutUs/MaboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import Profile from './pages/Profile/Profile';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <ToastContainer />
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/Mabout' element={<MaboutUs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        

        <Route path='/profile'element={<Profile/>}/>
        <Route path='/header' element={<Header/>}/>
        <Route path='/carousel' element={<Carousel/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/item' element={<ItemCard/>}/>
        <Route path='/footer' element={<Footer/>}/>
      
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
