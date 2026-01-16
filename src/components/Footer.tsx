import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-black border-t border-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-sm text-gray-400 space-y-2">
          <div className="flex justify-center mb-4">
            <div className="px-4 py-2 bg-white text-black tracking-wider">FORGE</div>
          </div>
          <p>{t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}