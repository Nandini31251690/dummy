import { TypeAnimation } from 'react-type-animation';
import InfiniteScrollLogos from '../Utilis/InfiniteScrollLogos';
import img1 from '../assets/store1.jpeg';
import img2 from '../assets/store2.jpeg';
import img3 from '../assets/store3.jpeg';
import img4 from '../assets/store4.jpeg';
import img5 from '../assets/store5.jpeg';
import img6 from '../assets/store6.jpeg';

import { useState, useEffect, useRef } from 'react';
import ProductsCarosel from './ProductsCarousel';
import Advisorform from './Advisorform';

const carouselImages = [img1, img2, img3, img4, img5, img6];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [showAdvisorForm, setShowAdvisorForm] = useState(false); // State to control visibility
  const timeoutRef = useRef(null);

  // Auto-slide logic
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 2000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  // Handlers for arrows
  const prevSlide = () => setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % carouselImages.length);

  // Touch/swipe logic
  const startX = useRef(null);
  const handleTouchStart = (e) => { startX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (startX.current === null) return;
    const diff = e.changedTouches[0].clientX - startX.current;
    if (diff > 50) prevSlide();
    else if (diff < -50) nextSlide();
    startX.current = null;
  };

  const handleAdvisorClick = () => {
    setShowAdvisorForm(true); // Show the advisor form modal
  };

  const closeModal = () => {
    setShowAdvisorForm(false); // Close the advisor form modal
  };

  const handleOverlayClick = (e) => {
    // Close the modal if the overlay is clicked
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="w-screen min-h-screen text-[#1F2937]">
      <ProductsCarosel />

      <div className="mt-8 min-h-screen">
        {/* Hero Section */}
        {/* Brands section */}
        <div className="mb-8 mt-8">
          <h2 className="text-2xl sm:text-3xl text-center font-bold">
            <span className="bg-[#040273] text-white rounded-full px-4 py-1 inline-block">
              Our Associated Brands
            </span>
          </h2>
          <div className="w-full mt-4 mb-4">
            <InfiniteScrollLogos />
          </div>
        </div>

        <div className="w-11/12 mx-auto bg-[#040273] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col-reverse lg:flex-row gap-8 items-center">
          {/* Left: Text */}
          <div className="w-full lg:w-1/2">
            <div className="font-bold text-[#F33539] text-3xl sm:text-4xl md:text-5xl mb-4">Kritika-Enterprises</div>
            <div className="mt-4 text">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2">
                <span className="inline-flex items-baseline">
                  We sell&nbsp;
                  <span className="text-[#6870D1] text-2xl sm:text-3xl font-semibold">
                    <TypeAnimation
                      sequence={[
                        'Laptops', 500,
                        'Medical Equipments', 500,
                        'Monitors', 500,
                        'Desktops', 500,
                        'Gaming Laptops', 500,
                        'Workstations', 500,
                        'IT Accessories', 500
                      ]}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                      style={{ display: 'inline-block' }}
                    />
                  </span>
                </span>
              </h2>
              <p className="text-md sm:text-lg mt-4 sm:w-4/5">
                At Kritika Enterprises, we specialize in providing high-performance hardware solutions for both businesses and individual consumers.
                We deliver only the best from leading global brands like HP, Dell, and ASUS. Whether you're a hospital, a startup, or a home user,
                we ensure fast, reliable tech solutions with unmatched support.
              </p>
            </div>
          </div>

          {/* Right: Carousel */}
          <div
            className="relative w-full lg:w-1/2 h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden bg-white shadow-md"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={carouselImages[current]}
              alt={`carousel-${current}`}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-2 h-2 rounded-full ${idx === current ? 'bg-[#7C3AED]' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Button */}
      <div className="fixed bottom-4 right-4 flex items-center justify-center">
        <button 
          onClick={handleAdvisorClick} 
          className="relative w-16 h-16 rounded-full overflow-hidden flex items-center justify-center transition duration-300 group"
        >
          <img 
            src="https://cdn2.vectorstock.com/i/1000x1000/95/96/academic-advisor-rgb-color-icon-vector-38659596.jpg" 
            alt="Advisor Icon" 
            className="w-full h-full object-cover" // Ensures the image covers the button completely
          />
          <span className="absolute inset-0 rounded-full border-4 border-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
        </button>
      </div>

      {/* Modal for Advisor Form */}
      {showAdvisorForm && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" 
          onClick={handleOverlayClick} // Handle clicks on the overlay
        >
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl h-auto flex flex-col md:flex-row">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
              &times; {/* Close button */}
            </button>
            <Advisorform />
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroSection;
