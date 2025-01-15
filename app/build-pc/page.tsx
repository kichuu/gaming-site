'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, HardDrive, MemoryStickIcon as Memory, Monitor, Power, CircuitBoardIcon as Motherboard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const steps = [
  { name: 'CPU', icon: Cpu },
  { name: 'Motherboard', icon: Motherboard },
  { name: 'RAM', icon: Memory },
  { name: 'Storage', icon: HardDrive },
  { name: 'Power Supply', icon: Power },
  { name: 'Monitor', icon: Monitor },
]

type ComponentType = {
  name: string;
  price: number;
};

type ComponentsType = {
  [key: string]: ComponentType[];
};

const components: ComponentsType = {
  CPU: [
    { name: 'Intel Core i9-11900K', price: 539.99 },
    { name: 'AMD Ryzen 9 5950X', price: 799.99 },
    { name: 'Intel Core i7-11700K', price: 399.99 },
  ],
  Motherboard: [
    { name: 'ASUS ROG Maximus XIII Hero', price: 499.99 },
    { name: 'MSI MPG Z590 Gaming Edge WiFi', price: 269.99 },
    { name: 'Gigabyte Z590 AORUS PRO AX', price: 289.99 },
  ],
  RAM: [
    { name: 'Corsair Vengeance RGB Pro 32GB', price: 199.99 },
    { name: 'G.Skill Trident Z Neo 32GB', price: 189.99 },
    { name: 'Crucial Ballistix 32GB', price: 169.99 },
  ],
  Storage: [
    { name: 'Samsung 970 EVO Plus 1TB', price: 159.99 },
    { name: 'Western Digital Black SN850 1TB', price: 199.99 },
    { name: 'Sabrent Rocket 4 Plus 1TB', price: 189.99 },
  ],
  'Power Supply': [
    { name: 'Corsair RM850x 850W', price: 144.99 },
    { name: 'EVGA SuperNOVA 850 G5', price: 149.99 },
    { name: 'Seasonic FOCUS GX-850', price: 139.99 },
  ],
  Monitor: [
    { name: 'LG UltraGear 27GL850-B 27"', price: 449.99 },
    { name: 'ASUS TUF Gaming VG27AQ 27"', price: 429.99 },
    { name: 'Dell S2721DGF 27"', price: 399.99 },
  ],
}

export default function BuildPC() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedComponents, setSelectedComponents] = useState<{ [key: string]: ComponentType }>({})

  const handleSelectComponent = (component: any) => {
    setSelectedComponents({
      ...selectedComponents,
      [steps[currentStep].name]: component,
    })
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const totalPrice = Object.values(selectedComponents).reduce(
    (sum, component: any) => sum + component.price,
    0
  )

  return (
    <div className="bg-[#121212] min-h-screen text-secondary-foreground px-6 py-12">
      <h1 className="text-5xl font-bold text-center mb-10 text-primary">Build Your Dream PC</h1>
      
      {/* Progress Indicator */}
      <div className="flex justify-between mb-12">
        {steps.map((step, index) => (
          <div key={step.name} className="flex flex-col items-center">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                index <= currentStep ? 'bg-primary' : 'bg-gray-500'
              }`}
            >
              <step.icon className="w-8 h-8 text-secondary-foreground" />
            </div>
            <span className="mt-2 text-sm text-gray-400">{step.name}</span>
          </div>
        ))}
      </div>

      {/* Component Selection */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-secondary-foreground">
            Select your {steps[currentStep].name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {components[steps[currentStep].name].map((component) => (
              <Card
                key={component.name}
                className="bg-[#1a1a1a] border-2 border-transparent hover:border-primary hover:shadow-2xl transition-all cursor-pointer rounded-lg"
                onClick={() => handleSelectComponent(component)}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-secondary-foreground mb-3">{component.name}</h3>
                  <p className="text-primary font-bold text-lg">${component.price.toFixed(2)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Summary */}
      <div className="mt-10 bg-[#1a1a1a] p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-secondary-foreground">Your Build</h2>
        {Object.entries(selectedComponents).map(([key, value]: [string, any]) => (
          <div key={key} className="flex justify-between items-center mb-4">
            <span className="text-gray-300">{key}</span>
            <span className="text-secondary-foreground">{value.name} - ${value.price.toFixed(2)}</span>
          </div>
        ))}
        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-semibold text-secondary-foreground">Total</span>
            <span className="text-2xl font-bold text-primary">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-10 flex justify-between">
        <Button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="bg-primary hover:bg-[#1a8f45] text-secondary-foreground py-3 px-8 rounded-lg transition-all"
        >
          Previous
        </Button>
        <Button
          onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
          disabled={currentStep === steps.length - 1}
          className="bg-primary hover:bg-[#1a8f45] text-secondary-foreground py-3 px-8 rounded-lg transition-all"
        >
          Next
        </Button>
      </div>
    </div>
  )
}
