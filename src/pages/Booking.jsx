import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import ChatbotWidget from '../components/ChatbotWidget.jsx';

const Booking = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { worker } = state || {};

  // Initialize form data with default values
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contact: '',
    duration: '',
    date: '',
  });

  // State for form errors
  const [errors, setErrors] = useState({});

  // Validate form data
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.contact.trim()) newErrors.contact = 'Contact number is required';
    else if (!/^\d{10}$/.test(formData.contact)) newErrors.contact = 'Contact number must be 10 digits';
    if (!formData.duration) newErrors.duration = 'Please select a duration';
    if (!formData.date) newErrors.date = 'Please select a date';
    else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset time for comparison
      if (selectedDate < today) newErrors.date = 'Date cannot be in the past';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/payment', { state: { booking: formData, worker } });
    }
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
          Book Your Worker
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg italic text-[#F4A261] max-w-2xl mx-auto"
        >
          Schedule your service with ease and convenience.
        </motion.p>
      </section>

      {/* Booking Form Section */}
      <section className="py-12 px-4 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Worker Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-6 bg-white rounded-2xl shadow-lg border border-[#144272]"
          >
            <h3 className="text-2xl font-semibold font-gilroy mb-4 text-[#0A2647]">Worker Details</h3>
            {worker ? (
              <>
                <img
                  src={worker.img}
                  alt={worker.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-[#2A6F97]"
                />
                <p className="text-[#144272]"><strong>Name:</strong> {worker.name}</p>
                <p className="text-[#144272]"><strong>Service:</strong> {worker.service.charAt(0).toUpperCase() + worker.service.slice(1)}</p>
                <p className="text-[#144272]"><strong>Experience:</strong> {worker.experience}</p>
                <p className="text-[#144272]"><strong>Rating:</strong> {worker.rating} ★</p>
                <p className="text-[#144272]"><strong>Price:</strong> ₹{worker.price}/{worker.availability}</p>
              </>
            ) : (
              <p className="text-[#144272]">No worker selected. Please go back and select a worker.</p>
            )}
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-6 bg-white rounded-2xl shadow-lg border border-[#144272]"
          >
            <h3 className="text-2xl font-semibold font-gilroy mb-6 text-[#0A2647]">Booking Information</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 rounded-lg border border-[#144272] focus:outline-none focus:ring-2 focus:ring-[#2A6F97] text-[#0A2647] bg-white"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full p-3 rounded-lg border border-[#144272] focus:outline-none focus:ring-2 focus:ring-[#2A6F97] text-[#0A2647] bg-white"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Contact Number (10 digits)"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full p-3 rounded-lg border border-[#144272] focus:outline-none focus:ring-2 focus:ring-[#2A6F97] text-[#0A2647] bg-white"
                />
                {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
              </div>
              <div className="mb-4">
                <select
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full p-3 rounded-lg border border-[#144272] focus:outline-none focus:ring-2 focus:ring-[#2A6F97] text-[#0A2647] bg-white"
                >
                  <option value="">Select Duration</option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                </select>
                {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration}</p>}
              </div>
              <div className="mb-4">
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full p-3 rounded-lg border border-[#144272] focus:outline-none focus:ring-2 focus:ring-[#2A6F97] text-[#0A2647] bg-white"
                />
                {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
              </div>
              <button type="submit" className="btn-cta w-full">
                Proceed to Payment
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Booking;