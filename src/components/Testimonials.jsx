import React from "react";

function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Testimoni Pelanggan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              "Produk ini sangat membantu pekerjaan saya!"
            </p>
            <h3 className="text-lg font-semibold">- Pelanggan 1</h3>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow-md">
            <p className="text-gray-700 mb-4">
              "Layanan yang luar biasa dan berkualitas tinggi."
            </p>
            <h3 className="text-lg font-semibold">- Pelanggan 2</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;