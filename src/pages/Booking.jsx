import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import ChatbotWidget from '../components/ChatbotWidget.jsx';

const Booking = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { worker } = state || {};

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    address: '',
    date: '',
    duration: '',
    timeSlot: '', // New field for time slot
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.contact.trim()) newErrors.contact = 'Contact number is required';
    else if (!/^\d{10}$/.test(formData.contact)) newErrors.contact = 'Contact number must be 10 digits';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.duration) newErrors.duration = 'Duration is required';
    if (!formData.timeSlot) newErrors.timeSlot = 'Time slot is required';
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
          Fill in the details to confirm your booking with {worker?.name || 'a worker'}.
        </motion.p>
      </section>

      {/* Booking Form Section */}
      <section className="py-12 px-4 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Worker Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-6 bg-white rounded-2xl shadow-lg border border-[#144272]"
          >
            <h3 className="text-2xl font-semibold font-gilroy mb-4 text-[#0A2647]">Worker Details</h3>
            {worker ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={worker.img}
                    alt={worker.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#2A6F97]"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-[#0A2647]">{worker.name}</h4>
                    <p className="text-[#144272]">{worker.service.charAt(0).toUpperCase() + worker.service.slice(1)}</p>
                  </div>
                </div>
                <p className="text-[#144272]"><strong>Experience:</strong> {worker.experience}</p>
                <p className="text-[#144272]"><strong>Rating:</strong> {worker.rating} ★</p>
                <p className="text-[#144272]"><strong>Price:</strong> ₹{worker.price}/{worker.availability}</p>
                <p className="text-[#144272]"><strong>Description:</strong> {worker.desc}</p>
              </div>
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
            <h3 className="text-2xl font-semibold font-gilroy mb-4 text-[#0A2647]">Booking Information</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-[#144272] mb-1">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 rounded-lg border border-[#144272] focus:outline-none focus:ring-2 focus:ring-[#2A6F97] text-[#0A2647] bg-white"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-[#144272] mb-1">Contact Number</label>
                <input
                  type="text"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full p-3 rounded-lg border border-[#144272] focus:outline-none focus:ring-2 focus:ring-[#2A6F97] text-[#0A2647] bg-white"
                />
                {errors.contact && <p className="text-red-500 text-sm mt-1">{errors.contact}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-[#144272] mb-1">Address</label>
                <textarea
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full p-3 rounded-lg border border-[#144272] focus:outline-none focus:ring-2 focus:ring-[#2A6F97] text-[#0A2647] bg-white"
                  rows="3"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-[#144272] mb-1">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full p-3 rounded-lg border border-[#144272] focus:outline-none focus:ring-2 focus:ring-[#2A6F97] text-[#0A2647] bg-white"
                />
                {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-[#144272] mb-1">Duration</label>
                <select
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full p-3 rounded-lg border border-[#144272] focus:outline-none focus:ring-2 focus:ring-[#2A6F97] text-[#0A2647] bg-white"
                >
                  <option value="">Select Duration</option>
                  <option value="1 Day">1 Day</option>
                  <option value="1 Week">1 Week</option>
                  <option value="1 Month">1 Month</option>
                </select>
                {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration}</p>}
              </div>
              <div className="mb-4">
                <label className="block text-[#144272] mb-1">Time Slot</label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full p-3 rounded-lg border border-[#144272] focus:outline-none focus:ring-2 focus:ring-[#2A6F97] text-[#0A2647] bg-white"
                >
                  <option value="">Select Time Slot</option>
                  <option value="9:00 AM - 12:00 PM">9:00 AM - 12:00 PM</option>
                  <option value="12:00 PM - 3:00 PM">12:00 PM - 3:00 PM</option>
                  <option value="3:00 PM - 6:00 PM">3:00 PM - 6:00 PM</option>
                  <option value="6:00 PM - 9:00 PM">6:00 PM - 9:00 PM</option>
                </select>
                {errors.timeSlot && <p className="text-red-500 text-sm mt-1">{errors.timeSlot}</p>}
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