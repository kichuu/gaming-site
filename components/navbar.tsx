'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, User, Menu, X, Gamepad, Search, MonitorPlay, Cpu, HardDrive } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const categories = [
    { name: 'Graphics Cards', icon: MonitorPlay },
    { name: 'Processors', icon: Cpu },
    { name: 'Storage', icon: HardDrive },
    { name: 'Peripherals', icon: Gamepad }
  ];

  return (
    <nav className="bg-[#121212] border-b border-green-900/30 relative z-50">
      {/* Main Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Gamepad className="h-8 w-8 text-green-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-secondary-foreground to-green-400 bg-clip-text text-transparent">
                TechGear
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Adjusted Search Bar */}
            <div className="relative -ml-4"> {/* Added negative margin */}
              <div className={`flex items-center bg-secondary-foreground/5 rounded-lg px-4 py-2 transition-all ${
                isSearchFocused ? 'ring-2 ring-green-500' : ''
              }`}>
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search components..."
                  className="bg-transparent border-none outline-none text-secondary-foreground pl-3 w-64"
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="flex items-center space-x-6">
              <Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">Home</Link>
              <Link href="#" className="text-gray-300 hover:text-green-400 transition-colors">Products</Link>
              <Link href="#" className="text-gray-300 hover:text-green-400 transition-colors">Build PC</Link>
              <Link href="#" className="text-gray-300 hover:text-green-400 transition-colors">Support</Link>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-300 hover:text-green-400 transition-colors">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-green-500 text-secondary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-secondary-foreground px-4 py-2 rounded-lg transition-colors">
                <User className="h-5 w-5" />
                <span>Account</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-green-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute w-full bg-[#121212] border-t border-green-900/30 transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          {/* Mobile Search */}
          <div className="mb-4">
            <div className="flex items-center bg-secondary-foreground/5 rounded-lg px-4 py-2">
              <Search className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search components..."
                className="bg-transparent border-none outline-none text-secondary-foreground pl-3 w-full"
              />
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <div className="space-y-4">
            <Link href="/" className="block text-gray-300 hover:text-green-400 py-2 transition-colors">Home</Link>
            <Link href="#" className="block text-gray-300 hover:text-green-400 py-2 transition-colors">Products</Link>
            <Link href="#" className="block text-gray-300 hover:text-green-400 py-2 transition-colors">Build PC</Link>
            <Link href="#" className="block text-gray-300 hover:text-green-400 py-2 transition-colors">Support</Link>
          </div>

          {/* Mobile Action Buttons */}
          <div className="mt-6 space-y-4">
            <button className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-secondary-foreground px-4 py-2 rounded-lg transition-colors">
              <User className="h-5 w-5" />
              <span>Account</span>
            </button>
            <button className="w-full flex items-center justify-center space-x-2 bg-secondary-foreground/10 hover:bg-secondary-foreground/20 text-secondary-foreground px-4 py-2 rounded-lg transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span>Cart (3)</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
