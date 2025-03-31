import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => (
  <nav className="bg-[#0A2647] text-white p-4 shadow-lg sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-3xl font-extrabold tracking-tight">
        <span className="text-yellow-300">MEUN <span className='text-white text-base ml-6 font-thin'>Meet Everything U Need</span></span>
      </Link>
      <div className="space-x-6">
        {['Services', 'Login', 'Signup'].map((item) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.1, color: '#FBBF26' }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="inline-block"
          >
            <Link to={`/${item.toLowerCase()}`} className="text-lg font-medium hover:text-yellow-300 transition-colors">
              {item}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar;