import * as React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'ar' ? 'إعمار العقارية' : 'EMAAR PROPERTIES'}
            </h3>
            <p className="text-gray-300 mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 hover:bg-amber-500 p-3 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-amber-500 p-3 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-amber-500 p-3 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-amber-500 p-3 rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-slate-800 hover:bg-amber-500 p-3 rounded-full transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-amber-400 transition-colors">{t('nav.home')}</a></li>
              <li><a href="#properties" className="text-gray-300 hover:text-amber-400 transition-colors">{t('nav.properties')}</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors">{t('nav.about')}</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>+971 4 367 3333</li>
              <li>info@emaar.ae</li>
              <li>Dubai, UAE</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 {language === 'ar' ? 'إعمار العقارية' : 'Emaar Properties'}. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;