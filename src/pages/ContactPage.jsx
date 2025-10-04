import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: 'Message Sent!',
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const contactDetails = [
    { icon: Phone, text: '+61387747365', href: 'tel:+61387747365' },
    { icon: Mail, text: 'info@a1autoservice.com.au', href: 'mailto:info@a1autoservice.com.au' },
    { icon: MapPin, text: 'Unit 2/72 Hallam S Rd, Hallam VIC 3803, Australia', href: 'https://www.google.com/maps/search/?api=1&query=Unit+2/72+Hallam+S+Rd,+Hallam+VIC+3803,+Australia', isExternal: true },
  ];

  return (
    <>
      <Helmet>
        <title>A1 Auto Service & Tyres - Contact Us</title>
        <meta name="description" content="Get in touch with A1 Auto Service & Tyres. Find our contact details, send us a message, or visit our workshop in Hallam, VIC." />
      </Helmet>
      <div className="bg-white">
        <div className="container mx-auto px-4 py-16 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Have a question or need assistance? We're here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-3 bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-semibold">Full Name</Label>
                    <Input id="name" type="text" placeholder="John Doe" className="mt-2 bg-white border-gray-300 focus:border-red-500 focus:ring-red-500" required />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-semibold">Email Address</Label>
                    <Input id="email" type="email" placeholder="you@example.com" className="mt-2 bg-white border-gray-300 focus:border-red-500 focus:ring-red-500" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-700 font-semibold">Message</Label>
                  <Textarea id="message" placeholder="How can we help you today?" className="mt-2 bg-white border-gray-300 focus:border-red-500 focus:ring-red-500" rows={5} required />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg bg-red-600 hover:bg-red-700 text-white font-bold">
                  Send Message <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="bg-gray-900 text-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-5">
                  {contactDetails.map((item, index) => (
                    <a 
                      key={index} 
                      href={item.href} 
                      className="flex items-start text-gray-300 hover:text-white transition-colors group"
                      target={item.isExternal ? "_blank" : "_self"}
                      rel={item.isExternal ? "noopener noreferrer" : ""}
                    >
                      <item.icon className="w-6 h-6 mr-4 text-red-500 flex-shrink-0 mt-1" />
                      <span className="text-lg group-hover:underline">{item.text}</span>
                    </a>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect on WhatsApp</h3>
                <p className="text-gray-600 mb-6">For quick questions and support, message us directly on WhatsApp.</p>
                <Button onClick={() => toast({ title: 'Opening WhatsApp', description: "🚧 This feature isn't implemented yet." })} className="w-full bg-green-500 hover:bg-green-600 text-white text-lg font-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-3"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  Chat on WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;