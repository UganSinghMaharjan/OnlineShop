import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./components/Login/Login";

import Header from "./components/Header/Header";
import Carousel from "./pages/Carousel/Carousel";
import ItemCard from "./pages/ItemCard/ItemCard";

import PageNotFound from "./pages/PageNotFound/PageNotFound";
import AboutUs from "./pages/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import MaboutUs from "./components/MaboutUs/MaboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Profile from "./pages/Profile/Profile";
import Cart from "./pages/Cart/Cart";
import Admin from "./components/Admin/Admin";
import Dashboard from "./pages/Dashboard/Dashboard";
import CustomHeader from "./components/CustomHeader/CustomHeader";
import AddProducts from "./pages/AddProducts/AddProducts";
import User from "./pages/User/User";
import Settings from "./pages/Settings/Settings";
import EditProductList from "./pages/EditProductList/EditProductList";
import EditProduct from "./pages/EditProduct/EditProduct";
import SignIn from "./components/SignIn/SignIn";
import PurchasePage from "./pages/PurchasePage/PurchasePage";
import Shop from "./pages/Shop/Shop";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/features/authSlice/authSlice";
import HomeAni from "./pages/HomeAni/HomeAni";
import Home from "./pages/Home/Home";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(setUser(JSON.parse(user)));
    }
  }, [dispatch]);

  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignIn />} />
          <Route path="/shop" element={<Shop />} />
          {/* privateRoute */}

          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />

          <Route path="/Mabout" element={<MaboutUs />} />
          <Route path="/contact" element={<ContactUs />} />

          <Route
            path="/admin-layout"
            element={
              <PrivateRoute userRole={user?.role}>
                <Admin />
              </PrivateRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute userRole={user?.role}>
                <Dashboard />
              </PrivateRoute>
            }
          />

          <Route path="/custom" element={<CustomHeader />} />
          <Route path="/addproducts" element={<PrivateRoute userRole={user?.role}>
                <AddProducts />
              </PrivateRoute>} />
          <Route path="/user" element={ <PrivateRoute userRole={user?.role}>
                <User />
              </PrivateRoute>} />
          <Route path="/settings" element={<PrivateRoute userRole={user?.role}>
                <Settings />
              </PrivateRoute>} />
          <Route path="/editProduct/:id" element={<PrivateRoute userRole={user?.role}>
                <EditProduct />
              </PrivateRoute>} />
          <Route path="/editProduct" element={<PrivateRoute userRole={user?.role}>
                <EditProduct />
              </PrivateRoute>} />
          <Route path="/EditProductlist" element={<PrivateRoute userRole={user?.role}>
                <EditProductList />
              </PrivateRoute>} />
          <Route path="/product/:id" element={<PurchasePage />} />

          <Route path="/purchseProducts" element={<PurchasePage />} />

          <Route path="/profile" element={<Profile />} />
          <Route path="/header" element={<Header />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/item" element={<ItemCard />} />
          <Route path="/homeani" element={<HomeAni/>}/>
          <Route path="/footer" element={<Footer />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
