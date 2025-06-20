import React from 'react';
import { Calendar, ArrowRight, Award, Users, BookOpen } from 'lucide-react';

const News = () => {
  const newsItems = [
    {
      title: "Nursing Students Win State Competition",
      date: "March 15, 2024",
      category: "Achievement",
      image: "https://images.pexels.com/photos/6749822/pexels-photo-6749822.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      excerpt: "Our senior nursing students took first place in the State Nursing Skills Competition, demonstrating exceptional clinical competency and teamwork.",
      icon: Award
    },
    {
      title: "New Simulation Lab Opens",
      date: "March 10, 2024",
      category: "Facilities",
      image: "https://images.pexels.com/photos/6749789/pexels-photo-6749789.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      excerpt: "State-of-the-art simulation laboratory featuring high-fidelity mannequins and virtual reality training systems now available for student learning.",
      icon: BookOpen
    },
    {
      title: "Community Health Fair Success",
      date: "March 5, 2024",
      category: "Community",
      image: "https://images.pexels.com/photos/6749804/pexels-photo-6749804.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      excerpt: "Nursing students and faculty provided free health screenings to over 500 community members at our annual health fair event.",
      icon: Users
    }
  ];

  const events = [
    {
      date: "Apr 12",
      title: "Open House & Campus Tours",
      time: "10:00 AM - 2:00 PM",
      location: "Main Campus"
    },
    {
      date: "Apr 18",
      title: "Nursing Career Fair",
      time: "1:00 PM - 5:00 PM",
      location: "Student Center"
    },
    {
      date: "Apr 25",
      title: "NCLEX Prep Workshop",
      time: "9:00 AM - 12:00 PM",
      location: "Online & On-Campus"
    },
    {
      date: "May 3",
      title: "Pinning Ceremony",
      time: "6:00 PM",
      location: "Auditorium"
    }
  ];

  return (
    <section id="news" className="py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest News & Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest developments, achievements, and upcoming 
            events in our nursing community.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* News Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent News</h3>
            <div className="space-y-8">
              {newsItems.map((item, index) => (
                <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg">
                          <item.icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                            {item.category}
                          </span>
                          <p className="text-sm text-gray-500 mt-1 flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {item.date}
                          </p>
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                      <p className="text-gray-600 mb-4 leading-relaxed">{item.excerpt}</p>
                      <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Events Sidebar */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Events</h3>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="space-y-6">
                {events.map((event, index) => (
                  <div key={index} className="flex space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="text-center min-w-0 flex-shrink-0">
                      <div className="text-2xl font-bold text-blue-600">{event.date.split(' ')[1]}</div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide">{event.date.split(' ')[0]}</div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{event.title}</h4>
                      <p className="text-sm text-gray-600 mb-1">{event.time}</p>
                      <p className="text-sm text-gray-500">{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <button className="w-full px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  View All Events
                </button>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8 bg-orange-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Stay Connected</h4>
              <p className="text-gray-600 mb-6">
                Subscribe to our newsletter for the latest updates, events, and nursing program information.
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
                <button className="w-full px-4 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;