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
              <div className="aspect-video bg-gray-600 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin size={48} className="mx-auto mb-2" />
                  <p>{t('location.mapPlaceholder')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;