'use client'
import { useState, useRef, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { excursions } from '../data/excursions';

const Excursions = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedExcursion, setSelectedExcursion] = useState(null);
  const [showAllExcursions, setShowAllExcursions] = useState(false);
  const sliderRef = useRef(null);

  const slidesToShow = 3;
  const maxSlides = Math.max(0, excursions.length - slidesToShow);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev >= maxSlides ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev <= 0 ? maxSlides : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(Math.min(index, maxSlides));
  };

  useEffect(() => {
    if (!showAllExcursions) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [currentSlide, showAllExcursions]);

  const openModal = (excursion) => {
    setSelectedExcursion(excursion);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedExcursion(null);
    document.body.style.overflow = 'unset';
  };

  const toggleView = () => {
    setShowAllExcursions(!showAllExcursions);
    
    // Scroll to the top of the excursions section
    setTimeout(() => {
      const excursionsSection = document.getElementById('excursions');
      if (excursionsSection) {
        excursionsSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100);
  };

  return (
    <section id="excursions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">{showAllExcursions ? 'All Excursions' : 'Featured Excursions'}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover Tunisia's rich culture, history, and natural beauty with our curated tours
          </p>
        </div>

        {/* Excursions Display */}
        {showAllExcursions ? (
          // Grid View - All Excursions
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {excursions.map((excursion) => (
              <div
                key={excursion.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover cursor-pointer group"
                onClick={() => openModal(excursion)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={excursion.imgurl}
                    alt={excursion.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {excursion.duration}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600">
                    {excursion.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {excursion.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {excursion.places}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Slider View - Featured Excursions
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                ref={sliderRef}
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
              >
                {excursions.map((excursion) => (
                  <div
                    key={excursion.id}
                    className="w-1/3 flex-shrink-0 px-3"
                  >
                    <div 
                      className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover cursor-pointer group"
                      onClick={() => openModal(excursion)}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={excursion.imgurl}
                          alt={excursion.name}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 right-4">
                          <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {excursion.duration}
                          </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600">
                          {excursion.name}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {excursion.description}
                        </p>
                        <div className="flex items-center text-sm text-gray-500">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {excursion.places}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: maxSlides + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index ? 'bg-primary-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <button 
            onClick={toggleView}
            className="btn-primary"
          >
            {showAllExcursions ? 'Show Featured Slider' : 'View All Excursions'}
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedExcursion && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedExcursion.imgurl}
                alt={selectedExcursion.name}
                className="w-full h-80 object-cover rounded-t-2xl"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="bg-primary-600 text-white px-4 py-2 rounded-full font-semibold">
                  {selectedExcursion.duration}
                </span>
              </div>
            </div>

            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {selectedExcursion.name}
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {selectedExcursion.description}
              </p>

              <div className="mb-6">
                <div className="flex items-center text-gray-600 mb-2">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium">Places: </span>
                  <span className="ml-1">{selectedExcursion.places}</span>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Highlights</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedExcursion.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      <span className="text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Itinerary</h3>
                <p className="text-gray-700 leading-relaxed">
                  {selectedExcursion.itinerary}
                </p>
              </div>

              <div className="bg-whatsapp-50 rounded-xl p-6 border border-whatsapp-200">
                <h4 className="font-bold text-whatsapp-800 mb-2">Book This Excursion</h4>
                <p className="text-whatsapp-700 mb-4">
                  Contact us on WhatsApp to book this amazing excursion or get more information.
                </p>
                <a
                  href="https://wa.me/21622669510"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
                  </svg>
                  Contact Us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Excursions; 