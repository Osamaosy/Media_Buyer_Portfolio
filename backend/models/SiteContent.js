const { DataTypes } = require('sequelize');
const { sequelize } = require('./Project');

const SiteContent = sequelize.define('SiteContent', {
  hero: { type: DataTypes.JSONB, allowNull: true }, // تم التغيير لـ true
  about: { type: DataTypes.JSONB, allowNull: true },
  services: { type: DataTypes.JSONB, allowNull: true },
  results: { type: DataTypes.JSONB, allowNull: true },
  contact: { type: DataTypes.JSONB, allowNull: true },
  footer: { type: DataTypes.JSONB, allowNull: true },
});

module.exports = SiteContent;