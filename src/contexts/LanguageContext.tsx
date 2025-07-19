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
    'nav.properties': 'Projects',
    'nav.about': 'About',
    'nav.location': 'Location',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'WORLD DURRA CO',
    'hero.subtitle': 'For Management and Leasing Owned or Leased Real Estate • Authorized Agent: MÖVENPICK',
    'hero.cta': 'Contact Us',
    
    // Features
    'features.security.title': 'Premium Management',
    'features.security.description': 'Professional management under Mövenpick brand standards',
    'features.quality.title': 'International Standards',
    'features.quality.description': 'Operated by Accor Group with global excellence',
    'features.service.title': 'Luxury Experience',
    'features.service.description': 'Five-star hotel and modern shopping mall',
    'features.location.title': 'Prime Location',
    'features.location.description': 'Strategic location in the heart of Jabriya',
    
    // Properties
    'properties.title': 'PROJECT COMPONENTS',
    'properties.hotel.title': 'MÖVENPICK HOTEL',
    'properties.hotel.description': 'Modern 5-star hotel with luxury suites & rooms, wellness center & gym, meeting & event halls, private parking spaces, variety swimming pools, men\'s and women\'s salon, and 4 luxurious penthouses each with a private pool.',
    'properties.hotel.features.0': 'Luxury suites & rooms',
    'properties.hotel.features.1': 'Wellness center & gym',
    'properties.hotel.features.2': '4 luxurious penthouses with private pools',
    'properties.mall.title': 'SHOPPING MALL',
    'properties.mall.description': 'Modern shopping mall featuring international brands & stores, dining outlets & cafés, lifestyle services, and multiple entrances with visitor parking.',
    'properties.mall.features.0': 'International brands & stores',
    'properties.mall.features.1': 'Dining outlets & cafés',
    'properties.mall.features.2': 'Multiple entrances & visitor parking',
    'properties.portfolio.title': 'REAL ESTATE PORTFOLIO',
    'properties.portfolio.description': 'Hamed Awadh International Real Estate owns a diverse portfolio of residential, commercial, and investment projects across strategic urban areas in Kuwait.',
    'properties.portfolio.features.0': 'Residential complexes',
    'properties.portfolio.features.1': 'Commercial developments',
    'properties.portfolio.features.2': 'Investment properties',
    'properties.jabriya.title': 'JABRIYA PROJECTS',
    'properties.jabriya.description': 'Mövenpick Hotel & Mall and Mahboula residential complex of 16 buildings in strategic locations.',
    'properties.jabriya.features.0': 'Mövenpick Hotel & Mall',
    'properties.jabriya.features.1': 'Mahboula - Block 3: 16 buildings',
    'properties.jabriya.features.2': 'Prime Jabriya location',
    'properties.salmiya.title': 'SALMIYA DEVELOPMENTS',
    'properties.salmiya.description': 'Multiple premium complexes including La Plage, Al Hamra, Al Rayan complexes and Salam Mall.',
    'properties.salmiya.features.0': 'La Plage Complex',
    'properties.salmiya.features.1': 'Al Hamra & Al Rayan Complexes',
    'properties.salmiya.features.2': 'Salam Mall',
    'properties.other.title': 'OTHER LOCATIONS',
    'properties.other.description': 'Strategic properties in Hawally, Rumaithiya, Bnied Al-Gar, Salwa, and Al-Salam areas.',
    'properties.other.features.0': 'Hawally: 3 premium buildings',
    'properties.other.features.1': 'Rumaithiya: 4 strategic buildings',
    'properties.other.features.2': 'Bnied Al-Gar: 4-building complex',
    
    // About
    'about.title': 'About WORLD DURRA CO',
    'about.description': 'A leading company specialized in management and leasing of owned or leased real estate properties. We work with authorized agents including MÖVENPICK to ensure the highest standards of property management and leasing services.',
    'about.stats.experience': 'Years of Excellence',
    'about.stats.projects': 'Managed Properties',
    'about.stats.locations': 'Strategic Locations',
    'about.hamed.title': 'HAMED AWADH INTERNATIONAL REAL ESTATE',
    'about.hamed.description': 'A leading real estate firm in Kuwait, owning a diverse portfolio of residential, commercial, and investment projects across strategic urban areas.',
    
    // Location
    'location.title': 'Our Locations',
    'location.description': 'Strategic presence across Kuwait\'s prime areas with diverse real estate portfolio.',
    'location.headquarters': 'Main Office',
    'location.projects': 'Project Areas',
    'location.projectsText': 'Jabriya, Salmiya, Hawally, Rumaithiya, and more',
    'location.coordinates': 'Coordinates: 29.3743° N, 47.9894° E',
    
    // Contact
    'contact.title': 'Contact WORLD DURRA CO',
    'contact.description': 'Get in touch with our professional team for all your hospitality and real estate needs.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.cta': 'Get in Touch',
    
    // Footer
    'footer.description': 'WORLD DURRA CO - For Management and Leasing Owned or Leased Real Estate. Authorized Agent: MÖVENPICK.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact Info',
    'footer.rights': 'All rights reserved.',
    'footer.agent': 'Authorized Agent',
    'footer.company': 'Company',
    'footer.services': 'Services',
    
    // WhatsApp
    'whatsapp.message': 'Hello! I\'m interested in learning more about Mövenpick Hotel & Mall Al-Jabriya project.',
    'whatsapp.label': 'Chat on WhatsApp'
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.properties': 'المشاريع',
    'nav.about': 'من نحن',
    'nav.location': 'الموقع',
    'nav.contact': 'اتصل بنا',
    
    // Hero Section
    'hero.title': 'شركة درة العالم',
    'hero.subtitle': 'لإدارة وتأجير العقارات المملوكة أو المؤجرة • الوكيل المعتمد: موڤنبيك',
    'hero.cta': 'تواصل معنا',
    
    // Features
    'features.security.title': 'إدارة متميزة',
    'features.security.description': 'إدارة احترافية وفق معايير علامة موڤنبيك',
    'features.quality.title': 'معايير عالمية',
    'features.quality.description': 'مُشغل من قبل مجموعة أكور بتميز عالمي',
    'features.service.title': 'تجربة فاخرة',
    'features.service.description': 'فندق خمس نجوم ومول تجاري عصري',
    'features.location.title': 'موقع استراتيجي',
    'features.location.description': 'موقع استراتيجي في قلب منطقة الجابرية',
    
    // Properties
    'properties.title': 'مكونات المشروع',
    'properties.hotel.title': 'فندق موڤنبيك',
    'properties.hotel.description': 'فندق خمس نجوم بتصميم عصري مع أجنحة وغرف فاخرة، مركز صحي وناد رياضي، قاعات اجتماعات ومناسبات، مواقف سيارات، مسابح متنوعة، صالون رجالي ونسائي، و4 بنتهاوس فاخرة كل منها مزودة بمسبح خاص.',
    'properties.hotel.features.0': 'أجنحة وغرف فاخرة',
    'properties.hotel.features.1': 'مركز صحي وناد رياضي',
    'properties.hotel.features.2': '4 بنتهاوس فاخرة مع مسابح خاصة',
    'properties.mall.title': 'المول التجاري',
    'properties.mall.description': 'مول تجاري عصري يضم محلات وماركات عالمية، مطاعم وكافيهات، خدمات وتجارب تسوق، ومداخل متعددة مع مواقف للزوار.',
    'properties.mall.features.0': 'محلات وماركات عالمية',
    'properties.mall.features.1': 'مطاعم وكافيهات',
    'properties.mall.features.2': 'مداخل متعددة ومواقف للزوار',
    'properties.portfolio.title': 'المحفظة العقارية',
    'properties.portfolio.description': 'تمتلك شركة حامد عوض إنترناشونال العقارية محفظة استثمارية واسعة من المشاريع السكنية والتجارية والاستثمارية في أهم المناطق الحيوية بالكويت.',
    'properties.portfolio.features.0': 'مجمعات سكنية',
    'properties.portfolio.features.1': 'تطوير تجاري',
    'properties.portfolio.features.2': 'عقارات استثمارية',
    'properties.jabriya.title': 'مشاريع الجابرية',
    'properties.jabriya.description': 'فندق ومول موڤنبيك ومجمع المهبولة السكني المكون من 16 عمارة في مواقع استراتيجية.',
    'properties.jabriya.features.0': 'فندق ومول موڤنبيك',
    'properties.jabriya.features.1': 'المهبولة - قطعة 3: 16 عمارة',
    'properties.jabriya.features.2': 'موقع متميز في الجابرية',
    'properties.salmiya.title': 'تطوير السالمية',
    'properties.salmiya.description': 'مجمعات متميزة متعددة تشمل مجمع لابلاج والحمراء والريان ومجمع السلام مول.',
    'properties.salmiya.features.0': 'مجمع لابلاج',
    'properties.salmiya.features.1': 'مجمع الحمراء والريان',
    'properties.salmiya.features.2': 'مجمع السلام مول',
    'properties.other.title': 'مواقع أخرى',
    'properties.other.description': 'عقارات استراتيجية في مناطق حولي والرميثية وبنيد القار وسلوى والسلام.',
    'properties.other.features.0': 'حولي: 3 مباني متميزة',
    'properties.other.features.1': 'الرميثية: 4 مباني استراتيجية',
    'properties.other.features.2': 'بنيد القار: مجمع من 4 عمارات',
    
    // About
    'about.title': 'حول شركة درة العالم',
    'about.description': 'شركة رائدة متخصصة في إدارة وتأجير العقارات المملوكة أو المؤجرة. نعمل مع وكلاء معتمدين مثل موڤنبيك لضمان أعلى معايير إدارة وتأجير العقارات.',
    'about.stats.experience': 'سنوات التميز',
    'about.stats.projects': 'العقارات المُدارة',
    'about.stats.locations': 'المواقع الاستراتيجية',
    'about.hamed.title': 'شركة حامد عوض إنترناشونال العقارية',
    'about.hamed.description': 'شركة رائدة في السوق العقاري الكويتي، تمتلك محفظة استثمارية واسعة من المشاريع السكنية والاستثمارية والتجارية في أهم المناطق الحيوية.',
    
    // Location
    'location.title': 'مواقعنا',
    'location.description': 'تواجد استراتيجي في أهم مناطق الكويت مع محفظة عقارية متنوعة.',
    'location.headquarters': 'المكتب الرئيسي',
    'location.projects': 'مناطق المشاريع',
    'location.projectsText': 'الجابرية، السالمية، حولي، الرميثية، وأكثر',
    'location.coordinates': 'الإحداثيات: 29.3743° N, 47.9894° E',
    
    // Contact
    'contact.title': 'تواصل مع شركة درة العالم',
    'contact.description': 'تواصل مع فريقنا المهني لجميع احتياجاتك الفندقية والعقارية.',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.address': 'العنوان',
    'contact.cta': 'تواصل معنا',
    
    // Footer
    'footer.description': 'شركة درة العالم - لإدارة وتأجير العقارات المملوكة أو المؤجرة. الوكيل المعتمد: موڤنبيك.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contact': 'معلومات الاتصال',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.agent': 'الوكيل المعتمد',
    'footer.company': 'الشركة',
    'footer.services': 'الخدمات',
    
    // WhatsApp
    'whatsapp.message': 'مرحباً! أنا مهتم بمعرفة المزيد عن خدمات شركة درة العالم العقارية.',
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