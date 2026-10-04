# AppointMG Backend

A Node.js + Express backend for an appointment booking platform connecting patients, doctors, and admins. The API supports user registration/login, doctor profile management, appointment booking and cancellation, admin doctor management, and payment flows for bookings.

## Overview

This backend powers a healthcare scheduling system where:

- Patients can sign up, log in, update their profile, and book appointments with doctors.
- Doctors can log in, view appointments, change availability, complete or cancel appointments, and update profile details.
- Admins can log in, manage doctor records, view appointment data, and monitor dashboard stats.
- Media uploads are handled through Cloudinary and database configuration is managed through MongoDB with Mongoose.

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT for authentication
- Cloudinary for image upload
- PayPal SDK for payment creation/verification
- CORS, dotenv, Multer, Bcrypt, Validator

## Project Structure

```text
.
├── config/
│   ├── cloudinary.js         # Cloudinary configuration
│   └── mongodb.js            # MongoDB connection setup
├── controllers/
│   ├── adminController.js    # Admin APIs
│   ├── doctorController.js   # Doctor APIs
│   └── userController.js     # User APIs
├── middleware/
│   ├── authAdmin.js          # Admin auth middleware
│   ├── authDoctor.js         # Doctor auth middleware
│   ├── authUser.js           # User auth middleware
│   └── multer.js             # File upload middleware
├── models/
│   ├── appointmentModel.js   # Appointment schema
│   ├── doctorModel.js        # Doctor schema
│   └── userModel.js          # User schema
├── routes/
│   ├── adminRoute.js         # Admin endpoints
│   ├── doctorRoute.js        # Doctor endpoints
│   └── userRoute.js          # User endpoints
├── .env                      # Local environment variables
├── .gitignore
├── package.json
├── paypalClient.js           # PayPal client factory
├── server.js                 # Server bootstrap
└── README.md
```

## Core Features

### User features
- Register and log in
- Fetch and update profile data
- Upload profile image
- View doctor list
- Book appointment with selected doctor and time slot
- View booked appointments
- Cancel appointments
- Pay for appointments through PayPal

### Doctor features
- Doctor login
- View assigned or all appointments
- Cancel or complete appointments
- Toggle availability
- View dashboard summary with earnings, appointment count, and patient count
- Fetch and update profile

### Admin features
- Admin login using environment credentials
- Add new doctors with image upload and detailed profile fields
- View all appointments and doctors
- Cancel appointments
- Dashboard summary for doctors, patients, and appointments

## API Overview

### User routes
Base path: `/api/user`

- `POST /register`
- `POST /login`
- `GET /get-profile`
- `POST /update-profile`
- `POST /book-appointment`
- `GET /appointments`
- `POST /cancel-appointment`
- `POST /payment-paypal`
- `POST /verifyPayPal`

### Doctor routes
Base path: `/api/doctor`

- `POST /login`
- `GET /appointments`
- `POST /cancel-appointment`
- `GET /list`
- `POST /change-availability`
- `POST /complete-appointment`
- `GET /dashboard`
- `GET /profile`
- `POST /update-profile`

### Admin routes
Base path: `/api/admin`

- `POST /login`
- `POST /add-doctor`
- `GET /appointments`
- `POST /cancel-appointment`
- `GET /all-doctors`
- `POST /change-availability`
- `GET /dashboard`

## Authentication

Authentication is implemented using JWT with request headers:

- User token: `token`
- Doctor token: `dtoken`
- Admin token: `atoken`

These values are expected in the request headers for protected routes.

## Environment Variables

Create a `.env` file in the project root with the following variables:

```env
PORT=4000
JWT_SECRET=your_jwt_secret

ADMIN_EMAIL=admin@appointmg.com
ADMIN_PASSWORD=admin12345

MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>

CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret

PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
CURRENCY=USD
```

Important: do not commit real secrets to version control.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

or

```bash
npm start
```

3. Server default port:

```bash
http://localhost:4000
```

## Notes

- The app uses MongoDB Atlas-style connection strings through `MONGODB_URI`.
- Cloudinary is used for image upload storage.
- PayPal is used for appointment payment verification.
- The healthy root endpoint responds with:

```text
API Working
```

## License

This project does not currently define a repository license in the codebase.

## Summary

This backend is a full-stack-leaning appointment management API for a healthcare platform, designed around three roles: patient, doctor, and admin. It centralizes authentication, appointment scheduling logic, profile management, media uploads, and third-party payment integration in a modular Express application.
