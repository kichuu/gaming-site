import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
}

function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-green-400">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}

export function Stats() {
  return (
    <div className="flex justify-between gap-8 py-4">
      <StatItem value="24/7" label="Expert Support" />
      <StatItem value="100K+" label="Products Sold" />
      <StatItem value="99%" label="Happy Gamers" />
    </div>
  );
}

