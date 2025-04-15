import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from './components/Login/Login';
import Home from './pages/Home/home';
import Header from './components/Header/Header';
import Carousel from './pages/Carousel/Carousel';
import ItemCard from './pages/ItemCard/ItemCard';
import SignIn from './components/SignIn/SignIn';
import PageNotFound from './pages/PageNotFound/PageNotFound';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/header' element={<Header/>}/>
        <Route path='/carousel' element={<Carousel/>}/>
        <Route path='/item' element={<ItemCard/>}/>
      
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
