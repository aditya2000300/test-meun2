import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-solid-svg-icons';
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

const Contact = () => {
  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted');
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
          <form onSubmit={handleContactSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 rounded-lg border border-[#144272] focus:outline-none focus:ring-2 focus:ring-[#2A6F97] text-[#0A2647] bg-white"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 rounded-lg border border-[#144272] focus:outline-none focus:ring-2 focus:ring-[#2A6F97] text-[#0A2647] bg-white"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 mb-4 rounded-lg border border-[#144272] focus:outline-none focus:ring-2 focus:ring-[#2A6F97] text-[#0A2647] bg-white"
              rows="5"
              required
            />
            <button type="submit" className="btn-cta w-full">
              Send Message
            </button>
          </form>
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
              1234 MEUN Street, Mumbai, India
            </p>
            <p className="flex items-center text-[#144272]">
              <FontAwesomeIcon icon={faPhone} className="mr-3 text-[#F4A261]" />
              +91 98765 43210
            </p>
            <p className="flex items-center text-[#144272]">
              <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-[#F4A261]" />
              support@meun.com
            </p>
          </div>
          <div className="mt-6 flex justify-center space-x-4">
            <a href="#" className="text-2xl hover:text-[#F4A261] transition-colors">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-2xl hover:text-[#F4A261] transition-colors">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-2xl hover:text-[#F4A261] transition-colors">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="text-2xl hover:text-[#F4A261] transition-colors">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4 container mx-auto">
        <h3 className="text-3xl font-semibold font-gilroy text-center mb-8 gradient-text">Our Location</h3>
        <MapContainer center={[19.0760, 72.8777]} zoom={13} style={{ height: '400px', width: '100%' }} className="rounded-2xl shadow-lg">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[19.0760, 72.8777]}>
            <Popup>MEUN Headquarters, Mumbai</Popup>
          </Marker>
        </MapContainer>
      </section>
    </div>
  );
};

export default Contact;