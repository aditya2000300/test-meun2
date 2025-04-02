
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
import logo from '../assets/logo.png';
import Navbar from '../components/Navbar.jsx';
import workerVideo from '../assets/video.mp4';

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
    img: 'https://t3.ftcdn.net/jpg/06/44/60/94/240_F_644609465_nIWPUM86fg8ESeqVTt9k304tyHsxk4fT.jpg',
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
    img: 'https://media.gettyimages.com/id/1098283608/photo/truck-driver-stock-image.jpg?s=612x612&w=0&k=20&c=UZo75VoAw6H8CDeSMG8E2hSWntb1CRJcgLN854-Fcyw=',
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
    img: 'https://media.istockphoto.com/id/1673558130/photo/young-housewife-working-in-kitchen-at-home.jpg?s=612x612&w=0&k=20&c=789U8LxQ6-_D2gu-X0FFQywg3g1WyJbxYptS2aMbvtk=',
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
    img: 'https://t4.ftcdn.net/jpg/07/47/11/47/240_F_747114739_tIpdoGkjj3U2A150XESx0i9cm7KCbie1.jpg',
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
    img: 'https://media.istockphoto.com/id/1301241234/photo/women-cleaning-her-home-with-water.jpg?s=612x612&w=0&k=20&c=nfaW8rXy5R6c0jDbXIgp7i7suZ2gmDBdC3El5bzf6dc=',
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
    img: 'https://media.gettyimages.com/id/124206078/photo/black-janitor-standing-with-cleaning-cart.jpg?s=612x612&w=0&k=20&c=VuU-UoEuwvtuyfGvyrZMMKbpcaiNDwYRIONpH1A-Uf4=',
    reviews: [
      { user: 'Amit S.', comment: 'Very caring.', rating: 4.5 },
      { user: 'Sneha R.', comment: 'Great with kids.', rating: 4.5 },
    ],
  },
  {
    id: 7,
    name: 'Seema Sharma',
    role: 'Maid',
    experience: '7 years',
    rating: 4.9,
    available: true,
    img: 'https://media.gettyimages.com/id/1473859731/photo/a-house-maid-standing-in-the-colony-park-using-her-mobile-phone-during-her-resting-period.jpg?s=612x612&w=0&k=20&c=P-96EI5IGeyKueM4QEB5WYrAmQLnkVnLVCS_eb6lTRc=',
    reviews: [
      { user: 'Priya G.', comment: 'Very dedicated.', rating: 5 },
      { user: 'Rahul K.', comment: 'Trustworthy and hardworking.', rating: 4.9 },
    ],
  },
  {
    id: 8,
    name: 'Rajesh Thakur',
    role: 'Driver',
    experience: '5 years',
    rating: 4.6,
    available: true,
    img: 'https://media.istockphoto.com/id/153805429/photo/a-smiling-indian-rickshaw-driver.jpg?s=612x612&w=0&k=20&c=nZyTQnFWMrdPHz2xYdIQK9zfcocgArxucWoGObK8hVA=',
    reviews: [
      { user: 'Amit S.', comment: 'Safe and reliable.', rating: 4.7 },
      { user: 'Ravi P.', comment: 'Very punctual.', rating: 4.5 },
    ],
  },
  {
    id: 9,
    name: 'Anjali Gupta',
    role: 'Cook',
    experience: '6 years',
    rating: 4.7,
    available: false,
    img: 'https://media.gettyimages.com/id/1334115503/photo/a-young-woman-gets-back-her-homegrown-greens-to-the-kitchen.jpg?s=612x612&w=0&k=20&c=odJFskEdGutPSk_uPv2l6kNtMSbdAQPIUAItJGDnSEE=',
    reviews: [
      { user: 'Karan S.', comment: 'Excellent cook.', rating: 4.8 },
      { user: 'Sneha R.', comment: 'Authentic flavors.', rating: 4.6 },
    ],
  },
  {
    id: 10,
    name: 'Harbhajan Singh',
    role: 'Security Guard',
    experience: '8 years',
    rating: 4.9,
    available: true,
    img: 'https://media.gettyimages.com/id/475696210/photo/portrait-of-indian-security-man-in-agra-india.jpg?s=612x612&w=0&k=20&c=5Fl2RdQrDlasGHqidnrJ3qHuOvsU6i9sKlGwmVZhjgk=',
    reviews: [
      { user: 'Priya G.', comment: 'Very disciplined.', rating: 5 },
      { user: 'Ravi P.', comment: 'Highly professional.', rating: 4.8 },
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
  {
    question: 'Do you offer trial services?',
    answer: 'Yes, some workers offer trial services. Check the worker’s profile for availability.',
  },
  {
    question: 'What if the worker doesn’t show up?',
    answer: 'Contact our support team immediately, and we will arrange a replacement or provide a refund.',
  },
  {
    question: 'Can I reschedule my booking?',
    answer: 'Yes, you can reschedule from your Dashboard up to 24 hours before the service time.',
  },
  {
    question: 'Do you provide customer support?',
    answer: 'Yes, our support team is available 24/7 through chat, email, and phone.',
  },
  {
    question: 'Are there any hidden charges?',
    answer: 'No, our pricing is transparent. You will see a full cost breakdown before confirming the booking.',
  }
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
  img: 'https://media.istockphoto.com/id/1673558130/photo/young-housewife-working-in-kitchen-at-home.jpg?s=612x612&w=0&k=20&c=789U8LxQ6-_D2gu-X0FFQywg3g1WyJbxYptS2aMbvtk=',
  video:workerVideo, // Placeholder video
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
  { label: 'Verified Workers', value: 50 },
  { label: 'Happy Customers', value: 500 },
  { label: 'Cities Served', value: 5 },
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
      <Navbar />

      <ChatbotWidget />

      {/* Hero Section */}
      <section ref={heroRef} className="py-20 px-4 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative h-[500px] rounded-2xl overflow-hidden">
          <img
            src="https://img.freepik.com/free-vector/cleaners-with-cleaning-products-housekeeping-service_18591-52068.jpg?ga=GA1.1.1358519673.1743431462&semt=ais_hybrid"
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
                placeholder="Search for a worker (e.g., Maid in Delhi)"
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
              <h3 className="text-xl font-semibold font-gilroy text-[#0A2647] ">{service.name}</h3>
              <p className="text-[#144272] mt-2 font-helvetica">{service.desc}</p>
              <Link
                to={`/workers/${service.name.toLowerCase()}`}
                className="mt-4 inline-block text-[#F4A261]  transition-colors font-helvetica"
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
        <h3 className="text-4xl font-bold font-gilroy text-[#0A2647] mb-2">
          <span className={`stat-${index}`}>0</span>+
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

     {/* Before/After Slider*/}
      <section ref={beforeAfterRef} className="py-20 px-4 container mx-auto bg-[#F8FAFC]">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-gilroy gradient-text">Life Before & After MEUN</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <img
             src="https://images.pexels.com/photos/713297/pexels-photo-713297.jpeg"

              alt="Before MEUN"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
            />
            <img
              src="https://images.pexels.com/photos/3787027/pexels-photo-3787027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
          <video
            width="100%"
            height="200"
            src={workerOfTheMonth.video}
            controls
            muted
            className="rounded-lg object-cover"
            loading="lazy"
          >
            Your browser does not support the video tag.
          </video>
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
            <div key={worker.id} className="px-4 pb-16">
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
                  className="testimonial-card p-6 bg-white rounded-2xl shadow-lg border border-[#144272] hover:bg-[#2A6F97] F transition-all duration-300" // Removed hover:bg-opacity-10
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
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-gilroy ">Stay Updated with MEUN</h2>
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
          <a href="https://www.instagram.com/meunpvtltd?igsh=dW1hanVuZ3VwNDhm" className="text-2xl hover:text-[#F4A261] transition-colors">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/company/meun/" className="text-2xl hover:text-[#F4A261] transition-colors">
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