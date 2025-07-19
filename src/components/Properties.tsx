import * as React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Properties: React.FC = () => {
  const { t } = useLanguage();

  const properties = [
    {
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
      title: t('properties.hotel.title'),
      description: t('properties.hotel.description'),
      features: [
        t('properties.hotel.features.0'),
        t('properties.hotel.features.1'),
        t('properties.hotel.features.2')
      ]
    },
    {
      image: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg',
      title: t('properties.mall.title'),
      description: t('properties.mall.description'),
      features: [
        t('properties.mall.features.0'),
        t('properties.mall.features.1'),
        t('properties.mall.features.2')
      ]
    },
    {
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
      title: t('properties.portfolio.title'),
      description: t('properties.portfolio.description'),
      features: [
        t('properties.portfolio.features.0'),
        t('properties.portfolio.features.1'),
        t('properties.portfolio.features.2')
      ]
    },
    {
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      title: t('properties.jabriya.title'),
      description: t('properties.jabriya.description'),
      features: [
        t('properties.jabriya.features.0'),
        t('properties.jabriya.features.1'),
        t('properties.jabriya.features.2')
      ]
    },
    {
      image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
      title: t('properties.salmiya.title'),
      description: t('properties.salmiya.description'),
      features: [
        t('properties.salmiya.features.0'),
        t('properties.salmiya.features.1'),
        t('properties.salmiya.features.2')
      ]
    },
    {
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg',
      title: t('properties.other.title'),
      description: t('properties.other.description'),
      features: [
        t('properties.other.features.0'),
        t('properties.other.features.1'),
        t('properties.other.features.2')
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
                
                <ul className="space-y-3">
                  {property.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;