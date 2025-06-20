import { useRef, useEffect } from 'react';
import {
  Microscope,
  Heart,
  BookOpen,
  Laptop,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Facilities = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const itemWidth = 320; // Approximate width + margin

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -itemWidth : itemWidth,
        behavior: 'smooth',
      });
    }
  };

  // Auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      scroll('right');
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const facilities = [
    {
      icon: Microscope,
      title: "Nursing Foundation Lab",
      description: "High-fidelity simulation lab with modern equipment.",
      image: "/NFL.png"
    },
    {
      icon: Heart,
      title: "Anatomy Lab",
      description: "Clinical training with hospital-grade supplies.",
      image: "/AL.png"
    },
    {
      icon: BookOpen,
      title: "Library",
      description: "50,000+ medical texts and digital resources.",
      image: "/Ly.png"
    },
    {
      icon: Laptop,
      title: "Community Lab",
      description: "Labs with nursing software and learning tools.",
      image: "/CoL.png"
    },
    {
      icon: Laptop,
      title: "Computer Labs",
      description: "Modern labs with software and internet access.",
      image: "/CL.png"
    },
    {
      icon: Laptop,
      title: "Maternal & Child Health Lab",
      description: "Focused on women's and child healthcare training.",
      image: "/MACHL.png"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Academic Facilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our labs and learning environments designed to elevate nursing education.
          </p>
        </div>

        {/* Scroll Arrows */}
        <button
          onClick={() => scroll('left')}
          className="hidden sm:flex absolute left-4 top-[35%] z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="hidden sm:flex absolute right-4 top-[35%] z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>

        {/* Scrollable Facilities */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4 scroll-smooth pl-4 pr-4 -ml-4 -mr-4 sm:mx-0"
        >
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="min-w-[280px] sm:min-w-[320px] max-w-xs bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 flex-shrink-0"
            >
              <div className="h-48 overflow-hidden rounded-t-2xl">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <facility.icon className="w-5 h-5 text-blue-600" />
                  <h4 className="text-lg font-semibold text-gray-800">
                    {facility.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Experience Our Facilities</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a campus tour to see our world-class facilities firsthand.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
            Schedule Campus Tour
          </button>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
