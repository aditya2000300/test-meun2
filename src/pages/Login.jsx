import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import ChatbotWidget from '../components/ChatbotWidget.jsx';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '', mobile: '', otp: '' });
  const [errors, setErrors] = useState({});
  const [loginMethod, setLoginMethod] = useState('email'); // 'email' or 'mobile'
  const [otpSent, setOtpSent] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    if (loginMethod === 'email') {
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!validateEmail(formData.email)) newErrors.email = 'Please enter a valid email';
      if (!formData.password.trim()) newErrors.password = 'Password is required';
      else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    } else {
      if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
      else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Mobile number must be 10 digits';
      if (otpSent && !formData.otp.trim()) newErrors.otp = 'OTP is required';
      else if (otpSent && !/^\d{6}$/.test(formData.otp)) newErrors.otp = 'OTP must be 6 digits';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendOtp = () => {
    if (!formData.mobile.trim()) {
      setErrors({ mobile: 'Mobile number is required' });
      return;
    }
    if (!/^\d{10}$/.test(formData.mobile)) {
      setErrors({ mobile: 'Mobile number must be 10 digits' });
      return;
    }
    alert(`OTP sent to ${formData.mobile}. For demo purposes, use OTP: 123456`);
    setOtpSent(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      if (loginMethod === 'mobile' && formData.otp !== '123456') {
        setErrors({ otp: 'Invalid OTP' });
        return;
      }
      alert('Login successful!');
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 text-[#0A2647] font-helvetica flex items-center justify-center">
      <Navbar />
      <ChatbotWidget />

      {/* Login Form Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-md w-full border border-white/20"
      >
        <h2 className="text-3xl font-helvetica font-bold text-center text-gray-800 dark:text-white mb-6">Login to MEUN</h2>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-6">
          <div className="flex bg-gray-300 rounded-full p-1">
            <button
              onClick={() => setLoginMethod('email')}
              className={`py-2 px-4 rounded-full text-sm font-semibold ${
                loginMethod === 'email' ? "bg-gradient-to-r from-[#0A2647] to-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
              } transition-colors`}
            >
              Email/Password
            </button>
            <button
              onClick={() => setLoginMethod('mobile')}
              className={`py-2 px-4 rounded-full text-sm font-semibold ${
                loginMethod === 'mobile' ? "bg-gradient-to-r from-[#0A2647] to-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
              } transition-colors`}
            >
              Mobile/OTP
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {loginMethod === 'email' ? (
            <>
              <div className="mb-4">
                <label className="block text-white text-sm mb-1">Email</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 pl-10 rounded-lg bg-gray-800 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className="mb-6">
                <label className="block text-white text-sm mb-1">Password</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full p-3 pl-10 rounded-lg bg-gray-800 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-[#0A2647] to-blue-600 text-white py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 font-medium">
                Login
              </button>
            </>
          ) : (
            <>
              <div className="mb-4">
                <label className="block text-white text-sm mb-1">Mobile Number</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full p-3 pl-10 rounded-lg bg-gray-800 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                    disabled={otpSent}
                  />
                </div>
                {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
              </div>
              {otpSent ? (
                <div className="mb-6">
                  <label className="block text-white text-sm mb-1">OTP</label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-5a1 1 0 112 0v3a1 1 0 11-2 0v-3zm1-4a1 1 0 100-2 1 1 0 000 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={formData.otp}
                      onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                      className="w-full p-3 pl-10 rounded-lg bg-gray-800 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  {errors.otp && <p className="text-red-500 text-sm mt-1">{errors.otp}</p>}
                </div>
              ) : (
                <button
                  type="button"
                  onClick={handleSendOtp}
                  className="w-full py-3 mb-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send OTP
                </button>
              )}
              {otpSent && (
                <button type="submit" className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Verify OTP & Login
                </button>
              )}
            </>
          )}
        </form>
        <p className="text-center text-white mt-4">
          Don't have an account?{' '}
          <a href="/signup" className="text-blue-900 hover:underline">
            Sign Up
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;