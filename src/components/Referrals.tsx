import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const Referrals: React.FC = () => {
  return (
    <div className="min-h-screen bg-staywize-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/referral-hero/1920/1080?blur=2" 
            alt="Referrals Background" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-staywize-blue/40 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            Earn from Referrals
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 mb-10 font-medium"
          >
            Join our community-powered network and get paid for successful referrals
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-staywize-teal text-staywize-blue font-black rounded-xl shadow-2xl hover:bg-staywize-teal/90 transition-all text-lg"
          >
            Become a Partner
          </motion.button>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Who Can Refer */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-[40px] border border-staywize-gray-200 shadow-sm"
          >
            <h2 className="text-2xl font-black text-staywize-blue mb-8">Who Can Refer</h2>
            <ul className="space-y-6">
              {[
                'Unit Owners',
                'Real Estate Agents',
                'Travel Influencers',
                'Local Businesses',
                'Organizations',
                'Overseas Filipinoes'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <CheckCircle2 className="w-6 h-6 text-staywize-teal group-hover:scale-110 transition-transform" />
                  <span className="text-staywize-gray-800 font-bold">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* What Can Be Referred */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-10 rounded-[40px] border border-staywize-gray-200 shadow-sm"
          >
            <h2 className="text-2xl font-black text-staywize-blue mb-8">What Can Be Referred</h2>
            <ul className="space-y-6">
              {[
                'Renters or Buyers',
                'Sales Listings',
                'Property Developers',
                'AirBnb Hosts',
                'Serviced Booked'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <CheckCircle2 className="w-6 h-6 text-staywize-teal group-hover:scale-110 transition-transform" />
                  <span className="text-staywize-gray-800 font-bold">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Handshake Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-full min-h-[400px] rounded-[40px] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2923216?auto=format&fit=crop&q=80&w=1000" 
              alt="Partnership Handshake" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-staywize-blue/40 to-transparent"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
