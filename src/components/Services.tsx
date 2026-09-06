import React, { useState } from 'react';
import { PREMIUM_SERVICES } from '../constants';
import { ChevronDown, Search, Filter, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Services: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = useState('Azure Sky Residences - Unit 1204');

  return (
    <div className="min-h-screen bg-staywize-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/condo-exterior/1920/1080" 
            alt="Services Header" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-staywize-blue/60 backdrop-blur-sm"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-6">Services</h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Browse and purchase premium services for your condo. From cleaning to repairs, we've got everything you need to maintain your property in top condition.
            </p>
            <button className="bg-staywize-teal hover:bg-staywize-teal/90 text-white px-8 py-4 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-staywize-teal/20 flex items-center gap-2">
              Request a Service
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters & Search */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div className="flex flex-wrap items-center gap-4">
              <div className="relative">
                <select className="appearance-none bg-white border border-staywize-gray-200 rounded-xl px-4 py-3 pr-10 text-sm font-bold text-staywize-gray-800 focus:outline-none focus:ring-2 focus:ring-staywize-blue shadow-sm cursor-pointer">
                  <option>All Categories</option>
                  <option>Repairs & Maintenance</option>
                  <option>Cleaning & Housekeeping</option>
                  <option>Hospitality Services</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-staywize-gray-400 pointer-events-none" />
              </div>
              
              <button className="flex items-center gap-2 px-4 py-3 bg-white border border-staywize-gray-200 rounded-xl text-sm font-bold text-staywize-gray-800 hover:bg-staywize-gray-50 transition-colors shadow-sm">
                <Filter className="w-4 h-4" />
                Filters
              </button>
            </div>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-staywize-gray-400" />
              <input 
                type="text" 
                placeholder="Search services..." 
                className="w-full pl-11 pr-4 py-3 bg-white border border-staywize-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-staywize-blue shadow-sm"
              />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PREMIUM_SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden border border-staywize-gray-200 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-staywize-blue uppercase tracking-wider shadow-sm">
                      {service.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-staywize-gray-900 leading-tight group-hover:text-staywize-blue transition-colors">
                      {service.title}
                    </h3>
                    <div className="text-right">
                      <p className="text-xs text-staywize-gray-500 font-medium">Starting at</p>
                      <p className="text-lg font-bold text-staywize-blue">PHP {service.price.toLocaleString()}</p>
                    </div>
                  </div>

                  <p className="text-sm text-staywize-gray-600 mb-6 line-clamp-2">
                    {service.description}
                  </p>

                  <div className="space-y-4">
                    <div className="relative">
                      <label className="text-[10px] font-bold text-staywize-gray-400 uppercase tracking-widest mb-1 block">Your Unit</label>
                      <select 
                        value={selectedUnit}
                        onChange={(e) => setSelectedUnit(e.target.value)}
                        className="w-full appearance-none bg-staywize-gray-50 border border-staywize-gray-200 rounded-xl px-4 py-2 text-xs font-semibold text-staywize-gray-800 focus:outline-none focus:ring-2 focus:ring-staywize-blue cursor-pointer"
                      >
                        <option>Azure Sky Residences - Unit 1204</option>
                        <option>Emerald Garden Villa - Block 5</option>
                      </select>
                      <ChevronDown className="absolute right-3 bottom-2.5 w-3 h-3 text-staywize-gray-400 pointer-events-none" />
                    </div>

                    <button className="w-full bg-staywize-purple hover:bg-staywize-purple/90 text-white py-3 rounded-xl font-bold text-sm transition-all active:scale-95 shadow-md shadow-staywize-purple/10">
                      Book this Service
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-16 flex justify-center">
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5, 6].map((page) => (
                <button 
                  key={page}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all ${
                    page === 1 
                      ? 'bg-staywize-blue text-white shadow-lg shadow-staywize-blue/20' 
                      : 'bg-white text-staywize-gray-600 hover:bg-staywize-gray-100 border border-staywize-gray-200'
                  }`}
                >
                  {page}
                </button>
              ))}
              <span className="text-staywize-gray-400 px-2">...</span>
              <button className="w-10 h-10 rounded-xl bg-white text-staywize-gray-600 hover:bg-staywize-gray-100 border border-staywize-gray-200 flex items-center justify-center text-sm font-bold">
                16
              </button>
              <button className="w-10 h-10 rounded-xl bg-white text-staywize-gray-600 hover:bg-staywize-gray-100 border border-staywize-gray-200 flex items-center justify-center">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
