import React from "react";

function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Fitur Unggulan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Fitur 1</h3>
            <p className="text-gray-700">Deskripsi fitur pertama.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Fitur 2</h3>
            <p className="text-gray-700">Deskripsi fitur kedua.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Fitur 3</h3>
            <p className="text-gray-700">Deskripsi fitur ketiga.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;