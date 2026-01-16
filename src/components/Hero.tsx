import React from 'react';
import { ChevronDown } from 'lucide-react';
import heroImage from 'figma:asset/5fc9e4d1dc99d124b68008c49663648db9bd9ba8.png';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ChevronDown className="w-12 h-12 text-white animate-bounce" />
      </div>
    </div>
  );
}