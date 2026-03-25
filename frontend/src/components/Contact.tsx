import React, { useEffect, useState } from 'react';
import { MessageCircle, Mail, Facebook } from 'lucide-react';
import Button from './button';
import { useLanguage } from '../context/LanguageContext';
import { fetchSiteContent, SiteContent } from '../api';

const Contact = () => {
  const { language } = useLanguage();
  const [content, setContent] = useState<SiteContent['contact'] | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    fetchSiteContent().then(data => setContent(data.contact));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert(language === 'en' ? 'Thank you! I will contact you soon' : 'شكراً لك! سأتواصل معك قريباً');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert(language === 'en' ? 'Please fill in all fields' : 'يرجى ملء جميع الحقول');
    }
  };

  if (!content) return null;

  return (
    <section id="contact" className="py-20 bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">{content.title[language]}</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a href="https://wa.me/201023578478" className="bg-slate-700 p-8 rounded-lg text-center hover:bg-green-600 transition">
            <MessageCircle size={40} className="mx-auto mb-4 text-green-400" />
            <h3 className="font-bold mb-2">{content.whatsapp.label[language]}</h3>
            <p className="text-gray-300">{content.whatsapp.sub[language]}</p>
          </a>
          <a href={`mailto:${content.email.value}`} className="bg-slate-700 p-8 rounded-lg text-center hover:bg-blue-600 transition">
            <Mail size={40} className="mx-auto mb-4 text-blue-400" />
            <h3 className="font-bold mb-2">{content.email.label[language]}</h3>
            <p className="text-gray-300">{content.email.value}</p>
          </a>
          <a href="https://facebook.com" className="bg-slate-700 p-8 rounded-lg text-center hover:bg-blue-600 transition">
            <Facebook size={40} className="mx-auto mb-4 text-blue-400" />
            <h3 className="font-bold mb-2">{content.facebook.label[language]}</h3>
            <p className="text-gray-300">{content.facebook.sub[language]}</p>
          </a>
        </div>

        <div className="max-w-2xl mx-auto bg-slate-700 p-8 rounded-lg">
          <input
            type="text"
            name="name"
            placeholder={content.form.name[language]}
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-slate-600 text-white px-4 py-3 rounded mb-4 placeholder-gray-400 text-left rtl:text-right"
          />
          <input
            type="email"
            name="email"
            placeholder={content.form.email[language]}
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-slate-600 text-white px-4 py-3 rounded mb-4 placeholder-gray-400 text-left rtl:text-right"
          />
          <textarea
            name="message"
            placeholder={content.form.message[language]}
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-slate-600 text-white px-4 py-3 rounded mb-4 placeholder-gray-400 text-left rtl:text-right"
          ></textarea>
          <Button className="w-full" onClick={handleSubmit}>{content.form.button[language]}</Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
