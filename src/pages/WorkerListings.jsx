import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import ChatbotWidget from '../components/ChatbotWidget.jsx';

const workers = [
  {
    id: 1,
    name: 'Priya Sharma',
    service: 'maid',
    experience: '5 years',
    rating: 4.5,
    price: 400,
    availability: 'Daily',
    desc: 'Experienced maid from Delhi, skilled in cleaning and household chores.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
  },
  {
    id: 2,
    name: 'Ramesh Yadav',
    service: 'driver',
    experience: '3 years',
    rating: 4.0,
    price: 600,
    availability: 'Weekly',
    desc: 'Reliable driver from Mumbai, familiar with city routes.',
    img: 'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d',
  },
];

const WorkerListings = () => {
  const { service } = useParams();
  const filteredWorkers = workers.filter((worker) => worker.service === service);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <ChatbotWidget />
      <section className="py-12 container mx-auto">
        <h2 className="text-3xl font-semibold mb-8 capitalize">{service} Listings</h2>
        <div className="space-y-6">
          {filteredWorkers.map((worker) => (
            <div key={worker.id} className="p-6 bg-white shadow-lg rounded-lg flex items-center gap-6">
              <img src={worker.img} alt={worker.name} className="w-24 h-24 rounded-full object-cover" />
              <div className="flex-1">
                <h3 className="text-xl font-bold">{worker.name}</h3>
                <p className="text-gray-600">{worker.desc}</p>
                <p><strong>Experience:</strong> {worker.experience}</p>
                <p><strong>Rating:</strong> {worker.rating} ★</p>
                <p><strong>Price:</strong> ₹{worker.price}/{worker.availability}</p>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WorkerListings;