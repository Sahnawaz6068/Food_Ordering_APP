import React from "react";
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import Home from "./Home";
import About from "./NavBar/About";
import Cart from "./NavBar/Cart";
import Error from "./Error";
import Footer from "./Footer";
import Profile from "./Profile";
import Menu from "./Menu";
function Headers() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

function Layout() {
  return (
    <>
      <Nav />
      <main className="h-[550px] w-full flex items-center justify-center bg-gray-100 shadow-md ">
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}

function Nav() {
  return (
    <>
      <div className="bg-white  p-2 flex items-center justify-between mx-4 md:mx-8 shadow-amber-50">
        {/* Logo */}
        <img
          className="w-16 h-16 md:w-24 md:h-24 rounded-full transition-transform hover:scale-110"
          src="logo.webp"
          alt="Logo"
        />

        {/* Search Bar (Full width on mobile) */}
        <input
          type="text"
          placeholder="Search for food..."
          className="w-full max-w-xs sm:max-w-sm md:max-w-md px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-red-500 transition-transform transform hover:scale-105 focus:scale-105"
        />

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-lg font-semibold text-gray-700">
          <Link to="/" className="hover:text-red-500 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-red-500 transition">
            About
          </Link>
          <Link to="/cart" className="relative">
            <img src="cart.png" className="w-6 h-6 md:w-8 md:h-8" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              3
            </span>
          </Link>
          <Link to="/profile">
            <img
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-red-500 shadow-md hover:shadow-lg transition"
              src="burgers.png"
            />
          </Link>
          <Link
            to="/menu"
            className="bg-red-500 text-white px-4 py-2 md:px-6 md:py-2 rounded-full hover:bg-red-600 transition"
          >
            Order Now
          </Link>
        </div>
      </div>
    </>
  );
}

export default Headers;
