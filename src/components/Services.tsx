import React from 'react';
import { motion } from 'motion/react';
import regWindow from '../assets/images/service-1.jpg';
import conservatoryWindow from '../assets/images/service-2.jpg';
import hardReach from '../assets/images/service-3.jpg';

const services = [
  {
    title: "Regular Window Cleaning",
    description: "Reliable year-round cleaning for all standard exterior windows, keeps your home looking its best.",
    image: regWindow,
    details: ["4 or 8 weekly schedules", "Frames & cills included", "Doors included as standard"]
  },
  {
    title: "Hard-to-Reach Windows",
    description: "Specialised cleaning for those difficult spots that others avoid, using our ground-based WFP system.",
    image: hardReach,
    details: ["Velux & skylights", "Windows over extensions", "Dormers & balconies"]
  },
  {
    title: "Conservatory Cleaning",
    description: "Full glass cleaning for conservatories, including roof lanterns and awkward roof windows.",
    image: conservatoryWindow,
    details: ["Full glass roof cleaning", "Detailed frame work", "Lanterns & skylights"]
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-accent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[12px] font-bold tracking-[1px] text-accent uppercase mb-2">Our Services</h2>
            <p className="text-3xl md:text-5xl font-display font-bold text-primary leading-tight">Everything We Clean</p>
          </div>
          <p className="text-text-light max-w-md font-medium leading-relaxed">
            Professional reach & wash window cleaning for properties of all sizes. We cover everything from bungalows to large detached homes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg shadow-primary/5 flex flex-col h-full hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-60"></div>
              </div>
              <div className="p-10 flex-grow">
                <h3 className="text-2xl font-display font-bold text-primary mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                <ul className="space-y-4">
                  {service.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center text-primary font-semibold">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
