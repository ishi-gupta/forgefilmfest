import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.films': 'Films',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'FORGE AI Film Festival Paris 2025',
    'hero.date': 'January 11, 2025',
    'hero.location': 'Paris, France',
    
    // BTS Video
    'bts.title': 'Festival Highlights & BTS',
    'bts.description': 'See the magic moments, interviews with winners, and exclusive behind-the-scenes footage',
    
    // Event Details
    'event.about': 'About The Festival',
    'event.description': 'Artificial intelligence is rewriting the rules of cinema—democratizing who can tell stories while raising urgent questions about environment, property rights, and artistic integrity. For 12 hours, we gathered at the legendary École Georges Méliès, where traditional filmmaking craft met Stanford\'s futuristic AI tools. In the heart of Paris—a city that has always nurtured original ideas—we explored what storytelling could become when heritage meets innovation.',
    'event.stats.duration': 'Event Duration',
    'event.stats.attendees': 'Attendees',
    'event.stats.awards': 'Awards Given',
    'event.stats.location': 'Location',
    'event.prizes.title': 'Award Winners',
    'event.prizes.best': 'Best Film',
    'event.prizes.favorite': 'Audience Favorite',
    'event.sponsors.title': 'Our Partners',
    
    // Films
    'films.title': 'Featured Films',
    'films.subtitle': 'Explore the groundbreaking films that premiered at our festival',
    'films.director': 'Directed by',
    
    // Team
    'team.title': 'Our Team',
    'team.subtitle': 'Meet the passionate individuals who made this festival possible',
    
    // Get In Contact
    'getincontact.title': 'Get in Contact',
    'getincontact.description': 'Interested in learning more about FORGE or bringing a similar experience to your community? We\'d love to hear from you.',
    
    // Contact Form
    'contact.title': 'Explore with us.',
    'contact.subtitle': 'We\'re curious about the future of storytelling in this age. If you\'re interested in exploring this with us—whether you\'re a professor, film school, individual filmmaker, or production company—we\'d love to experiment together on new formats and festival models for this medium.',
    'contact.name': 'Your Name',
    'contact.email': 'Email Address',
    'contact.context': 'Your Context',
    'contact.context.placeholder': 'Film school, community arts center, university lab...',
    'contact.interest': 'What draws you to this?',
    'contact.interest.placeholder': 'What excites or concerns you about AI in filmmaking and storytelling?',
    'contact.ideas': 'What are you thinking?',
    'contact.ideas.placeholder': 'A workshop? A screening? A lab day? We\'re curious what would work in your setting...',
    'contact.submit': 'Send Message',
    'contact.success.title': 'Thank You!',
    'contact.success.message': 'We\'ve received your message and will get back to you soon.',
    
    // Footer
    'footer.rights': '© 2025 FORGE AI Film Festival. All rights reserved.',
  },
  fr: {
    // Navigation
    'nav.about': 'À propos',
    'nav.films': 'Films',
    'nav.team': 'Équipe',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'FORGE AI Film Festival Paris 2025',
    'hero.date': '11 janvier 2025',
    'hero.location': 'Paris, France',
    
    // BTS Video
    'bts.title': 'Dans les coulisses',
    'bts.description': 'Découvrez le processus créatif alors que les cinéastes explorent l\'intersection entre l\'IA et la narration traditionnelle.',
    
    // Event Details
    'event.about': 'À propos du festival',
    'event.description': 'FORGE a réuni des cinéastes de l\'École Georges Méliès et des chercheurs en IA de Stanford pour un laboratoire intense de 12 heures. Nous avons exploré comment les outils d\'IA pourraient servir le métier traditionnel du cinéma—pas le remplacer. Les étudiants ont utilisé les technologies d\'IA de pointe de Stanford tout en confrontant des questions fondamentales : Que signifie la paternité quand l\'IA génère des images ? Comment maintenons-nous l\'intention cinématographique ? Où se trouve la frontière entre l\'outil et le collaborateur ?',
    'event.stats.duration': 'Heures de Création',
    'event.stats.attendees': 'Participants',
    'event.stats.awards': 'Prix Décernés',
    'event.prizes.title': 'Lauréats',
    'event.prizes.best': 'Meilleur Film',
    'event.prizes.favorite': 'Favori du Public',
    'event.sponsors.title': 'Nos Partenaires',
    
    // Films
    'films.title': 'Films Présentés',
    'films.subtitle': 'Cinq courts métrages créés pendant le festival de 12 heures',
    'films.director': 'Réalisé par',
    
    // Team
    'team.title': 'Équipe Organisatrice',
    'team.subtitle': 'Les personnes qui ont rendu FORGE possible',
    
    // Get In Contact
    'getincontact.title': 'Contactez-nous',
    'getincontact.description': 'Envie d\'en savoir plus sur FORGE ou d\'apporter une expérience similaire à votre communauté ? Nous serions ravis de vous entendre.',
    
    // Contact Form
    'contact.title': 'Organisez Votre Propre Festival',
    'contact.subtitle': 'Vous souhaitez organiser un événement similaire ? Nous serions ravis de vous aider à apporter le cinéma IA à votre communauté. Contactez-nous !',
    'contact.name': 'Votre Nom',
    'contact.email': 'Adresse Email',
    'contact.context': 'Votre Contexte',
    'contact.context.placeholder': 'École de cinéma, centre d\'art communautaire, laboratoire universitaire...',
    'contact.interest': 'Qu\'est-ce qui vous attire ?',
    'contact.interest.placeholder': 'Qu\'est-ce qui vous enthousiasme ou vous préoccupe concernant l\'IA dans le cinéma et la narration ?',
    'contact.ideas': 'À quoi pensez-vous ?',
    'contact.ideas.placeholder': 'Un atelier ? Une projection ? Une journée de laboratoire ? Nous sommes curieux de savoir ce qui fonctionnerait dans votre contexte...',
    'contact.submit': 'Envoyer le Message',
    'contact.success.title': 'Merci !',
    'contact.success.message': 'Nous avons reçu votre message et vous répondrons bientôt.',
    
    // Footer
    'footer.rights': '© 2025 FORGE AI Film Festival. Tous droits réservés.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}