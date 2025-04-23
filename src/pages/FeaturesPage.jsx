import React from "react";

function FeaturesPage() {
  const features = [
    {
      title: "Desain Grafis Profesional",
      description: "Adobe menyediakan alat terbaik seperti Photoshop dan Illustrator untuk menciptakan desain grafis berkualitas tinggi.",
      icon: "🎨", // Ikon representasi
    },
    {
      title: "Pengeditan Video",
      description: "Premiere Pro dan After Effects memungkinkan Anda membuat video profesional dengan efek visual yang memukau.",
      icon: "🎥",
    },
    {
      title: "Fotografi",
      description: "Lightroom membantu fotografer mengedit dan mengatur foto dengan mudah dan efisien.",
      icon: "📸",
    },
    {
      title: "Tata Letak dan Publikasi",
      description: "InDesign adalah alat terbaik untuk membuat tata letak majalah, buku, dan publikasi digital.",
      icon: "📖",
    },
    {
      title: "Efek Visual dan Animasi",
      description: "After Effects memungkinkan Anda membuat animasi dan efek visual yang luar biasa untuk video dan film.",
      icon: "✨",
    },
  ];

  return (
    <div className="w-screen min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">Fitur Unggulan Adobe</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
          >
            <div className="text-5xl mb-4">{feature.icon}</div> {/* Ikon */}
            <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesPage;