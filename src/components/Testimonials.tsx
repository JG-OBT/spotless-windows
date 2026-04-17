import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah T.",
    location: "Stanford-le-Hope",
    text: "Reliable and great results. The water-fed pole system works wonders on our conservatory roof that’s always been hard to keep clean. Very happy with the regular service.",
    rating: 5
  },
  {
    name: "Michael R.",
    location: "Orsett",
    text: "Switched to Spotless Windows after our previous cleaner kept disappearing. These guys are professional, they text before they arrive and the payment system is so easy.",
    rating: 5
  },
  {
    name: "Emma D.",
    location: "Corringham",
    text: "The finish is much better than traditional cleaning. No streaks at all, and the frames look like new every time. Highly recommend for any local homeowners.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold tracking-wider text-secondary uppercase mb-3 text-shadow-sm">Customer Feedback</h2>
          <p className="text-3xl md:text-5xl font-display font-bold text-primary max-w-3xl mx-auto leading-tight">
            What Your Neighbours Say About Our Service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-accent border border-primary/5 flex flex-col relative"
            >
              <div className="absolute top-10 right-10 opacity-10 text-primary">
                <Quote size={60} />
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-lg text-gray-600 leading-relaxed font-medium mb-8 flex-grow">"{testimonial.text}"</p>
              <div>
                <p className="font-display font-bold text-primary text-xl">{testimonial.name}</p>
                <p className="text-secondary font-bold text-sm tracking-wide uppercase">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
