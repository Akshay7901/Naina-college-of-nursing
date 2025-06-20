import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";
import { Heart, Shield, Star, Users } from "lucide-react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Exceptional Clinical Training",
      description:
        "Hands-on learning with real patients at reputed hospitals to build world-class nursing professionals.",
    },
    {
      icon: Shield,
      title: "Diverse Clinical Rotations",
      description:
        "Students rotate across top institutions covering general, pediatric, psychiatric, and surgical care.",
    },
    {
      icon: Star,
      title: "100% Placement Support",
      description:
        "Dedicated placement team helps with resume building, interview prep, and hospital connections.",
    },
    {
      icon: Users,
      title: "Academic Participation",
      description:
        "Frequent seminars, national conferences, and clinical workshops expand student knowledge.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-10 bg-gradient-to-b from-sky-50 via-white to-indigo-50 overflow-hidden"
    >
      {/* Floating Blobs for visual depth */}
      <div className="absolute top-[-80px] right-[-100px] w-[300px] h-[300px] bg-purple-300/40 blur-[100px] rounded-full z-0"></div>
      <div className="absolute bottom-[-80px] left-[-100px] w-[250px] h-[250px] bg-blue-200/40 blur-[90px] rounded-full z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Title */}
        <div className="text-center mb-20" data-aos="fade-up">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-700 to-sky-500 text-transparent bg-clip-text mb-4">
            About Naina College of Nursing
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
           Naina College of Nursing, established in 2019, is a premier institution committed to excellence in nursing education. Nestled in the peaceful surroundings of Nagchala, District Mandi, Himachal Pradesh, the college provides an ideal environment for academic and personal growth.

          </p>
        </div>

        {/* Image + Description */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-28">
          <div data-aos="zoom-in-up">
            <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.02}>
              <img
                src="https://images.pexels.com/photos/6749772/pexels-photo-6749772.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Nursing Education"
                className="rounded-3xl shadow-2xl"
              />
            </Tilt>
          </div>
          <div
            className="space-y-6 text-black text-xl md:text-1xl leading-relaxed"
            data-aos="fade-left"
          >
            <p>
              Affiliated with Atal Medical and Research University (AMRU),
              Nerchowk, and recognized by the Indian Nursing Council (INC) and
              the Himachal Pradesh Nurses Registration Council (HPNRC), Shimla,
              Naina College of Nursing offers high-quality undergraduate nursing
              programs. These programs are designed to cultivate skilled,
              ethical, and compassionate nursing professionals equipped to meet
              the evolving needs of the healthcare sector.
            </p>

            {/* CTA Buttons */}
          </div>
        </div>

        {/* Interactive Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((value, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareColor="#ffffff"
              className="bg-white/70 backdrop-blur-lg rounded-3xl border border-white/30 shadow-2xl p-6 transition-transform duration-300 hover:scale-[1.03]"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="flex justify-center -mt-12 mb-6">
                <div className="w-20 h-20 bg-gradient-to-tr from-indigo-500 to-blue-500 rounded-full flex items-center justify-center shadow-xl ring-4 ring-white">
                  <value.icon className="text-white w-8 h-8 animate-pulse group-hover:scale-110 transition duration-300" />
                </div>
              </div>
              <h3 className="text-center text-lg font-semibold text-gray-800 mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-center text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
