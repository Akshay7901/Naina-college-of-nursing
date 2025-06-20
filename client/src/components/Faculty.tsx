
const Faculty = () => {
  const facultyMembers = [
    {
      name: "Dr. Noble Sharma",
      title: "Founder & Chairperson (CEO)",
      credentials: "Ph.D , M.sc Medical Surgical Nursing",
      image: "/src/Assets/NB.jpg",
    },
    {
      name: "Mr Prem Dogra",
      title: "Managing  Director",
      image: "/src/Assets/director.jpg",
    },
    {
      name: "Dr. Kammu Verma",
      title: "Principal",
      credentials: "Ph.D , M.sc Medical Surgical Nursing",
      image: "/src/Assets/KV.jpg",
    }
  ];

  return (
    <section id="faculty" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet Our Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from industry leaders who combine academic excellence with real-world 
            clinical experience to prepare you for a successful nursing career.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {facultyMembers.map((faculty, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-full aspect-square rounded-xl object-cover shadow-md"
              />
              <div className="text-center mt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{faculty.name}</h3>
                <p className="text-blue-600 font-semibold mb-1">{faculty.title}</p>
                {faculty.credentials && (
                  <p className="text-sm text-gray-600 mb-2">{faculty.credentials}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faculty;
