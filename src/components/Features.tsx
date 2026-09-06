import React from 'react';
import { Home, Plane, ShoppingBag, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES } from '../constants';
import { motion } from 'motion/react';

const icons: Record<string, any> = {
  Home,
  Plane,
  ShoppingBag,
  ShieldCheck
};

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-staywize-gray-900 text-white overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-staywize-blue/5 blur-[100px] -z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              One Platform. <br />
              <span className="text-staywize-teal">Infinite Possibilities.</span>
            </h2>
            <p className="text-staywize-gray-200 text-lg">
              We've combined the best of real estate, travel, and lifestyle into a single AI-powered ecosystem designed for the modern Filipino.
            </p>
          </div>
          <button className="btn-secondary whitespace-nowrap">
            Explore Ecosystem <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-${service.color}/20 text-${service.color} group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-staywize-gray-200 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-staywize-teal hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* AI Integration Highlight */}
        <div className="mt-20 p-8 md:p-12 rounded-[40px] bg-linear-to-br from-staywize-blue to-staywize-purple relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-white/10 blur-[80px] rounded-full"></div>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold mb-6">
                <ShieldCheck className="w-3 h-3" /> AI-POWERED ENGINE
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Smart Valuation & Personalized Matching</h3>
              <p className="text-white/80 text-lg mb-8">
                Our proprietary AI analyzes millions of data points to provide real-time property valuations, personalized travel recommendations, and predictive lifestyle shopping.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-staywize-blue px-6 py-3 rounded-xl font-bold hover:bg-staywize-gray-50 transition-colors">
                  Try AI Search
                </button>
                <button className="bg-white/10 text-white px-6 py-3 rounded-xl font-bold hover:bg-white/20 transition-colors border border-white/20">
                  View Data Insights
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute inset-8 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-3xl shadow-2xl flex items-center justify-center">
                    <Sparkles className="w-16 h-16 text-staywize-blue" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
