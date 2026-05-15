import React, { useEffect, useState } from 'react';
import { MessageCircle, Facebook, Instagram, Github, Linkedin, Code2 } from 'lucide-react';
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
          {/* قسم النبذة */}
          <div>
            <h3 className="text-white font-bold mb-4">
              {language === 'en' ? 'Elham Mohamed' : 'إلهام محمد'}
            </h3>
            <p className="text-sm leading-relaxed">{content.bio[language]}</p>
          </div>

          {/* روابط سريعة */}
          <div>
            <h3 className="text-white font-bold mb-4">{content.linksTitle[language]}</h3>
            <div className="space-y-2 text-sm">
              <p><a href="#about" className="hover:text-blue-400 transition-colors">{language === 'en' ? 'About' : 'من أنا'}</a></p>
              <p><a href="#services" className="hover:text-blue-400 transition-colors">{language === 'en' ? 'Services' : 'خدماتي'}</a></p>
              <p><a href="#portfolio" className="hover:text-blue-400 transition-colors">{language === 'en' ? 'Portfolio' : 'أعمالي'}</a></p>
            </div>
          </div>

          {/* تواصل مع إلهام */}
          <div>
            <h3 className="text-white font-bold mb-4">{content.contactTitle[language]}</h3>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="https://wa.me/201023578478" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* الجزء السفلي: الحقوق وتوقيع المطور */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">{content.rights[language]}</p>
            
            {/* توقيعك كـ Developer */}
            <div className="flex items-center gap-4 bg-slate-800/50 px-4 py-2 rounded-full border border-gray-700">
              <span className="text-xs flex items-center gap-1">
                <Code2 size={14} className="text-blue-400" />
                {language === 'en' ? 'Developed by Osama Ibrahim' : 'تم التطوير بواسطة أسامة إبراهيم'}
              </span>
              <div className="flex items-center gap-3 border-l border-gray-600 pl-3 rtl:border-l-0 rtl:pl-0 rtl:border-r rtl:pr-3">
                <a href="https://github.com/osamaosy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <Github size={16} />
                </a>
                <a href="https://www.linkedin.com/in/osama-rezk" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  <Linkedin size={16} />
                </a>
                <a href="https://wa.me/201277122289" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">
                  <MessageCircle size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;