import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const { language, toggleLanguage } = useLanguage();

  const navItems = [
    { 
      label: { en: 'Home', ar: 'الرئيسية' }, 
      href: '#home' 
    },
    { 
      label: { en: 'About', ar: 'من نحن' }, 
      href: '#about' 
    },
    { 
      label: { en: 'Services', ar: 'خدماتنا' }, 
      href: '#services' 
    },
    { 
      label: { en: 'Portfolio', ar: 'أعمالنا' }, 
      href: '#portfolio' 
    },
    { 
      label: { en: 'Results', ar: 'النتائج' }, 
      href: '#results' 
    },
    { 
      label: { en: 'Contact', ar: 'تواصل معنا' }, 
      href: '#contact' 
    },
  ];

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-slate-950 shadow-2xl z-50 backdrop-blur-sm bg-opacity-95 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-5 rtl:space-x-reverse group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 transform group-hover:scale-110">
              <span className="text-white font-bold text-lg">EM</span>
            </div>
            <div className="flex flex-col text-left rtl:text-right">
              <span className="text-white font-extrabold text-lg tracking-tight">
                {language === 'en' ? 'Elham Mohamed' : 'إلهام محمد'}
              </span>
              <span className="text-xs text-blue-400 font-semibold">
                {language === 'en' ? 'Media Buyer Pro' : 'خبير شراء مساحات إعلانية'}
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-1 rtl:space-x-reverse">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 relative group ${activeLink === item.href
                  ? 'text-blue-400 bg-blue-500/10'
                  : 'text-gray-300 hover:text-white'
                  }`}
              >
                {item.label[language]}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300 ${activeLink === item.href ? 'w-full' : ''
                  }`}></span>
              </a>
            ))}
            
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 rtl:space-x-reverse px-4 py-2 text-gray-300 hover:text-white transition-colors"
            >
              <Globe size={18} />
              <span className="text-sm font-medium">{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
          </div>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              {language === 'en' ? 'Get Started' : 'ابدأ الآن'}
            </a>
          </div>

          <div className="lg:hidden flex items-center space-x-4 rtl:space-x-reverse">
            <button
              onClick={toggleLanguage}
              className="text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Globe size={24} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-6 space-y-2 animate-in fade-in slide-in-from-top-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeLink === item.href
                  ? 'text-blue-400 bg-blue-500/10 border-l-4 border-blue-500 rtl:border-l-0 rtl:border-r-4'
                  : 'text-gray-300 hover:text-white hover:bg-slate-800'
                  }`}
              >
                {item.label[language]}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-3 mt-4 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              {language === 'en' ? 'Get Started' : 'ابدأ الآن'}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
