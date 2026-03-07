const mongoose = require('mongoose');

const LocalizedStringSchema = new mongoose.Schema({
  ar: { type: String, required: true },
  en: { type: String, required: true }
}, { _id: false });

const SiteContentSchema = new mongoose.Schema({
  hero: {
    title: { type: LocalizedStringSchema, required: true },
    name: { type: LocalizedStringSchema, required: true },
    description: { type: LocalizedStringSchema, required: true },
    stats: [{
      value: { type: String, required: true },
      label: { type: LocalizedStringSchema, required: true }
    }],
    cta: {
      primary: { type: LocalizedStringSchema, required: true },
      secondary: { type: LocalizedStringSchema, required: true }
    }
  },
  about: {
    title: { type: LocalizedStringSchema, required: true },
    subtitle: { type: LocalizedStringSchema, required: true },
    paragraphs: [{ type: LocalizedStringSchema, required: true }],
    stats: [{
      label: { type: LocalizedStringSchema, required: true },
      value: { type: String, required: true },
      percentage: { type: String, required: true },
      color: { type: String, required: true }
    }]
  },
  services: {
    title: { type: LocalizedStringSchema, required: true },
    subtitle: { type: LocalizedStringSchema, required: true },
    items: [{
      title: { type: LocalizedStringSchema, required: true },
      description: { type: LocalizedStringSchema, required: true },
      icon: { type: String, required: true }
    }]
  },
  results: {
    title: { type: LocalizedStringSchema, required: true },
    items: [{
      number: { type: String, required: true },
      label: { type: LocalizedStringSchema, required: true }
    }]
  },
  contact: {
    title: { type: LocalizedStringSchema, required: true },
    whatsapp: {
      label: { type: LocalizedStringSchema, required: true },
      sub: { type: LocalizedStringSchema, required: true }
    },
    email: {
      label: { type: LocalizedStringSchema, required: true },
      value: { type: String, required: true }
    },
    facebook: {
      label: { type: LocalizedStringSchema, required: true },
      sub: { type: LocalizedStringSchema, required: true }
    },
    form: {
      name: { type: LocalizedStringSchema, required: true },
      email: { type: LocalizedStringSchema, required: true },
      message: { type: LocalizedStringSchema, required: true },
      button: { type: LocalizedStringSchema, required: true }
    }
  },
  footer: {
    bio: { type: LocalizedStringSchema, required: true },
    linksTitle: { type: LocalizedStringSchema, required: true },
    contactTitle: { type: LocalizedStringSchema, required: true },
    rights: { type: LocalizedStringSchema, required: true }
  }
}, { timestamps: true });

module.exports = mongoose.model('SiteContent', SiteContentSchema);
