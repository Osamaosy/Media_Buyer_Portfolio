const { sequelize, Project } = require('./models/Project');
const SiteContent = require('./models/SiteContent');

const mockProjects = [
  {
    title: { en: 'E-commerce Campaign', ar: 'حملة التجارة الإلكترونية' },
    description: { en: 'A high-converting meta ads campaign for a fashion brand.', ar: 'حملة إعلانية عالية التحويل لعلامة تجارية للأزياء على منصة ميتا.' },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    technologies: ['Meta Ads', 'Google Analytics', 'Shopify'],
  },
  {
    title: { en: 'SaaS Lead Generation', ar: 'توليد العملاء المحتملين لبرمجيات الخدمة' },
    description: { en: 'B2B lead generation campaign on LinkedIn with 3x ROI.', ar: 'حملة توليد عملاء محتملين B2B على لينكد إن مع عائد استثمار 3 أضعاف.' },
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366a7a?auto=format&fit=crop&q=80&w=800',
    technologies: ['LinkedIn Ads', 'HubSpot', 'Zapier'],
  },
];

const mockContent = {
  hero: {
    title: { en: 'Media Buyer Pro', ar: 'خبير شراء مساحات إعلانية' },
    name: { en: 'Elham Mohamed', ar: 'إلهام محمد' },
    description: { en: 'ROI-focused campaigns.', ar: 'حملات تركز على العائد.' },
    stats: [], cta: { primary: { en: 'Get Started', ar: 'ابدأ' }, secondary: { en: 'Work', ar: 'عمل' } }
  },
  about: { title: { en: 'About', ar: 'عن' }, subtitle: { en: 'Sub', ar: 'فرعي' }, paragraphs: [], stats: [] },
  services: { title: { en: 'Services', ar: 'خدمات' }, subtitle: { en: 'Sub', ar: 'فرعي' }, items: [] },
  results: { title: { en: 'Results', ar: 'نتائج' }, items: [] },
  contact: { title: { en: 'Contact', ar: 'تواصل' }, whatsapp: { label: { en: 'WA', ar: 'واتساب' }, sub: { en: 'S', ar: 'س' } }, email: { label: { en: 'E', ar: 'ب' }, value: 'v' }, facebook: { label: { en: 'F', ar: 'ف' }, sub: { en: 'S', ar: 'س' } }, form: { name: { en: 'N', ar: 'ا' }, email: { en: 'E', ar: 'ب' }, message: { en: 'M', ar: 'ر' }, button: { en: 'B', ar: 'ز' } } },
  footer: { bio: { en: 'B', ar: 'ب' }, linksTitle: { en: 'L', ar: 'ر' }, contactTitle: { en: 'C', ar: 'ت' }, rights: { en: 'R', ar: 'ح' } }
};

const seed = async () => {
  await sequelize.sync({ force: true });
  await Project.bulkCreate(mockProjects);
  await SiteContent.create(mockContent);
  console.log('Seeded PostgreSQL');
  process.exit(0);
};

seed();
