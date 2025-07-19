import * as React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {t('about.title')}
          </h2>
          
          <div className="bg-slate-700 rounded-lg p-8 mb-12">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t('about.description')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">5★</div>
                <div className="text-gray-300">{t('about.stats.experience')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">50+</div>
                <div className="text-gray-300">{t('about.stats.projects')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">10+</div>
                <div className="text-gray-300">{t('about.stats.locations')}</div>
              </div>
            </div>
          </div>

          {/* About Hamed Awadh International */}
          <div className="bg-slate-700 rounded-lg p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-amber-400 mb-6">
              {t('about.hamed.title')}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t('about.hamed.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;