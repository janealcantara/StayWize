import React from 'react';
import { 
  TrendingUp, 
  Users, 
  Eye, 
  Globe, 
  Facebook, 
  Share2, 
  CheckCircle2, 
  ArrowRight,
  BarChart3,
  Zap,
  Target,
  Megaphone,
  Layout,
  ShoppingBag
} from 'lucide-react';
import { motion } from 'motion/react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const impressionData = [
  { name: 'Sun', impressions: 400 },
  { name: 'Mon', impressions: 800 },
  { name: 'Tue', impressions: 600 },
  { name: 'Wed', impressions: 1200 },
  { name: 'Thu', impressions: 900 },
  { name: 'Fri', impressions: 1500 },
  { name: 'Sat', impressions: 1300 },
  { name: 'Sun', impressions: 1800 },
];

const listings = [
  { id: 1, name: 'Shore Residences Tower 1', platform: 'TikTok', clicks: 450, status: 'Active' },
  { id: 2, name: 'Sea Residences Unit 502', platform: 'Facebook', clicks: 320, status: 'Active' },
  { id: 3, name: 'Shell Residences Penthouse', platform: 'TikTok', clicks: 890, status: 'Active' },
  { id: 4, name: 'S Residences Studio', platform: 'Facebook', clicks: 150, status: 'Active' },
];

const campaigns = [
  { id: 1, title: 'Google Ads Search', icon: <Globe className="w-6 h-6" />, description: 'Appear at the top of Google search results.' },
  { id: 2, title: 'Social Media Marketing', icon: <Share2 className="w-6 h-6" />, description: 'Boost your reach on Facebook and TikTok.' },
  { id: 3, title: 'Lazada/Shopee Posting', icon: <ShoppingBag className="w-6 h-6" />, description: 'List your units on top e-commerce platforms.' },
  { id: 4, title: 'Custom Marketing Strategy', icon: <Target className="w-6 h-6" />, description: 'A tailored plan for your specific property.' },
];

const packages = [
  { id: 1, title: 'Starter Package', price: '999', features: ['Social Media Posting', 'Basic Copywriting', '5,000 Reach'] },
  { id: 2, title: 'Pro Package', price: '2,500', features: ['Google Ads Integration', 'Professional Copywriting', '20,000 Reach', 'Weekly Reports'], popular: true },
  { id: 3, title: 'Elite Package', price: '4,500', features: ['Full Platform Coverage', 'Video Production', '50,000 Reach', 'Dedicated Manager'] },
];

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
  </svg>
);

interface MarketingExposureProps {
  onNavigate?: (page: 'home' | 'services' | 'dashboard' | 'marketing' | 'condos' | 'enroll') => void;
}

export const MarketingExposure: React.FC<MarketingExposureProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-staywize-gray-50 pb-20">
      {/* Hero Section */}
      <div className="relative h-[300px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070" 
          alt="Marketing" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-staywize-blue/60 backdrop-blur-sm flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl font-bold text-white mb-4">Marketing Exposure</h1>
              <p className="text-white/80 text-xl mb-8">
                Track your listing performance across social media platforms and maximize your visibility to potential tenants.
              </p>
              <button 
                onClick={() => onNavigate?.('enroll')}
                className="bg-staywize-teal hover:bg-staywize-teal/90 text-white px-8 py-4 rounded-2xl font-bold transition-all active:scale-95 shadow-xl shadow-staywize-teal/20 flex items-center gap-2"
              >
                Enroll Your Property
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-[32px] shadow-xl border border-staywize-gray-200 flex items-center gap-6"
          >
            <div className="w-16 h-16 bg-staywize-blue/10 rounded-2xl flex items-center justify-center text-staywize-blue">
              <Layout className="w-8 h-8" />
            </div>
            <div>
              <p className="text-staywize-gray-800 text-sm font-medium uppercase tracking-wider mb-1">Listings Published</p>
              <h3 className="text-3xl font-bold text-staywize-gray-900">Php 120,500</h3>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-[32px] shadow-xl border border-staywize-gray-200 flex items-center gap-6"
          >
            <div className="w-16 h-16 bg-pink-500/10 rounded-2xl flex items-center justify-center text-pink-500">
              <TikTokIcon />
            </div>
            <div>
              <p className="text-staywize-gray-800 text-sm font-medium uppercase tracking-wider mb-1">TikTok Impressions</p>
              <h3 className="text-3xl font-bold text-staywize-gray-900">2,150</h3>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-8 rounded-[32px] shadow-xl border border-staywize-gray-200 flex items-center gap-6"
          >
            <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-600">
              <Facebook className="w-8 h-8" />
            </div>
            <div>
              <p className="text-staywize-gray-800 text-sm font-medium uppercase tracking-wider mb-1">Facebook Reach</p>
              <h3 className="text-3xl font-bold text-staywize-gray-900">1,890</h3>
            </div>
          </motion.div>
        </div>

        {/* Social Media Integration Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Listing Table */}
          <div className="lg:col-span-2 bg-white rounded-[40px] shadow-xl border border-staywize-gray-200 overflow-hidden">
            <div className="p-8 border-b border-staywize-gray-100 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-staywize-gray-900">Social Media Integration</h2>
              <button className="text-staywize-blue font-bold text-sm hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-staywize-gray-50">
                    <th className="px-8 py-4 text-left text-xs font-bold text-staywize-gray-800 uppercase tracking-wider">Listing</th>
                    <th className="px-8 py-4 text-left text-xs font-bold text-staywize-gray-800 uppercase tracking-wider">Platform</th>
                    <th className="px-8 py-4 text-left text-xs font-bold text-staywize-gray-800 uppercase tracking-wider">Clicks</th>
                    <th className="px-8 py-4 text-left text-xs font-bold text-staywize-gray-800 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-staywize-gray-100">
                  {listings.map((listing) => (
                    <tr key={listing.id} className="hover:bg-staywize-gray-50 transition-colors">
                      <td className="px-8 py-6">
                        <span className="text-sm font-bold text-staywize-gray-900">{listing.name}</span>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-2">
                          {listing.platform === 'TikTok' ? (
                            <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                              <TikTokIcon />
                            </div>
                          ) : (
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                              <Facebook className="w-4 h-4" />
                            </div>
                          )}
                          <span className="text-sm font-medium text-staywize-gray-800">{listing.platform}</span>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="text-sm font-bold text-staywize-gray-900">{listing.clicks.toLocaleString()}</span>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 bg-staywize-teal/10 text-staywize-teal text-xs font-bold rounded-full">
                          {listing.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Platform Management & Chart */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[40px] shadow-xl border border-staywize-gray-200">
              <h3 className="text-xl font-bold text-staywize-gray-900 mb-6">Platform Management</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-staywize-gray-50 rounded-2xl border border-staywize-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center">
                      <TikTokIcon />
                    </div>
                    <span className="font-bold text-staywize-gray-900">TikTok</span>
                  </div>
                  <button className="px-4 py-2 bg-staywize-blue text-white text-xs font-bold rounded-lg hover:bg-staywize-blue/90 transition-all">Manage</button>
                </div>
                <div className="flex items-center justify-between p-4 bg-staywize-gray-50 rounded-2xl border border-staywize-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center">
                      <Facebook className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-staywize-gray-900">Facebook</span>
                  </div>
                  <button className="px-4 py-2 bg-staywize-blue text-white text-xs font-bold rounded-lg hover:bg-staywize-blue/90 transition-all">Manage</button>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[40px] shadow-xl border border-staywize-gray-200 h-[300px]">
              <h3 className="text-xl font-bold text-staywize-gray-900 mb-4">Weekly Impressions</h3>
              <div className="h-[180px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={impressionData}>
                    <defs>
                      <linearGradient id="colorImp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0052CC" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#0052CC" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 10, fill: '#64748B' }} 
                    />
                    <Tooltip 
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="impressions" 
                      stroke="#0052CC" 
                      strokeWidth={3}
                      fillOpacity={1} 
                      fill="url(#colorImp)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Maximize Your Visibility Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-staywize-gray-900 mb-4">Maximize Your Visibility</h2>
            <p className="text-staywize-gray-800 text-lg">Market your unit with our professional advertising services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {campaigns.map((campaign) => (
              <motion.div 
                key={campaign.id}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-[32px] shadow-xl border border-staywize-gray-200 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-staywize-teal/10 rounded-2xl flex items-center justify-center text-staywize-teal mb-6">
                  {campaign.icon}
                </div>
                <h4 className="text-lg font-bold text-staywize-gray-900 mb-2">{campaign.title}</h4>
                <p className="text-staywize-gray-800 text-sm mb-6 leading-relaxed">{campaign.description}</p>
                <button className="mt-auto w-full py-3 bg-staywize-gray-100 hover:bg-staywize-teal hover:text-white text-staywize-gray-900 font-bold rounded-xl transition-all">
                  Activate
                </button>
              </motion.div>
            ))}
          </div>

          {/* Pricing Plans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <motion.div 
                key={pkg.id}
                whileHover={{ scale: 1.02 }}
                className={`relative bg-white p-10 rounded-[40px] shadow-2xl border-2 ${pkg.popular ? 'border-staywize-teal' : 'border-staywize-gray-200'}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-staywize-teal text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-10">
                  <h4 className="text-xl font-bold text-staywize-gray-900 mb-2">{pkg.title}</h4>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-staywize-gray-800 font-bold">Php</span>
                    <span className="text-5xl font-black text-staywize-blue">{pkg.price}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-staywize-gray-800">
                      <CheckCircle2 className="w-5 h-5 text-staywize-teal flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-2xl font-bold transition-all active:scale-95 shadow-lg ${
                  pkg.popular 
                    ? 'bg-staywize-teal text-white hover:bg-staywize-teal/90' 
                    : 'bg-staywize-blue text-white hover:bg-staywize-blue/90'
                }`}>
                  Choose Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-staywize-blue rounded-[48px] p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-staywize-teal/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Marketing Strategy?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Our expert team can help you design a comprehensive marketing plan tailored to your property's unique strengths and target audience.
            </p>
            <button className="bg-white text-staywize-blue px-10 py-4 rounded-2xl font-bold hover:bg-staywize-gray-100 transition-all flex items-center gap-2 mx-auto">
              Contact Marketing Team <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
