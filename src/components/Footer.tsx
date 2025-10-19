import { MessageCircle, Facebook, Instagram } from 'lucide-react';

const Footer = () => (
  <footer className="bg-slate-900 text-gray-300 py-8 mt-20">
    <div className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-white font-bold mb-4">الهام محمد</h3>
          <p className="text-sm">خبير في إدارة حملات الإعلانات الرقمية والتسويق الإلكتروني</p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">روابط سريعة</h3>
          <div className="space-y-2 text-sm">
            <p><a href="#عني" className="hover:text-blue-400">عني</a></p>
            <p><a href="#الخدمات" className="hover:text-blue-400">الخدمات</a></p>
            <p><a href="#البورتفوليو" className="hover:text-blue-400">البورتفوليو</a></p>
          </div>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">تواصل معي</h3>
          <div className="flex space-x-4">
            <a href="https://wa.me/201234567890" className="hover:text-blue-400"><MessageCircle size={20} /></a>
            <a href="https://facebook.com" className="hover:text-blue-400"><Facebook size={20} /></a>
            <a href="https://instagram.com" className="hover:text-blue-400"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-4 text-center text-sm">
        <p>&copy; 2025 الهام محمد - Media Buyer. جميع الحقوق محفوظة</p>
      </div>
    </div>
  </footer>
);

export default Footer;
