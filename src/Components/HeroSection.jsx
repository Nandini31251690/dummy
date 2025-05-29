import { TypeAnimation } from 'react-type-animation';
import InfiniteScrollLogos from '../Utilis/InfiniteScrollLogos';
import img1 from '../assets/dell.png';
import img2 from '../assets/lg.png';
import img3 from '../assets/msi.png';
import { useState, useEffect, useRef } from 'react';
import Products from './Products';
import Advisorform from './Advisorform';

const carouselImages = [img1, img2, img3];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // Auto-slide logic
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
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

  return (
    <div className="w-screen min-h-screen bg-[#9a99f2]">
      <Products />

      <div className="mt-8 px-2 sm:px-6 md:px-16 lg:px-28 pb-24 min-h-screen">
        {/* Hero Section */}
        {/*ADVISOR FORM*/}
          <div className="mt-12">
          <Advisorform />
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8">
          {/* Left: Kritika-Enterprises */}
          <div className="w-full lg:w-1/2">
            <div className="font-bold text-3xl sm:text-4xl md:text-5xl">Kritika-Enterprises</div>
            <div className="mt-6 sm:mt-9 text">
              <h2 className="text-xl sm:text-2xl font-semibold">
                <span className="inline-flex items-baseline">
                  We sell&nbsp;
                  <span className="text-[#d6d4f0] text-2xl sm:text-3xl">
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
              <p className="text-base sm:text-xl w-full sm:w-4/5 mt-4">
                At Kritika Enterprises, we specialize in providing high-performance hardware solutions for both businesses and individual consumers.
                We deliver only the best from leading global brands like HP, Dell, and ASUS. Whether you're a hospital, a startup, or a home user,
                we ensure fast, reliable tech solutions with unmatched support.
              </p>
            </div>
          </div>

          {/* Right: Carousel */}
          <div
            className="relative w-full lg:w-1/2 h-48 sm:h-64 md:h-80 lg:h-64 rounded-lg overflow-hidden shadow-lg bg-white"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={carouselImages[current]}
              alt={`carousel-${current}`}
              className="w-full h-full object-cover transition-all duration-500"
            />
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full p-2 hover:bg-opacity-60"
              aria-label="Previous"
            >
              &#8592;
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full p-2 hover:bg-opacity-60"
              aria-label="Next"
            >
              &#8594;
            </button>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-2 h-2 rounded-full ${idx === current ? 'bg-[#6f46a6]' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>

        
      

        {/* Brands section */}
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl text-center font-bold pt-10 mb-8">
            Our Associated Brands
          </h2>
          <InfiniteScrollLogos />
        </div>

        {/* Contact info */}
        <div className="mt-16 pb-20">
          <div className="max-w-md mx-auto p-8">
            <h2 className="text-2xl font-bold mb-4 text-left">Contact Us</h2>
          </div>
          <div className="ml-0 sm:ml-16 space-y-2">
            <div><span className="font-semibold">Email:</span> kritikaenterprises@email.com</div>
            <div><span className="font-semibold">Phone:</span> +91 98765 43210</div>
            <div><span className="font-semibold">Address:</span> 123, Main Street, New Delhi, India</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
