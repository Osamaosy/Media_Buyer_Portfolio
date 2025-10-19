import { Target, BarChart3, Users, TrendingUp} from 'lucide-react';
import Card from './card';

const Services = () => (
  <section id="الخدمات" className="py-24 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-5xl md:text-6xl font-bold">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            خدماتي
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          حزمة شاملة من الخدمات المتخصصة لنجاح حملاتك الإعلانية
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card 
          icon={Target}
          title="إدارة الحملات"
          description="تخطيط وتنفيذ حملات موجهة بدقة للوصول لجمهورك المستهدف بفعالية عالية"
        />
        <Card 
          icon={BarChart3}
          title="تحليل الأداء"
          description="تقارير مفصلة وتحليل عميق لكل جوانب حملاتك مع توصيات تحسين"
        />
        <Card 
          icon={Users}
          title="استهداف الجمهور"
          description="تحديد واستهداف الجمهور الأنسب لمنتجاتك باستخدام بيانات متقدمة"
        />
        <Card 
          icon={TrendingUp}
          title="تحسين العائد"
          description="زيادة ROI بشكل مستمر من خلال تحسينات ذكية وتجارب مستمرة"
        />
      </div>
    </div>
  </section>
);

export default Services;