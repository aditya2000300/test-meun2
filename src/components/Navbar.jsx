// import { Link } from 'react-router-dom';

// const Navbar = () => (
//   <nav className="bg-blue-900 text-white p-4 shadow-lg">
//     <div className="container mx-auto flex justify-between items-center">
//       <Link to="/" className="text-2xl font-bold">MEUN</Link>
//       <div className="space-x-6">
//         <Link to="/services">Services</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/signup">Signup</Link>
//       </div>
//     </div>
//   </nav>
// );

// export default Navbar;

// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const Navbar = () => (
//   <nav className="bg-purple-800 text-white p-4 shadow-lg sticky top-0 z-50">
//     <div className="container mx-auto flex justify-between items-center">
//       <Link to="/" className="text-3xl font-extrabold tracking-tight">
//         <span className="text-yellow-300">MEUN</span>
//       </Link>
//       <div className="space-x-6">
//         {['Services', 'Login', 'Signup'].map((item) => (
//           <motion.div
//             key={item}
//             whileHover={{ scale: 1.1, color: '#FBBF24' }}
//             transition={{ type: 'spring', stiffness: 300 }}
//             className="inline-block"
//           >
//             <Link to={`/${item.toLowerCase()}`} className="text-lg font-medium hover:text-yellow-300 transition-colors">
//               {item}
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </nav>
// );

// export default Navbar;






import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => (
  <nav className="bg-purple-800 text-white p-4 shadow-lg sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-3xl font-extrabold tracking-tight">
        <span className="text-yellow-300">MEUN</span>
      </Link>
      <div className="space-x-6">
        {['Services', 'Login', 'Signup'].map((item) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.1, color: '#FBBF24' }}
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