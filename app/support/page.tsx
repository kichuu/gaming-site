'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HelpCircle, MessageCircle, Phone, Mail, FileQuestion, Zap, Clock, CheckCircle } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'

const supportTopics = [
  { icon: HelpCircle, title: 'General Inquiries', description: 'Get help with general questions' },
  { icon: MessageCircle, title: 'Technical Support', description: 'Resolve issues with our products' },
  { icon: FileQuestion, title: 'Order Status', description: 'Check the status of your order' },
  { icon: Zap, title: 'Product Information', description: 'Learn more about our products' },
]

const SupportPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#121212] to-[#1a1a1a] text-white">
      <div className="container mx-auto px-6 py-16">
        <motion.h1 
          className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#1a8f45]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How Can We Help You?
        </motion.h1>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {supportTopics.map((topic, index) => (
           <Card key={index} className="bg-[#2a2a2a] border-primary hover:border-primary hover:shadow-xl transition-all transform hover:scale-105 flex flex-col justify-between h-full">
           <CardHeader className="text-center">
             <topic.icon className="w-10 h-10 text-primary mb-4 mx-auto" />
             <CardTitle className="text-xl font-semibold">{topic.title}</CardTitle>
             <CardDescription className="text-gray-400 mt-2">{topic.description}</CardDescription>
           </CardHeader>
           <CardContent className="flex-grow">
             <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300">
               Learn More
             </Button>
           </CardContent>
         </Card>
         
          ))}
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-[#2a2a2a] border-primary p-6">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Contact Us</CardTitle>
              <CardDescription className="text-gray-400">Get in touch with our support team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-primary" />
                <span>+1 (888) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-primary" />
                <span>support@techgear.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 text-primary" />
                <span>24/7 Support Available</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#2a2a2a] border-primary p-6">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Submit a Ticket</CardTitle>
              <CardDescription className="text-gray-400">We'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <Input placeholder="Your Name" className="bg-[#1a1a1a] border-primary text-white" />
                <Input placeholder="Your Email" type="email" className="bg-[#1a1a1a] border-primary text-white" />
                <Textarea placeholder="Describe your issue" className="bg-[#1a1a1a] border-primary text-white" />
                <Button type="submit" className="w-full bg-primary hover:bg-[#1a8f45] text-white transition-all duration-300">
                  Submit Ticket
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-8">Popular Topics</h2>
          <div className="flex flex-wrap justify-center gap-4">
          <Badge variant="outline" className=" text-primary hover:bg-primary hover:text-white border-2 border-primary py-2 px-4 rounded-3xl text-lg font-medium transition-all duration-300">
  Account Issues
</Badge>
<Badge variant="outline" className=" text-primary hover:bg-primary hover:text-white border-2 border-primary py-2 px-4 rounded-3xl text-lg font-medium transition-all duration-300">
  Shipping & Delivery
</Badge>
<Badge variant="outline" className=" text-primary hover:bg-primary hover:text-white border-2 border-primary py-2 px-4 rounded-3xl text-lg font-medium transition-all duration-300">
  Returns & Refunds
</Badge>
<Badge variant="outline" className=" text-primary hover:bg-primary hover:text-white border-2 border-primary py-2 px-4 rounded-3xl text-lg font-medium transition-all duration-300">
  Product Compatibility
</Badge>
<Badge variant="outline" className=" text-primary hover:bg-primary hover:text-white border-2 border-primary py-2 px-4 rounded-3xl text-lg font-medium transition-all duration-300">
  Warranty Information
</Badge>

          </div>
        </motion.div>

        <motion.div 
          className="mt-16 bg-[#2a2a2a] rounded-lg p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-2xl font-semibold mb-4">Still Need Help?</h2>
          <p className="text-gray-400 mb-6">Our support team is always here to assist you</p>
          <Button className="bg-primary hover:bg-[#1a8f45] text-white transition-all duration-300">
            Chat with Support
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

export default SupportPage
