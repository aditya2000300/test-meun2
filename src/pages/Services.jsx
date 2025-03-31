import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import ChatbotWidget from '../components/ChatbotWidget.jsx';

const services = [
  { name: 'Maid', desc: 'Reliable maids for cleaning, washing, and household tasks.' },
  { name: 'Driver', desc: 'Experienced drivers for safe and timely transportation.' },
  { name: 'Cook', desc: 'Skilled cooks to prepare delicious meals tailored to your taste.' },
  { name: 'Security Guard', desc: 'Trained guards to ensure safety at your home or office.' },
  { name: 'Cleaner', desc: 'Experts in deep cleaning for a spotless environment.' },
  { name: 'Caretaker', desc: 'Compassionate caretakers for elderly or child care.' },
];

const Services = () => (
  <div className="min-h-screen bg-gray-100">
    <Navbar />
    <ChatbotWidget />
    <section className="py-12 container mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link
            to={`/workers/${service.name.toLowerCase()}`}
            key={service.name}
            className="p-6 bg-white shadow-lg rounded-lg text-center hover:bg-blue-100 transition"
          >
            <h3 className="text-xl font-bold">{service.name}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  </div>
);

export default Services;