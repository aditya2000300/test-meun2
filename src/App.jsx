// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home.jsx';
// import Services from './pages/Services.jsx';
// import WorkerListings from './pages/WorkerListings.jsx';
// import Booking from './pages/Booking.jsx';
// import Payment from './pages/Payment.jsx';
// import Dashboard from './pages/Dashboard.jsx';
// import Login from './pages/Login.jsx';
// import Signup from './pages/Signup.jsx';
// import { LazyMotion, domAnimation } from 'framer-motion';




// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/workers/:service" element={<WorkerListings />} />
//         <Route path="/booking" element={<Booking />} />
//         <Route path="/payment" element={<Payment />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
        
//       </Routes>
//     </Router>
    
//   );
// }

// export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import WorkerListings from './pages/WorkerListings.jsx';
import Booking from './pages/Booking.jsx';
import Payment from './pages/Payment.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Dashboard from './pages/Dashboard.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/workers/:service" element={<WorkerListings />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);

export default App;