import React, { useState } from 'react';
import { MessageCircle, X, Send, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState<FAQ | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "What are the admission requirements for the BSN program?",
      answer: "For the BSN program, you need: High school diploma or equivalent, minimum GPA of 3.0, prerequisite courses (Biology, Chemistry, Math), TEAS exam score, and completed application with personal statement.",
      category: "admissions"
    },
    {
      id: 2,
      question: "How much does the nursing program cost?",
      answer: "Tuition varies by program: BSN - $28,500/year, MSN - $35,800/year, DNP - $42,000/year. Financial aid, scholarships, and payment plans are available to help make education affordable.",
      category: "financial"
    },
    {
      id: 3,
      question: "What is the NCLEX pass rate for your graduates?",
      answer: "Our graduates have an outstanding 98% first-time NCLEX-RN pass rate, well above the national average. We provide comprehensive NCLEX preparation throughout the program.",
      category: "academics"
    },
    {
      id: 4,
      question: "Are clinical placements guaranteed?",
      answer: "Yes! We have partnerships with over 50 healthcare facilities in the region, ensuring all students receive quality clinical experiences in various specialties including ICU, ER, pediatrics, and more.",
      category: "academics"
    },
    {
      id: 5,
      question: "Can I work while in the nursing program?",
      answer: "Many students work part-time, especially in healthcare settings. However, the program is intensive with clinical rotations, so we recommend limiting work hours to ensure academic success.",
      category: "student-life"
    },
    {
      id: 6,
      question: "What financial aid options are available?",
      answer: "We offer federal financial aid, state grants, nursing scholarships, work-study programs, and payment plans. Our financial aid office helps students explore all available options.",
      category: "financial"
    },
    {
      id: 7,
      question: "How long does it take to complete the BSN program?",
      answer: "The traditional BSN program takes 4 years (8 semesters) for full-time students. We also offer accelerated options for students with previous degrees and part-time tracks.",
      category: "academics"
    },
    {
      id: 8,
      question: "What support services are available for students?",
      answer: "We provide tutoring, academic advising, career counseling, mental health services, library resources, simulation labs, and peer mentoring programs to ensure student success.",
      category: "student-life"
    },
    {
      id: 9,
      question: "When do applications open for 2025-2026?",
      answer: "Applications for 2025-2026 are now open! Early bird deadline is March 31, 2025, and regular deadline is June 15, 2025. Apply early for the best chance of admission.",
      category: "admissions"
    },
    {
      id: 10,
      question: "What makes your nursing program different?",
      answer: "Our program features small class sizes, experienced faculty, state-of-the-art simulation labs, extensive clinical partnerships, 95% job placement rate, and a strong alumni network in healthcare.",
      category: "academics"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Questions', count: faqs.length },
    { id: 'admissions', label: 'Admissions', count: faqs.filter(f => f.category === 'admissions').length },
    { id: 'academics', label: 'Academics', count: faqs.filter(f => f.category === 'academics').length },
    { id: 'financial', label: 'Financial', count: faqs.filter(f => f.category === 'financial').length },
    { id: 'student-life', label: 'Student Life', count: faqs.filter(f => f.category === 'student-life').length }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleFAQClick = (faq: FAQ) => {
    setSelectedFAQ(selectedFAQ?.id === faq.id ? null : faq);
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 ${
            isOpen ? 'rotate-180' : 'animate-bounce'
          }`}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </button>
        
        {/* Notification Badge */}
        {!isOpen && (
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
            ?
          </div>
        )}
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] h-[500px] bg-white rounded-2xl shadow-2xl border z-50 flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg">Ask NursingCare</h3>
                <p className="text-blue-100 text-sm">Get instant answers to your questions</p>
              </div>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Search */}
          <div className="p-4 border-b">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            />
          </div>

          {/* Categories */}
          <div className="px-4 py-2 border-b">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-200 ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* FAQ List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {filteredFAQs.length === 0 ? (
              <div className="text-center text-gray-500 py-8">
                <MessageCircle className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>No questions found matching your search.</p>
              </div>
            ) : (
              filteredFAQs.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => handleFAQClick(faq)}
                    className="w-full p-3 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                  >
                    <span className="font-medium text-gray-900 text-sm pr-2">
                      {faq.question}
                    </span>
                    {selectedFAQ?.id === faq.id ? (
                      <ChevronUp className="h-4 w-4 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  
                  {selectedFAQ?.id === faq.id && (
                    <div className="px-3 pb-3 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3 bg-gray-50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t bg-gray-50 rounded-b-2xl">
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-600">
                Need more help? Contact our admissions team
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center">
                Contact Us
                <Send className="ml-1 h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;