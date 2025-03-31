

// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import CountUp from 'react-countup';
// import Navbar from '../components/Navbar.jsx';
// import ChatbotWidget from '../components/ChatbotWidget.jsx';

// // Sample data for featured workers (more Indian people)
// const featuredWorkers = [
//   {
//     id: 1,
//     name: 'Lakshmi Devi',
//     role: 'Maid',
//     experience: '5 years',
//     rating: 4.5,
//     available: true,
//     img: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1', // Indian woman
//   },
//   {
//     id: 2,
//     name: 'Ramesh Kumar',
//     role: 'Driver',
//     experience: '3 years',
//     rating: 4.0,
//     available: false,
//     img: 'https://images.unsplash.com/photo-1506794778202-c1f4c9e6e2e5', // Indian man
//   },
//   {
//     id: 3,
//     name: 'Sunita Rani',
//     role: 'Cook',
//     experience: '4 years',
//     rating: 4.8,
//     available: true,
//     img: 'https://images.unsplash.com/photo-1593104537482-1f1e2c0a8b5e', // Indian woman
//   },
//   {
//     id: 4,
//     name: 'Vikram Singh',
//     role: 'Security Guard',
//     experience: '6 years',
//     rating: 4.7,
//     available: true,
//     img: 'https://images.unsplash.com/photo-1503443207922-3c9b3c6780b5', // Indian man
//   },
//   {
//     id: 5,
//     name: 'Geeta Bai',
//     role: 'Cleaner',
//     experience: '2 years',
//     rating: 4.2,
//     available: false,
//     img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', // Indian woman
//   },
//   {
//     id: 6,
//     name: 'Arjun Yadav',
//     role: 'Caretaker',
//     experience: '3 years',
//     rating: 4.5,
//     available: true,
//     img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e', // Indian man
//   },
// ];

// // Sample data for testimonials (more Indian people)
// const testimonials = [
//   {
//     name: 'Amit Sharma',
//     feedback: 'MEUN made hiring a maid so easy! Lakshmi is amazing.',
//     rating: 5,
//     img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d', // Indian man
//   },
//   {
//     name: 'Priya Gupta',
//     feedback: 'I hired a driver through MEUN, and the process was seamless.',
//     rating: 4,
//     img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330', // Indian woman
//   },
//   {
//     name: 'Ravi Patel',
//     feedback: 'The cook we hired prepares delicious Indian meals. Thank you, MEUN!',
//     rating: 4.5,
//     img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e', // Indian man
//   },
//   {
//     name: 'Sneha Reddy',
//     feedback: 'The security guard we hired is very professional. Great service!',
//     rating: 4.8,
//     img: 'https://images.unsplash.com/photo-1570295999919-56cebcd28b2b', // Indian woman
//   },
//   {
//     name: 'Karan Singh',
//     feedback: 'MEUN’s caretaker service is a lifesaver for my elderly parents.',
//     rating: 4.6,
//     img: 'https://images.unsplash.com/photo-1503443207922-3c9b3c6780b5', // Indian man
//   },
// ];

// // Sample data for FAQs
// const faqs = [
//   {
//     question: 'How do I book a worker?',
//     answer: 'Go to the Services page, choose a category, select a worker, and book them by filling out the form.',
//   },
//   {
//     question: 'Is the payment secure?',
//     answer: 'Yes, we use Razorpay for secure payments with a detailed price breakdown.',
//   },
//   {
//     question: 'Can I cancel a booking?',
//     answer: 'Yes, you can cancel from your Dashboard. Refunds are processed as per our policy.',
//   },
//   {
//     question: 'How are workers verified?',
//     answer: 'All workers undergo a thorough background check and verification process before being listed.',
//   },
// ];

// // Sample data for service categories
// const serviceCategories = [
//   { name: 'Maid', icon: '🧹', desc: 'Reliable maids for household tasks.' },
//   { name: 'Driver', icon: '🚗', desc: 'Experienced drivers for safe travel.' },
//   { name: 'Cook', icon: '🍳', desc: 'Skilled cooks for delicious meals.' },
//   { name: 'Security Guard', icon: '🛡️', desc: 'Trained guards for safety.' },
//   { name: 'Cleaner', icon: '🧼', desc: 'Experts in deep cleaning.' },
//   { name: 'Caretaker', icon: '👴', desc: 'Compassionate care for elderly or kids.' },
// ];

// const Home = () => {
//   const [openFaq, setOpenFaq] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [email, setEmail] = useState('');

//   const toggleFaq = (index) => {
//     setOpenFaq(openFaq === index ? null : index);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log(`Searching for: ${searchQuery}`);
//     // Add actual search logic here (e.g., redirect to a search results page)
//   };

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     console.log(`Subscribed with email: ${email}`);
//     setEmail('');
//     // Add actual subscription logic here (e.g., API call)
//   };

//   // Slider settings for react-slick
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white scroll-smooth">
//       {/* Navbar */}
//       <motion.div
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
//       >
//         <Navbar />
//       </motion.div>
//       <ChatbotWidget />

//       {/* Hero Section with Search Bar */}
//       <motion.section
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//         className="relative py-24 px-4 bg-gradient-to-r from-purple-600 to-indigo-800 text-white text-center overflow-hidden"
//       >
//         {/* Animated Background Particles */}
//         <div className="absolute inset-0 opacity-20">
//           <div className="absolute top-0 left-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-400 rounded-full blur-3xl animate-pulse"></div>
//         </div>
//         <h1 className="text-5xl md:text-7xl font-extrabold mb-4 relative z-10">
//           Welcome to <span className="text-yellow-300">MEUN</span>
//         </h1>
//         <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 relative z-10">
//           Hire trusted Indian workers—maids, drivers, cooks, and more—with ease and confidence.
//         </p>
//         <form onSubmit={handleSearch} className="max-w-md mx-auto mb-8 relative z-10">
//           <div className="flex items-center">
//             <input
//               type="text"
//               placeholder="Search for a worker (e.g., Maid in Mumbai)"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
//             />
//             <button
//               type="submit"
//               className="bg-yellow-400 text-black py-3 px-6 rounded-r-lg hover:bg-yellow-500 transition-transform transform hover:scale-105"
//             >
//               Search
//             </button>
//           </div>
//         </form>
//         <Link
//           to="/services"
//           className="inline-block bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full hover:bg-yellow-500 transition-transform transform hover:scale-110 hover:shadow-lg relative z-10"
//         >
//           Explore Services
//         </Link>
//         {/* Animated Scroll-Down Arrow */}
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 1.5 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         >
//           <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//           </svg>
//         </motion.div>
//       </motion.section>

//       {/* Service Categories Section */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="py-20 px-4 container mx-auto"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-purple-800">Our Services</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {serviceCategories.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
//               className="p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-purple-200 text-center"
//             >
//               <div className="text-4xl mb-4">{service.icon}</div>
//               <h3 className="text-xl font-semibold text-purple-700">{service.name}</h3>
//               <p className="text-gray-600 mt-2">{service.desc}</p>
//               <Link
//                 to={`/workers/${service.name.toLowerCase()}`}
//                 className="mt-4 inline-block text-purple-600 hover:text-purple-800 transition-colors"
//               >
//                 View Workers
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* How It Works Section */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="py-20 px-4 container mx-auto bg-gradient-to-r from-purple-50 to-indigo-50"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-purple-800">How It Works</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             {
//               title: 'Choose a Service',
//               desc: 'Select from maids, drivers, cooks, and more.',
//               img: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1', // Indian woman
//             },
//             {
//               title: 'Book a Worker',
//               desc: 'Schedule a booking with your preferred worker.',
//               img: 'https://images.unsplash.com/photo-1506794778202-c1f4c9e6e2e5', // Indian man
//             },
//             {
//               title: 'Pay Securely',
//               desc: 'Complete your payment with Razorpay.',
//               img: 'https://images.unsplash.com/photo-1560264280-88b68371db39',
//             },
//           ].map((step, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.3 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
//               className="p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-purple-200"
//             >
//               <img
//                 src={step.img}
//                 alt={step.title}
//                 className="w-32 h-32 mx-auto mb-4 rounded-full object-cover border-4 border-purple-300"
//               />
//               <h3 className="text-xl font-semibold text-purple-700">{step.title}</h3>
//               <p className="text-gray-600 mt-2">{step.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Stats Counter Section */}
      
// <motion.section
//   initial={{ opacity: 0 }}
//   whileInView={{ opacity: 1 }}
//   transition={{ duration: 1 }}
//   viewport={{ once: true }}
//   className="py-20 px-4 bg-purple-100 text-center"
// >
//   <h2 className="text-4xl md:text-5xl font-bold mb-16 text-purple-800">Our Impact</h2>
//   <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//     >
//       <h3 className="text-5xl font-bold text-purple-600">
//         <CountUp start={0} end={50} duration={2} suffix="+" />
//       </h3>
//       <p className="text-gray-600 mt-2">Verified Workers</p>
//     </motion.div>
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//     >
//       <h3 className="text-5xl font-bold text-purple-600">
//         <CountUp start={0} end={100} duration={2} suffix="+" />
//       </h3>
//       <p className="text-gray-600 mt-2">Happy Customers</p>
//     </motion.div>
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//     >
//       <h3 className="text-5xl font-bold text-purple-600">
//         <CountUp start={0} end={5} duration={2} suffix="+" />
//       </h3>
//       <p className="text-gray-600 mt-2">Cities Served</p>
//     </motion.div>
//   </div>
// </motion.section>

//       {/* Featured Workers Section with Slider */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="py-20 px-4 container mx-auto"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-purple-800">Featured Workers</h2>
//         <Slider {...sliderSettings}>
//           {featuredWorkers.map((worker) => (
//             <motion.div
//               key={worker.id}
//               whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)' }}
//               className="p-4"
//             >
//               <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-purple-200 relative">
//                 {worker.available && (
//                   <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
//                     Available Now
//                   </span>
//                 )}
//                 <img
//                   src={worker.img}
//                   alt={worker.name}
//                   className="w-full h-56 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-purple-700">{worker.name}</h3>
//                   <p className="text-gray-600">{worker.role}</p>
//                   <p className="text-gray-600 mt-1">Experience: {worker.experience}</p>
//                   <p className="text-yellow-500 mt-1">Rating: {worker.rating} ★</p>
//                   <Link
//                     to={`/workers/${worker.role.toLowerCase()}`}
//                     className="mt-4 inline-block bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors"
//                   >
//                     Hire Now
//                   </Link>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </Slider>
//       </motion.section>

//       {/* Testimonials Section */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="py-20 px-4 bg-gradient-to-r from-purple-100 to-indigo-100"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-purple-800">What Our Users Say</h2>
//         <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//               whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
//               className="p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-purple-200"
//             >
//               <img
//                 src={testimonial.img}
//                 alt={testimonial.name}
//                 className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-purple-300"
//               />
//               <p className="text-gray-600 italic mb-4">"{testimonial.feedback}"</p>
//               <div className="text-center">
//                 <h3 className="text-lg font-semibold text-purple-700">{testimonial.name}</h3>
//                 <p className="text-yellow-500">{testimonial.rating} ★</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* FAQ Section */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="py-20 px-4 container mx-auto"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-purple-800">Frequently Asked Questions</h2>
//         <div className="space-y-4 max-w-3xl mx-auto">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="bg-white/80 backdrop-blur-md rounded-lg shadow-md border border-purple-200"
//             >
//               <button
//                 onClick={() => toggleFaq(index)}
//                 className="w-full p-4 text-left flex justify-between items-center text-lg font-semibold text-purple-700 hover:bg-purple-50 transition-colors"
//               >
//                 {faq.question}
//                 <motion.span
//                   animate={{ rotate: openFaq === index ? 45 : 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {openFaq === index ? '×' : '+'}
//                 </motion.span>
//               </button>
//               <AnimatePresence>
//                 {openFaq === index && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: 'auto', opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="p-4 pt-0 text-gray-600"
//                   >
//                     {faq.answer}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Newsletter Subscription Section */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-800 text-white text-center"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold mb-4">Stay Updated with MEUN</h2>
//         <p className="text-lg mb-8 max-w-2xl mx-auto">Subscribe to our newsletter for the latest updates, offers, and worker availability alerts.</p>
//         <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
//           <div className="flex items-center">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
//               required
//             />
//             <button
//               type="submit"
//               className="bg-yellow-400 text-black py-3 px-6 rounded-r-lg hover:bg-yellow-500 transition-transform transform hover:scale-105"
//             >
//               Subscribe
//             </button>
//           </div>
//         </form>
//       </motion.section>

//       {/* Footer with Social Media Links */}
//       <footer className="py-10 bg-purple-900 text-white text-center">
//         <h3 className="text-2xl font-semibold mb-4">MEUN</h3>
//         <p className="text-lg mb-4">Connecting you with trusted Indian workers since 2025.</p>
//         <div className="flex justify-center space-x-6 mb-6">
//           <a href="#" className="text-2xl hover:text-yellow-300 transition-colors">📘</a>
//           <a href="#" className="text-2xl hover:text-yellow-300 transition-colors">🐦</a>
//           <a href="#" className="text-2xl hover:text-yellow-300 transition-colors">📸</a>
//           <a href="#" className="text-2xl hover:text-yellow-300 transition-colors">🔗</a>
//         </div>
//         <div className="space-x-4">
//           <a href="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</a>
//           <a href="#" className="hover:text-yellow-300 transition-colors">Terms of Service</a>
//           <a href="#" className="hover:text-yellow-300 transition-colors">Contact Us</a>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Home;






// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Tilt from 'react-parallax-tilt';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt, faArrowUp } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Correct import for social media icons
// import Navbar from '../components/Navbar.jsx';
// import ChatbotWidget from '../components/ChatbotWidget.jsx';

// // Fix for Leaflet marker icons
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
//   iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
//   shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
// });

// // Sample data for featured workers (more Indian people with high-quality images)
// const featuredWorkers = [
//   {
//     id: 1,
//     name: 'Lakshmi Devi',
//     role: 'Maid',
//     experience: '5 years',
//     rating: 4.5,
//     available: true,
//     img: 'https://images.pexels.com/photos/6146974/pexels-photo-6146974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     reviews: [
//       { user: 'Priya G.', comment: 'Great service!', rating: 5 },
//       { user: 'Amit S.', comment: 'Very reliable.', rating: 4.5 },
//     ],
//   },
//   {
//     id: 2,
//     name: 'Ramesh Kumar',
//     role: 'Driver',
//     experience: '3 years',
//     rating: 4.0,
//     available: false,
//     img: 'https://images.pexels.com/photos/6146976/pexels-photo-6146976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     reviews: [
//       { user: 'Sneha R.', comment: 'Punctual and safe driver.', rating: 4 },
//       { user: 'Ravi P.', comment: 'Good experience.', rating: 4 },
//     ],
//   },
//   {
//     id: 3,
//     name: 'Sunita Rani',
//     role: 'Cook',
//     experience: '4 years',
//     rating: 4.8,
//     available: true,
//     img: 'https://images.pexels.com/photos/6146978/pexels-photo-6146978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     reviews: [
//       { user: 'Karan S.', comment: 'Amazing food!', rating: 5 },
//       { user: 'Amit S.', comment: 'Loved the meals.', rating: 4.8 },
//     ],
//   },
//   {
//     id: 4,
//     name: 'Vikram Singh',
//     role: 'Security Guard',
//     experience: '6 years',
//     rating: 4.7,
//     available: true,
//     img: 'https://images.pexels.com/photos/6146980/pexels-photo-6146980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     reviews: [
//       { user: 'Priya G.', comment: 'Very professional.', rating: 4.7 },
//       { user: 'Sneha R.', comment: 'Feel safe with him.', rating: 4.5 },
//     ],
//   },
//   {
//     id: 5,
//     name: 'Geeta Bai',
//     role: 'Cleaner',
//     experience: '2 years',
//     rating: 4.2,
//     available: false,
//     img: 'https://images.pexels.com/photos/6146982/pexels-photo-6146982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     reviews: [
//       { user: 'Ravi P.', comment: 'Good cleaning service.', rating: 4 },
//       { user: 'Karan S.', comment: 'Satisfactory work.', rating: 4.2 },
//     ],
//   },
//   {
//     id: 6,
//     name: 'Arjun Yadav',
//     role: 'Caretaker',
//     experience: '3 years',
//     rating: 4.5,
//     available: true,
//     img: 'https://images.pexels.com/photos/6146984/pexels-photo-6146984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//     reviews: [
//       { user: 'Amit S.', comment: 'Very caring.', rating: 4.5 },
//       { user: 'Sneha R.', comment: 'Great with kids.', rating: 4.5 },
//     ],
//   },
// ];

// // Sample data for testimonials
// const testimonials = [
//   {
//     name: 'Amit Sharma',
//     feedback: 'MEUN made hiring a maid so easy! Lakshmi is amazing.',
//     rating: 5,
//     img: 'https://images.pexels.com/photos/6146986/pexels-photo-6146986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },
//   {
//     name: 'Priya Gupta',
//     feedback: 'I hired a driver through MEUN, and the process was seamless.',
//     rating: 4,
//     img: 'https://images.pexels.com/photos/6146988/pexels-photo-6146988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },
//   {
//     name: 'Ravi Patel',
//     feedback: 'The cook we hired prepares delicious Indian meals. Thank you, MEUN!',
//     rating: 4.5,
//     img: 'https://images.pexels.com/photos/6146990/pexels-photo-6146990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//   },
//   {
//     name: 'Sneha Reddy',
//     feedback: 'The security guard we hired is very professional. Great service!',
//     rating: 4.8,
//     img: 'https://images.unsplash.com/photo-1497486443155-158cceb6629a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHxpbmRpYW4lMjB3b3JrZXJzfGVufDB8fDB8fHww',
//   },
//   {
//     name: 'Karan Singh',
//     feedback: 'MEUN’s caretaker service is a lifesaver for my elderly parents.',
//     rating: 4.6,
//     img: 'https://images.unsplash.com/photo-1601049634293-c6302e269a2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fGluZGlhbiUyMHdvcmtlcnN8ZW58MHx8MHx8fDA%3D',
//   },
// ];

// // Sample data for FAQs
// const faqs = [
//   {
//     question: 'How do I book a worker?',
//     answer: 'Go to the Services page, choose a category, select a worker, and book them by filling out the form.',
//   },
//   {
//     question: 'Is the payment secure?',
//     answer: 'Yes, we use Razorpay for secure payments with a detailed price breakdown.',
//   },
//   {
//     question: 'Can I cancel a booking?',
//     answer: 'Yes, you can cancel from your Dashboard. Refunds are processed as per our policy.',
//   },
//   {
//     question: 'How are workers verified?',
//     answer: 'All workers undergo a thorough background check and verification process before being listed.',
//   },
// ];

// // Sample data for service categories
// const serviceCategories = [
//   { name: 'Maid', icon: '🧹', desc: 'Reliable maids for household tasks.' },
//   { name: 'Driver', icon: '🚗', desc: 'Experienced drivers for safe travel.' },
//   { name: 'Cook', icon: '🍳', desc: 'Skilled cooks for delicious meals.' },
//   { name: 'Security Guard', icon: '🛡️', desc: 'Trained guards for safety.' },
//   { name: 'Cleaner', icon: '🧼', desc: 'Experts in deep cleaning.' },
//   { name: 'Caretaker', icon: '👴', desc: 'Compassionate care for elderly or kids.' },
// ];

// // Sample data for live worker availability ticker
// const liveAvailability = [
//   'Lakshmi Devi (Maid) is available now!',
//   'Sunita Rani (Cook) just became available!',
//   'Vikram Singh (Security Guard) is ready to work!',
//   'Arjun Yadav (Caretaker) is available for booking!',
// ];

// // Sample data for cities served (for the interactive map)
// const citiesServed = [
//   { name: 'Mumbai', position: [19.0760, 72.8777] },
//   { name: 'Delhi', position: [28.7041, 77.1025] },
//   { name: 'Bangalore', position: [12.9716, 77.5946] },
//   { name: 'Chennai', position: [13.0827, 80.2707] },
//   { name: 'Kolkata', position: [22.5726, 88.3639] },
// ];

// // Worker of the Month data
// const workerOfTheMonth = {
//   name: 'Rohit Khatri',
//   role: 'Cook',
//   experience: '4 years',
//   rating: 4.8,
//   img: 'https://plus.unsplash.com/premium_photo-1722682239201-21c8173e776b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGluZGlhbiUyMHdvcmtlcnN8ZW58MHx8MHx8fDA%3D',
//   video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
// };

// const Home = () => {
//   const [openFaq, setOpenFaq] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [email, setEmail] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(null);
//   const [tickerIndex, setTickerIndex] = useState(0);
//   const [filter, setFilter] = useState('All');
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

//   const toggleFaq = (index) => {
//     setOpenFaq(openFaq === index ? null : index);
//   };

//   const toggleModal = (id) => {
//     setIsModalOpen(isModalOpen === id ? null : id);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log(`Searching for: ${searchQuery}`);
//   };

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     console.log(`Subscribed with email: ${email}`);
//     setEmail('');
//   };

//   const handleContactSubmit = (e) => {
//     e.preventDefault();
//     console.log('Contact form submitted:', contactForm);
//     setContactForm({ name: '', email: '', message: '' });
//   };

//   // Ticker animation for live worker availability
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTickerIndex((prev) => (prev + 1) % liveAvailability.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // Filter workers
//   const filteredWorkers = filter === 'All' ? featuredWorkers : featuredWorkers.filter(worker => worker.role === filter);

//   // Slider settings for react-slick (Featured Workers)
//   const workerSliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   // Slider settings for testimonials
//   const testimonialSliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   // Staggered animation for children
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
//   };

//   return (
//     <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-purple-100 to-white'} scroll-smooth`}>
//       {/* Dark Mode Toggle */}
//       <motion.button
//         onClick={() => setIsDarkMode(!isDarkMode)}
//         className="fixed top-4 right-4 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors z-50"
//         whileHover={{ scale: 1.1 }}
//       >
//         {isDarkMode ? '☀️' : '🌙'}
//       </motion.button>

//       {/* Navbar */}
//       <motion.div
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
//       >
//         <Navbar />
//       </motion.div>
//       <ChatbotWidget />

//       {/* Hero Section */}
//       <motion.section
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//         className="relative py-24 px-4 bg-gradient-to-r from-purple-600 to-indigo-800 text-white text-center overflow-hidden parallax"
//         style={{
//           backgroundImage: 'url(https://images.pexels.com/photos/6146978/pexels-photo-6146978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
//           backgroundAttachment: 'fixed',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="absolute inset-0 opacity-20">
//           <motion.div
//             animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
//             transition={{ repeat: Infinity, duration: 5 }}
//             className="absolute top-0 left-0 w-64 h-64 bg-purple-400 rounded-full blur-3xl"
//           />
//           <motion.div
//             animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
//             transition={{ repeat: Infinity, duration: 5, delay: 2 }}
//             className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-400 rounded-full blur-3xl"
//           />
//         </div>
//         <motion.img
//           src="https://via.placeholder.com/150x50?text=MEUN+Logo"
//           alt="MEUN Logo"
//           className="mx-auto mb-4 relative z-10"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         />
//         <h1 className="text-5xl md:text-7xl font-extrabold mb-4 relative z-10 gradient-text">
//           Welcome to MEUN
//         </h1>
//         <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 relative z-10 italic text-gray-200">
//           Hire trusted Indian workers—maids, drivers, cooks, and more—with ease and confidence.
//         </p>
//         <form onSubmit={handleSearch} className="max-w-md mx-auto mb-8 relative z-10">
//           <div className="flex items-center">
//             <input
//               type="text"
//               placeholder="Search for a worker (e.g., Maid in Mumbai)"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-black"
//             />
//             <button
//               type="submit"
//               className="btn-secondary"
//             >
//               Search
//             </button>
//           </div>
//         </form>
//         <Link
//           to="/services"
//           className="inline-block btn-primary relative z-10"
//         >
//           Explore Services
//         </Link>
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 1.5 }}
//           className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//         >
//           <FontAwesomeIcon icon={faArrowUp} className="w-8 h-8 text-white rotate-180" />
//         </motion.div>
//       </motion.section>

//       {/* Live Worker Availability Ticker */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="py-4 bg-purple-800 text-white text-center"
//       >
//         <motion.div
//           key={tickerIndex}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.5 }}
//         >
//           <p className="text-lg font-semibold">{liveAvailability[tickerIndex]}</p>
//         </motion.div>
//       </motion.section>

//       {/* Service Categories Section */}
//       <motion.section
//         initial="hidden"
//         whileInView="visible"
//         variants={containerVariants}
//         viewport={{ once: true }}
//         className="py-20 px-4 container mx-auto"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-purple-800 gradient-text">Our Services</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {serviceCategories.map((service, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               className="p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-purple-200 text-center"
//             >
//               <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
//                 <motion.div
//                   whileHover={{ rotate: 360, scale: 1.2 }}
//                   transition={{ duration: 0.5 }}
//                   className="text-4xl mb-4"
//                 >
//                   {service.icon}
//                 </motion.div>
//               </Tilt>
//               <h3 className="text-xl font-semibold text-purple-700">{service.name}</h3>
//               <p className="text-gray-600 mt-2">{service.desc}</p>
//               <Link
//                 to={`/workers/${service.name.toLowerCase()}`}
//                 className="mt-4 inline-block text-purple-600 hover:text-purple-800 transition-colors"
//               >
//                 View Workers
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* How It Works Section */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="py-20 px-4 container mx-auto bg-gradient-to-r from-purple-50 to-indigo-50"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-purple-800 gradient-text">How It Works</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             {
//               title: 'Choose a Service',
//               desc: 'Select from maids, drivers, cooks, and more.',
//               img: 'https://images.pexels.com/photos/6146974/pexels-photo-6146974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//             },
//             {
//               title: 'Book a Worker',
//               desc: 'Schedule a booking with your preferred worker.',
//               img: 'https://images.pexels.com/photos/6146976/pexels-photo-6146976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//             },
//             {
//               title: 'Pay Securely',
//               desc: 'Complete your payment with Razorpay.',
//               img: 'https://images.pexels.com/photos/6146978/pexels-photo-6146978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//             },
//           ].map((step, index) => (
//             <Tilt key={index} tiltMaxAngleX={15} tiltMaxAngleY={15}>
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: index * 0.3 }}
//                 viewport={{ once: true }}
//                 className="p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-purple-200"
//               >
//                 <img
//                   src={step.img}
//                   alt={step.title}
//                   className="w-32 h-32 mx-auto mb-4 rounded-full object-cover border-4 border-purple-300"
//                 />
//                 <h3 className="text-xl font-semibold text-purple-700">{step.title}</h3>
//                 <p className="text-gray-600 mt-2">{step.desc}</p>
//               </motion.div>
//             </Tilt>
//           ))}
//         </div>
//       </motion.section>

//       {/* Worker of the Month Section */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="py-20 px-4 container mx-auto bg-gradient-to-r from-purple-100 to-indigo-100"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-purple-800 gradient-text">Worker of the Month</h2>
//         <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
//           <motion.div
//             whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)' }}
//             className="p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-purple-200 max-w-lg mx-auto"
//           >
//             <img
//               src={workerOfTheMonth.img}
//               alt={workerOfTheMonth.name}
//               className="w-full h-56 object-cover rounded-t-2xl"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-purple-700">{workerOfTheMonth.name}</h3>
//               <p className="text-gray-600">{workerOfTheMonth.role}</p>
//               <p className="text-gray-600 mt-1">Experience: {workerOfTheMonth.experience}</p>
//               <p className="text-yellow-500 mt-1">Rating: {workerOfTheMonth.rating} ★</p>
//               <div className="mt-4">
//                 <iframe
//                   width="100%"
//                   height="200"
//                   src={workerOfTheMonth.video}
//                   title="Worker Introduction"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </Tilt>
//       </motion.section>

//       {/* Stats Counter Section with Progress Bars */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="py-20 px-4 bg-purple-100 text-center"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold mb-16 text-purple-800 gradient-text">Our Impact</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {[
//             { label: 'Verified Workers', value: 500, max: 1000 },
//             { label: 'Happy Customers', value: 10000, max: 15000 },
//             { label: 'Cities Served', value: 50, max: 100 },
//           ].map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-xl font-semibold text-purple-700 mb-2">{stat.label}</h3>
//               <div className="w-full bg-gray-200 rounded-full h-4">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   whileInView={{ width: `${(stat.value / stat.max) * 100}%` }}
//                   transition={{ duration: 2, ease: 'easeOut' }}
//                   className="bg-purple-600 h-4 rounded-full"
//                 />
//               </div>
//               <p className="text-gray-600 mt-2">{stat.value}+</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Featured Workers Section with Filter and Slider */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="py-20 px-4 container mx-auto"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-purple-800 gradient-text">Featured Workers</h2>
//         <div className="flex justify-center space-x-4 mb-8">
//           {['All', 'Maid', 'Driver', 'Cook', 'Security Guard', 'Cleaner', 'Caretaker'].map((role) => (
//             <motion.button
//               key={role}
//               onClick={() => setFilter(role)}
//               className={`py-2 px-4 rounded-lg ${filter === role ? 'bg-purple-600 text-white' : 'bg-purple-200 text-purple-800'} hover:bg-purple-500 hover:text-white transition-colors`}
//               whileHover={{ scale: 1.1 }}
//             >
//               {role}
//             </motion.button>
//           ))}
//         </div>
//         <Slider {...workerSliderSettings}>
//           {filteredWorkers.map((worker) => (
//             <div key={worker.id} className="px-4">
//               <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
//                 <motion.div
//                   whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)' }}
//                   className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-purple-200 relative"
//                 >
//                   {worker.available && (
//                     <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
//                       Available Now
//                     </span>
//                   )}
//                   <img
//                     src={worker.img}
//                     alt={worker.name}
//                     className="w-full h-56 object-cover"
//                   />
//                   <div className="p-6">
//                     <h3 className="text-xl font-semibold text-purple-700">{worker.name}</h3>
//                     <p className="text-gray-600">{worker.role}</p>
//                     <p className="text-gray-600 mt-1">Experience: {worker.experience}</p>
//                     <p className="text-yellow-500 mt-1">Rating: {worker.rating} ★</p>
//                     <div className="mt-4 flex space-x-4">
//                       <Link
//                         to={`/workers/${worker.role.toLowerCase()}`}
//                         className="btn-primary"
//                       >
//                         Hire Now
//                       </Link>
//                       <button
//                         onClick={() => toggleModal(worker.id)}
//                         className="text-purple-600 hover:text-purple-800 transition-colors"
//                       >
//                         View Reviews
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               </Tilt>
//             </div>
//           ))}
//         </Slider>
//         {/* Reviews Modal */}
//         <AnimatePresence>
//           {isModalOpen && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
//             >
//               <motion.div
//                 initial={{ scale: 0.9 }}
//                 animate={{ scale: 1 }}
//                 exit={{ scale: 0.9 }}
//                 className="bg-white p-6 rounded-lg shadow-lg max-w-md"
//               >
//                 <h3 className="text-xl font-semibold text-purple-700 mb-4">
//                   {featuredWorkers.find(worker => worker.id === isModalOpen)?.name} Reviews
//                 </h3>
//                 {featuredWorkers.find(worker => worker.id === isModalOpen)?.reviews.map((review, index) => (
//                   <div key={index} className="mb-4">
//                     <p className="text-gray-600">“{review.comment}” - {review.user}</p>
//                     <p className="text-yellow-500">{review.rating} ★</p>
//                   </div>
//                 ))}
//                 <button
//                   onClick={() => toggleModal(null)}
//                   className="btn-primary mt-4"
//                 >
//                   Close
//                 </button>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.section>

//       {/* Testimonials Section with Carousel */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="py-20 px-4 bg-gradient-to-r from-purple-100 to-indigo-100"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-purple-800 gradient-text">What Our Users Say</h2>
//         <Slider {...testimonialSliderSettings}>
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="px-4">
//               <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
//                 <div className="p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-purple-200">
//                   <img
//                     src={testimonial.img}
//                     alt={testimonial.name}
//                     className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-purple-300"
//                   />
//                   <p className="text-gray-600 italic mb-4">"{testimonial.feedback}"</p>
//                   <div className="text-center">
//                     <h3 className="text-lg font-semibold text-purple-700">{testimonial.name}</h3>
//                     <p className="text-yellow-500">{testimonial.rating} ★</p>
//                   </div>
//                 </div>
//               </Tilt>
//             </div>
//           ))}
//         </Slider>
//       </motion.section>

//       {/* Cities Served Section with Interactive Map */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="py-20 px-4 container mx-auto"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-purple-800 gradient-text">Cities We Serve</h2>
//         <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '400px', width: '100%' }} className="rounded-2xl shadow-lg">
//           <TileLayer
//             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//             attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           />
//           {citiesServed.map((city, index) => (
//             <Marker key={index} position={city.position}>
//               <Popup>{city.name}</Popup>
//             </Marker>
//           ))}
//         </MapContainer>
//       </motion.section>

//       {/* FAQ Section */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="py-20 px-4 container mx-auto"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-purple-800 gradient-text">Frequently Asked Questions</h2>
//         <div className="space-y-4 max-w-3xl mx-auto">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="bg-white/80 backdrop-blur-md rounded-lg shadow-md border border-purple-200"
//             >
//               <button
//                 onClick={() => toggleFaq(index)}
//                 className="w-full p-4 text-left flex justify-between items-center text-lg font-semibold text-purple-700 hover:bg-purple-50 transition-colors"
//               >
//                 {faq.question}
//                 <motion.span
//                   animate={{ rotate: openFaq === index ? 45 : 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {openFaq === index ? '×' : '+'}
//                 </motion.span>
//               </button>
//               <AnimatePresence>
//                 {openFaq === index && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: 'auto', opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                     className="p-4 pt-0 text-gray-600"
//                   >
//                     {faq.answer}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Newsletter Subscription Section */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         viewport={{ once: true }}
//         className="py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-800 text-white text-center"
//       >
//         <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Stay Updated with MEUN</h2>
//         <p className="text-lg mb-8 max-w-2xl mx-auto italic">Subscribe to our newsletter for the latest updates, offers, and worker availability alerts.</p>
//         <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
//           <div className="flex items-center">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
//               required
//             />
//             <button
//               type="submit"
//               className="btn-secondary"
//             >
//               Subscribe
//             </button>
//           </div>
//         </form>
//       </motion.section>

//       {/* Footer with Contact Form */}
//       <footer className="py-10 bg-purple-900 text-white text-center">
//         <motion.img
//           src="https://via.placeholder.com/150x50?text=MEUN+Logo"
//           alt="MEUN Logo"
//           className="mx-auto mb-4"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         />
//         <p className="text-lg mb-4 italic">Connecting you with trusted Indian workers since 2025.</p>
//         <div className="flex justify-center space-x-6 mb-6">
//           <a href="#" className="text-2xl hover:text-yellow-300 transition-colors">
//             <FontAwesomeIcon icon={faFacebook} />
//           </a>
//           <a href="#" className="text-2xl hover:text-yellow-300 transition-colors">
//             <FontAwesomeIcon icon={faTwitter} />
//           </a>
//           <a href="#" className="text-2xl hover:text-yellow-300 transition-colors">
//             <FontAwesomeIcon icon={faInstagram} />
//           </a>
//           <a href="#" className="text-2xl hover:text-yellow-300 transition-colors">
//             <FontAwesomeIcon icon={faLinkedin} />
//           </a>
//         </div>
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 1 }}
//           className="max-w-md mx-auto mb-6"
//         >
//           <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
//           <form onSubmit={handleContactSubmit}>
//             <input
//               type="text"
//               placeholder="Your Name"
//               value={contactForm.name}
//               onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
//               className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
//               required
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               value={contactForm.email}
//               onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
//               className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
//               required
//             />
//             <textarea
//               placeholder="Your Message"
//               value={contactForm.message}
//               onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
//               className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
//               rows="4"
//               required
//             />
//             <button
//               type="submit"
//               className="btn-primary w-full"
//             >
//               Send Message
//             </button>
//           </form>
//         </motion.div>
//         <div className="space-x-4">
//           <a href="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</a>
//           <a href="#" className="hover:text-yellow-300 transition-colors">Terms of Service</a>
//           <a href="#" className="hover:text-yellow-300 transition-colors">Contact Us</a>
//         </div>
//       </footer>

//       {/* Fixed "Hire Now" Button */}
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="fixed bottom-20 right-4 z-50"
//       >
//         <Link
//           to="/services"
//           className="bg-purple-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-110"
//         >
//           <motion.div
//             animate={{ scale: [1, 1.1, 1] }}
//             transition={{ repeat: Infinity, duration: 1.5 }}
//           >
//             Hire Now
//           </motion.div>
//         </Link>
//       </motion.div>

//       {/* Back-to-Top Button */}
//       <motion.button
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//         className="fixed bottom-4 right-4 bg-purple-600 text-white p-4 rounded-full hover:bg-purple-700 transition-transform transform hover:scale-110 z-50"
//       >
//         <FontAwesomeIcon icon={faArrowUp} />
//       </motion.button>
//     </div>
//   );
// };

// export default Home;


import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Tilt from 'react-parallax-tilt';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ChatbotWidget from '../components/ChatbotWidget.jsx';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

// Fix for Leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Sample data for featured workers
const featuredWorkers = [
  {
    id: 1,
    name: 'Lakshmi Devi',
    role: 'Maid',
    experience: '5 years',
    rating: 4.5,
    available: true,
    img: 'https://images.pexels.com/photos/6146974/pexels-photo-6146974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    reviews: [
      { user: 'Priya G.', comment: 'Great service!', rating: 5 },
      { user: 'Amit S.', comment: 'Very reliable.', rating: 4.5 },
    ],
  },
  {
    id: 2,
    name: 'Ramesh Kumar',
    role: 'Driver',
    experience: '3 years',
    rating: 4.0,
    available: false,
    img: 'https://images.pexels.com/photos/6146976/pexels-photo-6146976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    reviews: [
      { user: 'Sneha R.', comment: 'Punctual and safe driver.', rating: 4 },
      { user: 'Ravi P.', comment: 'Good experience.', rating: 4 },
    ],
  },
  {
    id: 3,
    name: 'Sunita Rani',
    role: 'Cook',
    experience: '4 years',
    rating: 4.8,
    available: true,
    img: 'https://images.pexels.com/photos/6146978/pexels-photo-6146978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    reviews: [
      { user: 'Karan S.', comment: 'Amazing food!', rating: 5 },
      { user: 'Amit S.', comment: 'Loved the meals.', rating: 4.8 },
    ],
  },
  {
    id: 4,
    name: 'Vikram Singh',
    role: 'Security Guard',
    experience: '6 years',
    rating: 4.7,
    available: true,
    img: 'https://images.pexels.com/photos/6146980/pexels-photo-6146980.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    reviews: [
      { user: 'Priya G.', comment: 'Very professional.', rating: 4.7 },
      { user: 'Sneha R.', comment: 'Feel safe with him.', rating: 4.5 },
    ],
  },
  {
    id: 5,
    name: 'Geeta Bai',
    role: 'Cleaner',
    experience: '2 years',
    rating: 4.2,
    available: false,
    img: 'https://images.pexels.com/photos/6146982/pexels-photo-6146982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    reviews: [
      { user: 'Ravi P.', comment: 'Good cleaning service.', rating: 4 },
      { user: 'Karan S.', comment: 'Satisfactory work.', rating: 4.2 },
    ],
  },
  {
    id: 6,
    name: 'Arjun Yadav',
    role: 'Caretaker',
    experience: '3 years',
    rating: 4.5,
    available: true,
    img: 'https://images.pexels.com/photos/6146984/pexels-photo-6146984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    reviews: [
      { user: 'Amit S.', comment: 'Very caring.', rating: 4.5 },
      { user: 'Sneha R.', comment: 'Great with kids.', rating: 4.5 },
    ],
  },
];

// Sample data for testimonials
const testimonials = [
  {
    name: 'Amit Sharma',
    feedback: 'MEUN made hiring a maid so easy! Lakshmi is amazing.',
    rating: 5,
    img: 'https://images.pexels.com/photos/6146986/pexels-photo-6146986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Priya Gupta',
    feedback: 'I hired a driver through MEUN, and the process was seamless.',
    rating: 4,
    img: 'https://images.pexels.com/photos/6146988/pexels-photo-6146988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Ravi Patel',
    feedback: 'The cook we hired prepares delicious Indian meals. Thank you, MEUN!',
    rating: 4.5,
    img: 'https://images.pexels.com/photos/6146990/pexels-photo-6146990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Sneha Reddy',
    feedback: 'The security guard we hired is very professional. Great service!',
    rating: 4.8,
    img: 'https://images.pexels.com/photos/6146992/pexels-photo-6146992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Karan Singh',
    feedback: 'MEUN’s caretaker service is a lifesaver for my elderly parents.',
    rating: 4.6,
    img: 'https://images.pexels.com/photos/6146994/pexels-photo-6146994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

// Sample data for FAQs
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
];

// Sample data for service categories
const serviceCategories = [
  { name: 'Maid', icon: '🧹', desc: 'Reliable maids for household tasks.', illustration: 'https://via.placeholder.com/150?text=Maid' },
  { name: 'Driver', icon: '🚗', desc: 'Experienced drivers for safe travel.', illustration: 'https://via.placeholder.com/150?text=Driver' },
  { name: 'Cook', icon: '🍳', desc: 'Skilled cooks for delicious meals.', illustration: 'https://via.placeholder.com/150?text=Cook' },
  { name: 'Security Guard', icon: '🛡️', desc: 'Trained guards for safety.', illustration: 'https://via.placeholder.com/150?text=Security' },
  { name: 'Cleaner', icon: '🧼', desc: 'Experts in deep cleaning.', illustration: 'https://via.placeholder.com/150?text=Cleaner' },
  { name: 'Caretaker', icon: '👴', desc: 'Compassionate care for elderly or kids.', illustration: 'https://via.placeholder.com/150?text=Caretaker' },
];

// Sample data for live worker availability ticker
const liveAvailability = [
  'Lakshmi Devi (Maid) is available now!',
  'Sunita Rani (Cook) just became available!',
  'Vikram Singh (Security Guard) is ready to work!',
  'Arjun Yadav (Caretaker) is available for booking!',
];

// Sample data for cities served (for the interactive map)
const citiesServed = [
  { name: 'Mumbai', position: [19.0760, 72.8777] },
  { name: 'Delhi', position: [28.7041, 77.1025] },
  { name: 'Bangalore', position: [12.9716, 77.5946] },
  { name: 'Chennai', position: [13.0827, 80.2707] },
  { name: 'Kolkata', position: [22.5726, 88.3639] },
];

// Worker of the Month data
const workerOfTheMonth = {
  name: 'Sunita Rani',
  role: 'Cook',
  experience: '4 years',
  rating: 4.8,
  img: 'https://images.pexels.com/photos/6146978/pexels-photo-6146978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
};

// How It Works data with icons
const howItWorksSteps = [
  {
    title: 'Choose a Service',
    desc: 'Select from maids, drivers, cooks, and more.',
    icon: '🛠️',
  },
  {
    title: 'Book a Worker',
    desc: 'Schedule a booking with your preferred worker.',
    icon: '📅',
  },
  {
    title: 'Pay Securely',
    desc: 'Complete your payment with Razorpay.',
    icon: '💳',
  },
];

// Stats data
const stats = [
  { label: 'Verified Workers', value: 500 },
  { label: 'Happy Customers', value: 10000 },
  { label: 'Cities Served', value: 50 },
];

// Before/After data
const beforeAfter = {
  before: {
    img: 'https://via.placeholder.com/600x400?text=Before+MEUN',
    desc: 'Struggling to find reliable workers.',
  },
  after: {
    img: 'https://via.placeholder.com/600x400?text=After+MEUN',
    desc: 'Hiring trusted workers with ease!',
  },
};

// Social Proof data
const socialProof = [
  'Amit just hired a maid!',
  'Priya booked a driver 5 minutes ago!',
  'Ravi hired a cook for his family!',
];

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [tickerIndex, setTickerIndex] = useState(0);
  const [filter, setFilter] = useState('All');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [socialProofIndex, setSocialProofIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);

  // GSAP Animation Refs
  const heroRef = useRef(null);
  const serviceRef = useRef(null);
  const howItWorksRef = useRef(null);
  const statsRef = useRef(null);
  const ctaBannerRef = useRef(null);
  const beforeAfterRef = useRef(null);
  const workerRef = useRef(null);
  const testimonialRef = useRef(null);
  const mapRef = useRef(null);
  const faqRef = useRef(null);
  const newsletterRef = useRef(null);
  const socialProofRef = useRef(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleModal = (id) => {
    setIsModalOpen(isModalOpen === id ? null : id);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Searching for: ${searchQuery}`);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log(`Subscribed with email: ${email}`);
    setEmail('');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    setContactForm({ name: '', email: '', message: '' });
  };

  // Ticker animation for live worker availability
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % liveAvailability.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Social Proof animation
  useEffect(() => {
    const interval = setInterval(() => {
      setSocialProofIndex((prev) => (prev + 1) % socialProof.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Filter workers
  const filteredWorkers = filter === 'All' ? featuredWorkers : featuredWorkers.filter(worker => worker.role === filter);

  // GSAP Animations with ScrollTrigger
  useEffect(() => {
    // Hero Section Animation
    gsap.from('.hero-text', {
      opacity: 0,
      x: 50,
      duration: 1.5,
      ease: 'power3.out',
      onComplete: () => {
        gsap.set('.hero-text', { opacity: 1 }); // Ensure final opacity is 1
      },
    });

    gsap.from('.hero-button', {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: 'elastic.out(1, 0.5)',
      onComplete: () => {
        gsap.set('.hero-button', { opacity: 1 }); // Ensure final opacity is 1
      },
    });

    // Service Cards Animation
    gsap.from('.service-card', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: serviceRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
      onComplete: () => {
        gsap.set('.service-card', { opacity: 1 }); // Ensure final opacity is 1
      },
    });

    // How It Works Animation
    gsap.from('.how-it-works-step', {
      opacity: 0,
      scale: 0.9,
      stagger: 0.3,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: howItWorksRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
      onComplete: () => {
        gsap.set('.how-it-works-step', { opacity: 1 }); // Ensure final opacity is 1
      },
    });

    // Stats Counter Animation
    stats.forEach((stat, index) => {
      gsap.fromTo(
        `.stat-${index}`,
        { innerText: 0, opacity: 0 },
        {
          innerText: stat.value,
          opacity: 1, // Ensure final opacity is 1
          duration: 2,
          ease: 'power1.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // CTA Banner Animation
    gsap.from(ctaBannerRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ctaBannerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
      onComplete: () => {
        gsap.set(ctaBannerRef.current, { opacity: 1 }); // Ensure final opacity is 1
      },
    });

    // Before/After Slider Animation
    gsap.from(beforeAfterRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: beforeAfterRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
      onComplete: () => {
        gsap.set(beforeAfterRef.current, { opacity: 1 }); // Ensure final opacity is 1
      },
    });

    // Featured Workers Animation
    gsap.from('.worker-card', {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: workerRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
      onComplete: () => {
        gsap.set('.worker-card', { opacity: 1 }); // Ensure final opacity is 1
      },
    });

    // Testimonials Animation
    gsap.from('.testimonial-card', {
      opacity: 0,
      scale: 0.9,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: testimonialRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
      onComplete: () => {
        gsap.set('.testimonial-card', { opacity: 1 }); // Ensure final opacity is 1
      },
    });

    // Map Animation
    gsap.from(mapRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: mapRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
      onComplete: () => {
        gsap.set(mapRef.current, { opacity: 1 }); // Ensure final opacity is 1
      },
    });

    // FAQ Animation
    gsap.from('.faq-item', {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: faqRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
      onComplete: () => {
        gsap.set('.faq-item', { opacity: 1 }); // Ensure final opacity is 1
      },
    });

    // Newsletter Animation
    gsap.from(newsletterRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: newsletterRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
      onComplete: () => {
        gsap.set(newsletterRef.current, { opacity: 1 }); // Ensure final opacity is 1
      },
    });

    // Social Proof Animation
    gsap.from(socialProofRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: socialProofRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
      onComplete: () => {
        gsap.set(socialProofRef.current, { opacity: 1 }); // Ensure final opacity is 1
      },
    });
  }, []);

  // Slider settings for react-slick (Featured Workers)
  const workerSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Slider settings for testimonials
  const testimonialSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-[#0A2647] text-white' : 'bg-[#F8FAFC] text-[#0A2647]'} scroll-smooth font-helvetica`}>
      {/* Dark Mode Toggle */}
      <motion.button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-4 right-4 bg-[#144272] text-white p-2 rounded-full hover:bg-[#2A6F97] transition-colors z-50"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {isDarkMode ? '☀️' : '🌙'}
      </motion.button>

      {/* Navbar */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0, opacity: 1 }} // Ensure final opacity is 1
        transition={{ duration: 0.8, type: 'spring', stiffness: 120 }}
        className="sticky top-0 z-50 bg-[#0A2647] shadow-lg"
      >
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between font-gilroy">
          <Link to="/" className="text-2xl font-bold text-white">
            MEUN
          </Link>
          <div className="flex space-x-6">
            {['Home', 'Services', 'About', 'Contact'].map((item, index) => (
              <Link
                key={index}
                to={`/${item.toLowerCase()}`}
                className="text-white hover:text-[#F4A261] transition-colors relative group"
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget.querySelector('.underline'), {
                    width: '100%',
                    duration: 0.3,
                    ease: 'power3.out',
                  });
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget.querySelector('.underline'), {
                    width: '0%',
                    duration: 0.3,
                    ease: 'power3.out',
                  });
                }}
              >
                {item}
                <span className="underline absolute bottom-0 left-0 h-0.5 bg-[#F4A261] w-0 transition-all"></span>
              </Link>
            ))}
          </div>
          <Link to="/signup" className="btn-cta">
            Sign Up
          </Link>
        </nav>
      </motion.div>
      <ChatbotWidget />

      {/* Hero Section */}
      <section ref={heroRef} className="py-20 px-4 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative h-[500px] rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Hero Image"
            className="w-full h-full object-cover"
          />
          {/* Removed the overlay to ensure full visibility */}
        </div>
        <div className="hero-text">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-gilroy gradient-text">
            Welcome to MEUN
          </h1>
          <p className="text-xl md:text-2xl max-w-md mb-8 italic text-[#F4A261] font-helvetica">
            Your Trusted Partner for Hiring Indian Workers
          </p>
          <form onSubmit={handleSearch} className="max-w-md mb-8">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search for a worker (e.g., Maid in Mumbai)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-3 rounded-l-lg border border-[#144272] focus:outline-none focus:ring-2 focus:ring-[#2A6F97] text-[#0A2647] bg-white"
              />
              <button type="submit" className="btn-cta">
                Search
              </button>
            </div>
          </form>
          <Link to="/services" className="inline-block btn-cta hero-button">
            Explore Services
          </Link>
        </div>
      </section>

      {/* Live Worker Availability Ticker */}
      <section className="py-4 bg-[#144272] text-white text-center">
        <motion.div
          key={tickerIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }} // Ensure final opacity is 1
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg font-semibold font-gilroy">{liveAvailability[tickerIndex]}</p>
        </motion.div>
      </section>

      {/* Service Categories Section */}
      <section ref={serviceRef} className="py-20 px-4 container mx-auto bg-[#F8FAFC]">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-gilroy gradient-text">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {serviceCategories.map((service, index) => (
            <div
              key={index}
              className="service-card p-6 bg-white rounded-2xl shadow-lg border border-[#144272] text-center hover:bg-[#2A6F97] transition-all duration-300" // Removed hover:bg-opacity-10
            >
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
                <div className="text-4xl mb-4">{service.icon}</div>
              </Tilt>
              <h3 className="text-xl font-semibold font-gilroy text-[#0A2647]">{service.name}</h3>
              <p className="text-[#144272] mt-2 font-helvetica">{service.desc}</p>
              <Link
                to={`/workers/${service.name.toLowerCase()}`}
                className="mt-4 inline-block text-[#F4A261] hover:text-[#2A6F97] transition-colors font-helvetica"
              >
                View Workers
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section (Timeline Style) */}
      <section ref={howItWorksRef} className="py-20 px-4 container mx-auto bg-[#F8FAFC]">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-gilroy gradient-text">How It Works</h2>
        <div className="relative max-w-3xl mx-auto">
          {howItWorksSteps.map((step, index) => (
            <div key={index} className="how-it-works-step flex items-center mb-12 relative">
              <div className="w-12 h-12 bg-[#0A2647] text-white rounded-full flex items-center justify-center text-2xl mr-6">
                {step.icon}
              </div>
              <div className="flex-1 p-6 bg-white rounded-2xl shadow-lg border border-[#144272]">
                <h3 className="text-xl font-semibold font-gilroy text-[#0A2647]">{step.title}</h3>
                <p className="text-[#144272] mt-2 font-helvetica">{step.desc}</p>
              </div>
              {index < howItWorksSteps.length - 1 && (
                <div className="absolute left-6 top-16 h-12 w-0.5 bg-[#144272]"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Stats Counter Section */}
      <section ref={statsRef} className="py-20 px-4 bg-[#F8FAFC] text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 font-gilroy gradient-text">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className={`text-4xl font-bold font-gilroy text-[#0A2647] mb-2 stat-${index}`}>
                0
              </h3>
              <p className="text-[#144272] font-helvetica">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Banner */}
      <section ref={ctaBannerRef} className="py-16 px-4 bg-[#0A2647] text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-gilroy">Ready to Hire?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto font-helvetica">
          Sign up today and find the perfect worker for your needs in just a few clicks.
        </p>
        <Link to="/signup" className="btn-cta">
          Get Started Now
        </Link>
      </section>

      {/* Before/After Slider */}
      <section ref={beforeAfterRef} className="py-20 px-4 container mx-auto bg-[#F8FAFC]">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-gilroy gradient-text">Life Before & After MEUN</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <img
              src={beforeAfter.before.img}
              alt="Before MEUN"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
            />
            <img
              src={beforeAfter.after.img}
              alt="After MEUN"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ clipPath: `inset(0 0 0 ${sliderValue}%)` }}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={(e) => setSliderValue(e.target.value)}
              className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 z-10"
            />
          </div>
          <div className="flex justify-between mt-4">
            <p className="text-[#144272] font-helvetica">{beforeAfter.before.desc}</p>
            <p className="text-[#144272] font-helvetica">{beforeAfter.after.desc}</p>
          </div>
        </div>
      </section>

      {/* Worker of the Month Section */}
      <section className="py-20 px-4 container mx-auto bg-[#F8FAFC]">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-gilroy gradient-text">Worker of the Month</h2>
        <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-[#144272] max-w-lg mx-auto">
            <img
              src={workerOfTheMonth.img}
              alt={workerOfTheMonth.name}
              className="w-full h-56 object-cover rounded-t-2xl lazy-load"
              loading="lazy"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold font-gilroy text-[#0A2647]">{workerOfTheMonth.name}</h3>
              <p className="text-[#144272] font-helvetica">{workerOfTheMonth.role}</p>
              <p className="text-[#144272] mt-1 font-helvetica">Experience: {workerOfTheMonth.experience}</p>
              <p className="text-yellow-500 mt-1 font-helvetica">Rating: {workerOfTheMonth.rating} ★</p>
              <div className="mt-4">
                <iframe
                  width="100%"
                  height="200"
                  src={workerOfTheMonth.video}
                  title="Worker Introduction"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Tilt>
      </section>

      {/* Featured Workers Section with Filter and Slider */}
      <section ref={workerRef} className="py-20 px-4 container mx-auto bg-[#F8FAFC]">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 font-gilroy gradient-text">Featured Workers</h2>
        <div className="flex justify-center space-x-4 mb-8 flex-wrap">
          {['All', 'Maid', 'Driver', 'Cook', 'Security Guard', 'Cleaner', 'Caretaker'].map((role) => (
            <button
              key={role}
              onClick={() => setFilter(role)}
              className={`py-2 px-4 rounded-lg m-1 ${filter === role ? 'bg-[#0A2647] text-white' : 'bg-[#144272] text-white'} hover:bg-[#2A6F97] transition-colors font-helvetica`}
            >
              {role}
            </button>
          ))}
        </div>
        <Slider {...workerSliderSettings}>
          {filteredWorkers.map((worker) => (
            <div key={worker.id} className="px-4">
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
                <div className="worker-card bg-white rounded-2xl shadow-lg overflow-hidden border border-[#144272] relative">
                  {worker.available && (
                    <span className="absolute top-4 right-4 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full font-helvetica">
                      Available Now
                    </span>
                  )}
                  <img
                    src={worker.img}
                    alt={worker.name}
                    className="w-full h-56 object-cover lazy-load"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold font-gilroy text-[#0A2647]">{worker.name}</h3>
                    <p className="text-[#144272] font-helvetica">{worker.role}</p>
                    <p className="text-[#144272] mt-1 font-helvetica">Experience: {worker.experience}</p>
                    <p className="text-yellow-500 mt-1 font-helvetica">Rating: {worker.rating} ★</p>
                    <div className="mt-4 flex space-x-4">
                      <Link to={`/workers/${worker.role.toLowerCase()}`} className="btn-cta">
                        Hire Now
                      </Link>
                      <button
                        onClick={() => toggleModal(worker.id)}
                        className="text-[#F4A261] hover:text-[#2A6F97] transition-colors font-helvetica"
                      >
                        View Reviews
                      </button>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
          ))}
        </Slider>
        {/* Reviews Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }} // Ensure final opacity is 1
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }} // Ensure final opacity is 1
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white p-6 rounded-lg shadow-lg max-w-md"
              >
                <h3 className="text-xl font-semibold font-gilroy text-[#0A2647] mb-4">
                  {featuredWorkers.find(worker => worker.id === isModalOpen)?.name} Reviews
                </h3>
                {featuredWorkers.find(worker => worker.id === isModalOpen)?.reviews.map((review, index) => (
                  <div key={index} className="mb-4">
                    <p className="text-[#144272] font-helvetica">“{review.comment}” - {review.user}</p>
                    <p className="text-yellow-500 font-helvetica">{review.rating} ★</p>
                  </div>
                ))}
                <button onClick={() => toggleModal(null)} className="btn-cta mt-4">
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Testimonials Section with Carousel */}
      <section ref={testimonialRef} className="py-20 px-4 bg-[#F8FAFC]">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-gilroy gradient-text">What Our Users Say</h2>
        <Slider {...testimonialSliderSettings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15}>
                <div
                  className="testimonial-card p-6 bg-white rounded-2xl shadow-lg border border-[#144272] hover:bg-[#2A6F97] transition-all duration-300" // Removed hover:bg-opacity-10
                >
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-[#2A6F97] lazy-load"
                    loading="lazy"
                  />
                  <p className="text-[#144272] italic mb-4 font-helvetica">"{testimonial.feedback}"</p>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold font-gilroy text-[#0A2647]">{testimonial.name}</h3>
                    <p className="text-yellow-500 font-helvetica">{testimonial.rating} ★</p>
                  </div>
                </div>
              </Tilt>
            </div>
          ))}
        </Slider>
      </section>

      {/* Cities Served Section with Interactive Map */}
      <section ref={mapRef} className="py-20 px-4 container mx-auto bg-[#F8FAFC]">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-gilroy gradient-text">Cities We Serve</h2>
        <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '400px', width: '100%' }} className="rounded-2xl shadow-lg">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {citiesServed.map((city, index) => (
            <Marker key={index} position={city.position}>
              <Popup>{city.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 px-4 container mx-auto bg-[#F8FAFC]">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-gilroy gradient-text">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item bg-white rounded-lg shadow-md border border-[#144272]">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-4 text-left flex justify-between items-center text-lg font-semibold font-gilroy text-[#0A2647] hover:bg-[#2A6F97] transition-colors" // Removed hover:bg-opacity-10
              >
                {faq.question}
                <span>{openFaq === index ? '×' : '+'}</span>
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }} // Ensure final opacity is 1
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 pt-0 text-[#144272] font-helvetica"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section ref={newsletterRef} className="py-20 px-4 bg-[#0A2647] text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-gilroy gradient-text">Stay Updated with MEUN</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto font-helvetica italic text-[#F4A261]">
          Subscribe to our newsletter for the latest updates, offers, and worker availability alerts.
        </p>
        <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-l-lg border border-[#144272] focus:outline-none focus:ring-2 focus:ring-[#2A6F97] text-[#0A2647] bg-white"
              required
            />
            <button type="submit" className="btn-cta">
              Subscribe
            </button>
          </div>
        </form>
      </section>

      {/* Footer with Contact Form */}
      <footer className="py-10 bg-[#144272] text-white text-center">
        <motion.img
          src="https://via.placeholder.com/150x50?text=MEUN+Logo"
          alt="MEUN Logo"
          className="mx-auto mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }} // Ensure final opacity is 1
          transition={{ duration: 1 }}
        />
        <p className="text-lg mb-4 italic text-[#F4A261] font-helvetica">Connecting you with trusted Indian workers since 2025.</p>
        <div className="flex justify-center space-x-6 mb-6">
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
        <div className="max-w-md mx-auto mb-6">
          <h3 className="text-xl font-semibold mb-4 font-gilroy text-[#F4A261]">Quick Contact</h3>
          <form onSubmit={handleContactSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={contactForm.name}
              onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
              className="w-full p-3 mb-4 rounded-lg border border-[#2A6F97] focus:outline-none focus:ring-2 focus:ring-[#F4A261] text-[#0A2647] bg-white"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={contactForm.email}
              onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
              className="w-full p-3 mb-4 rounded-lg border border-[#2A6F97] focus:outline-none focus:ring-2 focus:ring-[#F4A261] text-[#0A2647] bg-white"
              required
            />
            <textarea
              placeholder="Your Message"
              value={contactForm.message}
              onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
              className="w-full p-3 mb-4 rounded-lg border border-[#2A6F97] focus:outline-none focus:ring-2 focus:ring-[#F4A261] text-[#0A2647] bg-white"
              rows="4"
              required
            />
            <button type="submit" className="btn-cta w-full">
              Send Message
            </button>
          </form>
        </div>
        <div className="space-x-4">
          <a href="#" className="hover:text-[#F4A261] transition-colors font-helvetica">Privacy Policy</a>
          <a href="#" className="hover:text-[#F4A261] transition-colors font-helvetica">Terms of Service</a>
          <a href="#" className="hover:text-[#F4A261] transition-colors font-helvetica">Contact Us</a>
        </div>
      </footer>

      {/* Fixed "Hire Now" Button */}
      <div className="fixed bottom-20 right-4 z-50">
        <Link
          to="/services"
          className="btn-cta"
        >
          Hire Now
        </Link>
      </div>

      {/* Back-to-Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 bg-[#0A2647] text-white p-4 rounded-full hover:bg-[#2A6F97] transition-transform transform hover:scale-110 z-50"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>

      {/* Floating Social Proof */}
      <motion.div
        ref={socialProofRef}
        key={socialProofIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }} // Ensure final opacity is 1
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-4 left-4 bg-[#0A2647] text-white p-4 rounded-lg shadow-lg z-50 max-w-xs"
      >
        <p className="text-sm font-helvetica">{socialProof[socialProofIndex]}</p>
      </motion.div>
    </div>
  );
};

export default Home;