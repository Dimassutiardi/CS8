import React from "react";
import UserProfile from "../assets/user.png"; // Impor gambar profil

function TestimonialsPage() {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "Adobe Photoshop sangat membantu saya dalam mengedit foto dengan hasil yang luar biasa!",
      image: UserProfile,
    },
    {
      name: "Jane Smith",
      feedback: "Adobe Illustrator adalah alat terbaik untuk membuat desain vektor dan logo profesional.",
      image: UserProfile,
    },
    {
      name: "Michael Johnson",
      feedback: "Premiere Pro mempermudah saya dalam mengedit video untuk proyek besar.",
      image: UserProfile,
    },
    {
      name: "Emily Davis",
      feedback: "Lightroom membuat pengeditan foto menjadi cepat dan mudah, sangat cocok untuk fotografer.",
      image: UserProfile,
    },
    {
      name: "Sarah Wilson",
      feedback: "After Effects adalah alat yang luar biasa untuk membuat animasi dan efek visual.",
      image: UserProfile,
    },
    {
      name: "David Brown",
      feedback: "InDesign sangat membantu saya dalam membuat tata letak untuk publikasi digital dan cetak.",
      image: UserProfile,
    },
  ];

  return (
    <div className="w-screen min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">Testimoni Pelanggan</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-20 w-20 rounded-full mb-4 object-cover"
            />
            <h2 className="text-xl font-semibold mb-2">{testimonial.name}</h2>
            <p className="text-gray-700">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsPage;