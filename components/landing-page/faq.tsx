'use client'

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and cryptocurrency payments. For specific payment queries, please contact our customer support."
  },
  {
    question: "How long does shipping usually take?",
    answer: "Shipping times vary depending on your location. Domestic orders typically arrive within 3-5 business days, while international orders may take 7-14 business days. Expedited shipping options are available at checkout."
  },
  {
    question: "Do you offer warranty on your products?",
    answer: "Yes, all our products come with a standard manufacturer's warranty. Additionally, we offer extended warranty options for most items. Please check individual product pages for specific warranty information."
  },
  {
    question: "Can I return or exchange a product?",
    answer: "We have a 30-day return policy for most items. Products must be in their original condition with all accessories. Some exceptions apply for certain products. Please refer to our Returns & Exchanges page for more details."
  },
  {
    question: "Do you offer price matching?",
    answer: "Yes, we offer price matching on identical products from authorized retailers. Please contact our customer service with the competitor's price and product link for verification and processing."
  }
]

export default function FAQ() {
  return (
    <section className="py-16 px-4 bg-[#121212]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-primary bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-secondary-foreground hover:text-primary">{item.question}</AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

