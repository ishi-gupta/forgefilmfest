import React from 'react';
import { Award, Trophy } from 'lucide-react';

export function Winners() {
  const winners = [
    {
      category: 'Best Overall Film',
      title: 'Digital Dreams',
      director: 'Sarah Chen',
      description: 'A stunning exploration of consciousness in the age of AI, blending live action with AI-generated environments.',
      award: 'Grand Prize',
    },
    {
      category: 'Best AI-Generated Screenplay',
      title: 'The Last Programmer',
      director: 'Marcus Johnson',
      description: 'A thought-provoking narrative entirely co-written with GPT-4, exploring human-AI collaboration.',
      award: 'Gold',
    },
    {
      category: 'Best Visual Effects',
      title: 'Quantum Echoes',
      director: 'Elena Rodriguez',
      description: 'Revolutionary use of AI for real-time visual effects and procedural world-building.',
      award: 'Gold',
    },
    {
      category: 'Best Documentary',
      title: 'Training Data',
      director: 'Amir Patel',
      description: 'An intimate look at the artists whose work trained the AI models reshaping our world.',
      award: 'Gold',
    },
    {
      category: 'Best Experimental Film',
      title: 'Latent Space',
      director: 'Luna Kim',
      description: 'A mesmerizing journey through AI-generated dreamscapes and abstract narratives.',
      award: 'Silver',
    },
    {
      category: 'Audience Choice Award',
      title: 'Hello, Human',
      director: 'David Okonkwo',
      description: 'A heartwarming story about connection between a child and an AI companion.',
      award: 'Special',
    },
  ];

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6" style={{ backgroundColor: 'rgba(255, 215, 0, 0.2)' }}>
            <Trophy className="w-10 h-10 text-yellow-400" />
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">Award Winners</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Celebrating the visionaries who pushed the boundaries of AI filmmaking
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {winners.map((winner, index) => (
            <div 
              key={index} 
              className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="text-sm mb-2" style={{ color: '#FF00FF' }}>{winner.category}</div>
                  <h3 className="text-2xl mb-1 group-hover:text-white/90 transition-colors">
                    {winner.title}
                  </h3>
                  <p className="text-gray-400">by {winner.director}</p>
                </div>
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 ml-2" />
              </div>
              <p className="text-gray-400 text-sm mb-4">{winner.description}</p>
              <div className="inline-block px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400 text-sm">
                {winner.award}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}