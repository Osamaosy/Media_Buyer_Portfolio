const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { sequelize } = require('./models/Project');

// استيراد الموديلات لضمان تسجيلها قبل الـ Sync
require('./models/SiteContent'); 

const projectRoutes = require('./routes/projects');
const contentRoutes = require('./routes/content');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/content', contentRoutes);

app.get('/', (req, res) => res.send('API is running... 🚀'));

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ PostgreSQL Connected.');

    await sequelize.sync({ alter: true });
    console.log("Database synced! ✅");

    if (process.env.NODE_ENV !== 'production') {
      app.listen(PORT, () => console.log(`🚀 Port: ${PORT}`));
    }
  } catch (err) {
    console.error('❌ DB Error:', err);
  }
};

startServer();
module.exports = app;