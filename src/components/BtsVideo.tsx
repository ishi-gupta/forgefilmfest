import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function BtsVideo() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting && videoRef.current) {
            try {
              // Wait for any pending pause to complete
              if (playPromiseRef.current) {
                await playPromiseRef.current;
              }
              playPromiseRef.current = videoRef.current.play();
              await playPromiseRef.current;
              setIsPlaying(true);
            } catch (error) {
              // Ignore interruption errors
              if (error instanceof Error && error.name !== 'AbortError') {
                console.error('Video play error:', error);
              }
            }
          } else if (!entry.isIntersecting && videoRef.current) {
            try {
              // Wait for any pending play to complete before pausing
              if (playPromiseRef.current) {
                await playPromiseRef.current;
              }
              videoRef.current.pause();
              setIsPlaying(false);
            } catch (error) {
              // Ignore errors
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const togglePlay = async () => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          if (playPromiseRef.current) {
            await playPromiseRef.current;
          }
          videoRef.current.pause();
          setIsPlaying(false);
        } else {
          if (playPromiseRef.current) {
            await playPromiseRef.current;
          }
          playPromiseRef.current = videoRef.current.play();
          await playPromiseRef.current;
          setIsPlaying(true);
        }
      } catch (error) {
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error('Video toggle error:', error);
        }
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer" onClick={togglePlay}>
          {/* Placeholder video - replace src with actual video URL */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1702890764798-eda71e941da1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZmVzdGl2YWwlMjBjaW5lbWF8ZW58MXx8fHwxNzY1ODkwMDMwfDA&ixlib=rb-4.1.0&q=80&w=1080"
          >
            {/* Add your video source here when available */}
            {/* <source src="your-video-url.mp4" type="video/mp4" /> */}
          </video>
          
          {!isPlaying && (
            <>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl" style={{ backgroundColor: '#FF00FF' }}>
                  <Play className="w-10 h-10 ml-1" fill="white" />
                </div>
              </div>
            </>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-2xl mb-2">{t('bts.title')}</h3>
            <p className="text-gray-300">{t('bts.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}