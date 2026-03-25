const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { sequelize } = require('./models/Project');

const projectRoutes = require('./routes/projects');
const contentRoutes = require('./routes/content');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/content', contentRoutes);

// Health Check Route
app.get('/', (req, res) => res.send('API is running on Vercel... 🚀'));

// Database Connection & Sync
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ PostgreSQL Connected successfully.');

    // جعلنا الـ sync يعمل في الـ Production أيضاً لتحديث الجدول في Neon
    await sequelize.sync({ alter: true });
    console.log("Database synced and altered! ✅");

    // تشغيل السيرفر فقط إذا لم نكن على Vercel (لأن Vercel لا يحتاج listen)
    if (process.env.NODE_ENV !== 'production') {
      app.listen(PORT, () => {
        console.log(`🚀 Server is running on http://localhost:${PORT}`);
      });
    }
  } catch (err) {
    console.error('❌ Database connection error:', err);
  }
};

startServer();

module.exports = app;