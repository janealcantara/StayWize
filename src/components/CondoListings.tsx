import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Info, Train, ShoppingBag, Landmark, Trees, ArrowRight } from 'lucide-react';
import { PASIG_CONDOS } from '../constants';

export const CondoListings: React.FC = () => {
  const [hoveredCondoId, setHoveredCondoId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://picsum.photos/seed/pasig-skyline/1920/600" 
          alt="Pasig City Skyline" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Condos in Pasig City
          </motion.h1>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-staywize-teal hover:bg-staywize-teal/90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-staywize-teal/20"
          >
            Inquire About a Unit
          </motion.button>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Listings Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PASIG_CONDOS.map((condo) => (
                <motion.div
                  key={condo.id}
                  onMouseEnter={() => setHoveredCondoId(condo.id)}
                  onMouseLeave={() => setHoveredCondoId(null)}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl overflow-hidden border border-staywize-gray-200 shadow-sm hover:shadow-xl transition-all group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={condo.image} 
                      alt={condo.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-staywize-blue shadow-sm">
                      {condo.price}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-staywize-gray-900 mb-2">{condo.title}</h3>
                    <div className="flex items-start gap-2 text-staywize-gray-600 text-sm mb-4">
                      <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-staywize-teal" />
                      <span>{condo.location}</span>
                    </div>
                    <p className="text-staywize-gray-600 text-sm mb-6 line-clamp-2">
                      {condo.description}
                    </p>
                    <div className="flex gap-3">
                      <button className="flex-1 py-2.5 rounded-xl border border-staywize-blue text-staywize-blue font-bold text-sm hover:bg-staywize-blue hover:text-white transition-all">
                        View
                      </button>
                      <button className="flex-1 py-2.5 rounded-xl bg-staywize-blue text-white font-bold text-sm hover:bg-staywize-blue/90 transition-all">
                        Inquire
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Map & Info Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Interactive Map */}
            <div className="bg-staywize-gray-50 rounded-3xl p-6 border border-staywize-gray-200 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-staywize-gray-900">Interactive Map</h2>
                <div className="flex items-center gap-2 text-staywize-gray-600 text-sm">
                  <Info className="w-4 h-4" />
                  <span>Hover over a condo to see location</span>
                </div>
              </div>

              <div className="relative aspect-square bg-blue-50 rounded-2xl overflow-hidden border border-staywize-gray-200 shadow-inner">
                {/* Stylized Map Background */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
                  <path d="M10,20 Q30,10 50,20 T90,20" fill="none" stroke="#000" strokeWidth="0.5" />
                  <path d="M20,10 Q10,40 20,70 T20,90" fill="none" stroke="#000" strokeWidth="0.5" />
                  <path d="M0,50 Q50,40 100,50" fill="none" stroke="#000" strokeWidth="1" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#000" strokeWidth="0.2" strokeDasharray="2 2" />
                </svg>

                {/* Location Pins */}
                {PASIG_CONDOS.map((condo) => (
                  <motion.div
                    key={condo.id}
                    initial={false}
                    animate={{
                      scale: hoveredCondoId === condo.id ? 1.5 : 1,
                      zIndex: hoveredCondoId === condo.id ? 20 : 10
                    }}
                    className="absolute cursor-pointer"
                    style={{ left: `${condo.coords.x}%`, top: `${condo.coords.y}%` }}
                  >
                    <div className="relative group">
                      <MapPin 
                        className={`w-6 h-6 -ml-3 -mt-6 transition-colors duration-300 ${
                          hoveredCondoId === condo.id ? 'text-staywize-teal' : 'text-staywize-blue'
                        }`} 
                        fill={hoveredCondoId === condo.id ? 'currentColor' : 'none'}
                      />
                      <AnimatePresence>
                        {hoveredCondoId === condo.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 bg-white rounded-lg shadow-xl p-2 text-center border border-staywize-gray-100"
                          >
                            <p className="text-[10px] font-bold text-staywize-gray-900 leading-tight">{condo.title}</p>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white border-r border-b border-staywize-gray-100"></div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}

                {/* Legend/Area Label */}
                <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-staywize-gray-200 shadow-sm">
                  <span className="text-xs font-bold text-staywize-gray-900 uppercase tracking-wider">Pasig City Area</span>
                </div>
              </div>

              {/* Why Pasig Section */}
              <div className="mt-8 space-y-6">
                <h3 className="text-xl font-bold text-staywize-gray-900">Why You Should Rent a Condo in Pasig City?</h3>
                
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { icon: Train, title: 'Transport', desc: 'Easy access to MRT-3, LRT-2, and major thoroughfares like EDSA and C5.' },
                    { icon: ShoppingBag, title: 'Commercial Hubs', desc: 'Home to Ortigas Center, Estancia, and Ayala Malls The 30th.' },
                    { icon: Landmark, title: 'Historical Landmarks', desc: 'Rich cultural heritage with sites like the Immaculate Conception Cathedral.' },
                    { icon: Trees, title: 'Parks', desc: 'Green spaces like Pasig Rainforest Park and Capitol Commons.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white border border-staywize-gray-100 hover:border-staywize-teal/30 transition-all">
                      <div className="w-10 h-10 rounded-xl bg-staywize-teal/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-staywize-teal" />
                      </div>
                      <div>
                        <h4 className="font-bold text-staywize-gray-900 text-sm">{item.title}</h4>
                        <p className="text-staywize-gray-600 text-xs mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-staywize-blue text-white font-bold hover:bg-staywize-blue/90 transition-all group">
                  <span>Learn More About Pasig</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
