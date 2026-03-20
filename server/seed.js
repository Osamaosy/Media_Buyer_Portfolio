const { sequelize, Project } = require('./models/Project');
const SiteContent = require('./models/SiteContent');
require('dotenv').config();

const mockProjects = [
  {
    title: { en: 'E-commerce Fashion Campaign', ar: 'حملة التجارة الإلكترونية للأزياء' },
    description: {
      en: 'A high-converting Meta Ads campaign for a fashion brand that achieved 4.8x ROAS and scaled from $5K to $50K/month budget.',
      ar: 'حملة إعلانية عالية التحويل على منصة ميتا لعلامة تجارية للأزياء حققت معدل عائد 4.8x وزيادة الميزانية من 5 آلاف إلى 50 ألف دولار شهرياً.',
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    technologies: ['Meta Ads', 'Google Analytics', 'Shopify'],
    liveLink: null,
    githubLink: null,
  },
  {
    title: { en: 'SaaS Lead Generation', ar: 'توليد العملاء المحتملين لبرمجيات الخدمة' },
    description: {
      en: 'B2B lead generation campaign on LinkedIn targeting decision-makers. Achieved 3x ROI with a CPL 40% below industry average.',
      ar: 'حملة توليد عملاء محتملين B2B على لينكد إن تستهدف صناع القرار. حققت عائداً 3 أضعاف مع تكلفة لكل عميل أقل بنسبة 40% من متوسط الصناعة.',
    },
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366a7a?auto=format&fit=crop&q=80&w=800',
    technologies: ['LinkedIn Ads', 'HubSpot', 'Zapier'],
    liveLink: null,
    githubLink: null,
  },
  {
    title: { en: 'Pharma Brand Awareness', ar: 'حملة الوعي بالعلامة التجارية الصيدلانية' },
    description: {
      en: 'Multi-platform brand awareness campaign for a pharmaceutical company across Meta, Google Display, and YouTube. Reached 2M+ impressions.',
      ar: 'حملة توعية بالعلامة التجارية متعددة المنصات لشركة أدوية عبر ميتا وجوجل ديسبلاي ويوتيوب. وصلت إلى أكثر من 2 مليون ظهور.',
    },
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    technologies: ['Meta Ads', 'Google Display', 'YouTube Ads'],
    liveLink: null,
    githubLink: null,
  },
];

const mockContent = {
  hero: {
    title: { en: 'Media Buyer Pro', ar: 'خبير شراء مساحات إعلانية' },
    name: { en: 'Elham Mohamed', ar: 'إلهام محمد' },
    description: {
      en: "I deliver exceptional results through smart, targeted advertising campaigns. With me, you'll achieve ROI that far exceeds your expectations.",
      ar: 'أقدم نتائج استثنائية من خلال حملات إعلانية ذكية ومستهدفة. معي، ستحقق عائداً على الاستثمار يتجاوز توقعاتك بكثير.',
    },
    stats: [
      { value: '50+', label: { en: 'Happy Clients', ar: 'عميل سعيد' } },
      { value: '$2M+', label: { en: 'Budget Managed', ar: 'ميزانية مدارة' } },
      { value: '300%', label: { en: 'Average ROI', ar: 'متوسط العائد' } },
    ],
    cta: {
      primary: { en: 'Get Started', ar: 'ابدأ الآن' },
      secondary: { en: 'View My Work', ar: 'شاهد أعمالي' },
    },
  },
  about: {
    title: { en: 'About Me', ar: 'من أنا' },
    subtitle: { en: 'Specialized in building successful advertising campaigns that deliver real results', ar: 'متخصصة في بناء حملات إعلانية ناجحة تحقق نتائج حقيقية' },
    paragraphs: [
      {
        en: 'I am a Media Buyer with a strong background in Marketing and Digital Marketing, specialized in planning, executing, and optimizing performance-driven campaigns. I work across all major advertising platforms, including Meta (Facebook & Instagram), Google Ads, TikTok Ads, Snapchat Ads, X Ads, LinkedIn Ads, and WhatsApp Business.',
        ar: 'أنا مشتري مساحات إعلانية بخلفية قوية في التسويق والتسويق الرقمي، متخصص في تخطيط وتنفيذ وتحسين الحملات القائمة على الأداء. أعمل عبر جميع منصات الإعلانات الرئيسية، بما في ذلك ميتا وجوجل وتيك توك وسناب شات وإكس ولينكد إن وواتساب للأعمال.',
      },
      {
        en: 'I specialize in the Egyptian and Saudi markets, managing campaigns with tailored strategies that adapt to each region\'s unique audience behavior and competitive landscape. My industry experience spans E-commerce, Software, and Pharmaceuticals in Egypt, alongside specialized services like Furniture Moving and Transportation in Saudi Arabia.',
        ar: 'أتخصص في السوقين المصري والسعودي، وأدير الحملات باستراتيجيات مخصصة تتكيف مع سلوك الجمهور الفريد والمشهد التنافسي لكل منطقة. تمتد خبرتي الصناعية لتشمل التجارة الإلكترونية والبرمجيات والأدوية في مصر، إلى جانب خدمات متخصصة مثل نقل الأثاث والمواصلات في المملكة العربية السعودية.',
      },
      {
        en: 'My approach is fully data-driven and ROI-focused, centered on continuous optimization, strategic scaling, and clear performance analysis. I deliver measurable business growth through well-structured campaigns.',
        ar: 'نهجي قائم بالكامل على البيانات ويركز على العائد على الاستثمار، مع التركيز على التحسين المستمر والتوسع الاستراتيجي وتحليل الأداء الواضح.',
      },
    ],
    stats: [
      { label: { en: 'Years of Experience', ar: 'سنوات الخبرة' }, value: '7+', percentage: '85%', color: 'blue' },
      { label: { en: 'Happy Clients', ar: 'عملاء سعداء' }, value: '50+', percentage: '80%', color: 'purple' },
      { label: { en: 'Success Rate', ar: 'نسبة النجاح' }, value: '95%', percentage: '95%', color: 'green' },
    ],
  },
  services: {
    title: { en: 'My Services', ar: 'خدماتي' },
    subtitle: { en: 'Comprehensive suite of specialized services for your advertising campaign success', ar: 'مجموعة شاملة من الخدمات المتخصصة لنجاح حملتك الإعلانية' },
    items: [
      {
        title: { en: 'Campaign Management', ar: 'إدارة الحملات' },
        description: { en: 'Planning and executing precisely targeted campaigns to reach your audience with high effectiveness', ar: 'تخطيط وتنفيذ حملات مستهدفة بدقة للوصول إلى جمهورك بفاعلية عالية' },
        icon: 'Target',
      },
      {
        title: { en: 'Performance Analysis', ar: 'تحليل الأداء' },
        description: { en: 'Detailed reports and deep analysis of all campaign aspects with optimization recommendations', ar: 'تقارير مفصلة وتحليل عميق لجميع جوانب الحملة مع توصيات التحسين' },
        icon: 'BarChart3',
      },
      {
        title: { en: 'Audience Targeting', ar: 'استهداف الجمهور' },
        description: { en: 'Identifying and targeting the most suitable audience for your products using advanced data', ar: 'تحديد واستهداف الجمهور الأنسب لمنتجاتك باستخدام البيانات المتقدمة' },
        icon: 'Users',
      },
      {
        title: { en: 'ROI Optimization', ar: 'تحسين العائد' },
        description: { en: 'Continuously increasing ROI through smart optimizations and ongoing testing', ar: 'زيادة العائد على الاستثمار باستمرار من خلال التحسينات الذكية والاختبار المستمر' },
        icon: 'TrendingUp',
      },
    ],
  },
  results: {
    title: { en: "Results I've Achieved", ar: 'النتائج التي حققتها' },
    items: [
      { number: '50+', label: { en: 'Happy Clients', ar: 'عميل سعيد' } },
      { number: '$2M+', label: { en: 'Budget Managed', ar: 'ميزانية مدارة' } },
      { number: '300%', label: { en: 'Average ROI', ar: 'متوسط العائد' } },
      { number: '7+', label: { en: 'Years Experience', ar: 'سنوات خبرة' } },
    ],
  },
  contact: {
    title: { en: 'Contact Me', ar: 'تواصل معي' },
    whatsapp: { label: { en: 'WhatsApp', ar: 'واتساب' }, sub: { en: 'Quick & Fast Contact', ar: 'تواصل سريع وفوري' } },
    email: { label: { en: 'Email', ar: 'البريد الإلكتروني' }, value: 'ilham@mediabuyer.com' },
    facebook: { label: { en: 'Facebook', ar: 'فيسبوك' }, sub: { en: '@ilhammediacontent', ar: '@ilhammediacontent' } },
    form: {
      name: { en: 'Your Name', ar: 'اسمك' },
      email: { en: 'Your Email', ar: 'بريدك الإلكتروني' },
      message: { en: 'Your Message', ar: 'رسالتك' },
      button: { en: 'Send Message', ar: 'إرسال الرسالة' },
    },
  },
  footer: {
    bio: { en: 'Expert in managing digital advertising campaigns and e-marketing', ar: 'خبير في إدارة حملات الإعلانات الرقمية والتسويق الإلكتروني' },
    linksTitle: { en: 'Quick Links', ar: 'روابط سريعة' },
    contactTitle: { en: 'Contact Me', ar: 'تواصل معي' },
    rights: { en: '© 2025 Elham Mohamed - Media Buyer. All Rights Reserved', ar: '© 2025 إلهام محمد - مشتري مساحات إعلانية. جميع الحقوق محفوظة' },
  },
};

const seed = async () => {
  await sequelize.sync({ force: true });
  await Project.bulkCreate(mockProjects);
  await SiteContent.create(mockContent);
  console.log('Database seeded successfully with full data');
  process.exit(0);
};

seed().catch(err => { console.error(err); process.exit(1); });
