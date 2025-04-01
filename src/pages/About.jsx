
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import ChatbotWidget from '../components/ChatbotWidget.jsx';

const teamMembers = [
  { name: 'Amit Sharma', role: 'Founder & CEO', img: 'https://images.pexels.com/photos/6146986/pexels-photo-6146986.jpeg' },
  { name: 'Priya Gupta', role: 'COO', img: 'https://images.pexels.com/photos/6146988/pexels-photo-6146988.jpeg' },
  { name: 'Ravi Patel', role: 'CTO', img: 'https://images.pexels.com/photos/6146990/pexels-photo-6146990.jpeg' },
];

const coreValues = [
  { title: 'Trust & Transparency', description: 'Every worker is verified, ensuring a safe and reliable experience.' },
  { title: 'Fair Employment', description: 'We help workers find dignified, well-paying jobs without exploitation.' },
  { title: 'Technology-Driven', description: 'Our AI-powered platform matches you with the perfect worker for your needs.' },
];

const testimonials = [
  { name: 'Sneha R.', quote: 'MEUN made it so easy to find a reliable helper for my home. I couldn’t be happier!', rating: 5 },
  { name: 'Rahul K.', quote: 'The platform is seamless, and the workers are professional. Highly recommend!', rating: 4 },
  { name: 'Anita M.', quote: 'Thanks to MEUN, I can focus on my work while my household runs smoothly.', rating: 5 },
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
          Your Trusted Partner for Hassle-Free Staffing Solutions
        </motion.p>
      </section>

      {/* About Us Section */}
      <section className="py-12 px-4 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold font-gilroy mb-4 gradient-text">Who We Are</h3>
            <p className="text-[#144272] text-lg mb-4">
              At MEUN, we are redefining the way households and businesses hire domestic help and security personnel. Finding reliable, skilled, and verified workers has always been a challenge, but with MEUN, we make the process seamless, secure, and efficient. Our platform connects you directly with trusted professionals, including maids, cooks, drivers, security guards, and caretakers, ensuring your home or business runs smoothly.
            </p>
            <p className="text-[#144272] text-lg mb-4">
              We offer a range of services tailored to your needs: <strong>Maids & Housekeepers</strong> for daily cleaning and home maintenance, <strong>Cooks & Chefs</strong> skilled in various cuisines, <strong>Drivers & Chauffeurs</strong> for safe and reliable transportation, <strong>Security Guards</strong> to ensure your safety, and <strong>Cleaners & Caretakers</strong> for deep cleaning, elderly care, and childcare.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt="MEUN Services"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* What Makes MEUN Different Section */}
      <section className="py-12 px-4 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <img
              src="https://img.freepik.com/free-vector/character-collection-cleaners-big-set-isolated-flat-illustration-wearing-professional-uniform-cartoon-style_1150-37522.jpg?ga=GA1.1.1358519673.1743431462&semt=ais_hybrid"
              alt="What Makes MEUN Different"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <h3 className="text-3xl font-semibold font-gilroy mb-4 gradient-text">What Makes MEUN Different?</h3>
            <ul className="text-[#144272] text-lg space-y-2">
              <li>🔹 <strong>No Middlemen, No Brokers</strong> – Direct hiring saves you time and commission costs.</li>
              <li>🔹 <strong>Verified & Background-Checked Workers</strong> – Safety first; every worker is thoroughly screened.</li>
              <li>🔹 <strong>Flexible Hiring Options</strong> – Hire for a day, a week, or a month, based on your needs.</li>
              <li>🔹 <strong>AI-Powered Chatbot</strong> – Get smart recommendations for quick and easy bookings.</li>
              <li>🔹 <strong>Fair & Transparent Pricing</strong> – No hidden charges; pay only for what you need.</li>
              <li>🔹 <strong>Empowering Marginalized Communities</strong> – We connect skilled workers to stable job opportunities.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-12 px-4 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold font-gilroy mb-4 gradient-text">Our Mission</h3>
            <p className="text-[#144272] text-lg mb-4">
              MEUN is committed to building a future where hiring domestic help is effortless, ethical, and effective. We believe in:
            </p>
            <ul className="text-[#144272] text-lg space-y-2">
              <li>✅ <strong>Trust & Transparency</strong> – Every worker is verified, ensuring a safe experience.</li>
              <li>✅ <strong>Fair Employment</strong> – Helping workers find dignified, well-paying jobs without exploitation.</li>
              <li>✅ <strong>Technology-Driven Solutions</strong> – Using AI to match you with the perfect worker based on your needs.</li>
            </ul>
            <p className="text-[#144272] text-lg mt-4">
              With MEUN, you don’t just hire help—you contribute to a fair and sustainable employment system while ensuring safety and quality for your home or business.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
              alt="Our Mission"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 px-4 container mx-auto text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-semibold font-gilroy mb-4 gradient-text"
        >
          Ready to Experience Hassle-Free Hiring?
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-[#144272] mb-6"
        >
          Join MEUN today and find the right help, at the right time, in the right way.
        </motion.p>
        <motion.a
          href="/signup"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="btn-cta inline-block"
        >
          Sign Up Now
        </motion.a>
      </section>

      {/* Core Values Section */}
      <section className="py-12 px-4 container mx-auto">
        <h3 className="text-3xl font-semibold font-gilroy text-center mb-12 gradient-text">Our Core Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-white rounded-2xl shadow-lg border border-[#144272] text-center"
            >
              <h4 className="text-xl font-semibold font-gilroy text-[#0A2647] mb-2">{value.title}</h4>
              <p className="text-[#144272]">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-12 px-4 container mx-auto">
        <h3 className="text-3xl font-semibold font-gilroy text-center mb-12 gradient-text">What Our Customers Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="p-6 bg-white rounded-2xl shadow-lg border border-[#144272] text-center"
            >
              <p className="text-[#144272] italic mb-4">"{testimonial.quote}"</p>
              <h4 className="text-lg font-semibold font-gilroy text-[#0A2647]">{testimonial.name}</h4>
              <div className="flex justify-center mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#F4A261] text-xl">★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;