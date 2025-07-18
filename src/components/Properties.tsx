import * as React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Properties: React.FC = () => {
  const { t } = useLanguage();

  const properties = [
    {
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      title: t('properties.luxury.title'),
      description: t('properties.luxury.description'),
      features: [
        t('properties.luxury.features.0'),
        t('properties.luxury.features.1'),
        t('properties.luxury.features.2')
      ]
    },
    {
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      title: t('properties.modern.title'),
      description: t('properties.modern.description'),
      features: [
        t('properties.modern.features.0'),
        t('properties.modern.features.1'),
        t('properties.modern.features.2')
      ]
    },
    {
      image: 'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg',
      title: t('properties.commercial.title'),
      description: t('properties.commercial.description'),
      features: [
        t('properties.commercial.features.0'),
        t('properties.commercial.features.1'),
        t('properties.commercial.features.2')
      ]
    },
    {
      image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg',
      title: t('properties.waterfront.title'),
      description: t('properties.waterfront.description'),
      features: [
        t('properties.waterfront.features.0'),
        t('properties.waterfront.features.1'),
        t('properties.waterfront.features.2')
      ]
    },
    {
      image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
      title: t('properties.penthouse.title'),
      description: t('properties.penthouse.description'),
      features: [
        t('properties.penthouse.features.0'),
        t('properties.penthouse.features.1'),
        t('properties.penthouse.features.2')
      ]
    },
    {
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg',
      title: t('properties.mixed.title'),
      description: t('properties.mixed.description'),
      features: [
        t('properties.mixed.features.0'),
        t('properties.mixed.features.1'),
        t('properties.mixed.features.2')
      ]
    }
  ];

  return (
    <section id="properties" className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          {t('properties.title')}
        </h2>
        
        <div className="space-y-16">
          {properties.map((property, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-96 object-cover rounded-lg shadow-2xl"
                />
              </div>
              
              <div className="lg:w-1/2 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-amber-400">
                  {property.title}
                </h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {property.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {property.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  {t('properties.cta')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;