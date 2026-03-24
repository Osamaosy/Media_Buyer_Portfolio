import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { fetchSiteContent, SiteContent } from '../api';

const About = () => {
  const { language } = useLanguage();
  const [content, setContent] = useState<SiteContent['about'] | null>(null);

  useEffect(() => {
    fetchSiteContent().then(data => setContent(data.about));
  }, []);

  if (!content) return null;

  return (
    <section id="about" className="py-24 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {content.title[language]}
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              {content.subtitle[language]}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-left rtl:text-right">
              {content.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-300 text-lg leading-relaxed">
                  {p[language]}
                </p>
              ))}
            </div>

            <div className="space-y-6">
              {content.stats.map((stat, i) => (
                <div key={i} className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
                  <h3 className={`text-sm font-bold mb-4 uppercase tracking-wide ${i === 0 ? 'text-blue-400' : i === 1 ? 'text-purple-400' : 'text-green-400'}`}>
                    {stat.label[language]}
                  </h3>
                  <div className="flex items-end gap-4">
                    <p className="text-5xl font-bold text-white">{stat.value}</p>
                    <div className="w-full bg-slate-600 h-2 rounded-full">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${i === 0 ? 'from-blue-500 to-purple-500' : i === 1 ? 'from-purple-500 to-pink-500' : 'from-green-500 to-emerald-500'}`} 
                        style={{ width: stat.percentage }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
