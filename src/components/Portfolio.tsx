const Portfolio = () => (
  <section id="البورتفوليو" className="py-20 bg-slate-800 text-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center">البورتفوليو</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: 'متجر إلكتروني', desc: '+350% زيادة في المبيعات', img: 'bg-blue-500' },
          { title: 'تطبيق موبايل', desc: '15K تثبيت في شهر', img: 'bg-purple-500' },
          { title: 'خدمة استشارات', desc: '+200% في الحجوزات', img: 'bg-pink-500' }
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