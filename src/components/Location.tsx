import * as React from 'react';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Location: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <MapPin className="text-amber-400 mr-3" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t('location.title')}
            </h2>
          </div>
          
          <div className="bg-slate-800 rounded-lg p-8 mb-8">
            <p className="text-gray-300 text-lg text-center mb-6">
              {t('location.description')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-amber-400 mb-2">
                  {t('location.headquarters')}
                </h3>
                <p className="text-gray-300">
                  Dubai, United Arab Emirates
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-amber-400 mb-2">
                  {t('location.projects')}
                </h3>
                <p className="text-gray-300">
                  {t('location.projectsText')}
                </p>
              </div>
            </div>
            
            <div className="bg-slate-700 rounded-lg p-6">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3481.8234567890123!2d47.9894!3d29.3743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIyJzI3LjUiTiA0N8KwNTknMjEuOCJF!5e0!3m2!1sen!2skw!4v1234567890123!5m2!1sen!2skw"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="موقع شركة درة العالم - الكويت"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-300 text-sm">
                  📍 الإحداثيات: 29.3743° N, 47.9894° E
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  الكويت - المرقاب - شارع خالد بن الوليد - برج مزايا 1
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;