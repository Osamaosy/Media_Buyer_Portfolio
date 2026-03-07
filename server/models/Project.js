const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
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
