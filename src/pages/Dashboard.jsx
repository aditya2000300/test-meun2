// import { useLocation } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import Navbar from '../components/Navbar.jsx';
// import ChatbotWidget from '../components/ChatbotWidget.jsx';

// const Dashboard = () => {
//   const { state } = useLocation();
//   const { booking, worker, paymentId } = state || {};

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
//           Your Dashboard
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-lg italic text-[#F4A261] max-w-2xl mx-auto"
//         >
//           Manage your bookings and view your hired workers.
//         </motion.p>
//       </section>

//       {/* Booking Details Section */}
//       <section className="py-12 px-4 container mx-auto">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-lg border border-[#144272]"
//         >
//           <h3 className="text-2xl font-semibold font-gilroy mb-6 text-[#0A2647]">Current Booking</h3>
//           {booking && worker ? (
//             <div className="space-y-4">
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={worker.img}
//                   alt={worker.name}
//                   className="w-16 h-16 rounded-full object-cover border-2 border-[#2A6F97]"
//                 />
//                 <div>
//                   <h4 className="text-xl font-bold text-[#0A2647]">{worker.name}</h4>
//                   <p className="text-[#144272]">{worker.service.charAt(0).toUpperCase() + worker.service.slice(1)}</p>
//                 </div>
//               </div>
//               <p className="text-[#144272]"><strong>Experience:</strong> {worker.experience}</p>
//               <p className="text-[#144272]"><strong>Rating:</strong> {worker.rating} ★</p>
//               <p className="text-[#144272]"><strong>Price:</strong> ₹{worker.price}/{worker.availability}</p>
//               <p className="text-[#144272]"><strong>Duration:</strong> {booking.duration}</p>
//               <p className="text-[#144272]"><strong>Date:</strong> {booking.date}</p>
//               <p className="text-[#144272]"><strong>Customer:</strong> {booking.name}</p>
//               <p className="text-[#144272]"><strong>Contact:</strong> {booking.contact}</p>
//               <p className="text-[#144272]"><strong>Address:</strong> {booking.address}</p>
//               <p className="text-[#144272]"><strong>Payment ID:</strong> {paymentId || 'N/A'}</p>
//               <div className="mt-4">
//                 <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
//                   Booking Confirmed
//                 </span>
//               </div>
//             </div>
//           ) : (
//             <p className="text-[#144272]">No active bookings yet. Book a worker to get started!</p>
//           )}
//         </motion.div>
//       </section>
//     </div>
//   );
// };

// export default Dashboard;





import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import ChatbotWidget from '../components/ChatbotWidget.jsx';

const Dashboard = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [user, setUser] = useState({ name: 'John Doe', email: 'john.doe@example.com' }); // Mock user data

  useEffect(() => {
    // Load bookings from localStorage
    const storedBookings = JSON.parse(localStorage.getItem('bookings')) || [];
    setBookings(storedBookings);
  }, []);

  const handleCancelBooking = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    alert('Booking cancelled successfully!');
  };

  const currentBooking = bookings.length > 0 ? bookings[bookings.length - 1] : null;

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
          Your Dashboard
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg italic text-[#F4A261] max-w-2xl mx-auto"
        >
          Manage your bookings and view your hired workers.
        </motion.p>
      </section>

      {/* Dashboard Content */}
      <section className="py-12 px-4 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* User Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 p-6 bg-white rounded-2xl shadow-lg border border-[#144272]"
          >
            <h3 className="text-2xl font-semibold font-gilroy mb-4 text-[#0A2647]">Profile</h3>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#F4A261] flex items-center justify-center text-white font-bold text-xl">
                {user.name.charAt(0)}
              </div>
              <div>
                <p className="text-[#0A2647] font-semibold">{user.name}</p>
                <p className="text-[#144272] text-sm">{user.email}</p>
              </div>
            </div>
            <button
              onClick={() => alert('Edit Profile feature coming soon!')}
              className="w-full py-2 px-4 bg-[#144272] text-white rounded-lg hover:bg-[#2A6F97] transition-colors"
            >
              Edit Profile
            </button>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Current Booking Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="p-8 bg-white rounded-2xl shadow-lg border border-[#144272]"
            >
              <h3 className="text-2xl font-semibold font-gilroy mb-6 text-[#0A2647]">Current Booking</h3>
              {currentBooking ? (
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={currentBooking.worker.img}
                      alt={currentBooking.worker.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#2A6F97]"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-[#0A2647]">{currentBooking.worker.name}</h4>
                      <p className="text-[#144272]">
                        {currentBooking.worker.service.charAt(0).toUpperCase() + currentBooking.worker.service.slice(1)}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#144272]"><strong>Experience:</strong> {currentBooking.worker.experience}</p>
                  <p className="text-[#144272]"><strong>Rating:</strong> {currentBooking.worker.rating} ★</p>
                  <p className="text-[#144272]"><strong>Price:</strong> ₹{currentBooking.worker.price}/{currentBooking.worker.availability}</p>
                  <p className="text-[#144272]"><strong>Duration:</strong> {currentBooking.booking.duration}</p>
                  <p className="text-[#144272]"><strong>Date:</strong> {currentBooking.booking.date}</p>
                  <p className="text-[#144272]"><strong>Customer:</strong> {currentBooking.booking.name}</p>
                  <p className="text-[#144272]"><strong>Contact:</strong> {currentBooking.booking.contact}</p>
                  <p className="text-[#144272]"><strong>Address:</strong> {currentBooking.booking.address}</p>
                  <p className="text-[#144272]"><strong>Payment ID:</strong> {currentBooking.paymentId}</p>
                  <p className="text-[#144272]"><strong>Booked On:</strong> {new Date(currentBooking.timestamp).toLocaleString()}</p>
                  <div className="mt-4 flex space-x-4">
                    <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-800">
                      Booking Confirmed
                    </span>
                    <button
                      onClick={() => handleCancelBooking(bookings.length - 1)}
                      className="px-3 py-1 rounded-full text-sm font-semibold bg-red-100 text-red-800 hover:bg-red-200 transition-colors"
                    >
                      Cancel Booking
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-[#144272]">No active bookings yet. Book a worker to get started!</p>
              )}
            </motion.div>

            {/* Past Bookings Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-8 bg-white rounded-2xl shadow-lg border border-[#144272]"
            >
              <h3 className="text-2xl font-semibold font-gilroy mb-6 text-[#0A2647]">Past Bookings</h3>
              {bookings.length > 1 ? (
                <div className="space-y-6">
                  {bookings.slice(0, -1).reverse().map((pastBooking, index) => (
                    <div key={index} className="border-b border-[#144272] pb-4">
                      <div className="flex items-center space-x-4">
                        <img
                          src={pastBooking.worker.img}
                          alt={pastBooking.worker.name}
                          className="w-12 h-12 rounded-full object-cover border-2 border-[#2A6F97]"
                        />
                        <div>
                          <h4 className="text-lg font-bold text-[#0A2647]">{pastBooking.worker.name}</h4>
                          <p className="text-[#144272]">
                            {pastBooking.worker.service.charAt(0).toUpperCase() + pastBooking.worker.service.slice(1)}
                          </p>
                        </div>
                      </div>
                      <p className="text-[#144272] mt-2"><strong>Date:</strong> {pastBooking.booking.date}</p>
                      <p className="text-[#144272]"><strong>Duration:</strong> {pastBooking.booking.duration}</p>
                      <p className="text-[#144272]"><strong>Booked On:</strong> {new Date(pastBooking.timestamp).toLocaleString()}</p>
                      <button
                        onClick={() => navigate('/booking', { state: { worker: pastBooking.worker } })}
                        className="mt-2 px-3 py-1 rounded-full text-sm font-semibold bg-[#F4A261] text-white hover:bg-[#E89B41] transition-colors"
                      >
                        Rebook Worker
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[#144272]">No past bookings available.</p>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;