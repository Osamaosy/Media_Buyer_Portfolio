const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { sequelize } = require('./models/Project');

const projectRoutes = require('./routes/projects');
const contentRoutes = require('./routes/content');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use('/api/projects', projectRoutes);
app.use('/api/content', contentRoutes);

app.get('/', (req, res) => res.send('API is running...'));

sequelize.sync().then(() => {
  console.log('PostgreSQL synced');
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
  });
}).catch(err => console.error('Sequelize sync error:', err));
