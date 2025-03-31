import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import ChatbotWidget from '../components/ChatbotWidget.jsx';

const Payment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { booking, worker } = state || {};

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    document.body.appendChild(script);
  }, []);

  const handlePayment = () => {
    const options = {
      key: 'rzp_test_jsP25tWjtceUAz', // Your Razorpay Test Key
      amount: worker.price * 100, // In paise
      currency: 'INR',
      name: 'MEUN Services',
      description: `Hiring ${worker.name}`,
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        navigate('/dashboard');
      },
      prefill: { name: booking.name, contact: booking.contact },
      theme: { color: '#1E40AF' },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <ChatbotWidget />
      <section className="py-12 container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Payment Details</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
          <p><strong>Worker:</strong> {worker?.name}</p>
          <p><strong>Price:</strong> ₹{worker?.price}</p>
          <p><strong>Duration:</strong> {booking?.duration}</p>
          <button onClick={handlePayment} className="mt-4 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition">
            Pay Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Payment;