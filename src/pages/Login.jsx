import Navbar from '../components/Navbar.jsx';
import ChatbotWidget from '../components/ChatbotWidget.jsx';

const Login = () => (
  <div className="min-h-screen bg-gray-100">
    <Navbar />
    <ChatbotWidget />
    <section className="py-12 container mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-center">Login</h2>
      <form className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 border rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 mb-4 border rounded" />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
          Login
        </button>
      </form>
    </section>
  </div>
);

export default Login;