import { CheckCircle, BookOpen } from 'lucide-react';

const Admissions = () => {
  const requirements = [
    "High school diploma or equivalent with minimum 3.0 GPA",
    "Completion of prerequisite courses (Biology, Chemistry, Anatomy & Physiology)",
    "SAT/ACT scores (BSN program)",
    "Personal statement essay",
    "Two letters of recommendation",
    "Background check and drug screening",
    "CPR certification (BLS for Healthcare Providers)",
    "Immunization records and health clearance"
  ];

  

  

  return (
    <section id="admissions" className=" bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Admissions Information
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community of future healthcare leaders. We're here to guide you 
            through every step of the admission process.
          </p>
        </div>

        {/* Requirements */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Admission Requirements
          </h3>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/6749825/pexels-photo-6749825.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Student studying"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{requirement}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                  <h4 className="text-lg font-semibold text-gray-900">Prerequisites</h4>
                </div>
                <p className="text-gray-600">
                  Complete prerequisite courses at any accredited institution. We offer 
                  summer intensive courses for students who need to complete requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Application Timeline */}
        
       
      </div>
    </section>
  );
};

export default Admissions;