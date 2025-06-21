import { Clock, CheckCircle, ArrowRight, Award } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "Bachelor of Science in Nursing (B.Sc. Nursing)",
      duration: "4 Years",
      features: ["4 year Degree Course", "ELIGIBILITY – +2 Medical Stream"],
      image: "/pic2.jpg"
    },
    {
      title: "General Nursing and Midwifery (GNM)",
      duration: "3 Years",
      features: ["3 year Diploma Course", "ELIGIBILITY – +2 Any Stream"],
      image: "/pic3.jpeg"
    },
    {
      title: "Post Basic B.Sc. Nursing (PB B.Sc.)",
      duration: "2 Years",
      features: ["2 year Degree Course after GNM", "ELIGIBILITY – GNM"],
      image: "https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    },
    {
      title: "Diploma in Veterinary Pharmacist (DVP)",
      duration: "2 Years",
      features: ["2 year Diploma Course"],
      image: "https://images.pexels.com/photos/6749815/pexels-photo-6749815.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="programs" className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Our Nursing Courses</h2>
          <p className="text-lg text-gray-600 mt-3 max-w-3xl mx-auto">
            Choose from our professionally curated nursing and health science programs.
          </p>
        </div>

        {/* Horizontal scroll on mobile */}
        <div className="overflow-x-auto md:overflow-visible px-2 sm:px-4 lg:px-12 xl:px-20">
          <div className="flex md:justify-center gap-6 md:gap-8 snap-x snap-mandatory">
            {programs.map((program, idx) => (
              <div
                key={idx}
                className="snap-start flex-shrink-0 w-80 md:w-[350px] bg-gray-50 rounded-2xl shadow-md p-6"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-44 object-cover rounded-xl mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{program.title}</h3>
                <div className="flex items-center text-gray-600 mb-4 gap-2 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{program.duration}</span>
                </div>
                <ul className="mb-4 space-y-1 text-gray-700 text-sm">
                  {program.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-1">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Accreditation Section */}
        <div className="mt-16 bg-blue-50 rounded-3xl p-8 text-center max-w-4xl mx-auto">
          <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-blue-800 mb-3">Accreditation & Recognition</h3>
          <p className="text-gray-700 text-lg">
            All our nursing programs are recognized by the Indian Nursing Council (INC) and approved by the State Board of Nursing. We are affiliated with Atal Medical & Research University (AMRU).
          </p>
        </div>

      </div>
    </section>
  );
};

export default Programs;
