// import { motion } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faPhone, faEnvelope, faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-solid-svg-icons';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import Navbar from '../components/Navbar.jsx';
// import ChatbotWidget from '../components/ChatbotWidget.jsx';

// // Fix for Leaflet marker icons
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
//   iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
// });

// const Contact = () => {
//   const handleContactSubmit = (e) => {
//     e.preventDefault();
//     console.log('Contact form submitted');
//   };

//   return (
//     <div className="min-h-screen bg-[#F8FAFC] text-[#0A2647] font-helvetica">
//       <Navbar />
//       <ChatbotWidget />

//       {/* Hero Section */}
//       <section className="py-20 px-4 container mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-4xl md:text-5xl font-bold mb-4 font-gilroy gradient-text"
//         >
//           Get in Touch with MEUN
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-lg italic text-[#F4A261] max-w-2xl mx-auto"
//         >
//           We’re here to help you find the perfect worker for your needs. Reach out to us anytime!
//         </motion.p>
//       </section>

//       {/* Contact Form and Info Section */}
//       <section className="py-12 px-4 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Contact Form */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="p-8 bg-white rounded-2xl shadow-lg border border-[#144272]"
//         >
//           <h3 className="text-2xl font-semibold font-gilroy mb-6 text-[#0A2647]">Send Us a Message</h3>
//           <form onSubmit={handleContactSubmit}>
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full p-3 mb-4 rounded-lg border border-[#144272] focus:outline-none focus:ring-2 focus:ring-[#2A6F97] text-[#0A2647] bg-white"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full p-3 mb-4 rounded-lg border border-[#144272] focus:outline-none focus:ring-2 focus:ring-[#2A6F97] text-[#0A2647] bg-white"
//               required
//             />
//             <textarea
//               placeholder="Your Message"
//               className="w-full p-3 mb-4 rounded-lg border border-[#144272] focus:outline-none focus:ring-2 focus:ring-[#2A6F97] text-[#0A2647] bg-white"
//               rows="5"
//               required
//             />
//             <button type="submit" className="btn-cta w-full">
//               Send Message
//             </button>
//           </form>
//         </motion.div>

//         {/* Contact Info */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="p-8 bg-white rounded-2xl shadow-lg border border-[#144272]"
//         >
//           <h3 className="text-2xl font-semibold font-gilroy mb-6 text-[#0A2647]">Contact Information</h3>
//           <div className="space-y-4">
//             <p className="flex items-center text-[#144272]">
//               <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 text-[#F4A261]" />
//               1234 MEUN Street, Mumbai, India
//             </p>
//             <p className="flex items-center text-[#144272]">
//               <FontAwesomeIcon icon={faPhone} className="mr-3 text-[#F4A261]" />
//               +91 98765 43210
//             </p>
//             <p className="flex items-center text-[#144272]">
//               <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-[#F4A261]" />
//               support@meun.com
//             </p>
//           </div>
//           <div className="mt-6 flex justify-center space-x-4">
//             <a href="#" className="text-2xl hover:text-[#F4A261] transition-colors">
//               <FontAwesomeIcon icon={faFacebook} />
//             </a>
//             <a href="#" className="text-2xl hover:text-[#F4A261] transition-colors">
//               <FontAwesomeIcon icon={faTwitter} />
//             </a>
//             <a href="#" className="text-2xl hover:text-[#F4A261] transition-colors">
//               <FontAwesomeIcon icon={faInstagram} />
//             </a>
//             <a href="#" className="text-2xl hover:text-[#F4A261] transition-colors">
//               <FontAwesomeIcon icon={faLinkedin} />
//             </a>
//           </div>
//         </motion.div>
//       </section>

//       {/* Map Section */}
//       <section className="py-12 px-4 container mx-auto">
//         <h3 className="text-3xl font-semibold font-gilroy text-center mb-8 gradient-text">Our Location</h3>
//         <MapContainer center={[19.0760, 72.8777]} zoom={13} style={{ height: '400px', width: '100%' }} className="rounded-2xl shadow-lg">
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           />
//           <Marker position={[19.0760, 72.8777]}>
//             <Popup>MEUN Headquarters, Mumbai</Popup>
//           </Marker>
//         </MapContainer>
//       </section>
//     </div>
//   );
// };

// export default Contact;




import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Navbar from '../components/Navbar.jsx';
import ChatbotWidget from '../components/ChatbotWidget.jsx';

// Fix for Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const faqs = [
  {
    question: 'How do I book a worker?',
    answer: 'Go to the Services page, choose a category, select a worker, and book them by filling out the form.',
  },
  {
    question: 'Is the payment secure?',
    answer: 'Yes, we use Razorpay for secure payments with a detailed price breakdown.',
  },
  {
    question: 'Can I cancel a booking?',
    answer: 'Yes, you can cancel from your Dashboard. Refunds are processed as per our policy.',
  },
  {
    question: 'How are workers verified?',
    answer: 'All workers undergo a thorough background check and verification process before being listed.',
  },
  {
    question: 'Do you offer trial services?',
    answer: 'Yes, some workers offer trial services. Check the worker’s profile for availability.',
  },
  {
    question: 'What if the worker doesn’t show up?',
    answer: 'Contact our support team immediately, and we will arrange a replacement or provide a refund.',
  },
  {
    question: 'Can I reschedule my booking?',
    answer: 'Yes, you can reschedule from your Dashboard up to 24 hours before the service time.',
  },
  {
    question: 'Do you provide customer support?',
    answer: 'Yes, our support team is available 24/7 through chat, email, and phone.',
  },
  {
    question: 'Are there any hidden charges?',
    answer: 'No, our pricing is transparent. You will see a full cost breakdown before confirming the booking.',
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission (in a real app, this would be an API call)
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 3000); // Reset after 3 seconds
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

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
          Get in Touch with MEUN
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg italic text-[#F4A261] max-w-2xl mx-auto"
        >
          We’re here to help you find the perfect worker for your needs. Reach out to us anytime!
        </motion.p>
      </section>

      {/* Contact Form and Info Section */}
      <section className="py-12 px-4 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-8 bg-white rounded-2xl shadow-lg border border-[#144272]"
        >
          <h3 className="text-2xl font-semibold font-gilroy mb-6 text-[#0A2647]">Send Us a Message</h3>
          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center text-green-600 font-semibold mb-6"
            >
              Thank you for your message! We'll get back to you soon.
            </motion.div>
          ) : (
            <form onSubmit={handleContactSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 rounded-lg border border-[#144272] focus:outline-none focus:ring-2 focus:ring-[#2A6F97] text-[#0A2647] bg-white"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 rounded-lg border border-[#144272] focus:outline-none focus:ring-2 focus:ring-[#2A6F97] text-[#0A2647] bg-white"
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 rounded-lg border border-[#144272] focus:outline-none focus:ring-2 focus:ring-[#2A6F97] text-[#0A2647] bg-white"
                  rows="5"
                  required
                />
              </div>
              <button type="submit" className="btn-cta w-full">
                Send Message
              </button>
            </form>
          )}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-8 bg-white rounded-2xl shadow-lg border border-[#144272]"
        >
          <h3 className="text-2xl font-semibold font-gilroy mb-6 text-[#0A2647]">Contact Information</h3>
          <div className="space-y-4">
            <p className="flex items-center text-[#144272]">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-3 text-[#F4A261]" />
              5678 MEUN Avenue, New Delhi, India
            </p>
            <p className="flex items-center text-[#144272]">
              <FontAwesomeIcon icon={faPhone} className="mr-3 text-[#F4A261]" />
              +91 7763851481
            </p>
            <p className="flex items-center text-[#144272]">
              <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-[#F4A261]" />
              meunpvtltd@gmail.com
            </p>
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="#" className="text-2xl hover:text-[#F4A261] transition-colors">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-2xl hover:text-[#F4A261] transition-colors">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/meunpvtltd?igsh=dW1hanVuZ3VwNDhm" className="text-2xl hover:text-[#F4A261] transition-colors">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/company/meun/" className="text-2xl hover:text-[#F4A261] transition-colors">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4 container mx-auto relative z-0">
        <h3 className="text-3xl font-semibold font-gilroy text-center mb-8 gradient-text">Our Location</h3>
        <MapContainer
          center={[28.6139, 77.2090]} // Coordinates for New Delhi
          zoom={13}
          style={{ height: '400px', width: '100%' }}
          className="rounded-2xl shadow-lg z-0"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[28.6139, 77.2090]}>
            <Popup>MEUN Headquarters, New Delhi</Popup>
          </Marker>
        </MapContainer>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 container mx-auto">
        <h3 className="text-3xl font-semibold font-gilroy text-center mb-12 gradient-text">Frequently Asked Questions</h3>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-[#144272] p-4"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left flex justify-between items-center text-[#0A2647] font-semibold"
              >
                <span>{faq.question}</span>
                <span>{activeFaq === index ? '−' : '+'}</span>
              </button>
              {activeFaq === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 text-[#144272]"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;