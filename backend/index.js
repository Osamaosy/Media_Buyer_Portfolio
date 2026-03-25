const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { sequelize } = require('./models/Project');

// 1. استيراد الموديلات يدوياً للتأكد من أن Sequelize "يراها"
require('./models/Project');
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

    // 2. تفعيل المزامنة في كل البيئات لإنشاء الجداول المفقودة
    await sequelize.sync({ alter: true });
    console.log("✅ Database synced and tables created.");

    if (process.env.NODE_ENV !== 'production') {
      app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`));
    }
  } catch (err) {
    console.error('❌ DB Error:', err);
  }
};

startServer();

module.exports = app;