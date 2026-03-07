import React, { useEffect, useState } from 'react';
import { Target, BarChart3, Users, TrendingUp } from 'lucide-react';
import Card from './card';
import { useLanguage } from '../context/LanguageContext';
import { fetchSiteContent, SiteContent } from '../api';

const iconMap: Record<string, any> = { Target, BarChart3, Users, TrendingUp };

const Services = () => {
  const { language } = useLanguage();
  const [content, setContent] = useState<SiteContent['services'] | null>(null);

  useEffect(() => {
    fetchSiteContent().then(data => setContent(data.services));
  }, []);

  if (!content) return null;

  return (
    <section id="services" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {content.title[language]}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {content.subtitle[language]}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {content.items.map((item, i) => (
            <Card
              key={i}
              icon={iconMap[item.icon] || Target}
              title={item.title[language]}
              description={item.description[language]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
