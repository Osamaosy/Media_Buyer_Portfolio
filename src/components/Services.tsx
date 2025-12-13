import { Target, BarChart3, Users, TrendingUp} from 'lucide-react';
import Card from './card';

const Services = () => (
  <section id="services" className="py-24 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-5xl md:text-6xl font-bold">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            My Services
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Comprehensive suite of specialized services for your advertising campaign success
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card
          icon={Target}
          title="Campaign Management"
          description="Planning and executing precisely targeted campaigns to reach your audience with high effectiveness"
        />
        <Card
          icon={BarChart3}
          title="Performance Analysis"
          description="Detailed reports and deep analysis of all campaign aspects with optimization recommendations"
        />
        <Card
          icon={Users}
          title="Audience Targeting"
          description="Identifying and targeting the most suitable audience for your products using advanced data"
        />
        <Card
          icon={TrendingUp}
          title="ROI Optimization"
          description="Continuously increasing ROI through smart optimizations and ongoing testing"
        />
      </div>
    </div>
  </section>
);

export default Services;