import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProductsPage from "./pages/ProductsPage";
import FeaturesPage from "./pages/FeaturesPage";
import TestimonialsPage from "./pages/TestimonialsPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;