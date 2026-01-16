import React, { useState } from 'react';
import { Play, X, Trophy } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function FilmsGallery() {
  const { t } = useLanguage();
  const [selectedFilm, setSelectedFilm] = useState<number | null>(null);

  const films = [
    {
      title: 'It Follows',
      director: 'Team Méliès',
      thumbnail: 'https://img.youtube.com/vi/FTDjdZ-mkKU/hqdefault.jpg',
      duration: '0:00',
      youtubeId: 'FTDjdZ-mkKU',
    },
    {
      title: 'Dino',
      director: 'Météore',
      thumbnail: 'https://img.youtube.com/vi/8usq2UTN0j0/hqdefault.jpg',
      duration: '0:00',
      youtubeId: '8usq2UTN0j0',
    },
    {
      title: 'Cordyceps',
      director: 'Cordyceps',
      thumbnail: 'https://img.youtube.com/vi/AQ_Tahw_4yw/hqdefault.jpg',
      duration: '0:00',
      youtubeId: 'AQ_Tahw_4yw',
    },
    {
      title: 'Love',
      director: 'Whitney Marin',
      thumbnail: 'https://img.youtube.com/vi/fnUBRoqoaHw/hqdefault.jpg',
      duration: '0:00',
      youtubeId: 'fnUBRoqoaHw',
    },
    {
      title: 'Love Is Better When Its Real',
      director: 'Team-X',
      thumbnail: 'https://img.youtube.com/vi/uKJqKD3_NoQ/hqdefault.jpg',
      duration: '0:00',
      youtubeId: 'uKJqKD3_NoQ',
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ backgroundColor: 'rgba(255, 215, 0, 0.2)' }}>
            <Trophy className="w-10 h-10 text-yellow-400" />
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">{t('films.title')}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            {t('films.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {films.map((film, index) => (
            <div
              key={index}
              className="group relative aspect-video rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedFilm(index)}
            >
              <img
                src={film.thumbnail}
                alt={film.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform" style={{ backgroundColor: 'rgba(255, 0, 255, 0.8)' }}>
                  <Play className="w-8 h-8 ml-1" fill="white" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-xl mb-1">{film.title}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-gray-400 text-sm">{film.director}</p>
                  <span className="text-gray-400 text-sm">{film.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedFilm !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedFilm(null)}
          >
            <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedFilm(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden">
                {films[selectedFilm].youtubeId ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${films[selectedFilm].youtubeId}?autoplay=1`}
                    title={films[selectedFilm].title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                ) : (
                  <p className="text-gray-400">Video Player - {films[selectedFilm].title}</p>
                )}
              </div>
              <div className="mt-4">
                <h3 className="text-2xl mb-2">{films[selectedFilm].title}</h3>
                <p className="text-gray-400">{t('films.director')} {films[selectedFilm].director}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}