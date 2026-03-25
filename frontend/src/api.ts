import { Project, LocalizedString } from './types';

export interface SiteContent {
  hero: {
    title: LocalizedString;
    name: LocalizedString;
    description: LocalizedString;
    stats: {
      value: string;
      label: LocalizedString;
    }[];
    cta: {
      primary: LocalizedString;
      secondary: LocalizedString;
    };
  };
  about: {
    title: LocalizedString;
    subtitle: LocalizedString;
    paragraphs: LocalizedString[];
    stats: {
      label: LocalizedString;
      value: string;
      percentage: string;
      color: string;
    }[];
  };
  services: {
    title: LocalizedString;
    subtitle: LocalizedString;
    items: {
      title: LocalizedString;
      description: LocalizedString;
      icon: string;
    }[];
  };
  results: {
    title: LocalizedString;
    items: {
      number: string;
      label: LocalizedString;
    }[];
  };
  contact: {
    title: LocalizedString;
    whatsapp: { label: LocalizedString; sub: LocalizedString };
    email: { label: LocalizedString; value: string };
    facebook: { label: LocalizedString; sub: LocalizedString };
    form: {
      name: LocalizedString;
      email: LocalizedString;
      message: LocalizedString;
      button: LocalizedString;
    };
  };
  footer: {
    bio: LocalizedString;
    linksTitle: LocalizedString;
    contactTitle: LocalizedString;
    rights: LocalizedString;
  };
}

// Mock data fallback for graceful degradation
const mockProjects: Project[] = [
  {
    _id: '1',
    title: { en: 'E-commerce Campaign', ar: 'حملة التجارة الإلكترونية' },
    description: { en: 'A high-converting meta ads campaign for a fashion brand.', ar: 'حملة إعلانية عالية التحويل لعلامة تجارية للأزياء على منصة ميتا.' },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    technologies: ['Meta Ads', 'Google Analytics', 'Shopify'],
  },
  {
    _id: '2',
    title: { en: 'SaaS Lead Generation', ar: 'توليد العملاء المحتملين لبرمجيات الخدمة' },
    description: { en: 'B2B lead generation campaign on LinkedIn with 3x ROI.', ar: 'حملة توليد عملاء محتملين B2B على لينكد إن مع عائد استثمار 3 أضعاف.' },
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366a7a?auto=format&fit=crop&q=80&w=800',
    technologies: ['LinkedIn Ads', 'HubSpot', 'Zapier'],
  },
];

const mockSiteContent: SiteContent = {
  hero: {
    title: { en: 'Media Buyer Pro', ar: 'خبير شراء مساحات إعلانية' },
    name: { en: 'Elham Mohamed', ar: 'إلهام محمد' },
    description: { 
      en: 'I deliver exceptional results through smart, targeted advertising campaigns. With me, you\'ll achieve ROI that far exceeds your expectations.', 
      ar: 'أقدم نتائج استثنائية من خلال حملات إعلانية ذكية ومستهدفة. معي، ستحقق عائداً على الاستثمار يتجاوز توقعاتك بكثير.' 
    },
    stats: [
      { value: '50+', label: { en: 'Happy Clients', ar: 'عميل سعيد' } },
      { value: '$2M+', label: { en: 'Budget Managed', ar: 'ميزانية مدارة' } },
      { value: '300%', label: { en: 'Average ROI', ar: 'متوسط العائد' } },
    ],
    cta: {
      primary: { en: 'Get Started', ar: 'ابدأ الآن' },
      secondary: { en: 'View My Work', ar: 'شاهد أعمالي' },
    }
  },
  about: {
    title: { en: 'About Me', ar: 'من أنا' },
    subtitle: { en: 'Specialized in building successful advertising campaigns that deliver real results', ar: 'متخصصة في بناء حملات إعلانية ناجحة تحقق نتائج حقيقية' },
    paragraphs: [
      { 
        en: 'I am a Media Buyer with a strong background in Marketing and Digital Marketing, specialized in planning, executing, and optimizing performance-driven campaigns.', 
        ar: 'أنا مشتري مساحات إعلانية بخلفية قوية في التسويق والتسويق الرقمي، متخصص في تخطيط وتنفيذ وتحسين الحملات القائمة على الأداء.' 
      },
      { 
        en: 'I specialize in the Egyptian and Saudi markets, managing campaigns with tailored strategies that adapt to each region\'s unique audience behavior.', 
        ar: 'أتخصص في السوقين المصري والسعودي، وأدير الحملات باستراتيجيات مخصصة تتكيف مع سلوك الجمهور الفريد في كل منطقة.' 
      }
    ],
    stats: [
      { label: { en: 'Years of Experience', ar: 'سنوات الخبرة' }, value: '7+', percentage: '85%', color: 'blue' },
      { label: { en: 'Happy Clients', ar: 'عملاء سعداء' }, value: '50+', percentage: '80%', color: 'purple' },
      { label: { en: 'Success Rate', ar: 'نسبة النجاح' }, value: '95%', percentage: '95%', color: 'green' },
    ]
  },
  services: {
    title: { en: 'My Services', ar: 'خدماتي' },
    subtitle: { en: 'Comprehensive suite of specialized services for your advertising campaign success', ar: 'مجموعة شاملة من الخدمات المتخصصة لنجاح حملتك الإعلانية' },
    items: [
      { 
        title: { en: 'Campaign Management', ar: 'إدارة الحملات' }, 
        description: { en: 'Planning and executing precisely targeted campaigns', ar: 'تخطيط وتنفيذ حملات مستهدفة بدقة' },
        icon: 'Target'
      },
      { 
        title: { en: 'Performance Analysis', ar: 'تحليل الأداء' }, 
        description: { en: 'Detailed reports and deep analysis of all campaign aspects', ar: 'تقارير مفصلة وتحليل عميق لجميع جوانب الحملة' },
        icon: 'BarChart3'
      }
    ]
  },
  results: {
    title: { en: 'Results I\'ve Achieved', ar: 'النتائج التي حققتها' },
    items: [
      { number: '50+', label: { en: 'Happy Clients', ar: 'عميل سعيد' } },
      { number: '$2M+', label: { en: 'Budget Managed', ar: 'ميزانية مدارة' } },
      { number: '300%', label: { en: 'Average ROI', ar: 'متوسط العائد' } },
      { number: '7+', label: { en: 'Years Experience', ar: 'سنوات خبرة' } }
    ]
  },
  contact: {
    title: { en: 'Contact Me', ar: 'تواصل معي' },
    whatsapp: { label: { en: 'WhatsApp', ar: 'واتساب' }, sub: { en: 'Quick & Fast Contact', ar: 'تواص سريع وفوري' } },
    email: { label: { en: 'Email', ar: 'البريد الإلكتروني' }, value: 'ilham@mediabuyer.com' },
    facebook: { label: { en: 'Facebook', ar: 'فيسبوك' }, sub: { en: '@ilhammediacontent', ar: '@ilhammediacontent' } },
    form: {
      name: { en: 'Your Name', ar: 'اسمك' },
      email: { en: 'Your Email', ar: 'بريدك الإلكتروني' },
      message: { en: 'Your Message', ar: 'رسالتك' },
      button: { en: 'Send Message', ar: 'إرسال الرسالة' }
    }
  },
  footer: {
    bio: { en: 'Expert in managing digital advertising campaigns and e-marketing', ar: 'خبير في إدارة حملات الإعلانات الرقمية والتسويق الإلكتروني' },
    linksTitle: { en: 'Quick Links', ar: 'روابط سريعة' },
    contactTitle: { en: 'Contact Me', ar: 'تواصل معي' },
    rights: { en: '© 2025 Elham Mohamed - Media Buyer. All Rights Reserved', ar: '© 2025 إلهام محمد - مشتري مساحات إعلانية. جميع الحقوق محفوظة' }
  }
};
const API_URL = import.meta.env.VITE_API_URL || '';

/**
 * Fetch projects from the backend API with graceful fallback to mock data
 */
export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const res = await fetch(`${API_URL}/api/projects`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data.map((p: any) => ({ ...p, _id: p._id ?? String(p.id) }));
  } catch (err) {
    console.warn('Backend unavailable, falling back to mock projects', err);
    return mockProjects;
  }
};

/**
 * Fetch site content from the backend API with graceful fallback to mock data
 */
export const fetchSiteContent = async (): Promise<SiteContent> => {
  try {
    const res = await fetch(`${API_URL}/api/content`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    
    const transformedContent: SiteContent = {
      hero: data.hero || mockSiteContent.hero,
      about: data.about || mockSiteContent.about,
      services: data.services || mockSiteContent.services,
      results: data.results || mockSiteContent.results,
      contact: data.contact || mockSiteContent.contact,
      footer: data.footer || mockSiteContent.footer,
    };
    
    return transformedContent;
  } catch (err) {
    console.warn('Backend unavailable, falling back to mock site content', err);
    return mockSiteContent;
  }
};

/**
 * CRUD Operations
 */

const getAuthHeader = (): Record<string, string> => {
  const token = localStorage.getItem('admin_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const createProject = async (formData: FormData): Promise<Project> => {
  try {
    const res = await fetch(`${API_URL}/api/projects`, {
      method: 'POST',
      headers: { ...getAuthHeader() },
      body: formData,
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return { ...data, _id: data._id ?? String(data.id) };
  } catch (err) {
    console.error('Failed to create project:', err);
    throw err;
  }
};

export const updateProject = async (id: number | string, formData: FormData): Promise<Project> => {
  try {
    const res = await fetch(`${API_URL}/api/projects/${id}`, {
      method: 'PUT',
      headers: { ...getAuthHeader() },
      body: formData,
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return { ...data, _id: data._id ?? String(data.id) };
  } catch (err) {
    console.error(`Failed to update project ${id}:`, err);
    throw err;
  }
};

export const deleteProject = async (id: number | string): Promise<void> => {
  try {
    const res = await fetch(`${API_URL}/api/projects/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
  } catch (err) {
    console.error(`Failed to delete project ${id}:`, err);
    throw err;
  }
};

export const updateSiteContent = async (section: string, contentData: any): Promise<any> => {
  try {
    const res = await fetch(`${API_URL}/api/content/${section}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', ...getAuthHeader() },
      body: JSON.stringify(contentData),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error(`Failed to update content section ${section}:`, err);
    throw err;
  }
};