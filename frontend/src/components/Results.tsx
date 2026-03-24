import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { fetchSiteContent, SiteContent } from '../api';

const Results = () => {
  const { language } = useLanguage();
  const [content, setContent] = useState<SiteContent['results'] | null>(null);

  useEffect(() => {
    fetchSiteContent().then(data => setContent(data.results));
  }, []);

  if (!content) return null;

  return (
    <section id="results" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">{content.title[language]}</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {content.items.map((stat, idx) => (
            <div key={idx} className="bg-slate-800 p-8 rounded-lg text-center hover:bg-slate-700 transition">
              <p className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</p>
              <p className="text-gray-300">{stat.label[language]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
