import  { useState } from 'react';
import {Award, Users, BookOpen, X } from 'lucide-react';

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyNow = () => {
    setShowForm(true);
    setTimeout(() => scrollToSection('#apply'), 100);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 mt-12">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="src/video/video1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center text-white mt-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Shape the Future of
              <span className="text-cyan-300 block">Healthcare</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-blue-100 leading-relaxed">
              Join our world-class nursing program and become the compassionate,
              skilled healthcare professional the world needs.
            </p>

            {/* Admissions Highlight Box */}
            <div className="mb-8 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-lg shadow-lg">
              <p className="text-lg md:text-xl font-semibold">
                🎓 Admissions Open for 2025–2026 Batch —{' '}
                <span
                  className="underline cursor-pointer text-yellow-900 hover:text-yellow-700"
                  onClick={handleApplyNow}
                >
                  Apply Now
                </span>
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-cyan-500 rounded-lg mx-auto mb-2">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-blue-200">Pass Rate</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-orange-500 rounded-lg mx-auto mb-2">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold">1,200+</div>
                <div className="text-sm text-blue-200">Graduates</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-lg mx-auto mb-2">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold">15:1</div>
                <div className="text-sm text-blue-200">Student Ratio</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Admission Form Modal */}
      {showForm && (
        <div
          id="apply"
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-transparent p-4"
        >
          <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-lg p-8">
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={handleCloseForm}
                className="text-gray-500 hover:text-red-600 transition"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <h2 className="text-3xl font-bold mb-4 text-gray-800">Admission Form</h2>
            <form className="grid grid-cols-1 gap-4">
              {/* Name */}
              <input
                type="text"
                placeholder="Name"
                className="border p-3 rounded-md"
                required
              />

              {/* Father's Name */}
              <input
                type="text"
                placeholder="Father's Name"
                className="border p-3 rounded-md"
                required
              />

              {/* Mobile Number with validation */}
              <input
                type="tel"
                placeholder="Mobile Number"
                className="border p-3 rounded-md"
                pattern="[6-9]{1}[0-9]{9}"
                maxLength={10}
                minLength={10}
                title="Enter a valid 10-digit mobile number starting with 6-9"
                required
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                className="border p-3 rounded-md"
                required
              />

              {/* Course Selection */}
              <select className="border p-3 rounded-md" required>
                <option value="">Choose a Course</option>
                <option value="gnm">Bachelor of Science in Nursing (B.Sc. Nursing)</option>
                <option value="anm">General Nursing and Midwifery (GNM)</option>
                <option value="bsc">Post Basic B.Sc. Nursing (PB B.Sc.)</option>
                <option value="postbasic">Diploma in Veterinary Pharmacist (DVP)</option>
              </select>

              {/* Preferred Mode of Studies */}
              <label className="text-gray-700 font-medium mt-2">
                Preferred Mode of Studies *
              </label>
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="mode"
                    value="hostelite"
                    className="mr-2"
                    required
                  />
                  Hostelite
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="mode"
                    value="day-scholar"
                    className="mr-2"
                  />
                  Day Scholar
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 mt-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
