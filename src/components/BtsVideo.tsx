import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import photo1 from 'figma:asset/7b55c7a2b895a9581b5893bc3de295e7963f5843.png';
import photo2 from 'figma:asset/22f50ec0c2cad64e62dc57920e4be4f6585a3b46.png';
import photo3 from 'figma:asset/af12fb3fc1719650aa6cc37d6defc61e12d4ba28.png';
import photo4 from 'figma:asset/cecb6135379672081765d4fa3e32c7615fe98bf5.png';
import photo5 from 'figma:asset/bf83c780d64e0e7f4d1a07bf51057cb13125b06d.png';
import photo6 from 'figma:asset/29b73367819f94ae0c2e91d9d6153894f8c5c6fc.png';
import photo7 from 'figma:asset/8141c21a1ba1014fe4c795a580845d143c671f3c.png';
import photo8 from 'figma:asset/959cf25ffe024ad300a6dccf370e1d7313985719.png';
import photo9 from 'figma:asset/e511874985b92de3dca922765aea686bfb88aa0a.png';
import photo10 from 'figma:asset/93dc98041e4312ba747f6a4f5e9d8fcd440df0d0.png';
import photo11 from 'figma:asset/c5aaea65d8f8c6cf45dcf0a1b933db678bb59938.png';
import photo12 from 'figma:asset/2c9cced504b99e79d1e21dfd4816bfde6aa5d9fc.png';
import photo13 from 'figma:asset/a38103c369e7c6ce461f5cf4053266f24c829309.png';
import photo14 from 'figma:asset/6c0bf14a8be3feca11bbf0227a5705366646f96d.png';
import photo15 from 'figma:asset/8095291a09c15019d045c421bc5b4089b74c6504.png';
import photo16 from 'figma:asset/d5b0fbe9441ad564ded9c4da7ce8d637cd8389fc.png';

export function BtsVideo() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of photos - you can easily add more here
  const photos = [
    { src: photo2, alt: 'Festival presentation moment' },
    { src: photo3, alt: 'Attendees gathered around arcade games' },
    { src: photo4, alt: 'Festival participants working together' },
    { src: photo5, alt: 'Festival discussion in outdoor space' },
    { src: photo6, alt: 'Planning and brainstorming session' },
    { src: photo7, alt: 'Festival participant at work' },
    { src: photo8, alt: 'Attendee reviewing film content' },
    { src: photo9, alt: 'Festival participant sharing ideas' },
    { src: photo10, alt: 'Festival participant presenting project' },
    { src: photo11, alt: 'Festival participant collaborating with team' },
    { src: photo12, alt: 'Team photo with festival participants' },
    { src: photo13, alt: 'Vintage car on green screen set' },
    { src: photo14, alt: 'Audience watching film screening' },
    { src: photo15, alt: 'Festival organizers presenting awards' },
    { src: photo16, alt: 'Filmmakers presenting on stage' },
    { src: photo1, alt: 'Festival attendees group photo' },
  ];

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [photos.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h3 className="text-2xl mb-2">{t('bts.title')}</h3>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden group">
          {/* Images */}
          <div className="relative aspect-video">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/60 hover:bg-[#FF00FF] backdrop-blur-sm flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-black/60 hover:bg-[#FF00FF] backdrop-blur-sm flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#FF00FF] w-8' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}