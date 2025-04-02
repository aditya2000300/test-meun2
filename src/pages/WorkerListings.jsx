
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.jsx';
import ChatbotWidget from '../components/ChatbotWidget.jsx';

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
//   { id: 43, name: 'Dinesh Kumar', service: 'cleaner', experience: 'https5 years', rating: 4.5, price: 360, availability: 'Daily', desc: 'Reliable cleaner from Bangalore, specializes in office cleaning.', img: 'https://t3.ftcdn.net/jpg/07/85/72/38/240_F_785723866_gyv7aZhFEBgZNyPDDq0IqYmKPl2cRlVK.jpg', available: true },
//   { id: 44, name: 'Pooja Rani', service: 'cleaner', experience: '3 years', rating: 4.2, price: 340, availability: 'Weekly', desc: 'Hardworking cleaner from Chennai, skilled in eco-friendly cleaning methods.', img: 'https://t3.ftcdn.net/jpg/11/70/70/56/240_F_1170705619_kd4abSCaZYSySMoOb8sEHVZRqOI1XmC8.jpg', available: false },
//   { id: 45, name: 'Ravi Verma', service: 'cleaner', experience: '7 years', rating: 4.8, price: 380, availability: 'Daily', desc: 'Experienced cleaner from Kolkata, great at stain removal and floor polishing.', img: 'https://t4.ftcdn.net/jpg/13/41/11/35/240_F_1341113563_Dk0I5TLVFs1tXMGr8SWpLVmuNQfCRhIi.jpg', available: true },

//   // Caretakers
//   { id: 46, name: 'Geeta Devi', service: 'caretaker', experience: '5 years', rating: 4.7, price: 500, availability: 'Daily', desc: 'Compassionate caretaker from Delhi, experienced in elderly care.', img: 'https://t3.ftcdn.net/jpg/06/39/89/46/240_F_639894672_BvN2YUX3qGs4ubvFQGJaaY0JbAiINR33.jpg', available: true },
//   { id: 47, name: 'Anand Kumar', service: 'caretaker', experience: '6 years', rating: 4.5, price: 520, availability: 'Weekly', desc: 'Reliable caretaker from Mumbai, specializes in child care.', img: 'https://t3.ftcdn.net/jpg/06/35/82/22/240_F_635822280_lfX7iiyWicJOYjmPIOTK1GeMNztOBWCE.jpg', available: false },
//   { id: 48, name: 'Meera Thakur', service: 'caretaker', experience: '4 years', rating: 4.3, price: 480, availability: 'Daily', desc: 'Kind-hearted caretaker from Bangalore, great with people with disabilities.', img: 'https://t4.ftcdn.net/jpg/10/99/61/51/240_F_1099615189_DzrzdcRNLBJCeK27BgSGZfXU92VBYWFh.jpg', available: true },
//   { id: 49, name: 'Sanjay Sharma', service: 'caretaker', experience: '7 years', rating: 4.8, price: 550, availability: 'Daily', desc: 'Experienced caretaker from Chennai, excellent at providing emotional support.', img: 'https://t3.ftcdn.net/jpg/10/33/28/14/240_F_1033281404_pFxiaYTcd1TztMi5oBLiEx3DaPPmGxSO.jpg', available: true },
//   { id: 50, name: 'Pooja Kumari', service: 'caretaker', experience: '3 years', rating: 4.2, price: 460, availability: 'Weekly', desc: 'Caring caretaker from Kolkata, skilled in post-surgery care.', img: 'https://t4.ftcdn.net/jpg/06/08/97/49/240_F_608974902_1FAz5xI0h8PFziDd7WdEwxBrQa2x2j4W.jpg', available: false },

// ];





const workers = [
  // Maids (Original 1-10)
  { id: 1, name: 'Priya Sharma', service: 'maid', experience: '5 years', rating: 4.5, price: 4000, availability: 'Monthly', desc: 'Experienced maid from Delhi, skilled in cleaning and household chores.', img: 'https://t3.ftcdn.net/jpg/03/76/39/20/240_F_376392067_SgneU4GaWspQRutnQAuukNLTPiglTQem.jpg', available: true },
  { id: 2, name: 'Lakshmi Devi', service: 'maid', experience: '7 years', rating: 4.9, price: 450, availability: 'Daily', desc: 'Dedicated maid from Mumbai, excellent at household management.', img: 'https://t3.ftcdn.net/jpg/10/43/79/80/240_F_1043798069_BQ8hWGmfI4Qm0R7mmwOcfl6qvaWiA3ph.jpg', available: true },
  { id: 3, name: 'Seema Rani', service: 'maid', experience: '4 years', rating: 4.2, price: 1300, availability: 'Weekly', desc: 'Reliable maid from Bangalore, specializes in deep cleaning.', img: 'https://t4.ftcdn.net/jpg/03/76/87/31/240_F_376873182_r2XlCvLDcRu25XK66wL3XCC00h21hGXO.jpg', available: false },
  { id: 4, name: 'Geeta Bai', service: 'maid', experience: '6 years', rating: 4.7, price: 420, availability: 'Daily', desc: 'Skilled maid from Chennai, great at laundry and cooking.', img: 'https://t4.ftcdn.net/jpg/12/56/11/13/240_F_1256111301_Pwoy6a08cXYlvQq5LPybpe303sUT512S.jpg', available: true },
  { id: 5, name: 'Sunita Kumari', service: 'maid', experience: '3 years', rating: 4.0, price: 1500, availability: 'Weekly', desc: 'Efficient maid from Kolkata, good at organizing.', img: 'https://t4.ftcdn.net/jpg/05/88/73/27/240_F_588732724_6TYIzhz88JEuho0XIuwp9rTTskeMe0Rz.jpg', available: false },
  { id: 6, name: 'Anjali Devi', service: 'maid', experience: '5 years', rating: 4.6, price: 4100, availability: 'Monthly', desc: 'Experienced maid from Delhi, excellent at cleaning.', img: 'https://t3.ftcdn.net/jpg/06/38/69/24/240_F_638692450_3soExxwqId0GP5THgkcADYyk3g3tjqW4.jpg', available: true },
  { id: 7, name: 'Kavita Sharma', service: 'maid', experience: '8 years', rating: 4.8, price: 460, availability: 'Daily', desc: 'Professional maid from Mumbai, great at multitasking.', img: 'https://t4.ftcdn.net/jpg/01/21/18/11/240_F_121181189_hibcvwYay1iuqCSe3pMQlWMKRyiSL0Bs.jpg', available: true },
  { id: 8, name: 'Rani Bai', service: 'maid', experience: '2 years', rating: 3.9, price: 3400, availability: 'Monthly', desc: 'Hardworking maid from Bangalore, good at cleaning.', img: 'https://t4.ftcdn.net/jpg/12/88/05/77/240_F_1288057720_49s3HvebX6mGJdqNjX3Lsc1v2Cx3tRnu.jpg', available: false },
  { id: 9, name: 'Poonam Devi', service: 'maid', experience: '6 years', rating: 4.5, price: 430, availability: 'Daily', desc: 'Reliable maid from Chennai, skilled in household tasks.', img: 'https://t4.ftcdn.net/jpg/06/36/85/89/240_F_636858954_o4Ltnl6rluNFpDebL1Ow7l854QEdK3pP.jpg', available: true },
  { id: 10, name: 'Meena Kumari', service: 'maid', experience: '4 years', rating: 4.3, price: 1590, availability: 'Weekly', desc: 'Efficient maid from Kolkata, great at laundry.', img: 'https://t4.ftcdn.net/jpg/05/70/95/77/240_F_570957736_2OtqpytBUitgY1nsICTOXtUmmtI4MQU8.jpg', available: false },
  // Maids (Added 11-20)
  { id: 51, name: 'Anita Singh', service: 'maid', experience: '6 years', rating: 4.4, price: 415, availability: 'Daily', desc: 'Diligent maid from Hyderabad, very thorough cleaner.', img: 'https://imgs.search.brave.com/YdkjZ9bIOWIapgsRg35GyeVWh35WZKAY3mNCt00LJpw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ3/Mzg2MDk0Mi9waG90/by9wb3J0cmFpdC1v/Zi1hLXNtaWxpbmct/aW5kaWFuLWhvdXNl/LW1haWQuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXU3M1FF/REh6Mm5lTW9JT2Fx/cFlERFdZV29SVVdv/bXF1ZHd3T1lydmlk/b2c9', available: true }, // Placeholder img
  { id: 52, name: 'Savita Patel', service: 'maid', experience: '4 years', rating: 4.1, price: 1370, availability: 'Weekly', desc: 'Punctual maid from Pune, follows instructions well.', img: 'https://imgs.search.brave.com/PqTgLdIoCrL-DrcmTIOhPY2pLAv4ffMjDjRfhaTP6B4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc0/NzA1MzA0L3Bob3Rv/L2NoZWVyZnVsLWlu/ZGlhbi1ob3VzZXdp/ZmUtZHJ5aW5nLWNs/b3RoZXMuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVg5T3lw/ckV4Z2hCaUp2bWlK/NlNKSUtqM1RLWXc4/MTRENVdYa2lSM0dz/Wms9', available: false }, // Placeholder img
  { id: 53, name: 'Malti Sharma', service: 'maid', experience: '7 years', rating: 4.7, price: 4440, availability: 'Monthly', desc: 'Very experienced maid from Ahmedabad, reliable.', img: 'https://imgs.search.brave.com/CwlDj8UzwufpAcjZ5hPYR1qKov_ntNNRZP-XzX9teWg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tYWlk/c2VydmljZXNpbmlu/ZGlhLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMi8wOS9t/ZW5pc2hhLWltZy5q/cGc', available: true }, // Placeholder img
  { id: 54, name: 'Kamla Devi', service: 'maid', experience: '5 years', rating: 4.6, price: 425, availability: 'Daily', desc: 'Trustworthy maid from Jaipur, good with children.', img: 'https://media.gettyimages.com/id/1147827252/photo/portrait-of-an-indian-female-factory-worker.jpg?s=612x612&w=0&k=20&c=zmDr7tYi1603FHbZov0ICKAyWHS6gUQInZuB6hTxolQ=', available: true }, // Placeholder img
  { id: 55, name: 'Shanti Bai', service: 'maid', experience: '9 years', rating: 4.9, price: 1470, availability: 'Weekly', desc: 'Highly rated maid from Lucknow, expert in all household work.', img: 'https://media.gettyimages.com/id/629760410/photo/young-indian-woman-holding-her-little-baby-india.jpg?s=612x612&w=0&k=20&c=D4Rv1jnXdvirndmhl9px4R8iX0_uwe5sB5GEdSMUlQ4=', available: false }, // Placeholder img
  { id: 56, name: 'Rita Kumari', service: 'maid', experience: '3 years', rating: 4.0, price: 360, availability: 'Daily', desc: 'Energetic maid from Chandigarh, learns quickly.', img: 'https://media.gettyimages.com/id/915900642/photo/young-indian-woman-using-mobile-phone-jodhpur-india.jpg?s=612x612&w=0&k=20&c=ag8tQu-TRXntshCs0HDYJyc3mC6Xn5E3ivQ3Q_MIJWg=', available: true }, // Placeholder img
  { id: 57, name: 'Sarla Sharma', service: 'maid', experience: '6 years', rating: 4.5, price: 4435, availability: 'Monthly', desc: 'Dependable maid from Surat, good at cooking support.', img: 'https://media.gettyimages.com/id/493060366/photo/indian-woman-resting-inside-stepwell-in-village-near-jaipur-india.jpg?s=612x612&w=0&k=20&c=TNtWVJYzxJKe4GqJKzqA8lZW23u9UH94PijjhCbz_yE=', available: true }, // Placeholder img
  { id: 58, name: 'Usha Rani', service: 'maid', experience: '4 years', rating: 4.2, price: 1385, availability: 'Weekly', desc: 'Hardworking maid from Bhopal, focuses on cleanliness.', img: 'https://media.gettyimages.com/id/2109466745/photo/traditional-rural-indian-woman-carrying-mud-pot-and-using-smartphone-in-village.jpg?s=612x612&w=0&k=20&c=KvitdYTDcDarrveBscZgyxzswHI1yjXUs1IYXPg1hkA=', available: false }, // Placeholder img
  { id: 59, name: 'Vimla Devi', service: 'maid', experience: '7 years', rating: 4.8, price: 3455, availability: 'Monthly', desc: 'Experienced maid from Indore, excellent at organizing.', img: 'https://t3.ftcdn.net/jpg/10/43/79/80/240_F_1043798069_BQ8hWGmfI4Qm0R7mmwOcfl6qvaWiA3ph.jpg', available: true }, // Placeholder img
  { id: 60, name: 'Rekha Bai', service: 'maid', experience: '5 years', rating: 4.4, price: 405, availability: 'Weekly', desc: 'Polite maid from Nagpur, good at routine cleaning.', img: 'https://media.gettyimages.com/id/1068625826/photo/young-indian-woman-holding-her-baby-desert-village-india.jpg?s=612x612&w=0&k=20&c=Q26NaBLnbBJ4xuFSIEQhs4g6B83IBtDyIjfhqi_dWVA=', available: false }, // Placeholder img

  // Drivers (Original 11-20)
  { id: 11, name: 'Ramesh Yadav', service: 'driver', experience: '3 years', rating: 4.0, price: 1600, availability: 'Weekly', desc: 'Reliable driver from Mumbai, familiar with city routes.', img: 'https://media.gettyimages.com/id/1284080771/photo/confident-bus-driver-in-uniform.jpg?s=612x612&w=0&k=20&c=ROe2JU4k3fQaFrpiLD43ysenAjnkFhFz9MHVK4l2EnI=', available: false },
  { id: 12, name: 'Rajesh Thakur', service: 'driver', experience: '5 years', rating: 4.6, price: 650, availability: 'Daily', desc: 'Safe driver from Delhi, experienced in long drives.', img: 'https://media.gettyimages.com/id/1272130824/photo/happy-truck-driver.jpg?s=612x612&w=0&k=20&c=7ts_VcjRitmIfQIjWtEWl1hEn-BfYQQ3JViDtw5EvTU=', available: true },
  { id: 13, name: 'Vikram Singh', service: 'driver', experience: '4 years', rating: 4.2, price: 620, availability: 'Monthly', desc: 'Punctual driver from Bangalore, good at navigation.', img: 'https://media.gettyimages.com/id/978258506/photo/crowdsourced-taxi-driver-in-england.jpg?s=612x612&w=0&k=20&c=iLre7SExG3h26-KZiww1PX_73rqYgjBZc8dCR1Ev7VU=', available: false },
  { id: 14, name: 'Arjun Kumar', service: 'driver', experience: '6 years', rating: 4.7, price: 680, availability: 'Daily', desc: 'Professional driver from Chennai, skilled in city driving.', img: 'https://media.gettyimages.com/id/1284091102/photo/man-riding-motorcycle-and-talking-on-mobile-phone.jpg?s=612x612&w=0&k=20&c=arfB8lepi7Umtw1xWcqK540Bx_WeR4X7pPHnZr1543M=', available: true },
  { id: 15, name: 'Suresh Patel', service: 'driver', experience: '2 years', rating: 3.8, price: 580, availability: 'Monthly', desc: 'Reliable driver from Kolkata, good at short trips.', img: 'https://media.gettyimages.com/id/1256869755/photo/young-sikh-man-stock-photo.jpg?s=612x612&w=0&k=20&c=IACdBcpWe-tjobLFZBI-k7_FozR9MZX-1thHCTEiA0Q=', available: false },
  { id: 16, name: 'Manoj Sharma', service: 'driver', experience: '5 years', rating: 4.5, price: 640, availability: 'Daily', desc: 'Experienced driver from Delhi, great at long-distance travel.', img: 'https://media.gettyimages.com/id/458127205/photo/auto-rickshaw-driver-waiting-for-customers.jpg?s=612x612&w=0&k=20&c=u_qwMQCI5GT9NyYY7ha3OnlogGg9nvfVV1bz1oiXOdE=', available: true },
  { id: 17, name: 'Karan Singh', service: 'driver', experience: '7 years', rating: 4.8, price: 700, availability: 'Daily', desc: 'Professional driver from Mumbai, excellent navigation skills.', img: 'https://media.gettyimages.com/id/148197810/photo/smiling-man-leaning-in-taxi-cab-window.jpg?s=612x612&w=0&k=20&c=fkRvvy0VxZoP4pWpl0Ep6LxKdq6zUTYj5wlnZQUXshs=', available: true },
  { id: 18, name: 'Ravi Kumar', service: 'driver', experience: '3 years', rating: 4.1, price: 610, availability: 'Monthly', desc: 'Safe driver from Bangalore, good at city routes.', img: 'https://media.gettyimages.com/id/1420121920/photo/men-sitting-portrait-on-road-roller.jpg?s=612x612&w=0&k=20&c=7lAArpsPWLjwsU2JRAJyWzztsFc11tDnQFzhgys8l8c=', available: false },
  { id: 19, name: 'Amit Patel', service: 'driver', experience: '6 years', rating: 4.6, price: 670, availability: 'Daily', desc: 'Reliable driver from Chennai, skilled in traffic management.', img: 'https://media.gettyimages.com/id/1420121920/photo/men-sitting-portrait-on-road-roller.jpg?s=612x612&w=0&k=20&c=7lAArpsPWLjwsU2JRAJyWzztsFc11tDnQFzhgys8l8c=', available: true }, // Re-used image, consider replacing
  { id: 20, name: 'Sunil Yadav', service: 'driver', experience: '4 years', rating: 4.3, price: 630, availability: 'Weekly', desc: 'Punctual driver from Kolkata, great at short trips.', img: 'https://media.gettyimages.com/id/475084787/photo/taxi-driver-looking-around-during-traffic-jam.jpg?s=612x612&w=0&k=20&c=73t8idA0oFEdua7JUoiJSH2s9lxJq30hqX_3C0PTuxI=', available: false },
  // Drivers (Added 21-30)
  { id: 61, name: 'Deepak Kumar', service: 'driver', experience: '8 years', rating: 4.9, price: 720, availability: 'Daily', desc: 'Highly experienced driver from Hyderabad, knows highways well.', img: 'https://media.gettyimages.com/id/910391852/photo/portrait-of-an-old-indian-man.jpg?s=612x612&w=0&k=20&c=suJdDc6RCtslgIDDF04sCGj4WKYQ10tGRP3IxCX03Uc=', available: true }, // Placeholder img
  { id: 62, name: 'Vijay Singh', service: 'driver', experience: '3 years', rating: 4.0, price: 590, availability: 'Monthly', desc: 'Careful driver from Pune, excellent safety record.', img: '', available: false }, // Placeholder img
  { id: 63, name: 'Naresh Kumar', service: 'driver', experience: '5 years', rating: 4.4, price: 645, availability: 'Daily', desc: 'Polite driver from Ahmedabad, good communication.', img: 'https://media.gettyimages.com/id/668886498/photo/daily-life-in-old-delhi-this-overcrowded-area-of-delhi-a-vibrant-area-full-of-energy-there-are.jpg?s=612x612&w=0&k=20&c=d3WDwdtL9IhlDaBv1BGO_wy26WLQpWCHvxL6no5MCXs=', available: true }, // Placeholder img
  { id: 64, name: 'Prakash Sharma', service: 'driver', experience: '6 years', rating: 4.7, price: 675, availability: 'Monthly', desc: 'Skilled driver from Jaipur, familiar with tourist spots.', img: 'https://media.gettyimages.com/id/645086586/photo/farmer-portrait-while-driving-tractor.jpg?s=612x612&w=0&k=20&c=j3vEvPrQiGfU9fj0ksJQULS1KOYaUf4AgQNied1_7Fk=', available: true }, // Placeholder img
  
  // Cooks (Original 21-30)
  { id: 21, name: 'Sunita Rani', service: 'cook', experience: '4 years', rating: 4.8, price: 500, availability: 'Daily', desc: 'Skilled cook from Delhi, specializes in North Indian cuisine.', img: 'https://media.gettyimages.com/id/1457876584/photo/portrait-of-a-young-woman-cooking-food-in-the-kitchen-stock-photo.jpg?s=612x612&w=0&k=20&c=JKFlovKfUNGtug_n5GOfCsq3_7IUBNVzhF34egX_mDQ=', available: true },
  { id: 22, name: 'Anjali Gupta', service: 'cook', experience: '6 years', rating: 4.7, price: 1520, availability: 'Weekly', desc: 'Experienced cook from Mumbai, great at South Indian dishes.', img: 'https://media.gettyimages.com/id/1502237540/photo/domestic-portrait-of-senior-indian-woman-in-kitchen.jpg?s=612x612&w=0&k=20&c=KYZK-I46xFSmTmmhzZ8-biWFhe63-YWKhnvO08Gl5vg=', available: false },
  { id: 23, name: 'Meena Devi', service: 'cook', experience: '5 years', rating: 4.5, price: 4480, availability: 'Monthly', desc: 'Talented cook from Bangalore, expert in vegetarian meals.', img: 'https://media.gettyimages.com/id/1451364304/photo/woman-in-the-kitchen-stock-photo.jpg?s=612x612&w=0&k=20&c=TIEH9jbT5jOD52AJH-5Fa_lDhDdTmuiBwaJjbQlh0X0=', available: true },
  { id: 24, name: 'Rekha Sharma', service: 'cook', experience: '3 years', rating: 4.2, price: 1460, availability: 'Weekly', desc: 'Reliable cook from Chennai, good at traditional recipes.', img: 'https://media.gettyimages.com/id/910382868/photo/indian-village-woman-preparing-food-and-talking-on-phone.jpg?s=612x612&w=0&k=20&c=HS5EaKOhvOkZE7nlavQI0z588MRvrvX-e4J6dl-udL4=', available: false },
  { id: 25, name: 'Pooja Kumari', service: 'cook', experience: '7 years', rating: 4.9, price: 550, availability: 'Daily', desc: 'Professional cook from Kolkata, specializes in Bengali cuisine.', img: 'https://media.gettyimages.com/id/1209006710/photo/making-curry-in-the-kitchen.jpg?s=612x612&w=0&k=20&c=VFwOn7CEJbV7DsD27UfNlS0pcpkAQ0B1efWU0UX9OKs=', available: true },
  { id: 26, name: 'Suman Devi', service: 'cook', experience: '4 years', rating: 4.4, price: 4490, availability: 'Monthly', desc: 'Skilled cook from Delhi, great at Indian sweets.', img: 'https://media.gettyimages.com/id/1165049480/photo/portrait-of-a-married-indian-woman.jpg?s=612x612&w=0&k=20&c=fVgtVDMVccp_wJuUzDRrt5fjeiWter5a7VfgtePeOwY=', available: true },
  { id: 27, name: 'Kiran Bai', service: 'cook', experience: '6 years', rating: 4.6, price: 1510, availability: 'Weekly', desc: 'Experienced cook from Mumbai, expert in Jain food.', img: 'https://media.gettyimages.com/id/499781514/photo/indian-street-vendor-preparing-food-chapatti-flat-bread.jpg?s=612x612&w=0&k=20&c=IAs9RDQbEYIYZM5bQUkF6mht4lBqW5toaS8yhiSblwU=', available: false }, // Re-used image, consider replacing
  { id: 28, name: 'Neha Sharma', service: 'cook', experience: '5 years', rating: 4.5, price: 500, availability: 'Daily', desc: 'Talented cook from Bangalore, good at continental dishes.', img: 'https://media.gettyimages.com/id/1366763841/photo/happy-indian-women-in-saris-cooking-food-in-kitchen.jpg?s=612x612&w=0&k=20&c=LdQhSM7UveVplEi7Yaf7x_9dCt7yjgQAmdYI2Np9X90=', available: true },
  { id: 29, name: 'Ritesh Sahu', service: 'cook', experience: '3 years', rating: 4.1, price: 3470, availability: 'Monthly', desc: 'Reliable cook from Chennai, great at South Indian meals.', img: 'https://media.gettyimages.com/id/1131395594/photo/indian-chefs-cooking-in-a-professional-kitchen-of-a-gourmet-restaurant.jpg?s=612x612&w=0&k=20&c=dJNCuir1frkVMQAZ6klKg19iPQJCVW_UA4r6EGLi77U=', available: false },
  { id: 30, name: 'Asha Kumari', service: 'cook', experience: '6 years', rating: 4.7, price: 530, availability: 'Daily', desc: 'Professional cook from Kolkata, expert in seafood.', img: 'https://media.gettyimages.com/id/2163764602/photo/cheerful-women-cooking-food-on-mud-stove-at-home.jpg?s=612x612&w=0&k=20&c=nG01aGY5u5JMRBKErAi4Mnz0hV5WLoPFKMMRldTAUnU=', available: true },
  // Cooks (Added 31-40)
  { id: 71, name: 'Usha Sharma', service: 'cook', experience: '5 years', rating: 4.6, price: 510, availability: 'Daily', desc: 'Excellent cook from Hyderabad, knows Mughlai dishes.', img: 'https://media.gettyimages.com/id/869042460/photo/satia-india-a-woman-is-blowing-into-a-fire-with-a-wooden-tube-in-a-rural-area-about-300.jpg?s=612x612&w=0&k=20&c=3f1reZb8SguhIrrZaB6O5_t9wiDiksA7z8yzMRqmmlU=', available: true }, // Placeholder img
  { id: 72, name: 'Madhu Devi', service: 'cook', experience: '7 years', rating: 4.8, price: 1540, availability: 'Weekly', desc: 'Versatile cook from Pune, good with special diets.', img: 'https://media.gettyimages.com/id/184023898/photo/a-mumbai-ghetto-mumbai-india-a-surrogate-mother-cooks-food-for-the-other-mothers-and-herself.jpg?s=612x612&w=0&k=20&c=nTKoyU6z6s8iC_g60WlMnMxB_Jt4FmWxViUV8reU1kg=', available: false }, // Placeholder img
  { id: 73, name: 'Rajendra Kumar', service: 'cook', experience: '4 years', rating: 4.3, price: 4475, availability: 'Monthly', desc: 'Consistent cook from Ahmedabad, makes healthy meals.', img: 'https://media.gettyimages.com/id/1145083288/photo/small-business-street-vendor-indian-owner.jpg?s=612x612&w=0&k=20&c=fD8sz_TItSuefzAZDkiGsHRUblJY3_22m5VuH3iNHlY=', available: true }, // Placeholder img
  { id: 74, name: 'Gita Patel', service: 'cook', experience: '6 years', rating: 4.7, price: 525, availability: 'Daily', desc: 'Skilled cook from Jaipur, specializes in Rajasthani food.', img: 'https://media.gettyimages.com/id/477656155/photo/rabari-woman-cooking-rajasthan-india.jpg?s=612x612&w=0&k=20&c=-PmVxrV2EdUS430Mj3vvr7vVvszgg7KuSlczGCxEeN8=', available: true }, // Placeholder img
  { id: 75, name: 'Mohan Lal', service: 'cook', experience: '8 years', rating: 4.9, price: 3560, availability: 'Monthly', desc: 'Master cook from Lucknow, expert in Awadhi cuisine.', img: 'https://media.gettyimages.com/id/1409080779/photo/mature-man-cooking-vegetable-at-restaurant.jpg?s=612x612&w=0&k=20&c=uNbOiTDnM3YhTFTUbcDIibmbS0x4coJwyQ_sXkOaW2U=', available: false }, // Placeholder img
  { id: 76, name: 'Saroj Sharma', service: 'cook', experience: '3 years', rating: 4.0, price: 450, availability: 'Daily', desc: 'Eager cook from Chandigarh, good at following recipes.', img: 'https://media.gettyimages.com/id/668886476/photo/daily-life-in-old-delhi-this-overcrowded-area-of-delhi-a-vibrant-area-full-of-energy-there-are.jpg?s=612x612&w=0&k=20&c=tPSp69fN4RnICL5lpD3ghzntIlltXi5HYSo0WoKMMKc=', available: true }, // Placeholder img
  
  

  // Security Guards (Original 31-38)
  { id: 31, name: 'Vikram Singh', service: 'security guard', experience: '6 years', rating: 4.7, price: 700, availability: 'Daily', desc: 'Trained security guard from Delhi, ensures safety.', img: 'https://media.gettyimages.com/id/482172099/photo/smiling-police-officer-with-arms-folded.jpg?s=612x612&w=0&k=20&c=piqPsr9lt4-DYSNL6VfVkXkUozVvRPNgpX53hklK584=', available: true },
  { id: 32, name: 'Harbhajan Singh', service: 'security guard', experience: '8 years', rating: 4.9, price: 750, availability: 'Daily', desc: 'Professional guard from Mumbai, highly disciplined.', img: 'https://media.gettyimages.com/id/475696210/photo/portrait-of-indian-security-man-in-agra-india.jpg?s=612x612&w=0&k=20&c=5Fl2RdQrDlasGHqidnrJ3qHuOvsU6i9sKlGwmVZhjgk=', available: true },
  { id: 33, name: 'Rakesh Kumar', service: 'security guard', experience: '5 years', rating: 4.5, price: 1680, availability: 'Monthly', desc: 'Reliable guard from Bangalore, good at surveillance.', img: 'https://media.gettyimages.com/id/512907990/photo/senior-security-guard-standing-with-arms-outstretched-during-ganga-aarti.jpg?s=612x612&w=0&k=20&c=NDaYw2LGiSbsOkYgw4Z7hwRF9msIbtsYnJWjwJlpVmI=', available: false },
  { id: 34, name: 'Sanjay Sharma', service: 'security guard', experience: '7 years', rating: 4.8, price: 720, availability: 'Daily', desc: 'Experienced guard from Chennai, great at night shifts.', img: 'https://media.gettyimages.com/id/1251960211/photo/mumbai-maharashtra-india-a-security-guard-stands-outside-the-apple-store-at-jio-world-drive.jpg?s=612x612&w=0&k=20&c=YQtBEFlOqFzLOqWxA1KJFdkHRk2BPjEtoduuBqr8AU4=', available: true },
  { id: 35, name: 'Mohan Singh', service: 'security guard', experience: '4 years', rating: 4.3, price: 6660, availability: 'Monthly', desc: 'Trained guard from Kolkata, good at patrolling.', img: 'https://st2.depositphotos.com/3591429/5245/i/450/depositphotos_52453733-stock-photo-indian-man-in-security-uniform.jpg', available: false },
  { id: 36, name: 'Ajay Kumar', service: 'security guard', experience: '6 years', rating: 4.6, price: 710, availability: 'Daily', desc: 'Professional guard from Delhi, excellent at security checks.', img: 'https://st.depositphotos.com/1033142/2495/i/450/depositphotos_24956311-stock-photo-security-penangmalaysia.jpg', available: true },
  { id: 37, name: 'Rajendra Thakur', service: 'security guard', experience: '5 years', rating: 4.4, price: 2690, availability: 'Weekly', desc: 'Reliable security guard from Mumbai, experienced in handling emergencies.', img: 'https://st.depositphotos.com/1000291/2075/i/450/depositphotos_20757893-stock-photo-adult-indian-guardian-man.jpg', available: false },
  { id: 38, name: 'Naresh Yadav', service: 'security guard', experience: '7 years', rating: 4.7, price: 4730, availability: 'Monthly', desc: 'Disciplined security guard from Bangalore, great at monitoring CCTV systems.', img: 'https://st3.depositphotos.com/1049680/31904/i/450/depositphotos_319041710-stock-photo-arab-indian-hispanic-safeguard-man.jpg', available: true },
  // Security Guards (Added 39-50) - Need 12 more
  { id: 81, name: 'Jagdish Singh', service: 'security guard', experience: '9 years', rating: 4.9, price: 760, availability: 'Daily', desc: 'Ex-military guard from Hyderabad, top security protocols.', img: 'https://media.gettyimages.com/id/475696210/photo/portrait-of-indian-security-man-in-agra-india.jpg?s=612x612&w=0&k=20&c=5Fl2RdQrDlasGHqidnrJ3qHuOvsU6i9sKlGwmVZhjgk=', available: true }, // Placeholder img
  { id: 82, name: 'Balram Meena', service: 'security guard', experience: '4 years', rating: 4.2, price: 2650, availability: 'Weekly', desc: 'Alert guard from Pune, good for residential complexes.', img: 'https://media.gettyimages.com/id/82559573/photo/man-in-dark-suit-dark-glasses.jpg?s=612x612&w=0&k=20&c=S4j-X7K4oNZMpTGrqAoIHAOCxA2YteXHVn8AmMbJ9IA=', available: false }, // Placeholder img
  { id: 83, name: 'Surendra Pal', service: 'security guard', experience: '6 years', rating: 4.5, price: 5695, availability: 'Monthly', desc: 'Vigilant guard from Ahmedabad, quick response time.', img: 'https://media.gettyimages.com/id/1200547069/photo/beijing-china-a-chinese-security-guard-wears-a-protective-mask-as-he-guards-a-shopping-mall.jpg?s=612x612&w=0&k=20&c=1boKbRqqGFekNdMed-aXOQFCfQA8iz9uOnIMgTFeqac=', available: true }, // Placeholder img
  
  

  // Cleaners (Original 41-45)
  { id: 41, name: 'Ram Prasad', service: 'cleaner', experience: '4 years', rating: 4.3, price: 350, availability: 'Daily', desc: 'Professional cleaner from Delhi, skilled in deep cleaning and sanitization.', img: 'https://t3.ftcdn.net/jpg/13/41/11/32/240_F_1341113293_NATXJ65DOdSmJUJwcVS2yB7NPovZjvjm.jpg', available: true },
  { id: 42, name: 'Shanti Bai', service: 'cleaner', experience: '6 years', rating: 4.6, price: 2370, availability: 'Weekly', desc: 'Efficient cleaner from Mumbai, great at dusting and organizing.', img: 'https://t3.ftcdn.net/jpg/12/67/92/28/240_F_1267922859_aTO75UjBpXKuPm2YHg6BEJa90PVxxsRU.jpg', available: false },
  { id: 43, name: 'Dinesh Kumar', service: 'cleaner', experience: '5 years', rating: 4.5, price: 4360, availability: 'Monthly', desc: 'Reliable cleaner from Bangalore, specializes in office cleaning.', img: 'https://t3.ftcdn.net/jpg/07/85/72/38/240_F_785723866_gyv7aZhFEBgZNyPDDq0IqYmKPl2cRlVK.jpg', available: true },
  { id: 44, name: 'Pooja Rani', service: 'cleaner', experience: '3 years', rating: 4.2, price: 2340, availability: 'Weekly', desc: 'Hardworking cleaner from Chennai, skilled in eco-friendly cleaning methods.', img: 'https://t3.ftcdn.net/jpg/11/70/70/56/240_F_1170705619_kd4abSCaZYSySMoOb8sEHVZRqOI1XmC8.jpg', available: false },
  { id: 45, name: 'Ravi Verma', service: 'cleaner', experience: '7 years', rating: 4.8, price: 380, availability: 'Daily', desc: 'Experienced cleaner from Kolkata, great at stain removal and floor polishing.', img: 'https://t4.ftcdn.net/jpg/13/41/11/35/240_F_1341113563_Dk0I5TLVFs1tXMGr8SWpLVmuNQfCRhIi.jpg', available: true },
  // Cleaners (Added 46-60) - Need 15 more
  { id: 93, name: 'Suresh Kumar', service: 'cleaner', experience: '3 years', rating: 4.0, price: 330, availability: 'Daily', desc: 'Thorough cleaner from Hyderabad, focuses on hygiene.', img: 'https://media.gettyimages.com/id/1294435981/photo/life-during-covid-takes-a-lot-of-extra-care.jpg?s=612x612&w=0&k=20&c=cAVDrfibzTp2Y2rgZKDQvEl10uIG1rHQZrfWh2jFl0Q=', available: true }, // Placeholder img
  { id: 94, name: 'Maya Devi', service: 'cleaner', experience: '5 years', rating: 4.4, price: 4355, availability: 'Monthly', desc: 'Experienced cleaner from Pune, quick and efficient.', img: 'https://media.gettyimages.com/id/641941258/photo/rural-women-carrying-animal-silage.jpg?s=612x612&w=0&k=20&c=0vrFBwaf0cFO1YnDtBXVl0DJ0GJ_KHIvHwpCH_QVBV0=', available: false }, // Placeholder img
  { id: 95, name: 'Anil Paswan', service: 'cleaner', experience: '4 years', rating: 4.2, price: 345, availability: 'Daily', desc: 'Dedicated cleaner from Ahmedabad, good with window cleaning.', img: 'https://media.gettyimages.com/id/1196703659/photo/man-using-garment-steamer-on-shirt.jpg?s=612x612&w=0&k=20&c=qyL7u15BUKE_5N7pHlV7N-L99B2SkNxvqAyr5LTsDsI=', available: true }, // Placeholder img
  { id: 96, name: 'Leela Bai', service: 'cleaner', experience: '6 years', rating: 4.7, price: 4375, availability: 'Monthly', desc: 'Meticulous cleaner from Jaipur, excellent attention to detail.', img: 'https://media.gettyimages.com/id/1408576312/photo/low-angle-view-of-a-young-woman-washing-utensils-in-the-kitchen.jpg?s=612x612&w=0&k=20&c=4tKa-RgYmGEqZEf6SYdUWFSnm14N-7H1QGYPtCOYagc=', available: true }, // Placeholder img
  { id: 97, name: 'Muskan Kumari', service: 'cleaner', experience: '2 years', rating: 3.9, price: 2320, availability: 'Weekly', desc: 'New cleaner from Lucknow, hardworking and willing to learn.', img: 'https://media.gettyimages.com/id/557474939/photo/woman-washing-dishes-in-kitchen.jpg?s=612x612&w=0&k=20&c=Pc9OdWgT_owNEApC2L89PADCPoO_6dphxO0VTwDRAW4=', available: false }, // Placeholder img
  { id: 98, name: 'Sarita Devi', service: 'cleaner', experience: '5 years', rating: 4.5, price: 365, availability: 'Daily', desc: 'Reliable cleaner from Chandigarh, good at bathroom sanitization.', img: 'https://media.gettyimages.com/id/1334115490/photo/a-home-maker-carrying-reusable-cloth-bags-for-shopping.jpg?s=612x612&w=0&k=20&c=QzZ6WDoV28jYa9ggGhhU-AtBAesZeSQlA6GBQ6OueZw=', available: true }, // Placeholder img
  { id: 99, name: 'Rani Sahu', service: 'cleaner', experience: '7 years', rating: 4.8, price: 3385, availability: 'Monthly', desc: 'Very experienced cleaner from Surat, specializes in carpet cleaning.', img: 'https://media.gettyimages.com/id/1148562567/photo/portrait-of-a-married-indian-woman.jpg?s=612x612&w=0&k=20&c=aHv_JDKEXR88ufmtKXOvRYkxXoJgxK-tAu29coaaXgA=', available: false }, // Placeholder img
  
  // Caretakers (Original 46-50)
  { id: 46, name: 'Geeta Devi', service: 'caretaker', experience: '5 years', rating: 4.7, price: 500, availability: 'Daily', desc: 'Compassionate caretaker from Delhi, experienced in elderly care.', img: 'https://t3.ftcdn.net/jpg/06/39/89/46/240_F_639894672_BvN2YUX3qGs4ubvFQGJaaY0JbAiINR33.jpg', available: true },
  { id: 47, name: 'Anand Kumar', service: 'caretaker', experience: '6 years', rating: 4.5, price: 2520, availability: 'Weekly', desc: 'Reliable caretaker from Mumbai, specializes in child care.', img: 'https://t3.ftcdn.net/jpg/06/35/82/22/240_F_635822280_lfX7iiyWicJOYjmPIOTK1GeMNztOBWCE.jpg', available: false },
  { id: 48, name: 'Meera Thakur', service: 'caretaker', experience: '4 years', rating: 4.3, price: 9480, availability: 'Monthly', desc: 'Kind-hearted caretaker from Bangalore, great with people with disabilities.', img: 'https://t4.ftcdn.net/jpg/10/99/61/51/240_F_1099615189_DzrzdcRNLBJCeK27BgSGZfXU92VBYWFh.jpg', available: true },
  { id: 49, name: 'Sanjay Sharma', service: 'caretaker', experience: '7 years', rating: 4.8, price: 550, availability: 'Daily', desc: 'Experienced caretaker from Chennai, excellent at providing emotional support.', img: 'https://t3.ftcdn.net/jpg/10/33/28/14/240_F_1033281404_pFxiaYTcd1TztMi5oBLiEx3DaPPmGxSO.jpg', available: true },
  { id: 50, name: 'Pooja Kumari', service: 'caretaker', experience: '3 years', rating: 4.2, price: 3460, availability: 'Weekly', desc: 'Caring caretaker from Kolkata, skilled in post-surgery care.', img: 'https://t4.ftcdn.net/jpg/06/08/97/49/240_F_608974902_1FAz5xI0h8PFziDd7WdEwxBrQa2x2j4W.jpg', available: false },
  // Caretakers (Added 51-65) - Need 15 more
  { id: 108, name: 'Nirmala Sharma', service: 'caretaker', experience: '8 years', rating: 4.9, price: 7580, availability: 'Monthly', desc: 'Very compassionate caretaker from Hyderabad, excellent patient care.', img: 'https://t3.ftcdn.net/jpg/06/39/89/46/240_F_639894672_BvN2YUX3qGs4ubvFQGJaaY0JbAiINR33.jpg', available: true }, // Placeholder img
  { id: 109, name: 'Ashok Patel', service: 'caretaker', experience: '4 years', rating: 4.1, price: 470, availability: 'Weekly', desc: 'Gentle caretaker from Pune, good companion for seniors.', img: 'https://media.gettyimages.com/id/1335266966/photo/indian-farmer-in-his-field.jpg?s=612x612&w=0&k=20&c=Ft05BrGWKqfjtVHXTacSUUELSrVbtjxBP0Jdz2kT2a0=', available: false }, // Placeholder img
  { id: 110, name: 'Sudha Rani', service: 'caretaker', experience: '6 years', rating: 4.6, price: 530, availability: 'Daily', desc: 'Experienced caretaker from Ahmedabad, trained in basic nursing.', img: 'https://media.gettyimages.com/id/108313170/photo/nepali-woman.jpg?s=612x612&w=0&k=20&c=spp9YIN3yE2T6EkYsDH_OsiQk_sWtk8u_AyeWVxzYP8=', available: true }, // Placeholder img
  { id: 111, name: 'Rajesh Meena', service: 'caretaker', experience: '5 years', rating: 4.4, price: 9510, availability: 'Monthly', desc: 'Patient caretaker from Jaipur, works well with dementia patients.', img: 'https://media.gettyimages.com/id/163017407/photo/real-people-from-rural-india-portrait-of-a-senior-man.jpg?s=612x612&w=0&k=20&c=G0ibw9iSnP2kd-8wTfyuYHh1mxyAcQQInQgLO8f3Hac=', available: true }, // Placeholder img
  { id: 112, name: 'Savita Singh', service: 'caretaker', experience: '7 years', rating: 4.7, price: 540, availability: 'Weekly', desc: 'Reliable caretaker from Lucknow, good at managing medications.', img: 'https://media.gettyimages.com/id/2117363210/photo/female-worker-carrying-daughter-and-collecting-bricks-at-site.jpg?s=612x612&w=0&k=20&c=p48Huw6xCey8yKYbWdszvSIBt0amFhm31FvpmXHYZwE=', available: false }, // Placeholder img
  { id: 113, name: 'Krishna Murthy', service: 'caretaker', experience: '3 years', rating: 4.0, price: 450, availability: 'Daily', desc: 'Kind caretaker from Chandigarh, provides good companionship.', img: 'https://media.gettyimages.com/id/181900210/photo/indian-male.jpg?s=612x612&w=0&k=20&c=Yjbg0l6WOY_JBABdwy-Em0SwLh3iaM6m8E48-7I_Rng=', available: true }, // Placeholder img
  { id: 114, name: 'Urmila Devi', service: 'caretaker', experience: '5 years', rating: 4.5, price: 10500, availability: 'Monthly', desc: 'Supportive caretaker from Surat, assists with daily activities.', img: 'https://media.gettyimages.com/id/969807232/photo/young-indian-woman-holding-her-baby-desert-village-india.jpg?s=612x612&w=0&k=20&c=K0zosekxEJvKYPr8ri8VwKT6asJYmiDfxiA_Lo64bNQ=', available: false }, // Placeholder img
  
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
                className="p-6 bg-white rounded-2xl shadow-lg border border-[#144272] transition-all duration-300"
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