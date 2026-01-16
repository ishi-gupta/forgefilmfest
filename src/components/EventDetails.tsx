import React from 'react';
import { Calendar, MapPin, Users, Trophy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function EventDetails() {
  const { t } = useLanguage();
  
  const stats = [
    { icon: Calendar, label: t('event.stats.duration'), value: '12 Hours' },
    { icon: Users, label: t('event.stats.attendees'), value: '64' },
    { icon: Trophy, label: t('event.stats.awards'), value: '2' },
    { icon: MapPin, label: t('event.stats.location'), value: 'Paris, France' },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: 'rgba(255, 0, 255, 0.2)' }}>
                <stat.icon className="w-8 h-8" style={{ color: '#FF00FF' }} />
              </div>
              <div className="text-3xl mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">{t('event.about')}</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            {t('event.description')}
          </p>
        </div>
      </div>
    </section>
  );
}