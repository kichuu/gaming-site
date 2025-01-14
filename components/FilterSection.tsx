import React from 'react'

interface FilterSectionProps {
  title: string
  children: React.ReactNode
}

export function FilterSection({ title, children }: FilterSectionProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-lg  bg-white/10 hover:bg-white/20 rounded-lg font-semibold text-white active:text-white focus:text-white">{title}</h3>
      {children}
    </div>
  )
}

