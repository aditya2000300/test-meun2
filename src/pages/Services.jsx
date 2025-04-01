import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import ChatbotWidget from '../components/ChatbotWidget.jsx';

const services = [
  { name: 'Maid', desc: 'Reliable maids for cleaning, washing, and household tasks.', icon: '🧹', illustration: 'https://via.placeholder.com/150?text=Maid' },
  { name: 'Driver', desc: 'Experienced drivers for safe and timely transportation.', icon: '🚗', illustration: 'https://via.placeholder.com/150?text=Driver' },
  { name: 'Cook', desc: 'Skilled cooks to prepare delicious meals tailored to your taste.', icon: '🍳', illustration: 'https://via.placeholder.com/150?text=Cook' },
  { name: 'Security Guard', desc: 'Trained guards to ensure safety at your home or office.', icon: '🛡️', illustration: 'https://via.placeholder.com/150?text=Security' },
  { name: 'Cleaner', desc: 'Experts in deep cleaning for a spotless environment.', icon: '🧼', illustration: 'https://via.placeholder.com/150?text=Cleaner' },
  { name: 'Caretaker', desc: 'Compassionate caretakers for elderly or child care.', icon: '👴', illustration: 'https://via.placeholder.com/150?text=Caretaker' },
];

const Services = () => {
  const [filter, setFilter] = useState('All');

  const filteredServices = filter === 'All' ? services : services.filter((service) => service.name === filter);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0A2647] font-helvetica">
      <Navbar />
      <ChatbotWidget />

      {/* Hero Section */}
      <section className="py-20 px-4 container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4 font-gilroy gradient-text"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg italic text-[#F4A261] max-w-2xl mx-auto"
        >
          Find the perfect worker for your needs from our wide range of services.
        </motion.p>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 container mx-auto">
        <div className="flex justify-center space-x-4 mb-8 flex-wrap">
          {['All', 'Maid', 'Driver', 'Cook', 'Security Guard', 'Cleaner', 'Caretaker', ].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`py-2 px-4 rounded-lg m-1 ${filter === category ? 'bg-[#0A2647] text-white' : 'bg-[#144272] text-white'} hover:bg-[#2A6F97] transition-colors font-helvetica`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 container mx-auto px-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-6 bg-white rounded-2xl shadow-lg border border-[#144272] text-center hover:bg-[#2a6f97] transition-all duration-300"
            >
              <div className="text-4xl mb-4 ">{service.icon}</div>
              <h3 className="text-xl font-bold font-gilroy  text-[#0A2647]">{service.name}</h3>
              <p className="text-[#144272] mt-2">{service.desc}</p>
              <Link
                to={`/workers/${service.name.toLowerCase()}`}
                className="mt-4 inline-block text-[#F4A261] hover:text-white transition-colors font-helvetica"
              >
                View Workers
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;