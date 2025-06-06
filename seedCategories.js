require('dotenv').config();
const mongoose = require('mongoose');
const Category = require('./models/Category');

// Career Change & Burnout forum categories
const categories = [
  'Career Transitions',
  'Burnout & Mental Health',
  'Learning New Skills',
  'Interview Anxiety',
  'Resume Help',
  'Remote Work & Flexibility',
  'Work-Life Balance',
  'Quitting a Job',
  'Age & Career Change',
  'Tech Bootcamps / Certifications',
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Category.deleteMany(); // Optional: clear old categories
    await Category.insertMany(categories.map(name => ({ name })));

    console.log('✅ Categories inserted');
    process.exit();
  } catch (err) {
    console.error('❌ Error seeding categories:', err);
    process.exit(1);
  }
}

seed();
