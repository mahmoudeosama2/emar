import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.properties': 'Properties',
    'nav.about': 'About',
    'nav.location': 'Location',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Welcome to World Durra Co',
    'hero.subtitle': 'Professional Management and Leasing of Owned or Leased Real Estate',
    'hero.cta': 'Contact Us',
    
    // Features
    'features.security.title': 'Property Security',
    'features.security.description': 'Comprehensive security management for all properties',
    'features.quality.title': 'Quality Management',
    'features.quality.description': 'Professional property management services',
    'features.service.title': 'Exceptional Service',
    'features.service.description': 'Dedicated customer support and maintenance',
    'features.location.title': 'Prime Locations',
    'features.location.description': 'Strategic locations across Kuwait',
    
    // Properties
    'properties.title': 'Our Property Management Services',
    'properties.luxury.title': 'Luxury Apartments Management',
    'properties.luxury.description': 'Professional management of luxury residential properties with comprehensive maintenance and tenant services.',
    'properties.luxury.features.0': 'Complete property maintenance',
    'properties.luxury.features.1': 'Tenant management services',
    'properties.luxury.features.2': 'Property value optimization',
    'properties.modern.title': 'Villa Management Services',
    'properties.modern.description': 'Specialized management for private villas including maintenance, security, and rental management.',
    'properties.modern.features.0': 'Private villa management',
    'properties.modern.features.1': 'Security and maintenance',
    'properties.modern.features.2': 'Rental optimization',
    'properties.commercial.title': 'Commercial Property Management',
    'properties.commercial.description': 'Expert management of commercial properties including offices, retail spaces, and business complexes.',
    'properties.commercial.features.0': 'Office space management',
    'properties.commercial.features.1': 'Retail property services',
    'properties.commercial.features.2': 'Business facility management',
    'properties.waterfront.title': 'Waterfront Property Services',
    'properties.waterfront.description': 'Specialized management of waterfront properties with unique maintenance and leasing requirements.',
    'properties.waterfront.features.0': 'Waterfront property expertise',
    'properties.waterfront.features.1': 'Marine facility management',
    'properties.waterfront.features.2': 'Premium location services',
    'properties.penthouse.title': 'Premium Property Management',
    'properties.penthouse.description': 'Exclusive management services for high-end properties requiring specialized attention and premium services.',
    'properties.penthouse.features.0': 'Premium property services',
    'properties.penthouse.features.1': 'Exclusive maintenance programs',
    'properties.penthouse.features.2': 'High-end tenant services',
    'properties.mixed.title': 'Mixed-Use Property Management',
    'properties.mixed.description': 'Comprehensive management of mixed-use developments combining residential, commercial, and retail spaces.',
    'properties.mixed.features.0': 'Multi-purpose property management',
    'properties.mixed.features.1': 'Integrated facility services',
    'properties.mixed.features.2': 'Comprehensive tenant management',
    
    // About
    'about.title': 'About World Durra Co',
    'about.description': 'World Durra Co specializes in professional management and leasing of owned or leased real estate. We provide comprehensive property management services with a focus on maximizing property value and ensuring tenant satisfaction. Our partnership with MOVENPICK enhances our service quality and reach.',
    'about.stats.experience': 'Years of Experience',
    'about.stats.projects': 'Managed Properties',
    'about.stats.locations': 'Service Areas',
    
    // Location
    'location.title': 'Our Location',
    'location.description': 'Located in the heart of Kuwait, we serve clients across the region with professional property management services.',
    'location.headquarters': 'Main Office',
    'location.projects': 'Service Areas',
    'location.projectsText': 'Kuwait and surrounding regions',
    'location.mapPlaceholder': 'Interactive Map Coming Soon',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.description': 'Get in touch with our professional team for all your property management and leasing needs.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.cta': 'Get in Touch',
    
    // Footer
    'footer.description': 'Professional property management and leasing services. World Durra Co - your trusted partner in real estate management.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact Info',
    'footer.rights': 'All rights reserved.',
    'footer.agent': 'Authorized Agent',
    
    // WhatsApp
    'whatsapp.message': 'Hello! I\'m interested in learning more about World Durra Co property management services.',
    'whatsapp.label': 'Chat on WhatsApp'
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.properties': 'الخدمات',
    'nav.about': 'من نحن',
    'nav.location': 'الموقع',
    'nav.contact': 'اتصل بنا',
    
    // Hero Section
    'hero.title': 'مرحباً بكم في شركة درة العالم',
    'hero.subtitle': 'للإدارة و تأجير العقارات المملوكة أو المؤجرة',
    'hero.cta': 'تواصل معنا',
    
    // Features
    'features.security.title': 'أمان العقارات',
    'features.security.description': 'إدارة أمنية شاملة لجميع العقارات',
    'features.quality.title': 'إدارة عالية الجودة',
    'features.quality.description': 'خدمات إدارة عقارية احترافية',
    'features.service.title': 'خدمة استثنائية',
    'features.service.description': 'دعم عملاء مخصص وصيانة متكاملة',
    'features.location.title': 'مواقع متميزة',
    'features.location.description': 'مواقع استراتيجية في جميع أنحاء الكويت',
    
    // Properties
    'properties.title': 'خدمات إدارة العقارات',
    'properties.luxury.title': 'إدارة الشقق الفاخرة',
    'properties.luxury.description': 'إدارة احترافية للعقارات السكنية الفاخرة مع صيانة شاملة وخدمات المستأجرين.',
    'properties.luxury.features.0': 'صيانة شاملة للعقار',
    'properties.luxury.features.1': 'خدمات إدارة المستأجرين',
    'properties.luxury.features.2': 'تحسين قيمة العقار',
    'properties.modern.title': 'خدمات إدارة الفيلات',
    'properties.modern.description': 'إدارة متخصصة للفيلات الخاصة تشمل الصيانة والأمان وإدارة الإيجار.',
    'properties.modern.features.0': 'إدارة الفيلات الخاصة',
    'properties.modern.features.1': 'الأمان والصيانة',
    'properties.modern.features.2': 'تحسين الإيجار',
    'properties.commercial.title': 'إدارة العقارات التجارية',
    'properties.commercial.description': 'إدارة متخصصة للعقارات التجارية بما في ذلك المكاتب والمساحات التجارية والمجمعات التجارية.',
    'properties.commercial.features.0': 'إدارة المساحات المكتبية',
    'properties.commercial.features.1': 'خدمات العقارات التجارية',
    'properties.commercial.features.2': 'إدارة المرافق التجارية',
    'properties.waterfront.title': 'خدمات العقارات البحرية',
    'properties.waterfront.description': 'إدارة متخصصة للعقارات البحرية مع متطلبات صيانة وتأجير فريدة.',
    'properties.waterfront.features.0': 'خبرة في العقارات البحرية',
    'properties.waterfront.features.1': 'إدارة المرافق البحرية',
    'properties.waterfront.features.2': 'خدمات المواقع المتميزة',
    'properties.penthouse.title': 'إدارة العقارات المتميزة',
    'properties.penthouse.description': 'خدمات إدارة حصرية للعقارات الراقية التي تتطلب اهتماماً متخصصاً وخدمات متميزة.',
    'properties.penthouse.features.0': 'خدمات العقارات المتميزة',
    'properties.penthouse.features.1': 'برامج صيانة حصرية',
    'properties.penthouse.features.2': 'خدمات مستأجرين راقية',
    'properties.mixed.title': 'إدارة العقارات متعددة الاستخدامات',
    'properties.mixed.description': 'إدارة شاملة للمشاريع متعددة الاستخدامات التي تجمع بين المساحات السكنية والتجارية والتجزئة.',
    'properties.mixed.features.0': 'إدارة عقارات متعددة الأغراض',
    'properties.mixed.features.1': 'خدمات مرافق متكاملة',
    'properties.mixed.features.2': 'إدارة شاملة للمستأجرين',
    
    // About
    'about.title': 'حول شركة درة العالم',
    'about.description': 'تختص شركة درة العالم في الإدارة المهنية وتأجير العقارات المملوكة أو المؤجرة. نحن نقدم خدمات إدارة عقارية شاملة مع التركيز على تعظيم قيمة العقار وضمان رضا المستأجرين. شراكتنا مع موڤنبيك تعزز من جودة خدماتنا ووصولنا.',
    'about.stats.experience': 'سنوات الخبرة',
    'about.stats.projects': 'العقارات المُدارة',
    'about.stats.locations': 'مناطق الخدمة',
    
    // Location
    'location.title': 'موقعنا',
    'location.description': 'نقع في قلب الكويت، ونخدم العملاء في جميع أنحاء المنطقة بخدمات إدارة عقارية احترافية.',
    'location.headquarters': 'المكتب الرئيسي',
    'location.projects': 'مناطق الخدمة',
    'location.projectsText': 'الكويت والمناطق المحيطة',
    'location.mapPlaceholder': 'خريطة تفاعلية قريباً',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.description': 'تواصل مع فريقنا المهني لجميع احتياجاتك في إدارة وتأجير العقارات.',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.address': 'العنوان',
    'contact.cta': 'تواصل معنا',
    
    // Footer
    'footer.description': 'خدمات إدارة وتأجير عقارية احترافية. شركة درة العالم - شريكك الموثوق في إدارة العقارات.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contact': 'معلومات الاتصال',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.agent': 'الوكيل المعتمد',
    
    // WhatsApp
    'whatsapp.message': 'مرحباً! أنا مهتم بمعرفة المزيد عن خدمات شركة درة العالم لإدارة العقارات.',
    'whatsapp.label': 'محادثة على واتساب'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};