# 🚀 Work4U - Service Booking Web App

**Work4U** is a web-based application that allows users to book services (like labor) easily through a sleek UI. It features user login, registration, booking, and a personalized dashboard with animated UI elements.

---

## ✨ Features

- 🔐 User Registration & Login
- 📅 Book Labor Services
- 🧾 Order History in User Dashboard
- ⚡ Animated Welcome Text
- 📱 Responsive UI
- 💾 Data stored in LocalStorage

---

## 🖼️ UI Screens

| Login Page | Dashboard | Booking Page |
|------------|-----------|--------------|
| ✅ Animated "WORK4U" welcome | ✅ View personal details | ✅ Book a service |
| ✅ Form validation | ✅ Order history | ✅ Input address, date, time |

---

## 📁 Folder Structure

```work4u/
│
├── assets/
│   └── css/
│       └── landr.css         # Main CSS for Login
│
├── auth/
│   ├── register.html         # Registration Page
│   └── home.html             # Landing Page
│
├── dashboard/
│   └── customer.html         # User Dashboard
│
├── database/
│   ├── database.js           # LocalStorage Database Methods
│   └── login.js              # Login Logic
│
├── booking/
│   ├── customer.html         # Booking Form
│   └── booking.js            # Booking Logic
│
├── login.html                # Login Page with Animated Welcome
└── README.md                 # Project Documentation

```
## 🛠️ Tech Stack

- **HTML5**
- **CSS3 (Animations)**
- **JavaScript (ES6)**
- **LocalStorage** for user and order data

---

## 🧠 How It Works

1. User registers and logs in
2. User can book services via booking form
3. Bookings are saved in localStorage
4. Dashboard displays user profile + order history dynamically

---

## 🎨 UI Highlight: Animated Title

The "WORK4U" title on the login page animates one letter at a time using CSS keyframes.

```css
