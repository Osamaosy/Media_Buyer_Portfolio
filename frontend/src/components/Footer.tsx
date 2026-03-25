import React, { useEffect, useState } from 'react';
import { MessageCircle, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { fetchSiteContent, SiteContent } from '../api';

const Footer = () => {
  const { language } = useLanguage();
  const [content, setContent] = useState<SiteContent['footer'] | null>(null);

  useEffect(() => {
    fetchSiteContent().then(data => setContent(data.footer));
  }, []);

  if (!content) return null;

  return (
    <footer className="bg-slate-900 text-gray-300 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-left rtl:text-right">
          <div>
            <h3 className="text-white font-bold mb-4">{language === 'en' ? 'Elham Mohamed' : 'إلهام محمد'}</h3>
            <p className="text-sm">{content.bio[language]}</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">{content.linksTitle[language]}</h3>
            <div className="space-y-2 text-sm">
              <p><a href="#about" className="hover:text-blue-400">{language === 'en' ? 'About' : 'من أنا'}</a></p>
              <p><a href="#services" className="hover:text-blue-400">{language === 'en' ? 'Services' : 'خدماتي'}</a></p>
              <p><a href="#portfolio" className="hover:text-blue-400">{language === 'en' ? 'Portfolio' : 'أعمالي'}</a></p>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">{content.contactTitle[language]}</h3>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="https://wa.me/20102 3578478" className="hover:text-blue-400"><MessageCircle size={20} /></a>
              <a href="https://facebook.com" className="hover:text-blue-400"><Facebook size={20} /></a>
              <a href="https://instagram.com" className="hover:text-blue-400"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4 text-center text-sm">
          <p>{content.rights[language]}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
