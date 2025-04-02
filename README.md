MEUN - Indian Worker Hiring Platform
Overview

MEUN (Modern Employment Utility Network) is a web application designed to simplify the process of hiring verified Indian workers for various household and professional services. Whether you need a maid, driver, security guard, cleaner, servant, or cook, MEUN connects you with trusted professionals in your city. The platform offers a modern, user-friendly interface with features like live worker availability, service filtering, and secure booking, all while ensuring a seamless experience for both users and workers.

This project was developed as a full-stack web application with a focus on modern UI/UX design, accessibility, and functionality. It includes a responsive homepage showcasing services, featured workers, testimonials, and a map of served cities, along with dedicated login and signup pages for user authentication.


Features-

Homepage:

Hero Section: A visually appealing hero section with a search bar to find workers by service and location.
Live Worker Availability Ticker: Displays real-time updates on worker availability.
Our Services: Showcases available services (Maid, Driver, Security Guard, Cleaner, Servant, Cook) with icons and descriptions.
How It Works: A step-by-step guide on using the platform.
Our Impact: Highlights key statistics (e.g., verified workers, happy customers, cities served).
Featured Workers: A slider with filterable worker cards (e.g., by role) and a modal for viewing reviews.
Testimonials: A slider showcasing user feedback.
Cities We Serve: An interactive map (using Leaflet) displaying cities where MEUN operates.
FAQs: An accordion-style FAQ section for common user queries.
Newsletter Signup: A form to subscribe to updates.
Floating Social Proof: Displays recent user actions (e.g., "Amit just hired a maid!").

Login Page:

Modern UI with a glassmorphism card design and gradient background.
Supports two login methods:
Email/Password: Traditional login with email validation.
Mobile/OTP: Login using a mobile number and OTP (with a "Send OTP" feature).
Real-time email validation with error messages.

Signup Page:

Consistent modern UI with the same glassmorphism design as the login page.
Form for name, email, and password with real-time email validation.

Additional Features:

Chatbot Widget: Integrated for user assistance.
Animations: Smooth animations using Framer Motion and GSAP for a polished user experience.
Responsive Design: Fully responsive across devices (desktop, tablet, mobile).
Error Handling: Includes an ErrorBoundary component for the map and lazy-loaded components.
Lazy Loading: Map component is lazily loaded to improve performance.
Technologies Used

Frontend:

React.js: For building the user interface.
React Router: For client-side routing.
Tailwind CSS: For styling and responsive design.
Framer Motion: For animations and transitions.
GSAP (GreenSock Animation Platform): For scroll-triggered animations.
React Slick: For sliders (Featured Workers, Testimonials).
React Leaflet: For the interactive map in the "Cities We Serve" section.
React Icons: For icons in forms and other UI elements.

Other Tools:
Vite/React CLI: For project setup and development.
Lazy Loading & Suspense: For performance optimization.

Project Structure:
meun/
├── src/
│   ├── assets/                 # Static assets (e.g., images)
│   ├── components/             # Reusable components (Navbar, Footer, ServiceCard, etc.)
│   │   ├── ChatbotWidget.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── FaqItem.jsx
│   │   ├── MapComponent.jsx
│   │   ├── Navbar.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   └── WorkerCard.jsx
│   ├── hooks/                  # Custom hooks
│   │   └── useIsMounted.js
│   ├── pages/                  # Page components
│   │   ├── HomePage.jsx
│   │   ├── Login.jsx
│   │   └── Signup.jsx
│   ├── App.jsx                 # Main app component
│   ├── index.js                # Entry point
│   └── index.css               # Global styles (including Leaflet CSS)
├── public/                     # Public assets
├── package.json                # Dependencies and scripts
└── README.md                   # Project documentation
