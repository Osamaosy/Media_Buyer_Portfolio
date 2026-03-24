const { DataTypes } = require('sequelize');
const { sequelize } = require('./Project');

const SiteContent = sequelize.define('SiteContent', {
  hero: { type: DataTypes.JSONB, allowNull: false },
  about: { type: DataTypes.JSONB, allowNull: false },
  services: { type: DataTypes.JSONB, allowNull: false },
  results: { type: DataTypes.JSONB, allowNull: false },
  contact: { type: DataTypes.JSONB, allowNull: false },
  footer: { type: DataTypes.JSONB, allowNull: false },
});

module.exports = SiteContent;
