import Navbar from '../components/Navbar.jsx';
import ChatbotWidget from '../components/ChatbotWidget.jsx';

const Dashboard = () => (
  <div className="min-h-screen bg-gray-100">
    <Navbar />
    <ChatbotWidget />
    <section className="py-12 container mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-center">Your Dashboard</h2>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <h3 className="text-xl font-bold mb-4">Current Booking</h3>
        <p>No active bookings yet. Book a worker to get started!</p>
      </div>
    </section>
  </div>
);

export default Dashboard;