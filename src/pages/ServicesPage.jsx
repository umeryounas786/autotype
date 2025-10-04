import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Wrench, Car, Settings, Book, CircleDot, Thermometer, Battery, Zap, Truck, AlertTriangle, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import PageHeader from '@/components/PageHeader';

const mechanicalServices = [{
  name: "General Mechanical Repairs",
  icon: Wrench,
  description: "From routine maintenance to complex fixes, our expert mechanics handle it all.",
  imageDescription: "Mechanic working under a car on a lift in a clean workshop"
}, {
  name: "Engine Diagnostics",
  icon: Settings,
  description: "Using advanced tools to accurately diagnose and resolve engine performance issues.",
  imageDescription: "Close-up of a mechanic using a diagnostic tablet connected to a car engine"
}, {
  name: "Logbook Servicing",
  icon: Book,
  description: "Manufacturer-approved servicing that protects your warranty and keeps your car running smoothly.",
  imageDescription: "A mechanic stamping a vehicle logbook on a service desk"
}, {
  name: "Suspension, Brakes, and Steering",
  icon: CircleDot,
  description: "Ensuring your vehicle's safety and handling with expert brake and suspension services.",
  imageDescription: "Close-up of a brand new brake disc and caliper on a car"
}, {
  name: "Air Conditioning Services",
  icon: Thermometer,
  description: "Stay cool with our comprehensive A/C regas, repair, and maintenance services.",
  imageDescription: "Technician servicing a car's air conditioning system with specialized equipment"
}, {
  name: "Battery Services",
  icon: Battery,
  description: "Testing, replacement, and maintenance for all types of vehicle batteries.",
  imageDescription: "A new car battery being installed into an engine bay"
}, {
  name: "Auto Electrical Repairs",
  icon: Zap,
  description: "Solving complex electrical issues, from wiring problems to component failures.",
  imageDescription: "An auto electrician carefully inspecting a vehicle's fuse box"
}];
const towingServices = [{
  name: "Tilt Tray Towing",
  icon: Truck,
  description: "Safe and secure towing for all vehicle types, including lowered and prestige cars.",
  imageDescription: "A modern tilt tray tow truck with a sports car loaded on the back"
}, {
  name: "Emergency Towing",
  icon: AlertTriangle,
  description: "24/7 rapid response for breakdowns and accidents to get you to safety.",
  imageDescription: "A tow truck at night with flashing lights, ready to assist a broken-down car"
}, {
  name: "Long-distance towing",
  icon: Map,
  description: "Reliable vehicle transport across the state or country, planned to your schedule.",
  imageDescription: "A large tow truck driving on a highway during a sunny day"
}];

const ServiceCard = ({ service, index }) => {
  const handleInquiry = () => {
    toast({
      title: `Inquiry for ${service.name}`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };
  return (
    <motion.div 
      className="bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden flex flex-col group" 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.5, delay: index * 0.05 }} 
      whileHover={{ y: -8, scale: 1.02, boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.25)" }}
    >
      <div className="relative h-56 overflow-hidden">
        <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt={service.imageDescription} src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
        <Button onClick={handleInquiry} className="bg-red-600 hover:bg-red-700 text-white transition-colors w-full mt-auto">
          Inquire Now
        </Button>
      </div>
    </motion.div>
  );
};

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>A1 Auto Service & Tyres - Mechanical, Electrical & Towing Services</title>
        <meta name="description" content="Explore our wide range of automotive services, including mechanical repairs, electrical diagnostics, logbook servicing, and professional towing." />
      </Helmet>
      <PageHeader 
        title="Our Core Services"
        subtitle="Your one-stop shop for comprehensive vehicle care and emergency assistance."
        graphic="services"
      />
      <div className="container mx-auto px-4 pb-12 sm:pb-16">
        <div className="mb-16 sm:mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.7 }} 
            className="flex items-center mb-8"
          >
            <Car className="w-8 h-8 sm:w-10 sm:h-10 text-red-500 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Mechanical & Auto Electrical</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {mechanicalServices.map((service, index) => <ServiceCard key={service.name} service={service} index={index} />)}
          </div>
        </div>

        <div>
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.7 }} 
            className="flex items-center mb-8"
          >
            <Truck className="w-8 h-8 sm:w-10 sm:h-10 text-red-500 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Towing Services</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {towingServices.map((service, index) => <ServiceCard key={service.name} service={service} index={index} />)}
          </div>
        </div>
      </div>
    </>
  );
};
export default ServicesPage;