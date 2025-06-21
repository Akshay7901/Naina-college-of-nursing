import { useState, useEffect } from 'react';

// 🔵 Custom SVG Icons
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.81.37 1.59.72 2.33a2 2 0 0 1-.45 2.11L9 11a16 16 0 0 0 5 5l1.84-1.27a2 2 0 0 1 2.11-.45c.74.35 1.52.59 2.33.72A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-black" viewBox="0 0 100 80" fill="currentColor">
    <rect width="100" height="10" rx="6" />
    <rect y="30" width="100" height="10" rx="6" />
    <rect y="60" width="100" height="10" rx="6" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#programs' },
    { name: 'Leadership', href: '#faculty' },
    { name: 'Admissions', href: '#admissions' },
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
    <>
      {/* 🔵 Marquee Section */}
      <div className="fixed top-0 w-full z-50 bg-blue-900 h-10 overflow-hidden">
        <div className="flex gap-[400px] animate-marquee whitespace-nowrap text-white font-semibold text-sm sm:text-base py-2 hover:[animation-play-state:paused]">
          <span>
            📢 <button onClick={() => (window.location.href = 'tel:+917018481747')} className="underline underline-offset-2">Call us on +91 7018481747</button> – Admissions Open for 2025-2026 Batch –
          </span>
          <span>
            📢 <button onClick={() => (window.location.href = 'tel:+917018481747')} className="underline underline-offset-2">Call us on +91 7018481747</button> – Admissions Open for 2025-2026 Batch –
          </span>
        </div>
      </div>

      {/* 🔵 Header Section */}
      <header className={`fixed top-10 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo + Title */}
            <div className="flex items-start space-x-3">
              <img src="/logo.jpg" alt="Logo" className="h-20 w-auto" />
              <div className="flex flex-col justify-center mt-2">
                <h1 className="text-xl sm:text-2xl font-bold text-blue-900 leading-snug">
                  NAINA COLLEGE<br />OF NURSING
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) =>
                item.name === 'Courses' ? (
                  <div key={item.name} className="relative group">
                    <button className="text-gray-700 hover:text-blue-600 font-medium relative group">
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

            {/* Desktop Helpline */}
            <button
              onClick={() => (window.location.href = 'tel:+917018481747')}
              className="hidden md:flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition"
            >
              <PhoneIcon />
              <div className="text-left text-sm leading-tight">
                <span className="block text-xs font-medium">Admissions Helpline</span>
                <span className="text-sm font-bold">+917018481747</span>
              </div>
            </button>

            {/* Mobile Icons */}
            <div className="md:hidden flex items-center space-x-4 z-50">
              <button
                onClick={() => (window.location.href = 'tel:+917018481747')}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-green-700 bg-green-700"
                aria-label="Call Admissions Helpline"
              >
                <PhoneIcon />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full border border-black"
              >
                {isOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden border-t border-gray-200 py-4 bg-white rounded-b-xl z-40">
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

                {/* Mobile Helpline */}
                <div className="border-t border-gray-200 px-4 pt-4">
                  <button
                    onClick={() => (window.location.href = 'tel:+917018481747')}
                    className="flex items-center space-x-3 bg-black text-white px-4 py-2 rounded-full shadow-lg hover:bg-gray-800 transition w-full"
                  >
                    <PhoneIcon />
                    <div className="text-left text-sm leading-tight">
                      <span className="block text-xs font-medium">Admissions Helpline</span>
                      <span className="text-sm font-bold">+917018481747</span>
                    </div>
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Padding for header + marquee */}
      <div className="pt-[140px]" />
    </>
  );
};

export default Header;
