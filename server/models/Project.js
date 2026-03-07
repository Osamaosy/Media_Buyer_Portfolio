const mongoose = require('mongoose');

const LocalizedStringSchema = new mongoose.Schema({
  ar: { type: String, required: true },
  en: { type: String, required: true }
}, { _id: false });

const ProjectSchema = new mongoose.Schema({
  title: { type: LocalizedStringSchema, required: true },
  description: { type: LocalizedStringSchema, required: true },
  image: { type: String, required: true },
  technologies: [{ type: String }],
  githubLink: { type: String },
  liveLink: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);
