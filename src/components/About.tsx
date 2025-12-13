const About = () => (
  <section id="about" className="py-24 bg-slate-800 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Specialized in building successful advertising campaigns that deliver real results
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a Media Buyer with a strong background in Marketing and Digital Marketing, specialized in planning, executing, and optimizing performance-driven campaigns. I work across all major advertising platforms, including Meta (Facebook & Instagram), Google Ads, TikTok Ads, Snapchat Ads, X Ads, LinkedIn Ads, and WhatsApp Business, using precise targeting, clear funnel strategies, and smart budget allocation to maximize performance.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in the Egyptian and Saudi markets, managing campaigns with tailored strategies that adapt to each region's unique audience behavior and competitive landscape. My industry experience spans E-commerce, Software, and Pharmaceuticals in Egypt, alongside specialized services like Furniture Moving and Transportation in Saudi Arabia.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              My approach is fully data-driven and ROI-focused, centered on continuous optimization, strategic scaling, and clear performance analysis. I deliver measurable business growth through well-structured campaigns, strong analytical thinking, and high-impact media strategies that consistently improve results.
            </p>
          </div>

          {/* Right Side - Stats Cards */}
          <div className="space-y-6">
            {/* Stat Card 1 */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-sm font-bold text-blue-400 mb-4 uppercase tracking-wide">Years of Experience</h3>
              <div className="flex items-end gap-4">
                <p className="text-5xl font-bold text-white">7+</p>
                <div className="w-full bg-slate-600 h-2 rounded-full">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300">
              <h3 className="text-sm font-bold text-purple-400 mb-4 uppercase tracking-wide">Happy Clients</h3>
              <div className="flex items-end gap-4">
                <p className="text-5xl font-bold text-white">50+</p>
                <div className="w-full bg-slate-600 h-2 rounded-full">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300">
              <h3 className="text-sm font-bold text-green-400 mb-4 uppercase tracking-wide">Success Rate</h3>
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
