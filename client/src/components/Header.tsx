import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#programs' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' }
  ];

  const courseDropdown = [
    { name: 'Bachelor of Science in Nursing (B.Sc. Nursing)', href: '#bsc' },
    { name: 'General Nursing and Midwifery (GNM)', href: '#gnm' },
    { name: 'Post Basic B.Sc. Nursing (PB B.Sc.)', href: '#pbbsc' },
    { name: 'Diploma in Veterinary Pharmacy (DVP)', href: '#dvp' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
    setIsCoursesOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* ✅ Logo + Title + Tagline */}
          <div className="flex items-start space-x-3">
            <img src="/src/Assets/logo.jpg" alt="Logo" className="h-20 w-auto" />
            <div className="flex flex-col justify-center mt-2">
              <h1 className="text-xl sm:text-2xl font-bold text-blue-900 leading-snug ">
                NAINA COLLEGE<br />OF NURSING
              </h1>
              
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) =>
              item.name === 'Courses' ? (
                <div key={item.name} className="relative group">
                  <button className="text-gray-700 hover:text-blue-600 font-medium transition relative group">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-200 z-20">
                    <ul className="py-2">
                      {courseDropdown.map((course) => (
                        <li key={course.name}>
                          <button
                            onClick={() => scrollToSection(course.href)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                          >
                            {course.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 hover:text-blue-600 font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              )
            )}
          </nav>

          {/* Helpline Button (Desktop) */}
          <a
            href="tel:+91 7018481747"
            className="hidden md:flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition"
          >
            <Phone className="w-5 h-5 text-white" />
            <div className="text-left text-sm leading-tight">
              <span className="block text-xs font-medium">Admissions Helpline</span>
              <span className="text-sm font-bold">+91 7018481747</span>
            </div>
          </a>

          {/* ✅ Mobile Icons (Phone, Menu, Search) */}
          <div className="md:hidden flex items-center space-x-4">
            <a href="tel:+91 7018481747" className="p-2 rounded-full border border-white">
              <Phone className="w-6 h-7 text-black" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full border border-white"
            >
              {isOpen ? <X className="w-5 h-5 text-black" /> : <Menu className="w-6 h-6 text-black" />}
            </button>
            
          </div>
        </div>

        {/* Mobile Nav + Helpline */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="space-y-0">
              {navItems.map((item) =>
                item.name === 'Courses' ? (
                  <div key={item.name} className="border-t border-gray-200 px-4 py-3">
                    <button
                      onClick={() => setIsCoursesOpen(!isCoursesOpen)}
                      className="w-full text-left text-gray-700 font-medium flex justify-between items-center"
                    >
                      {item.name}
                      <span>{isCoursesOpen ? '▲' : '▼'}</span>
                    </button>
                    {isCoursesOpen && (
                      <div className="mt-2 pl-4 space-y-2">
                        {courseDropdown.map((course) => (
                          <button
                            key={course.name}
                            onClick={() => scrollToSection(course.href)}
                            className="block w-full text-left text-gray-600 hover:text-blue-600 text-sm"
                          >
                            {course.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div key={item.name} className="border-t border-gray-200 px-4 py-3">
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="block w-full text-left text-gray-700 hover:text-blue-600 font-medium"
                    >
                      {item.name}
                    </button>
                  </div>
                )
              )}

              {/* Helpline Button */}
              <div className="border-t border-gray-200 px-4 pt-4">
                <a
                  href="tel:+91 7018481747"
                  className="flex items-center space-x-3 bg-black text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition"
                >
                  <Phone className="w-5 h-5 text-white" />
                  <div className="text-left text-sm leading-tight">
                    <span className="block text-xs font-medium">Admissions Helpline</span>
                    <span className="text-sm font-bold"> +91 7018481747</span>
                  </div>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
