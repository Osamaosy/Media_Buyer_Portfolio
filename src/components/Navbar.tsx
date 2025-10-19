import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const navItems = [
    { label: 'الرئيسية', href: '#home', ar: 'الرئيسية' },
    { label: 'عني', href: '#عني', ar: 'عني' },
    { label: 'الخدمات', href: '#الخدمات', ar: 'الخدمات' },
    { label: 'البورتفوليو', href: '#البورتفوليو', ar: 'البورتفوليو' },
    { label: 'النتائج', href: '#النتائج', ar: 'النتائج' },
    { label: 'تواصل', href: '#تواصل', ar: 'تواصل' },
  ];

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-slate-950 shadow-2xl z-50 backdrop-blur-sm bg-opacity-95 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Navbar Container */}
        <div className="flex justify-between items-center h-20">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-5 space-x-reverse group cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300 transform group-hover:scale-110">
              <span className="text-white font-bold text-lg">EM</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-white font-extrabold text-lg tracking-tight">الهام محمد</span>
              <span className="text-xs text-blue-400 font-semibold">Media Buyer Pro</span>
            </div>
          </div>



          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
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
                {item.ar}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300 ${activeLink === item.href ? 'w-full' : ''
                  }`}></span>
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <a
              href="#تواصل"
              className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              ابدأ الآن
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 space-y-2 animate-in fade-in slide-in-from-top-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeLink === item.href
                  ? 'text-blue-400 bg-blue-500/10 border-l-4 border-blue-500'
                  : 'text-gray-300 hover:text-white hover:bg-slate-800'
                  }`}
              >
                {item.ar}
              </a>
            ))}
            <a
              href="#تواصل"
              className="block px-4 py-3 mt-4 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              ابدأ الآن
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;