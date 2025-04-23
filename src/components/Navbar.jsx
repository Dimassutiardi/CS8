import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png"; // Impor logo

function Navbar() {
  return (
    <nav className="bg-white text-black py-4 w-full shadow-md">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-14" /> {/* Tinggi logo */}
        </Link>
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:underline">Beranda</Link></li>
          <li><Link to="/products" className="hover:underline">Produk</Link></li>
          <li><Link to="/features" className="hover:underline">Fitur</Link></li>
          <li><Link to="/testimonials" className="hover:underline">Testimoni</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;