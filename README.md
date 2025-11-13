# Smart Bills - Utility Management Platform

![Smart Bills Banner](https://i.ibb.co/ZdXy3hG/about-us-team.jpg)

## Project Overview
**Smart Bills** is a digital platform designed to simplify the management of all kinds of monthly utility bills. From electricity, gas, water, and internet bills to tuition fees, this web application provides users with a centralized dashboard to track, pay, and manage their bills easily and securely.

This project was created to provide a fast, user-friendly, and secure solution for people who want to save time, stay organized, and avoid missed payments.

---

## Why It Was Made
Managing multiple utility bills manually is often time-consuming and prone to errors. Many users face problems like:  
- Forgetting due dates  
- Visiting multiple payment portals  
- Losing track of past payments  

**Smart Bills** addresses these challenges by providing:  
- A **single dashboard** to view all bills  
- **Instant online payments** for the current month  
- **Payment history tracking** and downloadable records  
- **Secure storage** for all sensitive information  

---

## Live Demo
Check out the live site here: [Smart Bills Live](https://brilliant-cuchufli-7eb2ec.netlify.app/)

---

## Features
- View all bills with category, location, amount, and details  
- Add new bills to the system (admin or authorized users)  
- Filter bills by category (Electricity, Gas, Water, Internet, Tuition, Other)  
- Pay bills directly through the platform  
- Track payment history and download receipts  
- Responsive design, works on all devices  

---

## How It Works
1. **Fetching Bills:** The frontend fetches all bills from the backend API. Bills can be filtered by category using query parameters.  
2. **Adding Bills:** Users can submit new bills via a form that sends data to the backend API.  
3. **Paying Bills:** Users pay current month bills via a secure form. Payment details are stored in the database.  
4. **Tracking Payments:** Users can view their payment history, with each transaction stored safely in the backend.  

---

## Technologies Used
- **Frontend:** React, Tailwind CSS, Swiper.js for sliders, React Router  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication & Security:** JWT (JSON Web Tokens) for user verification  
- **Notifications:** React Toastify for success/error alerts  
- **Hosting:** [Specify hosting if applicable, e.g., Vercel, Netlify, or custom server]  

---

## API Endpoints
- `GET /bills` → Fetch all bills, optional query `?category=CategoryName`  
- `POST /bills` → Add a new bill  
- `GET /bills/:id` → Fetch bill details  
- `POST /payments` → Make a payment  
- `GET /payments?email=user@example.com` → Fetch user payment history  

---

## Future Enhancements
- Add user authentication and admin dashboard  
- Enable payment integrations (Stripe, PayPal)  
- Generate monthly summary reports  
- Push notifications for due bills  

---

## How to Run Locally
1. Clone the repo:  
```bash
git clone https://github.com/yourusername/smart-bills.git
