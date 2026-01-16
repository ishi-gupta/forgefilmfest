import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function GetInContact() {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 px-4 bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl mb-6">{t('getincontact.title')}</h2>
        <a 
          href="#contact" 
          className="inline-block animate-bounce"
          style={{ color: '#FF00FF' }}
        >
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}