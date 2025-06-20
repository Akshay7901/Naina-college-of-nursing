import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Camera } from 'lucide-react';

const CampusGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const campusImages = [
    {
      url: "/src/Assets/pic1.jpg",
      title: "Main Campus Building",
      description: "Our state-of-the-art main building houses modern classrooms and administrative offices"
    },
    
    {
      url: "/src/Assets/pic4.jpg",
      title: "Medical Library",
      description: "Extensive collection of medical and nursing resources for research and study"
    },
    {
      url: "/src/Assets/pic5.jpg",
      title: "Student Study Areas",
      description: "Comfortable collaborative spaces designed for group study and discussion"
    },
    
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % campusImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, campusImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % campusImages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + campusImages.length) % campusImages.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Camera className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-bold text-white">
              Explore Our Campus
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Take a virtual tour of our modern facilities designed to provide the best 
            learning environment for future healthcare professionals.
          </p>
        </div>

        {/* Main Gallery */}
        <div className="relative">
          {/* Image Container */}
          <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {campusImages.map((image, index) => (
                <div key={index} className="w-full h-full flex-shrink-0 relative">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center space-x-2 mb-2">
                      <MapPin className="w-5 h-5 text-blue-400" />
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        {image.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-200 max-w-2xl">
                      {image.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-8 space-x-4 overflow-x-auto pb-4">
            {campusImages.map((image, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                  currentSlide === index 
                    ? 'ring-4 ring-blue-400 scale-110' 
                    : 'hover:scale-105 opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                {currentSlide === index && (
                  <div className="absolute inset-0 bg-blue-400/20" />
                )}
              </button>
            ))}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {campusImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-blue-400 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Control */}
          <div className="text-center mt-6">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isAutoPlaying 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {isAutoPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
            </button>
          </div>
        </div>

        {/* Campus Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-6 bg-gray-800 rounded-xl">
            <div className="text-3xl font-bold text-blue-400 mb-2">50,000</div>
            <div className="text-gray-300">Square Feet</div>
            <div className="text-sm text-gray-400 mt-1">Modern Facilities</div>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-xl">
            <div className="text-3xl font-bold text-blue-400 mb-2">12</div>
            <div className="text-gray-300">Simulation Labs</div>
            <div className="text-sm text-gray-400 mt-1">High-Tech Equipment</div>
          </div>
          <div className="text-center p-6 bg-gray-800 rounded-xl">
            <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-gray-300">Library Access</div>
            <div className="text-sm text-gray-400 mt-1">Study Resources</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusGallery;