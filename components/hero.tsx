'use client'
import React from 'react';
import { MonitorPlay, Cpu, HardDrive, Gamepad, ChevronRight } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { Stats } from './Stats';
import { FloatingParticles } from './FloatingParticles';
import { Scene3D } from './Scene3D';

export function Hero() {
  const products = [
    {
      icon: MonitorPlay,
      title: 'Graphics Cards',
      description: 'Latest RTX & RX Series'
    },
    {
      icon: Cpu,
      title: 'Processors',
      description: 'Intel & AMD CPUs'
    },
    {
      icon: HardDrive,
      title: 'Memory',
      description: 'High-Speed DDR5'
    },
    {
      icon: Gamepad,
      title: 'Peripherals',
      description: 'Gaming Accessories'
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#121212] via-[#004d00] to-[#121212] overflow-hidden pt-16">
      <Scene3D />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.8)_100%)]" />
      
      <div className="container mx-auto px-4 h-full relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full py-16 gap-12">
          {/* Left Content */}
          <div className="flex-1 text-white space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-green-900/30 rounded-full text-green-400 mb-4 backdrop-blur-sm">
              <MonitorPlay className="w-4 h-4 mr-2" />
              <span>Premium Gaming Components</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-green-400">
              Level Up Your Gaming Setup
            </h1>
            
            <p className="text-xl text-gray-300 max-w-xl">
              Discover cutting-edge gaming components that deliver unmatched performance. 
              From high-end GPUs to premium RAM, we&apos;ve got everything you need.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-lg font-semibold text-white transition-all flex items-center justify-center group backdrop-blur-sm">
                Shop Components
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-lg font-semibold text-white transition-all backdrop-blur-sm">
                Build Your PC
              </button>
            </div>

            <div className="backdrop-blur-sm bg-black/30 p-4 rounded-lg">
              <Stats />
            </div>
          </div>

          {/* Right Content - Featured Products Grid */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>

      <FloatingParticles />
    </section>
  );
}

