import { TrendingUp, ArrowRight } from 'lucide-react';
import Button from './button';

const Hero = () => (
  <section id="home" className="pt-36 pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white relative overflow-hidden">
    {/* Background Effects */}
    <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
      {/* Left Content */}
      <div className="space-y-8">
        <div className="space-y-4">
          <div className="inline-block">
            <span className="px-4 py-1.5 bg-blue-500/20 text-blue-300 text-xs font-bold rounded-full border border-blue-500/50">
              🚀 Media Buyer Pro
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
              الهام محمد
            </span>
            <br />
            <span className="text-gray-100">خبيرة ميديا بايرز</span>
          </h1>

          <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
            أحقق لك نتائج استثنائية من خلال حملات إعلانية ذكية وموجهة. معي، ستحصل على عائد استثمار يفوق توقعاتك بكثير.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 py-6 border-y border-slate-700">
          <div>
            <p className="text-3xl font-bold text-blue-400">50+</p>
            <p className="text-sm text-gray-400">عميل سعيد</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-purple-400">$2M+</p>
            <p className="text-sm text-gray-400">ميزانية مُدارة</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-400">300%</p>
            <p className="text-sm text-gray-400">متوسط العائد</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button onClick={() => window.location.href = '#تواصل'} className="group">
            <span className="flex items-center justify-center gap-2">
              ابدأ الآن
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => window.location.href = '#البورتفوليو'}
            className="hover:border-blue-400 border border-slate-600"
          >
            عرض أعمالي
          </Button>
        </div>
      </div>

      {/* Right Image Area */}
      <div className="relative h-96 md:h-full min-h-96">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-transparent rounded-2xl"></div>
        
        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-700/50 backdrop-blur-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-40"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
              <TrendingUp size={120} className="text-white mx-auto opacity-80" />
              <p className="text-2xl font-bold text-white">نتائج مذهلة</p>
              <p className="text-gray-200">حملات فعّالة بـ ROI عالي</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
