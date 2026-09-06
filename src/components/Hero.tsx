import React from 'react';
import { Search, MapPin, Calendar, Users, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-staywize-blue/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-staywize-teal/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-staywize-blue/5 border border-staywize-blue/10 text-staywize-blue text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span>AI-Powered Proptech Superplatform</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-staywize-gray-900 mb-6 leading-[1.1]"
          >
            The Future of <span className="gradient-text">Real Estate</span> & <span className="gradient-text">Travel</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-staywize-gray-800 mb-10 leading-relaxed"
          >
            Staywize integrates property ownership, rentals, lifestyle e-commerce, and travel into one seamless AI-driven ecosystem. Experience the Philippines' first Proptech Superplatform.
          </motion.p>
        </div>

        {/* Search Interface */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto glass-card p-4 md:p-6 rounded-3xl shadow-xl shadow-staywize-blue/5"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col gap-1 px-4 py-2 border-r border-staywize-gray-200 last:border-0">
              <label className="text-[10px] font-bold text-staywize-gray-800 uppercase tracking-widest flex items-center gap-1">
                <MapPin className="w-3 h-3 text-staywize-blue" /> Location
              </label>
              <input 
                type="text" 
                placeholder="Where to?" 
                className="bg-transparent border-none focus:ring-0 p-0 text-sm font-medium placeholder:text-staywize-gray-200"
              />
            </div>
            
            <div className="flex flex-col gap-1 px-4 py-2 border-r border-staywize-gray-200 last:border-0">
              <label className="text-[10px] font-bold text-staywize-gray-800 uppercase tracking-widest flex items-center gap-1">
                <Calendar className="w-3 h-3 text-staywize-teal" /> Dates
              </label>
              <input 
                type="text" 
                placeholder="Add dates" 
                className="bg-transparent border-none focus:ring-0 p-0 text-sm font-medium placeholder:text-staywize-gray-200"
              />
            </div>
            
            <div className="flex flex-col gap-1 px-4 py-2 border-r border-staywize-gray-200 last:border-0">
              <label className="text-[10px] font-bold text-staywize-gray-800 uppercase tracking-widest flex items-center gap-1">
                <Users className="w-3 h-3 text-staywize-purple" /> Guests
              </label>
              <input 
                type="text" 
                placeholder="Add guests" 
                className="bg-transparent border-none focus:ring-0 p-0 text-sm font-medium placeholder:text-staywize-gray-200"
              />
            </div>
            
            <div className="flex items-center justify-center md:justify-end">
              <button className="btn-primary w-full md:w-auto h-full">
                <Search className="w-5 h-5" />
                <span>Search Now</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats/Trust */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-staywize-gray-900">10k+</span>
            <span className="text-xs font-medium uppercase tracking-wider">Properties</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-staywize-gray-900">50k+</span>
            <span className="text-xs font-medium uppercase tracking-wider">Happy Users</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-staywize-gray-900">₱2B+</span>
            <span className="text-xs font-medium uppercase tracking-wider">Transactions</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-staywize-gray-900">24/7</span>
            <span className="text-xs font-medium uppercase tracking-wider">AI Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};
