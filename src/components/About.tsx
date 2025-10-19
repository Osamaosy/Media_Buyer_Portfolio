const About = () => (
  <section id="عني" className="py-24 bg-slate-800 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              من أنا؟
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            متخصصة في بناء حملات إعلانية ناجحة تحقق نتائج حقيقية
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              أنا <span className="text-blue-400 font-bold">الهام محمد</span>، متخصصة في إدارة الحملات الإعلانية الرقمية بخبرة أكثر من 7 سنوات. بدأت رحلتي مع شغف حقيقي لفهم السلوك الاستهلاكي وتحويله إلى استراتيجيات تسويقية فعّالة.
            </p>

            <div className="space-y-3 py-6 border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-bold text-white">تخصصاتي الرئيسية:</h3>
              <ul className="space-y-3">
                {[
                  'إدارة حملات Facebook و Instagram و Google Ads',
                  'تحسين معدلات التحويل (CRO) وزيادة المبيعات',
                  'تحليل البيانات والإحصائيات المتقدمة',
                  'تطوير استراتيجيات تسويقية مخصصة',
                  'إدارة ميزانيات إعلانية بملايين الدولارات'
                ].map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-400 text-xl mt-0.5">✓</span>
                    <span className="text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="space-y-6">
            {/* Stat Card 1 */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-sm font-bold text-blue-400 mb-4 uppercase tracking-wide">سنوات الخبرة</h3>
              <div className="flex items-end gap-4">
                <p className="text-5xl font-bold text-white">7+</p>
                <div className="w-full bg-slate-600 h-2 rounded-full">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <h3 className="text-sm font-bold text-purple-400 mb-4 uppercase tracking-wide">العملاء الراضين</h3>
              <div className="flex items-end gap-4">
                <p className="text-5xl font-bold text-white">50+</p>
                <div className="w-full bg-slate-600 h-2 rounded-full">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300">
              <h3 className="text-sm font-bold text-green-400 mb-4 uppercase tracking-wide">معدل النجاح</h3>
              <div className="flex items-end gap-4">
                <p className="text-5xl font-bold text-white">95%</p>
                <div className="w-full bg-slate-600 h-2 rounded-full">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
