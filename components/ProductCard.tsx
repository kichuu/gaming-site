import React from 'react';
import { TypeIcon as type, LucideIcon } from 'lucide-react';

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ProductCard({ icon: Icon, title, description }: ProductCardProps) {
  return (
    <div className="bg-black/30 backdrop-blur-sm p-6 rounded-2xl border border-green-500/30 hover:border-green-500/50 transition-all group">
      <Icon className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
      <h3 className="text-xl font-semibold text-secondary-foreground mb-2 group-hover:text-green-400 transition-colors">{title}</h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{description}</p>
    </div>
  );
}

