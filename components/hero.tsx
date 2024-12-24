// 'use client'
import React from 'react';
import { MonitorPlay, Cpu, HardDrive, Gamepad, ChevronRight } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { Stats } from './Stats';

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
    <section className="relative overflow-hidden pt-16">
      <div className="glow-shadow absolute top-0 right-0 w-1/2 h-full"></div>
      
      <div className="container mx-auto px-4 min-h-[calc(100vh-4rem)] relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-[calc(100vh-4rem)] py-16 gap-12">
          {/* Left Content */}
          <div className="flex-1 text-white space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-[#22B357]/30 rounded-full text-[#22B357] mb-4 backdrop-blur-sm">
              <MonitorPlay className="w-4 h-4 mr-2" />
              <span>Premium Gaming Components</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-[#22B357]">
              Level Up Your Gaming Setup
            </h1>
            
            <p className="text-xl text-gray-300 max-w-xl">
              Discover cutting-edge gaming components that deliver unmatched performance. 
              From high-end GPUs to premium RAM, we've got everything you need.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-[#22C55E] hover:bg-[#1a9f4d] rounded-lg font-semibold text-white transition-all flex items-center justify-center group backdrop-blur-sm">
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

    </section>
  );
}

