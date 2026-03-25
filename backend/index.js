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

// Database Connection & Server Initialization
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ PostgreSQL Connected successfully.');

    if (process.env.NODE_ENV === 'development') {
      await sequelize.sync();
      console.log('✅ Database Models Synced.');
    }

    // التشغيل المحلي فقط (Localhost)
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