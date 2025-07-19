import * as React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-amber-500 to-orange-600">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t('contact.title')}
          </h2>
          
          <p className="text-white/90 text-lg mb-12 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Phone size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {t('contact.phone')}
              </h3>
              <p className="text-white/90">+965 2226 9915</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Mail size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {t('contact.email')}
              </h3>
              <p className="text-white/90">info@hamedawada-int.com</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <MapPin size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {t('contact.address')}
              </h3>
              <p className="text-white/90 text-sm">
                الكويت - المرقاب - شارع خالد بن الوليد<br />
                برج مزايا 1 - الدور 11 - مكتب رقم: ب 1
              </p>
            </div>
          </div>
          
          <button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors transform hover:scale-105">
            {t('contact.cta')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;