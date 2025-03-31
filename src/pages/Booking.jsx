import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import ChatbotWidget from '../components/ChatbotWidget.jsx';

const Booking = () => {
  const [formData, setFormData] = useState({ name: '', address: '', contact: '', duration: '', date: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment', { state: { booking: formData, worker: { name: 'Priya Sharma', price: 400 } } });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <ChatbotWidget />
      <section className="py-12 container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Book Your Worker</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 mb-4 border rounded"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full p-2 mb-4 border rounded"
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          />
          <input
            type="text"
            placeholder="Contact Number"
            className="w-full p-2 mb-4 border rounded"
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          />
          <select
            className="w-full p-2 mb-4 border rounded"
            onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
          >
            <option value="">Select Duration</option>
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
          <input
            type="date"
            className="w-full p-2 mb-4 border rounded"
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          />
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
            Proceed to Payment
          </button>
        </form>
      </section>
    </div>
  );
};

export default Booking;