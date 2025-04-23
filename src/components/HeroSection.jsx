import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function HeroSection() {
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const handleNavigate = () => {
    navigate("/products"); // Navigasi ke halaman produk
  };

  return (
    <section className="w-screen min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex flex-col justify-center items-center text-white">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Kreativitas Dimulai di Sini
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Adobe menghadirkan tools terbaik untuk desain, video, fotografi, dan web —
          semua dalam satu platform kreatif.
        </p>
        <button
          onClick={handleNavigate} // Tambahkan event handler
          className="inline-block bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition"
        >
          Jelajahi Produk
        </button>
      </div>
    </section>
  );
}

export default HeroSection;