import React from "react";
import AfterEffect from "../assets/AfterEffect.png";
import Illustrator from "../assets/illustrator.png";
import InDesign from "../assets/InDesign.png";
import Lightroom from "../assets/Lightroom.png";
import Photoshop from "../assets/photoshop.png";
import PremierePro from "../assets/PremierePro.png";

function ProductsPage() {
  const products = [
    {
      name: "Adobe Photoshop",
      description: "Software terbaik untuk pengeditan foto dan desain grafis.",
      image: Photoshop,
    },
    {
      name: "Adobe Illustrator",
      description: "Alat desain vektor untuk membuat logo, ikon, dan ilustrasi.",
      image: Illustrator,
    },
    {
      name: "Adobe InDesign",
      description: "Aplikasi untuk tata letak dan desain publikasi cetak atau digital.",
      image: InDesign,
    },
    {
      name: "Adobe Lightroom",
      description: "Alat pengeditan foto untuk fotografer profesional.",
      image: Lightroom,
    },
    {
      name: "Adobe Premiere Pro",
      description: "Software pengeditan video profesional untuk film dan konten video.",
      image: PremierePro,
    },
    {
      name: "Adobe After Effects",
      description: "Alat untuk efek visual dan animasi grafis.",
      image: AfterEffect,
    },
  ];

  return (
    <div className="w-screen min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">Produk Kami</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
          >
            <img src={product.image} alt={product.name} className="h-24 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;