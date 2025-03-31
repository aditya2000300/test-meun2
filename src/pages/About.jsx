import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import ChatbotWidget from '../components/ChatbotWidget.jsx';

const teamMembers = [
  { name: 'Amit Sharma', role: 'Founder & CEO', img: 'https://images.pexels.com/photos/6146986/pexels-photo-6146986.jpeg' },
  { name: 'Priya Gupta', role: 'COO', img: 'https://images.pexels.com/photos/6146988/pexels-photo-6146988.jpeg' },
  { name: 'Ravi Patel', role: 'CTO', img: 'https://images.pexels.com/photos/6146990/pexels-photo-6146990.jpeg' },
];

const timelineEvents = [
  { year: '2023', event: 'MEUN was founded with a mission to connect Indian workers with households.' },
  { year: '2024', event: 'Expanded services to 10 major cities across India.' },
  { year: '2025', event: 'Reached 10,000 happy customers and 500 verified workers.' },
];

const About = () => {
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
          About MEUN
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg italic text-[#F4A261] max-w-2xl mx-auto"
        >
          Connecting Indian households with trusted domestic workers since 2023.
        </motion.p>
      </section>

      {/* Mission Statement */}
      <section className="py-12 px-4 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold font-gilroy mb-4 gradient-text">Our Mission</h3>
            <p className="text-[#144272] text-lg">
              At MEUN, we aim to simplify the process of hiring domestic workers by providing a reliable, transparent, and secure platform. We are committed to empowering Indian workers by connecting them with opportunities while ensuring households find the perfect help they need.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt="Our Mission"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 px-4 container mx-auto">
        <h3 className="text-3xl font-semibold font-gilroy text-center mb-12 gradient-text">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-white rounded-2xl shadow-lg border border-[#144272] text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-[#2A6F97]"
              />
              <h4 className="text-xl font-semibold font-gilroy text-[#0A2647]">{member.name}</h4>
              <p className="text-[#144272]">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 px-4 container mx-auto">
        <h3 className="text-3xl font-semibold font-gilroy text-center mb-12 gradient-text">Our Journey</h3>
        <div className="relative max-w-3xl mx-auto">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex items-center mb-12 relative"
            >
              <div className="w-12 h-12 bg-[#0A2647] text-white rounded-full flex items-center justify-center text-lg mr-6">
                {event.year}
              </div>
              <div className="flex-1 p-6 bg-white rounded-2xl shadow-lg border border-[#144272]">
                <p className="text-[#144272]">{event.event}</p>
              </div>
              {index < timelineEvents.length - 1 && (
                <div className="absolute left-6 top-16 h-12 w-0.5 bg-[#144272]"></div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;