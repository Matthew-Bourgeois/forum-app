// Express server setup for Forum App backend (API & MongoDB connection)

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/categories');
const questionRoutes = require('./routes/questions');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/questions', questionRoutes);

// Determine port for Render (uses env.PORT or fallback to 5000 locally)
const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start the server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ MongoDB connected');
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
})
.catch((err) => console.error('❌ MongoDB connection error:', err));
