const Results = () => (
  <section id="results" className="py-20 bg-slate-900 text-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center">Results I've Achieved</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { number: '50+', label: 'Happy Clients' },
          { number: '$2M+', label: 'Budget Managed' },
          { number: '300%', label: 'Average ROI' },
          { number: '7+', label: 'Years Experience' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-slate-800 p-8 rounded-lg text-center hover:bg-slate-700 transition">
            <p className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</p>
            <p className="text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Results;