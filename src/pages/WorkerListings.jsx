// import { useParams } from 'react-router-dom';
// import Navbar from '../components/Navbar.jsx';
// import ChatbotWidget from '../components/ChatbotWidget.jsx';

// const workers = [
//   // Maids
//   { id: 1, name: 'Priya Sharma', service: 'maid', experience: '5 years', rating: 4.5, price: 400, availability: 'Daily', desc: 'Experienced maid from Delhi, skilled in cleaning and household chores.', img: 'https://t3.ftcdn.net/jpg/03/76/39/20/240_F_376392067_SgneU4GaWspQRutnQAuukNLTPiglTQem.jpg', available: true },
//   { id: 2, name: 'Lakshmi Devi', service: 'maid', experience: '7 years', rating: 4.9, price: 450, availability: 'Daily', desc: 'Dedicated maid from Mumbai, excellent at household management.', img: 'https://t3.ftcdn.net/jpg/10/43/79/80/240_F_1043798069_BQ8hWGmfI4Qm0R7mmwOcfl6qvaWiA3ph.jpg', available: true },
//   { id: 3, name: 'Seema Rani', service: 'maid', experience: '4 years', rating: 4.2, price: 380, availability: 'Weekly', desc: 'Reliable maid from Bangalore, specializes in deep cleaning.', img: 'https://t4.ftcdn.net/jpg/03/76/87/31/240_F_376873182_r2XlCvLDcRu25XK66wL3XCC00h21hGXO.jpg', available: false },
//   { id: 4, name: 'Geeta Bai', service: 'maid', experience: '6 years', rating: 4.7, price: 420, availability: 'Daily', desc: 'Skilled maid from Chennai, great at laundry and cooking.', img: 'https://t4.ftcdn.net/jpg/12/56/11/13/240_F_1256111301_Pwoy6a08cXYlvQq5LPybpe303sUT512S.jpg', available: true },
//   { id: 5, name: 'Sunita Kumari', service: 'maid', experience: '3 years', rating: 4.0, price: 350, availability: 'Weekly', desc: 'Efficient maid from Kolkata, good at organizing.', img: 'https://t4.ftcdn.net/jpg/05/88/73/27/240_F_588732724_6TYIzhz88JEuho0XIuwp9rTTskeMe0Rz.jpg', available: false },
//   { id: 6, name: 'Anjali Devi', service: 'maid', experience: '5 years', rating: 4.6, price: 410, availability: 'Daily', desc: 'Experienced maid from Delhi, excellent at cleaning.', img: 'https://t3.ftcdn.net/jpg/06/38/69/24/240_F_638692450_3soExxwqId0GP5THgkcADYyk3g3tjqW4.jpg', available: true },
//   { id: 7, name: 'Kavita Sharma', service: 'maid', experience: '8 years', rating: 4.8, price: 460, availability: 'Daily', desc: 'Professional maid from Mumbai, great at multitasking.', img: 'https://t4.ftcdn.net/jpg/01/21/18/11/240_F_121181189_hibcvwYay1iuqCSe3pMQlWMKRyiSL0Bs.jpg', available: true },
//   { id: 8, name: 'Rani Bai', service: 'maid', experience: '2 years', rating: 3.9, price: 340, availability: 'Weekly', desc: 'Hardworking maid from Bangalore, good at cleaning.', img: 'https://t4.ftcdn.net/jpg/12/88/05/77/240_F_1288057720_49s3HvebX6mGJdqNjX3Lsc1v2Cx3tRnu.jpg', available: false },
//   { id: 9, name: 'Poonam Devi', service: 'maid', experience: '6 years', rating: 4.5, price: 430, availability: 'Daily', desc: 'Reliable maid from Chennai, skilled in household tasks.', img: 'https://t4.ftcdn.net/jpg/06/36/85/89/240_F_636858954_o4Ltnl6rluNFpDebL1Ow7l854QEdK3pP.jpg', available: true },
//   { id: 10, name: 'Meena Kumari', service: 'maid', experience: '4 years', rating: 4.3, price: 390, availability: 'Weekly', desc: 'Efficient maid from Kolkata, great at laundry.', img: 'https://t4.ftcdn.net/jpg/05/70/95/77/240_F_570957736_2OtqpytBUitgY1nsICTOXtUmmtI4MQU8.jpg', available: false },

//   // Drivers
//   { id: 11, name: 'Ramesh Yadav', service: 'driver', experience: '3 years', rating: 4.0, price: 600, availability: 'Weekly', desc: 'Reliable driver from Mumbai, familiar with city routes.', img: 'https://media.gettyimages.com/id/1284080771/photo/confident-bus-driver-in-uniform.jpg?s=612x612&w=0&k=20&c=ROe2JU4k3fQaFrpiLD43ysenAjnkFhFz9MHVK4l2EnI=', available: false },
//   { id: 12, name: 'Rajesh Thakur', service: 'driver', experience: '5 years', rating: 4.6, price: 650, availability: 'Daily', desc: 'Safe driver from Delhi, experienced in long drives.', img: 'https://media.gettyimages.com/id/1272130824/photo/happy-truck-driver.jpg?s=612x612&w=0&k=20&c=7ts_VcjRitmIfQIjWtEWl1hEn-BfYQQ3JViDtw5EvTU=', available: true },
//   { id: 13, name: 'Vikram Singh', service: 'driver', experience: '4 years', rating: 4.2, price: 620, availability: 'Weekly', desc: 'Punctual driver from Bangalore, good at navigation.', img: 'https://media.gettyimages.com/id/978258506/photo/crowdsourced-taxi-driver-in-england.jpg?s=612x612&w=0&k=20&c=iLre7SExG3h26-KZiww1PX_73rqYgjBZc8dCR1Ev7VU=', available: false },
//   { id: 14, name: 'Arjun Kumar', service: 'driver', experience: '6 years', rating: 4.7, price: 680, availability: 'Daily', desc: 'Professional driver from Chennai, skilled in city driving.', img: 'https://media.gettyimages.com/id/1284091102/photo/man-riding-motorcycle-and-talking-on-mobile-phone.jpg?s=612x612&w=0&k=20&c=arfB8lepi7Umtw1xWcqK540Bx_WeR4X7pPHnZr1543M=', available: true },
//   { id: 15, name: 'Suresh Patel', service: 'driver', experience: '2 years', rating: 3.8, price: 580, availability: 'Weekly', desc: 'Reliable driver from Kolkata, good at short trips.', img: 'https://media.gettyimages.com/id/1256869755/photo/young-sikh-man-stock-photo.jpg?s=612x612&w=0&k=20&c=IACdBcpWe-tjobLFZBI-k7_FozR9MZX-1thHCTEiA0Q=', available: false },
//   { id: 16, name: 'Manoj Sharma', service: 'driver', experience: '5 years', rating: 4.5, price: 640, availability: 'Daily', desc: 'Experienced driver from Delhi, great at long-distance travel.', img: 'https://media.gettyimages.com/id/458127205/photo/auto-rickshaw-driver-waiting-for-customers.jpg?s=612x612&w=0&k=20&c=u_qwMQCI5GT9NyYY7ha3OnlogGg9nvfVV1bz1oiXOdE=', available: true },
//   { id: 17, name: 'Karan Singh', service: 'driver', experience: '7 years', rating: 4.8, price: 700, availability: 'Daily', desc: 'Professional driver from Mumbai, excellent navigation skills.', img: 'https://media.gettyimages.com/id/148197810/photo/smiling-man-leaning-in-taxi-cab-window.jpg?s=612x612&w=0&k=20&c=fkRvvy0VxZoP4pWpl0Ep6LxKdq6zUTYj5wlnZQUXshs=', available: true },
//   { id: 18, name: 'Ravi Kumar', service: 'driver', experience: '3 years', rating: 4.1, price: 610, availability: 'Weekly', desc: 'Safe driver from Bangalore, good at city routes.', img: 'https://media.gettyimages.com/id/1420121920/photo/men-sitting-portrait-on-road-roller.jpg?s=612x612&w=0&k=20&c=7lAArpsPWLjwsU2JRAJyWzztsFc11tDnQFzhgys8l8c=', available: false },
//   { id: 19, name: 'Amit Patel', service: 'driver', experience: '6 years', rating: 4.6, price: 670, availability: 'Daily', desc: 'Reliable driver from Chennai, skilled in traffic management.', img: 'https://media.gettyimages.com/id/1420121920/photo/men-sitting-portrait-on-road-roller.jpg?s=612x612&w=0&k=20&c=7lAArpsPWLjwsU2JRAJyWzztsFc11tDnQFzhgys8l8c=', available: true },
//   { id: 20, name: 'Sunil Yadav', service: 'driver', experience: '4 years', rating: 4.3, price: 630, availability: 'Weekly', desc: 'Punctual driver from Kolkata, great at short trips.', img: 'https://media.gettyimages.com/id/475084787/photo/taxi-driver-looking-around-during-traffic-jam.jpg?s=612x612&w=0&k=20&c=73t8idA0oFEdua7JUoiJSH2s9lxJq30hqX_3C0PTuxI=', available: false },

//   // Cooks
//   { id: 21, name: 'Sunita Rani', service: 'cook', experience: '4 years', rating: 4.8, price: 500, availability: 'Daily', desc: 'Skilled cook from Delhi, specializes in North Indian cuisine.', img: 'https://media.gettyimages.com/id/1457876584/photo/portrait-of-a-young-woman-cooking-food-in-the-kitchen-stock-photo.jpg?s=612x612&w=0&k=20&c=JKFlovKfUNGtug_n5GOfCsq3_7IUBNVzhF34egX_mDQ=', available: true },
//   { id: 22, name: 'Anjali Gupta', service: 'cook', experience: '6 years', rating: 4.7, price: 520, availability: 'Weekly', desc: 'Experienced cook from Mumbai, great at South Indian dishes.', img: 'https://media.gettyimages.com/id/1502237540/photo/domestic-portrait-of-senior-indian-woman-in-kitchen.jpg?s=612x612&w=0&k=20&c=KYZK-I46xFSmTmmhzZ8-biWFhe63-YWKhnvO08Gl5vg=', available: false },
//   { id: 23, name: 'Meena Devi', service: 'cook', experience: '5 years', rating: 4.5, price: 480, availability: 'Daily', desc: 'Talented cook from Bangalore, expert in vegetarian meals.', img: 'https://media.gettyimages.com/id/1451364304/photo/woman-in-the-kitchen-stock-photo.jpg?s=612x612&w=0&k=20&c=TIEH9jbT5jOD52AJH-5Fa_lDhDdTmuiBwaJjbQlh0X0=', available: true },
//   { id: 24, name: 'Rekha Sharma', service: 'cook', experience: '3 years', rating: 4.2, price: 460, availability: 'Weekly', desc: 'Reliable cook from Chennai, good at traditional recipes.', img: 'https://media.gettyimages.com/id/910382868/photo/indian-village-woman-preparing-food-and-talking-on-phone.jpg?s=612x612&w=0&k=20&c=HS5EaKOhvOkZE7nlavQI0z588MRvrvX-e4J6dl-udL4=', available: false },
//   { id: 25, name: 'Pooja Kumari', service: 'cook', experience: '7 years', rating: 4.9, price: 550, availability: 'Daily', desc: 'Professional cook from Kolkata, specializes in Bengali cuisine.', img: 'https://media.gettyimages.com/id/1209006710/photo/making-curry-in-the-kitchen.jpg?s=612x612&w=0&k=20&c=VFwOn7CEJbV7DsD27UfNlS0pcpkAQ0B1efWU0UX9OKs=', available: true },
//   { id: 26, name: 'Suman Devi', service: 'cook', experience: '4 years', rating: 4.4, price: 490, availability: 'Daily', desc: 'Skilled cook from Delhi, great at Indian sweets.', img: 'https://media.gettyimages.com/id/499781514/photo/indian-street-vendor-preparing-food-chapatti-flat-bread.jpg?s=612x612&w=0&k=20&c=IAs9RDQbEYIYZM5bQUkF6mht4lBqW5toaS8yhiSblwU=', available: true },
//   { id: 27, name: 'Kiran Bai', service: 'cook', experience: '6 years', rating: 4.6, price: 510, availability: 'Weekly', desc: 'Experienced cook from Mumbai, expert in Jain food.', img: 'https://media.gettyimages.com/id/499781514/photo/indian-street-vendor-preparing-food-chapatti-flat-bread.jpg?s=612x612&w=0&k=20&c=IAs9RDQbEYIYZM5bQUkF6mht4lBqW5toaS8yhiSblwU=', available: false },
//   { id: 28, name: 'Neha Sharma', service: 'cook', experience: '5 years', rating: 4.5, price: 500, availability: 'Daily', desc: 'Talented cook from Bangalore, good at continental dishes.', img: 'https://media.gettyimages.com/id/1366763841/photo/happy-indian-women-in-saris-cooking-food-in-kitchen.jpg?s=612x612&w=0&k=20&c=LdQhSM7UveVplEi7Yaf7x_9dCt7yjgQAmdYI2Np9X90=', available: true },
//   { id: 29, name: 'Ritesh Sahu', service: 'cook', experience: '3 years', rating: 4.1, price: 470, availability: 'Weekly', desc: 'Reliable cook from Chennai, great at South Indian meals.', img: 'https://media.gettyimages.com/id/1131395594/photo/indian-chefs-cooking-in-a-professional-kitchen-of-a-gourmet-restaurant.jpg?s=612x612&w=0&k=20&c=dJNCuir1frkVMQAZ6klKg19iPQJCVW_UA4r6EGLi77U=', available: false },
//   { id: 30, name: 'Asha Kumari', service: 'cook', experience: '6 years', rating: 4.7, price: 530, availability: 'Daily', desc: 'Professional cook from Kolkata, expert in seafood.', img: 'https://media.gettyimages.com/id/2069623098/photo/young-girls-cooks-with-grandmother-at-home.jpg?s=612x612&w=0&k=20&c=JcxdbM_yhc0b--V0IGqP0uWTyJ3gQwhly4e52HGsQeo=', available: true },

//   // Security Guards
//   { id: 31, name: 'Vikram Singh', service: 'security guard', experience: '6 years', rating: 4.7, price: 700, availability: 'Daily', desc: 'Trained security guard from Delhi, ensures safety.', img: 'https://media.gettyimages.com/id/482172099/photo/smiling-police-officer-with-arms-folded.jpg?s=612x612&w=0&k=20&c=piqPsr9lt4-DYSNL6VfVkXkUozVvRPNgpX53hklK584=', available: true },
//   { id: 32, name: 'Harbhajan Singh', service: 'security guard', experience: '8 years', rating: 4.9, price: 750, availability: 'Daily', desc: 'Professional guard from Mumbai, highly disciplined.', img: 'https://media.gettyimages.com/id/475696210/photo/portrait-of-indian-security-man-in-agra-india.jpg?s=612x612&w=0&k=20&c=5Fl2RdQrDlasGHqidnrJ3qHuOvsU6i9sKlGwmVZhjgk=', available: true },
//   { id: 33, name: 'Rakesh Kumar', service: 'security guard', experience: '5 years', rating: 4.5, price: 680, availability: 'Weekly', desc: 'Reliable guard from Bangalore, good at surveillance.', img: 'https://media.gettyimages.com/id/512907990/photo/senior-security-guard-standing-with-arms-outstretched-during-ganga-aarti.jpg?s=612x612&w=0&k=20&c=NDaYw2LGiSbsOkYgw4Z7hwRF9msIbtsYnJWjwJlpVmI=', available: false },
//   { id: 34, name: 'Sanjay Sharma', service: 'security guard', experience: '7 years', rating: 4.8, price: 720, availability: 'Daily', desc: 'Experienced guard from Chennai, great at night shifts.', img: 'https://media.gettyimages.com/id/1251960211/photo/mumbai-maharashtra-india-a-security-guard-stands-outside-the-apple-store-at-jio-world-drive.jpg?s=612x612&w=0&k=20&c=YQtBEFlOqFzLOqWxA1KJFdkHRk2BPjEtoduuBqr8AU4=', available: true },
//   { id: 35, name: 'Mohan Singh', service: 'security guard', experience: '4 years', rating: 4.3, price: 660, availability: 'Weekly', desc: 'Trained guard from Kolkata, good at patrolling.', img: 'https://st2.depositphotos.com/3591429/5245/i/450/depositphotos_52453733-stock-photo-indian-man-in-security-uniform.jpg', available: false },
//   { id: 36, name: 'Ajay Kumar', service: 'security guard', experience: '6 years', rating: 4.6, price: 710, availability: 'Daily', desc: 'Professional guard from Delhi, excellent at security checks.', img: 'https://st.depositphotos.com/1033142/2495/i/450/depositphotos_24956311-stock-photo-security-penangmalaysia.jpg', available: true },
//   { id: 37, name: 'Rajendra Thakur', service: 'security guard', experience: '5 years', rating: 4.4, price: 690, availability: 'Weekly', desc: 'Reliable security guard from Mumbai, experienced in handling emergencies.', img: 'https://st.depositphotos.com/1000291/2075/i/450/depositphotos_20757893-stock-photo-adult-indian-guardian-man.jpg', available: false },
//   { id: 38, name: 'Naresh Yadav', service: 'security guard', experience: '7 years', rating: 4.7, price: 730, availability: 'Daily', desc: 'Disciplined security guard from Bangalore, great at monitoring CCTV systems.', img: 'https://st3.depositphotos.com/1049680/31904/i/450/depositphotos_319041710-stock-photo-arab-indian-hispanic-safeguard-man.jpg', available: true },
  

//   // Cleaners
//   { id: 41, name: 'Ram Prasad', service: 'cleaner', experience: '4 years', rating: 4.3, price: 350, availability: 'Daily', desc: 'Professional cleaner from Delhi, skilled in deep cleaning and sanitization.', img: 'https://t3.ftcdn.net/jpg/13/41/11/32/240_F_1341113293_NATXJ65DOdSmJUJwcVS2yB7NPovZjvjm.jpg', available: true },
//   { id: 42, name: 'Shanti Bai', service: 'cleaner', experience: '6 years', rating: 4.6, price: 370, availability: 'Weekly', desc: 'Efficient cleaner from Mumbai, great at dusting and organizing.', img: 'https://t3.ftcdn.net/jpg/12/67/92/28/240_F_1267922859_aTO75UjBpXKuPm2YHg6BEJa90PVxxsRU.jpg', available: false },
//   { id: 43, name: 'Dinesh Kumar', service: 'cleaner', experience: '5 years', rating: 4.5, price: 360, availability: 'Daily', desc: 'Reliable cleaner from Bangalore, specializes in office cleaning.', img: 'https://t3.ftcdn.net/jpg/07/85/72/38/240_F_785723866_gyv7aZhFEBgZNyPDDq0IqYmKPl2cRlVK.jpg', available: true },
//   { id: 44, name: 'Pooja Rani', service: 'cleaner', experience: '3 years', rating: 4.2, price: 340, availability: 'Weekly', desc: 'Hardworking cleaner from Chennai, skilled in eco-friendly cleaning methods.', img: 'https://t3.ftcdn.net/jpg/11/70/70/56/240_F_1170705619_kd4abSCaZYSySMoOb8sEHVZRqOI1XmC8.jpg', available: false },
//   { id: 45, name: 'Ravi Verma', service: 'cleaner', experience: '7 years', rating: 4.8, price: 380, availability: 'Daily', desc: 'Experienced cleaner from Kolkata, great at stain removal and floor polishing.', img: 'https://t4.ftcdn.net/jpg/13/41/11/35/240_F_1341113563_Dk0I5TLVFs1tXMGr8SWpLVmuNQfCRhIi.jpg', available: true },

//   // Caretakers
//   { id: 46, name: 'Geeta Devi', service: 'caretaker', experience: '5 years', rating: 4.7, price: 500, availability: 'Daily', desc: 'Compassionate caretaker from Delhi, experienced in elderly care.', img: 'https://t3.ftcdn.net/jpg/06/39/89/46/240_F_639894672_BvN2YUX3qGs4ubvFQGJaaY0JbAiINR33.jpg', available: true },
//   { id: 47, name: 'Anand Kumar', service: 'caretaker', experience: '6 years', rating: 4.5, price: 520, availability: 'Weekly', desc: 'Reliable caretaker from Mumbai, specializes in child care.', img: 'https://t3.ftcdn.net/jpg/06/35/82/22/240_F_635822280_lfX7iiyWicJOYjmPIOTK1GeMNztOBWCE.jpg', available: false },
//   { id: 48, name: 'Meera Thakur', service: 'caretaker', experience: '4 years', rating: 4.3, price: 480, availability: 'Daily', desc: 'Kind-hearted caretaker from Bangalore, great with people with disabilities.', img: 'https://t4.ftcdn.net/jpg/10/99/61/51/240_F_1099615189_DzrzdcRNLBJCeK27BgSGZfXU92VBYWFh.jpg', available: true },
//   { id: 49, name: 'Sanjay Sharma', service: 'caretaker', experience: '7 years', rating: 4.8, price: 550, availability: 'Daily', desc: 'Experienced caretaker from Chennai, excellent at providing emotional support.', img: 'https://t3.ftcdn.net/jpg/10/33/28/14/240_F_1033281404_pFxiaYTcd1TztMi5oBLiEx3DaPPmGxSO.jpg', available: true },
//   { id: 50, name: 'Pooja Kumari', service: 'caretaker', experience: '3 years', rating: 4.2, price: 460, availability: 'Weekly', desc: 'Caring caretaker from Kolkata, skilled in post-surgery care.', img: 'https://t4.ftcdn.net/jpg/06/08/97/49/240_F_608974902_1FAz5xI0h8PFziDd7WdEwxBrQa2x2j4W.jpg', available: false },

// ];

// const WorkerListings = () => {
//   const { service } = useParams();
//   const filteredWorkers = workers.filter((worker) => worker.service === service);

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Navbar />
//       <ChatbotWidget />
//       <section className="py-12 container mx-auto">
//         <h2 className="text-3xl font-semibold mb-8 capitalize">{service} Listings</h2>
//         <div className="space-y-6">
//           {filteredWorkers.map((worker) => (
//             <div key={worker.id} className="p-6 bg-white shadow-lg rounded-lg flex items-center gap-6">
//               <img src={worker.img} alt={worker.name} className="w-24 h-24 rounded-full object-cover" />
//               <div className="flex-1">
//                 <h3 className="text-xl font-bold">{worker.name}</h3>
//                 <p className="text-gray-600">{worker.desc}</p>
//                 <p><strong>Experience:</strong> {worker.experience}</p>
//                 <p><strong>Rating:</strong> {worker.rating} ★</p>
//                 <p><strong>Price:</strong> ₹{worker.price}/{worker.availability}</p>
//               </div>
//               <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
//                 Book Now
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default WorkerListings;










import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import ChatbotWidget from '../components/ChatbotWidget.jsx';

const workers = [
  // Maids
  { id: 1, name: 'Priya Sharma', service: 'maid', experience: '5 years', rating: 4.5, price: 400, availability: 'Daily', desc: 'Experienced maid from Delhi, skilled in cleaning and household chores.', img: 'https://t3.ftcdn.net/jpg/03/76/39/20/240_F_376392067_SgneU4GaWspQRutnQAuukNLTPiglTQem.jpg', available: true },
  { id: 2, name: 'Lakshmi Devi', service: 'maid', experience: '7 years', rating: 4.9, price: 450, availability: 'Daily', desc: 'Dedicated maid from Mumbai, excellent at household management.', img: 'https://t3.ftcdn.net/jpg/10/43/79/80/240_F_1043798069_BQ8hWGmfI4Qm0R7mmwOcfl6qvaWiA3ph.jpg', available: true },
  { id: 3, name: 'Seema Rani', service: 'maid', experience: '4 years', rating: 4.2, price: 380, availability: 'Weekly', desc: 'Reliable maid from Bangalore, specializes in deep cleaning.', img: 'https://t4.ftcdn.net/jpg/03/76/87/31/240_F_376873182_r2XlCvLDcRu25XK66wL3XCC00h21hGXO.jpg', available: false },
  { id: 4, name: 'Geeta Bai', service: 'maid', experience: '6 years', rating: 4.7, price: 420, availability: 'Daily', desc: 'Skilled maid from Chennai, great at laundry and cooking.', img: 'https://t4.ftcdn.net/jpg/12/56/11/13/240_F_1256111301_Pwoy6a08cXYlvQq5LPybpe303sUT512S.jpg', available: true },
  { id: 5, name: 'Sunita Kumari', service: 'maid', experience: '3 years', rating: 4.0, price: 350, availability: 'Weekly', desc: 'Efficient maid from Kolkata, good at organizing.', img: 'https://t4.ftcdn.net/jpg/05/88/73/27/240_F_588732724_6TYIzhz88JEuho0XIuwp9rTTskeMe0Rz.jpg', available: false },
  { id: 6, name: 'Anjali Devi', service: 'maid', experience: '5 years', rating: 4.6, price: 410, availability: 'Daily', desc: 'Experienced maid from Delhi, excellent at cleaning.', img: 'https://t3.ftcdn.net/jpg/06/38/69/24/240_F_638692450_3soExxwqId0GP5THgkcADYyk3g3tjqW4.jpg', available: true },
  { id: 7, name: 'Kavita Sharma', service: 'maid', experience: '8 years', rating: 4.8, price: 460, availability: 'Daily', desc: 'Professional maid from Mumbai, great at multitasking.', img: 'https://t4.ftcdn.net/jpg/01/21/18/11/240_F_121181189_hibcvwYay1iuqCSe3pMQlWMKRyiSL0Bs.jpg', available: true },
  { id: 8, name: 'Rani Bai', service: 'maid', experience: '2 years', rating: 3.9, price: 340, availability: 'Weekly', desc: 'Hardworking maid from Bangalore, good at cleaning.', img: 'https://t4.ftcdn.net/jpg/12/88/05/77/240_F_1288057720_49s3HvebX6mGJdqNjX3Lsc1v2Cx3tRnu.jpg', available: false },
  { id: 9, name: 'Poonam Devi', service: 'maid', experience: '6 years', rating: 4.5, price: 430, availability: 'Daily', desc: 'Reliable maid from Chennai, skilled in household tasks.', img: 'https://t4.ftcdn.net/jpg/06/36/85/89/240_F_636858954_o4Ltnl6rluNFpDebL1Ow7l854QEdK3pP.jpg', available: true },
  { id: 10, name: 'Meena Kumari', service: 'maid', experience: '4 years', rating: 4.3, price: 390, availability: 'Weekly', desc: 'Efficient maid from Kolkata, great at laundry.', img: 'https://t4.ftcdn.net/jpg/05/70/95/77/240_F_570957736_2OtqpytBUitgY1nsICTOXtUmmtI4MQU8.jpg', available: false },

  // Drivers
  { id: 11, name: 'Ramesh Yadav', service: 'driver', experience: '3 years', rating: 4.0, price: 600, availability: 'Weekly', desc: 'Reliable driver from Mumbai, familiar with city routes.', img: 'https://media.gettyimages.com/id/1284080771/photo/confident-bus-driver-in-uniform.jpg?s=612x612&w=0&k=20&c=ROe2JU4k3fQaFrpiLD43ysenAjnkFhFz9MHVK4l2EnI=', available: false },
  { id: 12, name: 'Rajesh Thakur', service: 'driver', experience: '5 years', rating: 4.6, price: 650, availability: 'Daily', desc: 'Safe driver from Delhi, experienced in long drives.', img: 'https://media.gettyimages.com/id/1272130824/photo/happy-truck-driver.jpg?s=612x612&w=0&k=20&c=7ts_VcjRitmIfQIjWtEWl1hEn-BfYQQ3JViDtw5EvTU=', available: true },
  { id: 13, name: 'Vikram Singh', service: 'driver', experience: '4 years', rating: 4.2, price: 620, availability: 'Weekly', desc: 'Punctual driver from Bangalore, good at navigation.', img: 'https://media.gettyimages.com/id/978258506/photo/crowdsourced-taxi-driver-in-england.jpg?s=612x612&w=0&k=20&c=iLre7SExG3h26-KZiww1PX_73rqYgjBZc8dCR1Ev7VU=', available: false },
  { id: 14, name: 'Arjun Kumar', service: 'driver', experience: '6 years', rating: 4.7, price: 680, availability: 'Daily', desc: 'Professional driver from Chennai, skilled in city driving.', img: 'https://media.gettyimages.com/id/1284091102/photo/man-riding-motorcycle-and-talking-on-mobile-phone.jpg?s=612x612&w=0&k=20&c=arfB8lepi7Umtw1xWcqK540Bx_WeR4X7pPHnZr1543M=', available: true },
  { id: 15, name: 'Suresh Patel', service: 'driver', experience: '2 years', rating: 3.8, price: 580, availability: 'Weekly', desc: 'Reliable driver from Kolkata, good at short trips.', img: 'https://media.gettyimages.com/id/1256869755/photo/young-sikh-man-stock-photo.jpg?s=612x612&w=0&k=20&c=IACdBcpWe-tjobLFZBI-k7_FozR9MZX-1thHCTEiA0Q=', available: false },
  { id: 16, name: 'Manoj Sharma', service: 'driver', experience: '5 years', rating: 4.5, price: 640, availability: 'Daily', desc: 'Experienced driver from Delhi, great at long-distance travel.', img: 'https://media.gettyimages.com/id/458127205/photo/auto-rickshaw-driver-waiting-for-customers.jpg?s=612x612&w=0&k=20&c=u_qwMQCI5GT9NyYY7ha3OnlogGg9nvfVV1bz1oiXOdE=', available: true },
  { id: 17, name: 'Karan Singh', service: 'driver', experience: '7 years', rating: 4.8, price: 700, availability: 'Daily', desc: 'Professional driver from Mumbai, excellent navigation skills.', img: 'https://media.gettyimages.com/id/148197810/photo/smiling-man-leaning-in-taxi-cab-window.jpg?s=612x612&w=0&k=20&c=fkRvvy0VxZoP4pWpl0Ep6LxKdq6zUTYj5wlnZQUXshs=', available: true },
  { id: 18, name: 'Ravi Kumar', service: 'driver', experience: '3 years', rating: 4.1, price: 610, availability: 'Weekly', desc: 'Safe driver from Bangalore, good at city routes.', img: 'https://media.gettyimages.com/id/1420121920/photo/men-sitting-portrait-on-road-roller.jpg?s=612x612&w=0&k=20&c=7lAArpsPWLjwsU2JRAJyWzztsFc11tDnQFzhgys8l8c=', available: false },
  { id: 19, name: 'Amit Patel', service: 'driver', experience: '6 years', rating: 4.6, price: 670, availability: 'Daily', desc: 'Reliable driver from Chennai, skilled in traffic management.', img: 'https://media.gettyimages.com/id/1420121920/photo/men-sitting-portrait-on-road-roller.jpg?s=612x612&w=0&k=20&c=7lAArpsPWLjwsU2JRAJyWzztsFc11tDnQFzhgys8l8c=', available: true },
  { id: 20, name: 'Sunil Yadav', service: 'driver', experience: '4 years', rating: 4.3, price: 630, availability: 'Weekly', desc: 'Punctual driver from Kolkata, great at short trips.', img: 'https://media.gettyimages.com/id/475084787/photo/taxi-driver-looking-around-during-traffic-jam.jpg?s=612x612&w=0&k=20&c=73t8idA0oFEdua7JUoiJSH2s9lxJq30hqX_3C0PTuxI=', available: false },

  // Cooks
  { id: 21, name: 'Sunita Rani', service: 'cook', experience: '4 years', rating: 4.8, price: 500, availability: 'Daily', desc: 'Skilled cook from Delhi, specializes in North Indian cuisine.', img: 'https://media.gettyimages.com/id/1457876584/photo/portrait-of-a-young-woman-cooking-food-in-the-kitchen-stock-photo.jpg?s=612x612&w=0&k=20&c=JKFlovKfUNGtug_n5GOfCsq3_7IUBNVzhF34egX_mDQ=', available: true },
  { id: 22, name: 'Anjali Gupta', service: 'cook', experience: '6 years', rating: 4.7, price: 520, availability: 'Weekly', desc: 'Experienced cook from Mumbai, great at South Indian dishes.', img: 'https://media.gettyimages.com/id/1502237540/photo/domestic-portrait-of-senior-indian-woman-in-kitchen.jpg?s=612x612&w=0&k=20&c=KYZK-I46xFSmTmmhzZ8-biWFhe63-YWKhnvO08Gl5vg=', available: false },
  { id: 23, name: 'Meena Devi', service: 'cook', experience: '5 years', rating: 4.5, price: 480, availability: 'Daily', desc: 'Talented cook from Bangalore, expert in vegetarian meals.', img: 'https://media.gettyimages.com/id/1451364304/photo/woman-in-the-kitchen-stock-photo.jpg?s=612x612&w=0&k=20&c=TIEH9jbT5jOD52AJH-5Fa_lDhDdTmuiBwaJjbQlh0X0=', available: true },
  { id: 24, name: 'Rekha Sharma', service: 'cook', experience: '3 years', rating: 4.2, price: 460, availability: 'Weekly', desc: 'Reliable cook from Chennai, good at traditional recipes.', img: 'https://media.gettyimages.com/id/910382868/photo/indian-village-woman-preparing-food-and-talking-on-phone.jpg?s=612x612&w=0&k=20&c=HS5EaKOhvOkZE7nlavQI0z588MRvrvX-e4J6dl-udL4=', available: false },
  { id: 25, name: 'Pooja Kumari', service: 'cook', experience: '7 years', rating: 4.9, price: 550, availability: 'Daily', desc: 'Professional cook from Kolkata, specializes in Bengali cuisine.', img: 'https://media.gettyimages.com/id/1209006710/photo/making-curry-in-the-kitchen.jpg?s=612x612&w=0&k=20&c=VFwOn7CEJbV7DsD27UfNlS0pcpkAQ0B1efWU0UX9OKs=', available: true },
  { id: 26, name: 'Suman Devi', service: 'cook', experience: '4 years', rating: 4.4, price: 490, availability: 'Daily', desc: 'Skilled cook from Delhi, great at Indian sweets.', img: 'https://media.gettyimages.com/id/499781514/photo/indian-street-vendor-preparing-food-chapatti-flat-bread.jpg?s=612x612&w=0&k=20&c=IAs9RDQbEYIYZM5bQUkF6mht4lBqW5toaS8yhiSblwU=', available: true },
  { id: 27, name: 'Kiran Bai', service: 'cook', experience: '6 years', rating: 4.6, price: 510, availability: 'Weekly', desc: 'Experienced cook from Mumbai, expert in Jain food.', img: 'https://media.gettyimages.com/id/499781514/photo/indian-street-vendor-preparing-food-chapatti-flat-bread.jpg?s=612x612&w=0&k=20&c=IAs9RDQbEYIYZM5bQUkF6mht4lBqW5toaS8yhiSblwU=', available: false },
  { id: 28, name: 'Neha Sharma', service: 'cook', experience: '5 years', rating: 4.5, price: 500, availability: 'Daily', desc: 'Talented cook from Bangalore, good at continental dishes.', img: 'https://media.gettyimages.com/id/1366763841/photo/happy-indian-women-in-saris-cooking-food-in-kitchen.jpg?s=612x612&w=0&k=20&c=LdQhSM7UveVplEi7Yaf7x_9dCt7yjgQAmdYI2Np9X90=', available: true },
  { id: 29, name: 'Ritesh Sahu', service: 'cook', experience: '3 years', rating: 4.1, price: 470, availability: 'Weekly', desc: 'Reliable cook from Chennai, great at South Indian meals.', img: 'https://media.gettyimages.com/id/1131395594/photo/indian-chefs-cooking-in-a-professional-kitchen-of-a-gourmet-restaurant.jpg?s=612x612&w=0&k=20&c=dJNCuir1frkVMQAZ6klKg19iPQJCVW_UA4r6EGLi77U=', available: false },
  { id: 30, name: 'Asha Kumari', service: 'cook', experience: '6 years', rating: 4.7, price: 530, availability: 'Daily', desc: 'Professional cook from Kolkata, expert in seafood.', img: 'https://media.gettyimages.com/id/2069623098/photo/young-girls-cooks-with-grandmother-at-home.jpg?s=612x612&w=0&k=20&c=JcxdbM_yhc0b--V0IGqP0uWTyJ3gQwhly4e52HGsQeo=', available: true },

  // Security Guards
  { id: 31, name: 'Vikram Singh', service: 'security guard', experience: '6 years', rating: 4.7, price: 700, availability: 'Daily', desc: 'Trained security guard from Delhi, ensures safety.', img: 'https://media.gettyimages.com/id/482172099/photo/smiling-police-officer-with-arms-folded.jpg?s=612x612&w=0&k=20&c=piqPsr9lt4-DYSNL6VfVkXkUozVvRPNgpX53hklK584=', available: true },
  { id: 32, name: 'Harbhajan Singh', service: 'security guard', experience: '8 years', rating: 4.9, price: 750, availability: 'Daily', desc: 'Professional guard from Mumbai, highly disciplined.', img: 'https://media.gettyimages.com/id/475696210/photo/portrait-of-indian-security-man-in-agra-india.jpg?s=612x612&w=0&k=20&c=5Fl2RdQrDlasGHqidnrJ3qHuOvsU6i9sKlGwmVZhjgk=', available: true },
  { id: 33, name: 'Rakesh Kumar', service: 'security guard', experience: '5 years', rating: 4.5, price: 680, availability: 'Weekly', desc: 'Reliable guard from Bangalore, good at surveillance.', img: 'https://media.gettyimages.com/id/512907990/photo/senior-security-guard-standing-with-arms-outstretched-during-ganga-aarti.jpg?s=612x612&w=0&k=20&c=NDaYw2LGiSbsOkYgw4Z7hwRF9msIbtsYnJWjwJlpVmI=', available: false },
  { id: 34, name: 'Sanjay Sharma', service: 'security guard', experience: '7 years', rating: 4.8, price: 720, availability: 'Daily', desc: 'Experienced guard from Chennai, great at night shifts.', img: 'https://media.gettyimages.com/id/1251960211/photo/mumbai-maharashtra-india-a-security-guard-stands-outside-the-apple-store-at-jio-world-drive.jpg?s=612x612&w=0&k=20&c=YQtBEFlOqFzLOqWxA1KJFdkHRk2BPjEtoduuBqr8AU4=', available: true },
  { id: 35, name: 'Mohan Singh', service: 'security guard', experience: '4 years', rating: 4.3, price: 660, availability: 'Weekly', desc: 'Trained guard from Kolkata, good at patrolling.', img: 'https://st2.depositphotos.com/3591429/5245/i/450/depositphotos_52453733-stock-photo-indian-man-in-security-uniform.jpg', available: false },
  { id: 36, name: 'Ajay Kumar', service: 'security guard', experience: '6 years', rating: 4.6, price: 710, availability: 'Daily', desc: 'Professional guard from Delhi, excellent at security checks.', img: 'https://st.depositphotos.com/1033142/2495/i/450/depositphotos_24956311-stock-photo-security-penangmalaysia.jpg', available: true },
  { id: 37, name: 'Rajendra Thakur', service: 'security guard', experience: '5 years', rating: 4.4, price: 690, availability: 'Weekly', desc: 'Reliable security guard from Mumbai, experienced in handling emergencies.', img: 'https://st.depositphotos.com/1000291/2075/i/450/depositphotos_20757893-stock-photo-adult-indian-guardian-man.jpg', available: false },
  { id: 38, name: 'Naresh Yadav', service: 'security guard', experience: '7 years', rating: 4.7, price: 730, availability: 'Daily', desc: 'Disciplined security guard from Bangalore, great at monitoring CCTV systems.', img: 'https://st3.depositphotos.com/1049680/31904/i/450/depositphotos_319041710-stock-photo-arab-indian-hispanic-safeguard-man.jpg', available: true },
  

  // Cleaners
  { id: 41, name: 'Ram Prasad', service: 'cleaner', experience: '4 years', rating: 4.3, price: 350, availability: 'Daily', desc: 'Professional cleaner from Delhi, skilled in deep cleaning and sanitization.', img: 'https://t3.ftcdn.net/jpg/13/41/11/32/240_F_1341113293_NATXJ65DOdSmJUJwcVS2yB7NPovZjvjm.jpg', available: true },
  { id: 42, name: 'Shanti Bai', service: 'cleaner', experience: '6 years', rating: 4.6, price: 370, availability: 'Weekly', desc: 'Efficient cleaner from Mumbai, great at dusting and organizing.', img: 'https://t3.ftcdn.net/jpg/12/67/92/28/240_F_1267922859_aTO75UjBpXKuPm2YHg6BEJa90PVxxsRU.jpg', available: false },
  { id: 43, name: 'Dinesh Kumar', service: 'cleaner', experience: '5 years', rating: 4.5, price: 360, availability: 'Daily', desc: 'Reliable cleaner from Bangalore, specializes in office cleaning.', img: 'https://t3.ftcdn.net/jpg/07/85/72/38/240_F_785723866_gyv7aZhFEBgZNyPDDq0IqYmKPl2cRlVK.jpg', available: true },
  { id: 44, name: 'Pooja Rani', service: 'cleaner', experience: '3 years', rating: 4.2, price: 340, availability: 'Weekly', desc: 'Hardworking cleaner from Chennai, skilled in eco-friendly cleaning methods.', img: 'https://t3.ftcdn.net/jpg/11/70/70/56/240_F_1170705619_kd4abSCaZYSySMoOb8sEHVZRqOI1XmC8.jpg', available: false },
  { id: 45, name: 'Ravi Verma', service: 'cleaner', experience: '7 years', rating: 4.8, price: 380, availability: 'Daily', desc: 'Experienced cleaner from Kolkata, great at stain removal and floor polishing.', img: 'https://t4.ftcdn.net/jpg/13/41/11/35/240_F_1341113563_Dk0I5TLVFs1tXMGr8SWpLVmuNQfCRhIi.jpg', available: true },

  // Caretakers
  { id: 46, name: 'Geeta Devi', service: 'caretaker', experience: '5 years', rating: 4.7, price: 500, availability: 'Daily', desc: 'Compassionate caretaker from Delhi, experienced in elderly care.', img: 'https://t3.ftcdn.net/jpg/06/39/89/46/240_F_639894672_BvN2YUX3qGs4ubvFQGJaaY0JbAiINR33.jpg', available: true },
  { id: 47, name: 'Anand Kumar', service: 'caretaker', experience: '6 years', rating: 4.5, price: 520, availability: 'Weekly', desc: 'Reliable caretaker from Mumbai, specializes in child care.', img: 'https://t3.ftcdn.net/jpg/06/35/82/22/240_F_635822280_lfX7iiyWicJOYjmPIOTK1GeMNztOBWCE.jpg', available: false },
  { id: 48, name: 'Meera Thakur', service: 'caretaker', experience: '4 years', rating: 4.3, price: 480, availability: 'Daily', desc: 'Kind-hearted caretaker from Bangalore, great with people with disabilities.', img: 'https://t4.ftcdn.net/jpg/10/99/61/51/240_F_1099615189_DzrzdcRNLBJCeK27BgSGZfXU92VBYWFh.jpg', available: true },
  { id: 49, name: 'Sanjay Sharma', service: 'caretaker', experience: '7 years', rating: 4.8, price: 550, availability: 'Daily', desc: 'Experienced caretaker from Chennai, excellent at providing emotional support.', img: 'https://t3.ftcdn.net/jpg/10/33/28/14/240_F_1033281404_pFxiaYTcd1TztMi5oBLiEx3DaPPmGxSO.jpg', available: true },
  { id: 50, name: 'Pooja Kumari', service: 'caretaker', experience: '3 years', rating: 4.2, price: 460, availability: 'Weekly', desc: 'Caring caretaker from Kolkata, skilled in post-surgery care.', img: 'https://t4.ftcdn.net/jpg/06/08/97/49/240_F_608974902_1FAz5xI0h8PFziDd7WdEwxBrQa2x2j4W.jpg', available: false },

];

const WorkerListings = () => {
  const { service } = useParams();
  const navigate = useNavigate();
  const [availabilityFilter, setAvailabilityFilter] = useState('All');

  const filteredWorkers = workers
    .filter((worker) => worker.service === service)
    .filter((worker) => availabilityFilter === 'All' || (availabilityFilter === 'Available' ? worker.available : !worker.available));

  const handleBookNow = (worker) => {
    navigate('/booking', { state: { worker } });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0A2647] font-helvetica">
      <Navbar />
      <ChatbotWidget />

      {/* Hero Section */}
      <section className="py-20 px-4 container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4 font-gilroy gradient-text"
        >
          {service.charAt(0).toUpperCase() + service.slice(1)} Listings
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg italic text-[#F4A261] max-w-2xl mx-auto"
        >
          Find the perfect {service} for your needs.
        </motion.p>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 container mx-auto">
        <div className="flex justify-center space-x-4 mb-8">
          {['All', 'Available', 'Not Available'].map((filter) => (
            <button
              key={filter}
              onClick={() => setAvailabilityFilter(filter)}
              className={`py-2 px-4 rounded-lg ${availabilityFilter === filter ? 'bg-[#0A2647] text-white' : 'bg-[#144272] text-white'} hover:bg-[#2A6F97] transition-colors font-helvetica`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Workers Grid */}
      <section className="py-12 container mx-auto px-4">
        {filteredWorkers.length === 0 ? (
          <p className="text-center text-[#144272] text-lg">No {service}s available at the moment.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredWorkers.map((worker, index) => (
              <motion.div
                key={worker.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-6 bg-white rounded-2xl shadow-lg border border-[#144272]  transition-all duration-300"
              >
                <img
                  src={worker.img}
                  alt={worker.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-[#2A6F97]"
                />
                <h3 className="text-xl font-bold font-gilroy text-[#0A2647] text-center">{worker.name}</h3>
                <p className="text-[#144272] text-center">{worker.desc}</p>
                <p className="text-[#144272] text-center mt-2"><strong>Experience:</strong> {worker.experience}</p>
                <p className="text-[#144272] text-center"><strong>Rating:</strong> {worker.rating} ★</p>
                <p className="text-[#144272] text-center"><strong>Price:</strong> ₹{worker.price}/{worker.availability}</p>
                <p className="text-center mt-2">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${worker.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}
                  >
                    {worker.available ? 'Available' : 'Not Available'}
                  </span>
                </p>
                <button
                  onClick={() => handleBookNow(worker)}
                  className="mt-4 w-full btn-cta"
                  disabled={!worker.available}
                >
                  {worker.available ? 'Book Now' : 'Unavailable'}
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default WorkerListings;