import React from 'react';
import { Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ishitaImage from 'figma:asset/2527c02b58b1a525b936856354e5e3a8978550ac.png';
import cyprienImage from 'figma:asset/6510f44f3e607da454bb3164345d22bff36b51ca.png';
import franckImage from 'figma:asset/47583f870f3060abf05b42b392a64bf41cb2b8fe.png';
import laurentImage from 'figma:asset/4a92bbcbcdfeb8bd14109fecb0705c7540dcffa8.png';
import hugoImage from 'figma:asset/1fced8ab113fa01e176ab848e8143578e8a3f92c.png';

export function TeamSection() {
  const { t } = useLanguage();
  const team = [
    {
      name: 'Ishita Gupta',
      role: 'Festival Director',
      image: ishitaImage,
      linkedin: '#',
    },
    {
      name: 'Cyprien Fasquelle',
      role: 'Festival Director',
      image: cyprienImage,
      linkedin: '#',
    },
  ];

  const meliesTeam = [
    {
      name: 'Franck Pettita',
      role: 'Director and Founder of École Méliès',
      image: franckImage,
      linkedin: '#',
    },
    {
      name: 'Laurent Stehlin',
      role: 'Technical Director of École Méliès',
      image: laurentImage,
      linkedin: '#',
    },
    {
      name: 'Hugo Noulin',
      role: 'Director of Photography',
      image: hugoImage,
      linkedin: '#',
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Our Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">{t('team.title')}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t('team.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-20">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-white/20"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl mb-1">{member.name}</h3>
              <p style={{ color: '#FF00FF' }}>{member.role}</p>
            </div>
          ))}
        </div>

        {/* George Méliès Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">École Méliès Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Our partners from Institut Méliès
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {meliesTeam.map((member, index) => (
            <div key={index} className="group">
              <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-white/20"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <h3 className="text-xl mb-1">{member.name}</h3>
              <p style={{ color: '#FF00FF' }}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}