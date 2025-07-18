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
    'hero.title': 'Welcome to Emaar Properties',
    'hero.subtitle': 'Your Dream Home Awaits in Premium Locations',
    'hero.cta': 'Explore Properties',
    
    // Features
    'features.security.title': 'Premium Security',
    'features.security.description': '24/7 security systems and gated communities',
    'features.quality.title': 'Quality Construction',
    'features.quality.description': 'World-class materials and expert craftsmanship',
    'features.service.title': 'Exceptional Service',
    'features.service.description': 'Dedicated customer support and maintenance',
    'features.location.title': 'Prime Locations',
    'features.location.description': 'Strategic locations with easy access to amenities',
    
    // Properties
    'properties.title': 'Our Premium Properties',
    'properties.luxury.title': 'Luxury Apartments',
    'properties.luxury.description': 'Experience unparalleled luxury in our premium residential towers featuring world-class amenities and breathtaking views.',
    'properties.luxury.features.0': 'Spacious 1-4 bedroom apartments',
    'properties.luxury.features.1': 'Premium amenities and facilities',
    'properties.luxury.features.2': 'Stunning city and sea views',
    'properties.modern.title': 'Modern Villas',
    'properties.modern.description': 'Contemporary villas designed for modern living with private gardens, pools, and premium finishes in exclusive communities.',
    'properties.modern.features.0': '3-6 bedroom luxury villas',
    'properties.modern.features.1': 'Private gardens and swimming pools',
    'properties.modern.features.2': 'Smart home technology',
    'properties.commercial.title': 'Commercial Towers',
    'properties.commercial.description': 'State-of-the-art office spaces and retail complexes in prime business districts with cutting-edge facilities.',
    'properties.commercial.features.0': 'Grade A office spaces',
    'properties.commercial.features.1': 'Premium retail outlets',
    'properties.commercial.features.2': 'Advanced building management systems',
    'properties.waterfront.title': 'Waterfront Residences',
    'properties.waterfront.description': 'Exclusive waterfront living with private marina access, panoramic sea views, and luxury beach club amenities.',
    'properties.waterfront.features.0': 'Private marina and beach access',
    'properties.waterfront.features.1': 'Panoramic sea and city views',
    'properties.waterfront.features.2': 'Exclusive beach club facilities',
    'properties.penthouse.title': 'Sky Penthouses',
    'properties.penthouse.description': 'Ultra-luxury penthouses with private elevators, rooftop terraces, and 360-degree city views in iconic towers.',
    'properties.penthouse.features.0': 'Private elevator access',
    'properties.penthouse.features.1': 'Rooftop terraces and pools',
    'properties.penthouse.features.2': '360-degree panoramic views',
    'properties.mixed.title': 'Mixed-Use Developments',
    'properties.mixed.description': 'Integrated communities combining residential, commercial, and retail spaces with world-class amenities and services.',
    'properties.mixed.features.0': 'Residential, office, and retail integration',
    'properties.mixed.features.1': 'Community amenities and services',
    'properties.mixed.features.2': 'Sustainable design features',
    'properties.cta': 'View Details',
    
    // About
    'about.title': 'About Emaar Properties',
    'about.description': 'Emaar Properties is a leading real estate developer known for creating iconic destinations and premium lifestyle experiences. With over 25 years of excellence, we have transformed skylines and communities across the region.',
    'about.stats.experience': 'Years of Experience',
    'about.stats.projects': 'Completed Projects',
    'about.stats.locations': 'Prime Locations',
    
    // Location
    'location.title': 'Our Locations',
    'location.description': 'Discover our premium developments across the most sought-after locations in Dubai and beyond.',
    'location.headquarters': 'Headquarters',
    'location.projects': 'Global Projects',
    'location.projectsText': 'UAE, Egypt, Saudi Arabia, and more',
    'location.mapPlaceholder': 'Interactive Map Coming Soon',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.description': 'Ready to find your dream home? Contact our expert team for personalized assistance and exclusive property viewings.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.cta': 'Schedule a Viewing',
    
    // Footer
    'footer.description': 'Building tomorrow\'s landmarks today. Emaar Properties - where dreams meet reality.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact Info',
    'footer.rights': 'All rights reserved.',
    
    // WhatsApp
    'whatsapp.message': 'Hello! I\'m interested in learning more about Emaar Properties.',
    'whatsapp.label': 'Chat on WhatsApp'
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.properties': 'العقارات',
    'nav.about': 'من نحن',
    'nav.location': 'المواقع',
    'nav.contact': 'اتصل بنا',
    
    // Hero Section
    'hero.title': 'مرحباً بكم في إعمار العقارية',
    'hero.subtitle': 'منزل أحلامكم ينتظركم في أفضل المواقع',
    'hero.cta': 'استكشف العقارات',
    
    // Features
    'features.security.title': 'أمان متميز',
    'features.security.description': 'أنظمة أمان على مدار الساعة ومجتمعات محاطة بالأسوار',
    'features.quality.title': 'جودة البناء',
    'features.quality.description': 'مواد عالمية الجودة وحرفية متخصصة',
    'features.service.title': 'خدمة استثنائية',
    'features.service.description': 'دعم عملاء مخصص وصيانة متكاملة',
    'features.location.title': 'مواقع متميزة',
    'features.location.description': 'مواقع استراتيجية مع سهولة الوصول للخدمات',
    
    // Properties
    'properties.title': 'عقاراتنا المتميزة',
    'properties.luxury.title': 'شقق فاخرة',
    'properties.luxury.description': 'اختبر الفخامة الاستثنائية في أبراجنا السكنية المتميزة مع وسائل الراحة العالمية والإطلالات الخلابة.',
    'properties.luxury.features.0': 'شقق واسعة من 1-4 غرف نوم',
    'properties.luxury.features.1': 'مرافق ووسائل راحة متميزة',
    'properties.luxury.features.2': 'إطلالات خلابة على المدينة والبحر',
    'properties.modern.title': 'فيلات عصرية',
    'properties.modern.description': 'فيلات معاصرة مصممة للحياة العصرية مع حدائق خاصة ومسابح ولمسات نهائية متميزة في مجتمعات حصرية.',
    'properties.modern.features.0': 'فيلات فاخرة من 3-6 غرف نوم',
    'properties.modern.features.1': 'حدائق خاصة ومسابح',
    'properties.modern.features.2': 'تقنيات المنزل الذكي',
    'properties.commercial.title': 'أبراج تجارية',
    'properties.commercial.description': 'مساحات مكتبية ومجمعات تجارية حديثة في أهم المناطق التجارية مع مرافق متطورة.',
    'properties.commercial.features.0': 'مساحات مكتبية من الدرجة الأولى',
    'properties.commercial.features.1': 'منافذ تجارية متميزة',
    'properties.commercial.features.2': 'أنظمة إدارة مباني متقدمة',
    'properties.waterfront.title': 'مساكن على الواجهة البحرية',
    'properties.waterfront.description': 'حياة حصرية على الواجهة البحرية مع مرسى خاص وإطلالات بحرية بانورامية ومرافق نادي شاطئي فاخر.',
    'properties.waterfront.features.0': 'مرسى خاص ووصول للشاطئ',
    'properties.waterfront.features.1': 'إطلالات بانورامية على البحر والمدينة',
    'properties.waterfront.features.2': 'مرافق نادي شاطئي حصرية',
    'properties.penthouse.title': 'بنتهاوس سكاي',
    'properties.penthouse.description': 'بنتهاوس فائق الفخامة مع مصاعد خاصة وتراسات على السطح وإطلالات 360 درجة على المدينة في أبراج أيقونية.',
    'properties.penthouse.features.0': 'مصعد خاص',
    'properties.penthouse.features.1': 'تراسات ومسابح على السطح',
    'properties.penthouse.features.2': 'إطلالات بانورامية 360 درجة',
    'properties.mixed.title': 'مشاريع متعددة الاستخدامات',
    'properties.mixed.description': 'مجتمعات متكاملة تجمع بين المساحات السكنية والتجارية والتجزئة مع وسائل راحة وخدمات عالمية.',
    'properties.mixed.features.0': 'تكامل سكني وتجاري وتجزئة',
    'properties.mixed.features.1': 'مرافق وخدمات مجتمعية',
    'properties.mixed.features.2': 'ميزات تصميم مستدامة',
    'properties.cta': 'عرض التفاصيل',
    
    // About
    'about.title': 'حول إعمار العقارية',
    'about.description': 'إعمار العقارية هي شركة رائدة في تطوير العقارات معروفة بإنشاء وجهات أيقونية وتجارب نمط حياة متميزة. مع أكثر من 25 عاماً من التميز، قمنا بتحويل خطوط الأفق والمجتمعات في جميع أنحاء المنطقة.',
    'about.stats.experience': 'سنوات الخبرة',
    'about.stats.projects': 'المشاريع المكتملة',
    'about.stats.locations': 'المواقع المتميزة',
    
    // Location
    'location.title': 'مواقعنا',
    'location.description': 'اكتشف مشاريعنا المتميزة في أكثر المواقع المرغوبة في دبي وما وراءها.',
    'location.headquarters': 'المقر الرئيسي',
    'location.projects': 'المشاريع العالمية',
    'location.projectsText': 'الإمارات، مصر، السعودية، وأكثر',
    'location.mapPlaceholder': 'خريطة تفاعلية قريباً',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.description': 'مستعد لإيجاد منزل أحلامك؟ تواصل مع فريقنا المتخصص للحصول على مساعدة شخصية ومعاينات عقارية حصرية.',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.address': 'العنوان',
    'contact.cta': 'حجز موعد معاينة',
    
    // Footer
    'footer.description': 'نبني معالم الغد اليوم. إعمار العقارية - حيث تلتقي الأحلام بالواقع.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contact': 'معلومات الاتصال',
    'footer.rights': 'جميع الحقوق محفوظة.',
    
    // WhatsApp
    'whatsapp.message': 'مرحباً! أنا مهتم بمعرفة المزيد عن إعمار العقارية.',
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