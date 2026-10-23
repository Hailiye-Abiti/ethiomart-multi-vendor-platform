# ethiomart-multi-vendor-platform
A full-stack multi-vendor web application connecting local producers, merchants, and buyers with interactive product catalogs, cart management, and RESTful API backend.


# 🛒 EthioMart - Multi-Vendor Agri-Tech E-Commerce Platform

EthioMart is a full-stack e-commerce and agricultural technology platform designed to bridge local Ethiopian producers (farmers, artisans, and merchants) directly with buyers. This project is built to demonstrate modern full-stack web development capabilities for professional portfolios and internship applications.

---

## 🚀 Tech Stack

### Frontend:
* **React.js** (Component-based UI)
* **React Router** (Client-side routing)
* **Axios** (API HTTP requests)
* **CSS3** (Responsive modern styling)

### Backend:
* **Node.js** & **Express.js** (RESTful API Server)
* **MongoDB & Mongoose** (Database & ODM)
* **JWT & Bcryptjs** (Authentication & Security - *extensible*)

---

## 📂 Project Structure

```text
ethiomart/
│
├── client/                 # React Frontend Application
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
│
├── server/                 # Node.js & Express Backend
│   ├── config/             # Database configuration (db.js)
│   ├── controllers/        # Business logic (productController.js)
│   ├── models/             # Mongoose schemas (Product.js, User.js)
│   ├── routes/             # API routes (productRoutes.js)
│   ├── server.js           # Main entry point
│   └── package.json
│
└── README.md
