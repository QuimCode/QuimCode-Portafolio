import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32 md:py-48">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 text-transparent bg-clip-text">
              Holla, Soy
            </span>
            <span className="block mt-2">Quimey</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Estudiante y Desarrollador IT, creador de bellas & funcionales experiencias web.
          </p>

          <div className="flex items-center justify-center gap-6 mb-12">
            <a href="#contact" className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium transition-colors">
              Get in Touch
            </a>
            <a href="#projects" className="px-8 py-3 bg-transparent border-2 border-white/20 hover:border-white/40 text-white rounded-full font-medium transition-colors">
              View My Work
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ExternalLink className="w-6 h-6 text-white/60" />
      </div>
    </div>
  );
}