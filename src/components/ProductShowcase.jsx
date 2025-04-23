import React from "react";

function ProductShowcase() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Produk Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Produk 1</h3>
            <p className="text-gray-700">Deskripsi produk pertama.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Produk 2</h3>
            <p className="text-gray-700">Deskripsi produk kedua.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Produk 3</h3>
            <p className="text-gray-700">Deskripsi produk ketiga.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductShowcase;