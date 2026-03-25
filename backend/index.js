const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { sequelize } = require('./models/Project');

// استدعاء الموديلات مهم جداً هنا
require('./models/Project');
require('./models/SiteContent'); 

const projectRoutes = require('./routes/projects');
const contentRoutes = require('./routes/content');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/content', contentRoutes);

app.get('/', (req, res) => res.send('API is running... 🚀'));

const startServer = async () => {
  try {
    await sequelize.authenticate();
    // السطر ده هو السر.. لازم يشتغل في الـ Production عشان ينشئ الجدول اللي مسحناه
    await sequelize.sync({ alter: true });
    console.log("✅ Database Synced Successfully");

    if (process.env.NODE_ENV !== 'production') {
      const PORT = process.env.PORT || 8000;
      app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`));
    }
  } catch (err) {
    console.error('❌ DB Error:', err);
  }
};

startServer();
module.exports = app;