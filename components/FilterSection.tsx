import React from 'react'

interface FilterSectionProps {
  title?: string // Made the title optional
  children: React.ReactNode
}

export function FilterSection({ title, children }: FilterSectionProps) {
  return (
    <div className="space-y-2 p-2 bg-[#1a1a1a] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {title && (
        <h3 className="text-lg font-semibold text-white  p-3 rounded-md text-center  transition-colors duration-300">
          {title}
        </h3>
      )}
      <div className="space-y-2">{children}</div>
    </div>
  )
}
