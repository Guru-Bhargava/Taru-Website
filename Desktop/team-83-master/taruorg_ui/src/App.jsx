import "./App.css";
import 'bootstrap/dist/css/bootstrap.css'
import Home from "./pages/Home";
import Login from "./components/login"
import Navbar from "./components/Navbar"
import Signup from "./components/signup"
import Slider from "./components/Slider"
import Catogeries from "./components/Categories"
import {Route,Routes} from 'react-router-dom'
import React from 'react'
import AdminDashboard from "./components/AdminDashboard";
import AdminDash1 from "./components/AdminDash1";
import DetailedProduct from "./components/DetailedProduct";

const App = () => {
  return (
    <div>
      <Home/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/navbar" element={<Navbar/>}/>
    <Route path="/slider" element={<Slider/>}/>
    <Route path="/catogeries" element={<Catogeries/>}/>
    <Route path="/admin" element={<AdminDash1 />}>
          {" "}
        </Route>
        <Route path="/PendingApprovals" element={<AdminDashboard />}>
          {" "}
        </Route>
        <Route path="/approveOrder" element={<DetailedProduct />}> {" "}</Route>
    </Routes>
    </div>
  )
}

export default App