const Portfolio = () => (
  <section id="portfolio" className="py-20 bg-slate-800 text-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center">Portfolio</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: 'E-commerce Store', desc: '+350% Sales Increase', img: 'bg-blue-500' },
          { title: 'Mobile App', desc: '15K Installs in 1 Month', img: 'bg-purple-500' },
          { title: 'Consulting Service', desc: '+200% Booking Increase', img: 'bg-pink-500' }
        ].map((project, idx) => (
          <div key={idx} className={`${project.img} h-64 rounded-lg shadow-lg flex flex-col justify-end p-6 hover:shadow-2xl transition`}>
            <h3 className="text-white font-bold text-xl">{project.title}</h3>
            <p className="text-white/80">{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Portfolio;