# forum-app (Backend API)

This is the backend for the Career Change & Burnout Forum full-stack project.

## Features

- User registration and login (with hashed passwords)
- JWT-based authentication
- Category creation and retrieval
- Question posting, editing, and deletion
- MongoDB Atlas for data storage

---

## 🛠️ Technologies

- Node.js
- Express
- MongoDB + Mongoose
- bcrypt
- jsonwebtoken
- CORS
- dotenv

---

## API Base URL (Live)

[https://forum-backend-m2o6.onrender.com](https://forum-backend-m2o6.onrender.com)

---

## Endpoints

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Categories
- `GET /api/categories`
- `POST /api/categories`

### Questions
- `GET /api/questions/:categoryId`
- `POST /api/questions`
- `PUT /api/questions/:id`
- `DELETE /api/questions/:id`

---

## Developer

Matthew Bourgeois  
Software Engineering Bootcamp — Project 4
