import React from 'react';
import { Hero } from './components/Hero';
import { EventDetails } from './components/EventDetails';
import { TeamSection } from './components/TeamSection';
import { FilmsGallery } from './components/FilmsGallery';
import { BtsVideo } from './components/BtsVideo';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { GetInContact } from './components/GetInContact';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { Languages } from 'lucide-react';

function LanguageToggleButton() {
  const { language, toggleLanguage } = useLanguage();
  
  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-gray-900/90 backdrop-blur-sm border border-gray-700 hover:border-[#FF00FF] transition-all duration-300 group shadow-2xl"
    >
      <Languages className="w-5 h-5 text-gray-400 group-hover:text-[#FF00FF] transition-colors" />
      <span className="text-white font-medium">{language === 'en' ? 'FR' : 'EN'}</span>
    </button>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-black text-white">
        <LanguageToggleButton />
        <Hero />
        <BtsVideo />
        <EventDetails />
        <FilmsGallery />
        <TeamSection />
        <GetInContact />
        <ContactForm />
        <Footer />
      </div>
    </LanguageProvider>
  );
}