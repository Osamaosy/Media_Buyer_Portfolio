import { MessageCircle, Facebook, Instagram } from 'lucide-react';

const Footer = () => (
  <footer className="bg-slate-900 text-gray-300 py-8 mt-20">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-white font-bold mb-4">Elham Mohamed</h3>
          <p className="text-sm">Expert in managing digital advertising campaigns and e-marketing</p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Quick Links</h3>
          <div className="space-y-2 text-sm">
            <p><a href="#about" className="hover:text-blue-400">About</a></p>
            <p><a href="#services" className="hover:text-blue-400">Services</a></p>
            <p><a href="#portfolio" className="hover:text-blue-400">Portfolio</a></p>
          </div>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Contact Me</h3>
          <div className="flex space-x-4">
            <a href="https://wa.me/201234567890" className="hover:text-blue-400"><MessageCircle size={20} /></a>
            <a href="https://facebook.com" className="hover:text-blue-400"><Facebook size={20} /></a>
            <a href="https://instagram.com" className="hover:text-blue-400"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-4 text-center text-sm">
        <p>&copy; 2025 Elham Mohamed - Media Buyer. All Rights Reserved</p>
      </div>
    </div>
  </footer>
);

export default Footer;
