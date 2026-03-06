import { Project } from './types';

export const fetchProjects = async (): Promise<Project[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      _id: '1',
      title: {
        en: 'E-commerce Campaign',
        ar: 'حملة التجارة الإلكترونية',
      },
      description: {
        en: 'A high-converting meta ads campaign for a fashion brand.',
        ar: 'حملة إعلانية عالية التحويل لعلامة تجارية للأزياء على منصة ميتا.',
      },
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      technologies: ['Meta Ads', 'Google Analytics', 'Shopify'],
    },
    {
      _id: '2',
      title: {
        en: 'SaaS Lead Generation',
        ar: 'توليد العملاء المحتملين لبرمجيات الخدمة',
      },
      description: {
        en: 'B2B lead generation campaign on LinkedIn with 3x ROI.',
        ar: 'حملة توليد عملاء محتملين B2B على لينكد إن مع عائد استثمار 3 أضعاف.',
      },
      image: 'https://images.unsplash.com/photo-1551288049-bbbda5366a7a?auto=format&fit=crop&q=80&w=800',
      technologies: ['LinkedIn Ads', 'HubSpot', 'Zapier'],
    },
  ];
};
