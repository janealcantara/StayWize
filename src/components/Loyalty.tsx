import React from 'react';
import { Trophy, Star, TrendingUp, Gift } from 'lucide-react';
import { motion } from 'motion/react';
import { User } from '../types';

interface LoyaltyProps {
  user: User | null;
  onLogin?: () => void;
}

export const Loyalty: React.FC<LoyaltyProps> = ({ user, onLogin }) => {
  const progress = user ? (user.points / user.nextTierPoints) * 100 : 0;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-staywize-purple/10 text-staywize-purple text-xs font-bold mb-6">
              <Trophy className="w-3 h-3" /> STAYWIZE REWARDS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-staywize-gray-900 mb-6 leading-tight">
              Elevate Your Lifestyle with <span className="text-staywize-purple">Staywize VIP</span>
            </h2>
            <p className="text-staywize-gray-800 text-lg mb-10 leading-relaxed">
              Every transaction on Staywize earns you points. From property purchases to weekend stays, unlock exclusive benefits, private listings, and concierge services.
            </p>

            <div className="space-y-6">
              {[
                { icon: Star, title: 'Exclusive Access', desc: 'Get early access to high-yield property launches and private resale units.' },
                { icon: TrendingUp, title: 'Cashback & Rewards', desc: 'Earn up to 5% back in points on all lifestyle and travel bookings.' },
                { icon: Gift, title: 'Member Perks', desc: 'Complimentary insurance upgrades and VIP airport lounge access.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-staywize-gray-100 flex items-center justify-center text-staywize-purple">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-staywize-gray-900">{item.title}</h4>
                    <p className="text-sm text-staywize-gray-800">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* VIP Card */}
            <motion.div 
              initial={{ rotate: -5, y: 20 }}
              whileInView={{ rotate: 0, y: 0 }}
              className="relative z-10 p-8 rounded-[32px] bg-linear-to-br from-staywize-gray-900 to-staywize-gray-800 text-white shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-staywize-purple/20 blur-[80px] -z-0"></div>
              
              <div className="flex justify-between items-start mb-12">
                <div>
                  <p className="text-[10px] font-bold text-staywize-purple uppercase tracking-[0.2em] mb-1">Membership Tier</p>
                  <h3 className="text-3xl font-bold tracking-tight">{user ? user.tier : 'Guest'}</h3>
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md">
                  <Star className="w-6 h-6 text-staywize-purple fill-current" />
                </div>
              </div>

              <div className="mb-8">
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-4">Points Progress</p>
                <div className="flex justify-between items-end mb-2">
                  <span className="text-2xl font-bold">{user ? user.points.toLocaleString() : '0'} <span className="text-xs font-medium text-white/40">pts</span></span>
                  <span className="text-xs font-bold text-staywize-purple">
                    {user ? `${user.tier === 'Silver' ? 'Gold' : 'Diamond'} Tier at ${user.nextTierPoints.toLocaleString()}` : 'Join to earn points'}
                  </span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${progress}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-linear-to-r from-staywize-purple to-staywize-teal"
                  ></motion.div>
                </div>
              </div>

              <div className="flex justify-between items-center pt-8 border-t border-white/10">
                <div>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-1">Card Holder</p>
                  <p className="font-semibold">{user ? user.name : 'Not Signed In'}</p>
                </div>
                {user ? (
                  <button className="bg-white text-staywize-gray-900 px-4 py-2 rounded-lg text-xs font-bold hover:bg-staywize-gray-100 transition-colors">
                    View Benefits
                  </button>
                ) : (
                  <button 
                    onClick={onLogin}
                    className="bg-staywize-purple text-white px-6 py-2 rounded-lg text-xs font-bold hover:bg-staywize-purple/90 transition-colors shadow-lg shadow-staywize-purple/20"
                  >
                    Join Now
                  </button>
                )}
              </div>
            </motion.div>

            {/* Background decorative cards */}
            <div className="absolute top-10 -right-4 w-full h-full bg-staywize-blue/10 rounded-[32px] -z-0 rotate-3"></div>
            <div className="absolute top-20 -right-8 w-full h-full bg-staywize-teal/10 rounded-[32px] -z-10 rotate-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
