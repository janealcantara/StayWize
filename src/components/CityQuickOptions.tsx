import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const CITIES = [
  {
    name: 'Quezon City',
    image: 'https://images.unsplash.com/photo-1518182170546-07661fd94144?auto=format&fit=crop&q=80&w=800',
    count: '2,450+ Properties'
  },
  {
    name: 'Makati',
    image: 'https://images.unsplash.com/photo-1555505019-8c3f1c4aba5f?auto=format&fit=crop&q=80&w=800',
    count: '1,820+ Properties'
  },
  {
    name: 'Taguig',
    image: 'https://images.unsplash.com/photo-1540331547168-8b63109225b7?auto=format&fit=crop&q=80&w=800',
    count: '1,240+ Properties'
  },
  {
    name: 'Pasig',
    image: 'https://images.unsplash.com/photo-1518182170546-07661fd94144?auto=format&fit=crop&q=80&w=800', // Fallback to similar urban feel
    count: '980+ Properties'
  },
  {
    name: 'BGC',
    image: 'https://images.unsplash.com/photo-1518182170546-07661fd94144?auto=format&fit=crop&q=80&w=800', // High-end urban
    count: '1,560+ Properties'
  },
  {
    name: 'Marikina',
    image: 'https://images.unsplash.com/photo-1518182170546-07661fd94144?auto=format&fit=crop&q=80&w=800', // Residential urban
    count: '450+ Properties'
  }
];

interface CityQuickOptionsProps {
  onSelect?: (cityName: string) => void;
}

export const CityQuickOptions: React.FC<CityQuickOptionsProps> = ({ onSelect }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-staywize-gray-900 mb-2">Explore by City</h2>
            <p className="text-staywize-gray-800">Find the perfect stay in your favorite neighborhood.</p>
          </div>
          <button className="text-staywize-blue font-bold hover:underline hidden sm:block">
            View All Cities
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CITIES.map((city, index) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => onSelect?.(city.name)}
              className="relative group cursor-pointer h-64 rounded-3xl overflow-hidden shadow-lg shadow-staywize-blue/5"
            >
              <img 
                src={city.image} 
                alt={city.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-staywize-blue/80 via-staywize-blue/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex items-center gap-2 text-staywize-teal mb-1">
                  <MapPin className="w-3 h-3" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Philippines</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{city.name}</h3>
                <p className="text-white/70 text-[10px] font-medium">{city.count}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
