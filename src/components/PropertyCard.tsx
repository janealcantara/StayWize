import React from 'react';
import { Bed, Bath, Maximize, Star, Heart, ShieldCheck } from 'lucide-react';
import { Property } from '../types';
import { motion } from 'motion/react';

interface PropertyCardProps {
  property: Property;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const formattedPrice = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="group bg-white rounded-3xl overflow-hidden border border-staywize-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {property.isVIP && (
            <div className="bg-staywize-purple text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
              <Star className="w-3 h-3 fill-current" /> VIP EXCLUSIVE
            </div>
          )}
          <div className="bg-white/90 backdrop-blur-sm text-staywize-gray-900 text-[10px] font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wider">
            {property.type}
          </div>
        </div>

        <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md hover:bg-white/40 rounded-full transition-colors">
          <Heart className="w-5 h-5 text-white" />
        </button>

        {property.type === 'sale' && (
          <div className="absolute bottom-4 left-4 bg-staywize-blue/90 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" /> INSURED
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-staywize-gray-900 group-hover:text-staywize-blue transition-colors line-clamp-1">
              {property.title}
            </h3>
            <p className="text-sm text-staywize-gray-800 flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-400 fill-current" />
              <span className="font-semibold">{property.rating}</span>
              <span className="text-staywize-gray-200 mx-1">•</span>
              <span className="opacity-60">{property.location}</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 py-4 border-y border-staywize-gray-100 my-4">
          <div className="flex flex-col items-center gap-1">
            <Bed className="w-4 h-4 text-staywize-blue" />
            <span className="text-xs font-semibold">{property.beds} Beds</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Bath className="w-4 h-4 text-staywize-teal" />
            <span className="text-xs font-semibold">{property.baths} Baths</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Maximize className="w-4 h-4 text-staywize-purple" />
            <span className="text-xs font-semibold">{property.area} m²</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-[10px] font-bold text-staywize-gray-800 uppercase tracking-widest mb-1">Price</p>
            <p className="text-xl font-bold text-staywize-blue">
              {formattedPrice}
              {property.type === 'rent' && <span className="text-xs font-medium text-staywize-gray-800 ml-1">/mo</span>}
            </p>
          </div>
          <button className="p-3 bg-staywize-gray-100 hover:bg-staywize-blue hover:text-white rounded-xl transition-all active:scale-95">
            <Maximize className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
