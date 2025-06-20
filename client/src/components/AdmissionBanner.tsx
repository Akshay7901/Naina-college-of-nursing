import { Calendar, ArrowRight, Clock } from 'lucide-react';

const AdmissionBanner = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  

  

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Banner */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-full font-semibold mb-6 animate-pulse">
            <Calendar className="w-5 h-5 mr-2" />
            Admissions Open for 2025-2026
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Your Nursing Career
            <span className="text-cyan-300 block">Starts Here</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join the next generation of healthcare heroes. Applications are now open for our 
            nationally recognized nursing programs starting Fall 2024.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button
              onClick={() => scrollToSection('#admissions')}
              className="inline-flex items-center px-10 py-5 bg-orange-500 text-white font-bold text-lg rounded-xl hover:bg-orange-600 transform hover:-translate-y-2 transition-all duration-300 shadow-2xl hover:shadow-orange-500/25"
            >
              Apply Now
              <ArrowRight className="ml-3 w-6 h-6" />
            </button>
            <button
              onClick={() => scrollToSection('#programs')}
              className="inline-flex items-center px-10 py-5 border-2 border-white text-white font-bold text-lg rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              View Programs
            </button>
          </div>

          {/* Quick Facts */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {quickFacts.map((fact, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-white font-semibold text-sm">{fact}</div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Admission Highlights */}
        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className={`inline-flex items-center justify-center w-16 h-16 ${highlight.color} rounded-full mb-6`}>
                <highlight.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{highlight.title}</h3>
              <p className="text-blue-100 text-lg font-semibold">{highlight.description}</p>
            </div>
          ))}
        </div> */}

        {/* Urgency Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-center text-white shadow-2xl">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Clock className="w-8 h-8 animate-pulse" />
            <h3 className="text-2xl md:text-3xl font-bold">Don't Wait - Seats Fill Fast!</h3>
          </div>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            With only 120 spots available and hundreds of applications expected, 
            early application is strongly recommended.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('#admissions')}
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Start Application
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-200">
              Schedule Campus Visit
            </button>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default AdmissionBanner;