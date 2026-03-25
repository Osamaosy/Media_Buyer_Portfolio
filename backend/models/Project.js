const { Sequelize, DataTypes } = require('sequelize');
const pg = require('pg'); // <-- 1. استدعاء مكتبة pg يدوياً
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectModule: pg, // <-- 2. إجبار Sequelize على استخدام المكتبة
  logging: false,
  dialectOptions: {
    ssl: {
      require: true, // <-- 3. مطلوب لقواعد بيانات Neon
      rejectUnauthorized: false
    }
  }
});

const Project = sequelize.define('Project', {
  title: { type: DataTypes.JSONB, allowNull: false },
  description: { type: DataTypes.JSONB, allowNull: false },
  image: { type: DataTypes.STRING, allowNull: false },
  technologies: { type: DataTypes.ARRAY(DataTypes.STRING) },
  githubLink: { type: DataTypes.STRING },
  liveLink: { type: DataTypes.STRING },
});

module.exports = { sequelize, Project };