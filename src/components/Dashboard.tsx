import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Home, 
  Building2,
  MapPin,
  DollarSign, 
  Calendar, 
  Shield, 
  BarChart3, 
  PieChart, 
  ArrowUpRight, 
  ArrowDownRight,
  MoreVertical,
  ChevronRight,
  Search,
  Filter,
  Download,
  Plus,
  Star,
  CheckCircle2,
  XCircle,
  Clock,
  Sparkles,
  LogOut
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  AreaChart, 
  Area,
  Cell
} from 'recharts';
import { motion } from 'motion/react';
import { PROPERTIES } from '../constants';
import { PropertyEnrollment, User } from '../types';

const bookingData = [
  { month: 'Jan', bookings: 45 },
  { month: 'Feb', bookings: 52 },
  { month: 'Mar', bookings: 48 },
  { month: 'Apr', bookings: 61 },
  { month: 'May', bookings: 55 },
  { month: 'Jun', bookings: 67 },
];

const demandForecastData = [
  { day: 'Mon', current: 65, forecast: 70 },
  { day: 'Tue', current: 60, forecast: 68 },
  { day: 'Wed', current: 72, forecast: 75 },
  { day: 'Thu', current: 80, forecast: 85 },
  { day: 'Fri', current: 95, forecast: 98 },
  { day: 'Sat', current: 98, forecast: 100 },
  { day: 'Sun', current: 90, forecast: 92 },
];

const marketTrendsData = [
  { month: 'Jan', market: 1200, you: 1100 },
  { month: 'Feb', market: 1250, you: 1150 },
  { month: 'Mar', market: 1300, you: 1250 },
  { month: 'Apr', market: 1280, you: 1300 },
  { month: 'May', market: 1350, you: 1400 },
  { month: 'Jun', market: 1400, you: 1450 },
];

const dailyRatesData = [
  { day: '1', rate: 2500 },
  { day: '2', rate: 2600 },
  { day: '3', rate: 2400 },
  { day: '4', rate: 2800 },
  { day: '5', rate: 3200 },
  { day: '6', rate: 3500 },
  { day: '7', rate: 3000 },
];

const upcomingBookings = [
  { id: 1, guest: 'Maria Santos', property: 'Azure Urban Resort', dates: 'Mar 15 - Mar 18', status: 'Confirmed', amount: 'Php 12,500' },
  { id: 2, guest: 'John Doe', property: 'Shore Residences', dates: 'Mar 20 - Mar 22', status: 'Pending', amount: 'Php 8,200' },
  { id: 3, guest: 'Elena Reyes', property: 'Shell Residences', dates: 'Mar 25 - Mar 30', status: 'Confirmed', amount: 'Php 18,900' },
];

const transactions = [
  { id: 1, type: 'Income', description: 'Booking - Maria Santos', date: 'Mar 12, 2024', amount: '+Php 12,500', status: 'Completed' },
  { id: 2, type: 'Expense', description: 'Cleaning Service', date: 'Mar 11, 2024', amount: '-Php 1,200', status: 'Completed' },
  { id: 3, type: 'Income', description: 'Booking - Elena Reyes', date: 'Mar 10, 2024', amount: '+Php 18,900', status: 'Completed' },
  { id: 4, type: 'Expense', description: 'Maintenance - AC Repair', date: 'Mar 08, 2024', amount: '-Php 3,500', status: 'Completed' },
];

const guestScreening = [
  { id: 1, name: 'Alex Johnson', rating: 4.8, reviews: 12, status: 'Approved', risk: 'Low' },
  { id: 2, name: 'Sarah Wilson', rating: 3.2, reviews: 3, status: 'Declined', risk: 'High' },
  { id: 3, name: 'Michael Chen', rating: 4.5, reviews: 8, status: 'Pending', risk: 'Medium' },
];

interface DashboardProps {
  onNavigate?: (page: 'home' | 'services' | 'dashboard' | 'marketing' | 'condos' | 'enroll') => void;
  myEnrollments?: PropertyEnrollment[];
  user: User | null;
  onLogout?: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onNavigate, myEnrollments = [], user, onLogout }) => {
  if (!user) return null;
  return (
    <div className="min-h-screen bg-staywize-gray-50 pb-20">
      {/* Dashboard Header */}
      <div className="bg-white border-b border-staywize-gray-200 pt-8 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <p className="text-staywize-teal font-bold text-sm uppercase tracking-widest mb-1">HELLO, {user.name.toUpperCase()}</p>
              <h1 className="text-4xl font-black text-staywize-blue tracking-tight">Owner Dashboard</h1>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-staywize-blue text-white rounded-xl font-bold text-sm shadow-lg shadow-staywize-blue/20 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Bookings
              </button>
              <button className="px-4 py-2 bg-white text-staywize-gray-800 border border-staywize-gray-200 rounded-xl font-bold text-sm hover:bg-staywize-gray-50 transition-all flex items-center gap-2">
                <Home className="w-4 h-4" />
                Properties
              </button>
              <button className="px-4 py-2 bg-white text-staywize-gray-800 border border-staywize-gray-200 rounded-xl font-bold text-sm hover:bg-staywize-gray-50 transition-all flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Finances
              </button>
              <button className="px-4 py-2 bg-white text-staywize-gray-800 border border-staywize-gray-200 rounded-xl font-bold text-sm hover:bg-staywize-gray-50 transition-all flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Reports
              </button>
              <button className="px-4 py-2 bg-white text-staywize-gray-800 border border-staywize-gray-200 rounded-xl font-bold text-sm hover:bg-staywize-gray-50 transition-all flex items-center gap-2">
                <Users className="w-4 h-4" />
                Account
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-[32px] border border-staywize-gray-200 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-staywize-teal/10 rounded-2xl flex items-center justify-center text-staywize-teal">
                <DollarSign className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1 text-staywize-teal font-bold text-sm">
                <ArrowUpRight className="w-4 h-4" />
                12.5%
              </div>
            </div>
            <p className="text-staywize-gray-800 font-medium mb-1">Total Income</p>
            <h3 className="text-3xl font-black text-staywize-blue">Php 120,500</h3>
            <p className="text-staywize-gray-500 text-xs mt-2">Vs. Php 107,110 last month</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-[32px] border border-staywize-gray-200 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-staywize-purple/10 rounded-2xl flex items-center justify-center text-staywize-purple">
                <TrendingDown className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1 text-staywize-purple font-bold text-sm">
                <ArrowDownRight className="w-4 h-4" />
                4.2%
              </div>
            </div>
            <p className="text-staywize-gray-800 font-medium mb-1">Total Expenses</p>
            <h3 className="text-3xl font-black text-staywize-blue">Php 8,200</h3>
            <p className="text-staywize-gray-500 text-xs mt-2">Vs. Php 8,560 last month</p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-[32px] border border-staywize-gray-200 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-staywize-blue/10 rounded-2xl flex items-center justify-center text-staywize-blue">
                <Users className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1 text-staywize-teal font-bold text-sm">
                <ArrowUpRight className="w-4 h-4" />
                8%
              </div>
            </div>
            <p className="text-staywize-gray-800 font-medium mb-1">Occupancy Rate</p>
            <h3 className="text-3xl font-black text-staywize-blue">85%</h3>
            <div className="h-8 mt-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={bookingData}>
                  <Area type="monotone" dataKey="bookings" stroke="#14B8A6" fill="#14B8A6" fillOpacity={0.1} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Bookings Chart */}
          <div className="lg:col-span-2 bg-white p-8 rounded-[40px] border border-staywize-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-xl font-black text-staywize-blue">Bookings Overview</h3>
                <p className="text-staywize-gray-800 text-sm">Monthly booking performance for 2024</p>
              </div>
              <select className="bg-staywize-gray-50 border-none rounded-xl text-sm font-bold text-staywize-gray-800 px-4 py-2 focus:ring-2 focus:ring-staywize-teal">
                <option>Last 6 Months</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={bookingData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#6B7280', fontSize: 12, fontWeight: 600 }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#6B7280', fontSize: 12, fontWeight: 600 }}
                  />
                  <Tooltip 
                    cursor={{ fill: '#F3F4F6' }}
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Bar dataKey="bookings" fill="#0F172A" radius={[6, 6, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Upcoming Bookings */}
          <div className="bg-white p-8 rounded-[40px] border border-staywize-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-black text-staywize-blue">Upcoming</h3>
              <button className="text-staywize-teal text-sm font-bold hover:underline">View All</button>
            </div>
            <div className="space-y-6">
              {upcomingBookings.map((booking) => (
                <div key={booking.id} className="flex items-center gap-4 p-4 rounded-2xl hover:bg-staywize-gray-50 transition-all border border-transparent hover:border-staywize-gray-200 group">
                  <div className="w-12 h-12 rounded-xl bg-staywize-gray-100 flex items-center justify-center text-staywize-blue font-bold">
                    {booking.guest.charAt(0)}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-staywize-blue group-hover:text-staywize-teal transition-colors">{booking.guest}</h4>
                    <p className="text-xs text-staywize-gray-500">{booking.property}</p>
                    <p className="text-[10px] font-bold text-staywize-gray-800 mt-1">{booking.dates}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-black text-staywize-blue">{booking.amount}</p>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${
                      booking.status === 'Confirmed' ? 'bg-staywize-teal/10 text-staywize-teal' : 'bg-staywize-purple/10 text-staywize-purple'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-black text-staywize-blue">My Properties</h3>
              <p className="text-staywize-gray-800">Manage and monitor your real estate portfolio</p>
            </div>
            <button 
              onClick={() => onNavigate?.('enroll')}
              className="bg-staywize-teal text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-staywize-teal/20 active:scale-95 transition-all"
            >
              <Plus className="w-5 h-5" />
              Add Property
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROPERTIES.slice(0, 4).map((property) => (
              <motion.div 
                key={property.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[32px] overflow-hidden border border-staywize-gray-200 shadow-sm group cursor-pointer"
              >
                <div className="relative h-48">
                  <img src={property.image} alt={property.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 text-staywize-purple fill-staywize-purple" />
                    <span className="text-[10px] font-bold text-staywize-blue">{property.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-staywize-blue mb-1 truncate">{property.title}</h4>
                  <p className="text-xs text-staywize-gray-500 mb-4">{property.location}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-staywize-gray-100">
                    <div>
                      <p className="text-[10px] text-staywize-gray-500 uppercase font-bold tracking-wider">Occupancy</p>
                      <p className="text-sm font-black text-staywize-teal">92%</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-staywize-gray-500 uppercase font-bold tracking-wider">Revenue</p>
                      <p className="text-sm font-black text-staywize-blue">Php 45k</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Enrollments */}
        {myEnrollments.length > 0 && (
          <div className="mb-12">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-2xl font-black text-staywize-blue">Recent Enrollments</h3>
                <p className="text-staywize-gray-800">Properties currently under review</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myEnrollments.map((enrollment) => (
                <motion.div 
                  key={enrollment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-6 rounded-[32px] border border-staywize-gray-200 shadow-sm"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-staywize-blue/10 rounded-xl flex items-center justify-center text-staywize-blue">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider ${
                      enrollment.status === 'pending' ? 'bg-staywize-purple/10 text-staywize-purple' : 'bg-staywize-teal/10 text-staywize-teal'
                    }`}>
                      {enrollment.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-staywize-blue mb-1 truncate">{enrollment.title}</h4>
                  <p className="text-xs text-staywize-gray-500 mb-4 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {enrollment.city}
                  </p>
                  <div className="flex justify-between items-center pt-4 border-t border-staywize-gray-100">
                    <div>
                      <p className="text-[10px] text-staywize-gray-500 uppercase font-bold tracking-wider">Price</p>
                      <p className="text-sm font-black text-staywize-blue">Php {enrollment.price.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-staywize-gray-500 uppercase font-bold tracking-wider">Submitted</p>
                      <p className="text-sm font-bold text-staywize-gray-800">{new Date(enrollment.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Property Map Section */}
        <div className="mb-12">
          <div className="bg-white p-8 rounded-[40px] border border-staywize-gray-200 shadow-sm overflow-hidden relative">
            <div className="flex justify-between items-center mb-8 relative z-10">
              <div>
                <h3 className="text-2xl font-black text-staywize-blue">Portfolio Map</h3>
                <p className="text-staywize-gray-800">Geospatial overview of your property locations</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 bg-staywize-gray-50 rounded-xl hover:bg-staywize-gray-100 transition-all">
                  <Filter className="w-5 h-5 text-staywize-gray-500" />
                </button>
                <button className="p-2 bg-staywize-gray-50 rounded-xl hover:bg-staywize-gray-100 transition-all">
                  <Download className="w-5 h-5 text-staywize-gray-500" />
                </button>
              </div>
            </div>

            <div className="relative aspect-[21/9] bg-staywize-gray-100 rounded-[32px] overflow-hidden border border-staywize-gray-200">
              {/* Mock Map Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#0F172A 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              </div>
              
              {/* Map Pins */}
              {[
                { id: 1, x: 30, y: 40, title: 'Azure Sky' },
                { id: 2, x: 60, y: 20, title: 'Emerald Garden' },
                { id: 3, x: 45, y: 70, title: 'Grand Horizon' },
                { id: 4, x: 80, y: 50, title: 'Seaside Loft' },
              ].map((pin) => (
                <motion.div
                  key={pin.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  className="absolute cursor-pointer group"
                  style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
                >
                  <div className="relative">
                    <div className="w-8 h-8 bg-staywize-blue rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-all pointer-events-none">
                      <div className="bg-staywize-blue text-white text-[10px] font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
                        {pin.title}
                      </div>
                      <div className="w-2 h-2 bg-staywize-blue rotate-45 mx-auto -mt-1"></div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Map Legend */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-staywize-gray-200 shadow-lg">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-staywize-blue"></div>
                    <span className="text-[10px] font-bold text-staywize-gray-800">Active Listing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-staywize-purple"></div>
                    <span className="text-[10px] font-bold text-staywize-gray-800">Under Review</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Financial & Guest Screening */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Financial Reporting */}
          <div className="bg-white p-8 rounded-[40px] border border-staywize-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-black text-staywize-blue">Financial Summary</h3>
              <button className="p-2 hover:bg-staywize-gray-100 rounded-xl transition-colors">
                <Download className="w-5 h-5 text-staywize-gray-500" />
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-staywize-gray-50 p-4 rounded-2xl">
                <p className="text-[10px] font-bold text-staywize-gray-500 uppercase tracking-wider mb-1">Income</p>
                <p className="text-lg font-black text-staywize-teal">Php 120.5k</p>
              </div>
              <div className="bg-staywize-gray-50 p-4 rounded-2xl">
                <p className="text-[10px] font-bold text-staywize-gray-500 uppercase tracking-wider mb-1">Expenses</p>
                <p className="text-lg font-black text-staywize-purple">Php 8.2k</p>
              </div>
              <div className="bg-staywize-blue p-4 rounded-2xl">
                <p className="text-[10px] font-bold text-white/60 uppercase tracking-wider mb-1">Net Income</p>
                <p className="text-lg font-black text-white">Php 112.3k</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-staywize-gray-100">
                    <th className="pb-4 text-[10px] font-bold text-staywize-gray-500 uppercase tracking-wider">Transaction</th>
                    <th className="pb-4 text-[10px] font-bold text-staywize-gray-500 uppercase tracking-wider">Date</th>
                    <th className="pb-4 text-[10px] font-bold text-staywize-gray-500 uppercase tracking-wider text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-staywize-gray-50">
                  {transactions.map((t) => (
                    <tr key={t.id} className="group">
                      <td className="py-4">
                        <p className="text-sm font-bold text-staywize-blue group-hover:text-staywize-teal transition-colors">{t.description}</p>
                        <p className="text-[10px] text-staywize-gray-500">{t.type}</p>
                      </td>
                      <td className="py-4 text-xs text-staywize-gray-800">{t.date}</td>
                      <td className={`py-4 text-sm font-black text-right ${t.amount.startsWith('+') ? 'text-staywize-teal' : 'text-staywize-purple'}`}>
                        {t.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Guest Screening */}
          <div className="bg-white p-8 rounded-[40px] border border-staywize-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-xl font-black text-staywize-blue">Guest Screening</h3>
                <p className="text-staywize-gray-800 text-sm">AI-powered background and risk checks</p>
              </div>
              <div className="w-10 h-10 bg-staywize-teal/10 rounded-xl flex items-center justify-center text-staywize-teal">
                <Shield className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-6">
              {guestScreening.map((guest) => (
                <div key={guest.id} className="flex items-center justify-between p-5 rounded-3xl bg-staywize-gray-50 border border-transparent hover:border-staywize-teal/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-staywize-gray-200 flex items-center justify-center text-staywize-blue font-bold">
                      {guest.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-staywize-blue">{guest.name}</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-0.5">
                          <Star className="w-3 h-3 text-staywize-purple fill-staywize-purple" />
                          <span className="text-[10px] font-bold text-staywize-gray-800">{guest.rating}</span>
                        </div>
                        <span className="text-[10px] text-staywize-gray-500">• {guest.reviews} reviews</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`flex items-center gap-1 justify-end mb-1 ${
                      guest.status === 'Approved' ? 'text-staywize-teal' : guest.status === 'Declined' ? 'text-staywize-purple' : 'text-staywize-gray-500'
                    }`}>
                      {guest.status === 'Approved' ? <CheckCircle2 className="w-4 h-4" /> : guest.status === 'Declined' ? <XCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                      <span className="text-xs font-bold">{guest.status}</span>
                    </div>
                    <p className={`text-[10px] font-bold uppercase tracking-wider ${
                      guest.risk === 'Low' ? 'text-staywize-teal' : guest.risk === 'High' ? 'text-staywize-purple' : 'text-staywize-gray-500'
                    }`}>
                      {guest.risk} Risk
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-8 py-4 border-2 border-dashed border-staywize-gray-200 rounded-2xl text-staywize-gray-500 font-bold text-sm hover:border-staywize-teal hover:text-staywize-teal transition-all">
              Screen New Guest
            </button>
          </div>
        </div>

        {/* AI Recommendations & Forecasting */}
        <div className="bg-staywize-blue p-10 rounded-[48px] text-white relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <div className="absolute top-10 right-10 w-64 h-64 bg-staywize-teal blur-[100px] rounded-full"></div>
            <div className="absolute bottom-10 right-40 w-48 h-48 bg-staywize-purple blur-[80px] rounded-full"></div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-staywize-teal" />
              </div>
              <div>
                <h3 className="text-2xl font-black">AI Recommendations & Forecasting</h3>
                <p className="text-white/60 text-sm">Real-time data insights powered by StayWize AI</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Key Metrics */}
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-2">Occupancy Forecast</p>
                  <div className="flex items-end gap-3">
                    <h4 className="text-4xl font-black">94%</h4>
                    <div className="flex items-center gap-1 text-staywize-teal text-sm font-bold mb-1">
                      <ArrowUpRight className="w-4 h-4" />
                      +12%
                    </div>
                  </div>
                  <p className="text-white/40 text-xs mt-2">Next 30 days projection</p>
                </div>

                <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-2">Recommended ADR</p>
                  <div className="flex items-end gap-3">
                    <h4 className="text-4xl font-black">Php 3.2k</h4>
                    <div className="flex items-center gap-1 text-staywize-teal text-sm font-bold mb-1">
                      <ArrowUpRight className="w-4 h-4" />
                      +Php 450
                    </div>
                  </div>
                  <p className="text-white/40 text-xs mt-2">Optimized for peak demand</p>
                </div>

                <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                  <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-2">Revenue Potential</p>
                  <div className="flex items-end gap-3">
                    <h4 className="text-4xl font-black">Php 158k</h4>
                    <div className="flex items-center gap-1 text-staywize-teal text-sm font-bold mb-1">
                      <ArrowUpRight className="w-4 h-4" />
                      +22%
                    </div>
                  </div>
                  <p className="text-white/40 text-xs mt-2">With AI-driven dynamic pricing</p>
                </div>
              </div>

              {/* Demand Forecast Chart */}
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-[40px] border border-white/10">
                <h4 className="text-lg font-bold mb-6">Demand Forecast</h4>
                <div className="h-[250px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={demandForecastData}>
                      <defs>
                        <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#14B8A6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                      <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#0F172A', border: 'none', borderRadius: '12px' }}
                        itemStyle={{ color: '#fff' }}
                      />
                      <Area type="monotone" dataKey="forecast" stroke="#14B8A6" fillOpacity={1} fill="url(#colorForecast)" strokeWidth={3} />
                      <Area type="monotone" dataKey="current" stroke="rgba(255,255,255,0.2)" fill="transparent" strokeDasharray="5 5" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-staywize-teal"></div>
                    <span className="text-[10px] text-white/60 font-bold uppercase tracking-wider">Forecasted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-white/20 border border-dashed border-white/40"></div>
                    <span className="text-[10px] text-white/60 font-bold uppercase tracking-wider">Current</span>
                  </div>
                </div>
              </div>

              {/* Pricing Recommendations */}
              <div className="space-y-4">
                <h4 className="text-lg font-bold mb-4">Pricing Strategy</h4>
                <div className="bg-white p-6 rounded-3xl text-staywize-blue shadow-xl">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-staywize-teal/10 rounded-xl flex items-center justify-center text-staywize-teal">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <span className="bg-staywize-teal/10 text-staywize-teal text-[10px] font-black px-2 py-1 rounded-full uppercase">High Demand</span>
                  </div>
                  <h5 className="font-black text-lg mb-1">Dynamic Increase</h5>
                  <p className="text-staywize-gray-500 text-xs mb-4">Increase rates by 15% for Mar 28-30 due to local festival.</p>
                  <button className="w-full py-3 bg-staywize-blue text-white rounded-xl font-bold text-sm active:scale-95 transition-all">Apply Recommendation</button>
                </div>

                <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 bg-staywize-purple/10 rounded-xl flex items-center justify-center text-staywize-purple">
                      <PieChart className="w-5 h-5" />
                    </div>
                    <span className="bg-white/10 text-white/60 text-[10px] font-black px-2 py-1 rounded-full uppercase">Optimization</span>
                  </div>
                  <h5 className="font-black text-lg mb-1">Length of Stay</h5>
                  <p className="text-white/40 text-xs">Offer 10% discount for bookings over 5 nights to fill mid-week gaps.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Trends & Property Specific AI */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Market Trends */}
          <div className="bg-white p-8 rounded-[40px] border border-staywize-gray-200 shadow-sm">
            <h3 className="text-xl font-black text-staywize-blue mb-8">Market Trends Comparison</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={marketTrendsData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280', fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Line type="monotone" dataKey="market" stroke="#9333EA" strokeWidth={3} dot={{ r: 4, fill: '#9333EA' }} name="Market Avg" />
                  <Line type="monotone" dataKey="you" stroke="#14B8A6" strokeWidth={3} dot={{ r: 4, fill: '#14B8A6' }} name="Your Performance" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-8 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-staywize-purple"></div>
                <span className="text-xs font-bold text-staywize-gray-800">Market Average</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-staywize-teal"></div>
                <span className="text-xs font-bold text-staywize-gray-800">Your Performance</span>
              </div>
            </div>
          </div>

          {/* Property AI Insights */}
          <div className="bg-white p-8 rounded-[40px] border border-staywize-gray-200 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl overflow-hidden">
                <img src={PROPERTIES[0].image} alt="Property" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-black text-staywize-blue">{PROPERTIES[0].title}</h3>
                <p className="text-staywize-gray-500 text-sm">AI Pricing Strategy</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-staywize-gray-50 p-5 rounded-3xl">
                <p className="text-[10px] font-bold text-staywize-gray-500 uppercase tracking-wider mb-1">Base Price</p>
                <p className="text-xl font-black text-staywize-blue">Php 2,800</p>
              </div>
              <div className="bg-staywize-teal/10 p-5 rounded-3xl border border-staywize-teal/20">
                <p className="text-[10px] font-bold text-staywize-teal uppercase tracking-wider mb-1">AI Optimized</p>
                <p className="text-xl font-black text-staywize-teal">Php 3,450</p>
              </div>
            </div>

            <h4 className="text-sm font-bold text-staywize-gray-800 mb-4">Daily Rate Forecast (Next 7 Days)</h4>
            <div className="h-[150px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dailyRatesData}>
                  <Bar dataKey="rate" radius={[4, 4, 0, 0]}>
                    {dailyRatesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 4 || index === 5 ? '#14B8A6' : '#E5E7EB'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-[10px] font-bold text-staywize-gray-400">Mar 14</span>
              <span className="text-[10px] font-bold text-staywize-teal">Peak Demand</span>
              <span className="text-[10px] font-bold text-staywize-gray-400">Mar 20</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
