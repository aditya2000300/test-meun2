

import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import ChatbotWidget from '../components/ChatbotWidget.jsx';

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { booking, worker } = state || {};

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    if (!worker || !booking) {
      alert('Missing booking or worker details. Please go back and try again.');
      return;
    }

    const options = {
      key: 'rzp_test_jsP25tWjtceUAz', // Your Razorpay Test Key
      amount: worker.price * 100, // In paise
      currency: 'INR',
      name: 'MEUN Services',
      description: `Hiring ${worker.name}`,
      handler: function (response) {
        // Save booking data to localStorage
        const bookingData = {
          booking,
          worker,
          paymentId: response.razorpay_payment_id,
          timestamp: new Date().toISOString(),
        };
        const existingBookings = JSON.parse(localStorage.getItem('bookings')) || [];
        localStorage.setItem('bookings', JSON.stringify([...existingBookings, bookingData]));

        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        navigate('/dashboard', { state: { booking, worker, paymentId: response.razorpay_payment_id } });
      },
      prefill: { name: booking.name, contact: booking.contact },
      theme: { color: '#F4A261' },
    };
    const rzp = new window.Razorpay(options);
    rzp.on('payment.failed', function (response) {
      alert(`Payment Failed! Error: ${response.error.description}`);
    });
    rzp.open();
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
          Payment Details
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg italic text-[#F4A261] max-w-2xl mx-auto"
        >
          Complete your payment to confirm your booking with {worker?.name || 'a worker'}.
        </motion.p>
      </section>

      {/* Payment Summary Section */}
      <section className="py-12 px-4 container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Booking Summary */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-6 bg-white rounded-2xl shadow-lg border border-[#144272]"
          >
            <h3 className="text-2xl font-semibold font-gilroy mb-4 text-[#0A2647]">Booking Summary</h3>
            {booking && worker ? (
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
                <p className="text-[#144272]"><strong>Price:</strong> ₹{worker.price}/{worker.availability}</p>
                <p className="text-[#144272]"><strong>Duration:</strong> {booking.duration}</p>
                <p className="text-[#144272]"><strong>Time Slot:</strong> {booking.timeSlot}</p>
                <p className="text-[#144272]"><strong>Date:</strong> {booking.date}</p>
                <p className="text-[#144272]"><strong>Customer:</strong> {booking.name}</p>
                <p className="text-[#144272]"><strong>Contact:</strong> {booking.contact}</p>
                <p className="text-[#144272]"><strong>Address:</strong> {booking.address}</p>
              </div>
            ) : (
              <p className="text-[#144272]">No booking details available. Please go back and try again.</p>
            )}
          </motion.div>

          {/* Payment Action */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-6 bg-white rounded-2xl shadow-lg border border-[#144272] flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold font-gilroy mb-4 text-[#0A2647]">Payment Information</h3>
              <p className="text-[#144272] mb-2">You are about to pay:</p>
              <p className="text-3xl font-bold text-[#F4A261] mb-4">₹{worker?.price || 'N/A'}</p>
              <div className="flex items-center space-x-2 mb-4">
                <img src="https://razorpay.com/assets/razorpay-logo.svg" alt="Razorpay" className="h-6" />
                <p className="text-[#144272]">Secure payment powered by Razorpay</p>
              </div>
            </div>
            <button onClick={handlePayment} className="btn-cta w-full">
              Pay Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Payment;