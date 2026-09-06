import React from 'react';
import { Search, Bell, User, Menu, Home, Plane, ShoppingBag, ShieldCheck, LogIn, LogOut } from 'lucide-react';
import { motion } from 'motion/react';
import { User as UserType } from '../types';

interface NavbarProps {
  dark?: boolean;
  onNavigate?: (page: 'home' | 'services' | 'dashboard' | 'marketing' | 'condos' | 'enroll' | 'referrals') => void;
  currentPage?: 'home' | 'services' | 'dashboard' | 'marketing' | 'condos' | 'enroll' | 'referrals';
  user?: UserType | null;
  onLogin?: () => void;
  onLogout?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ dark = false, onNavigate, currentPage = 'home', user, onLogin, onLogout }) => {
  return (
    <nav className={`sticky top-0 z-50 w-full border-b transition-all ${
      dark 
        ? 'bg-staywize-blue border-white/10 text-white' 
        : 'glass-card border-staywize-gray-200 text-staywize-gray-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate?.('home')}>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${dark ? 'bg-white' : 'bg-staywize-blue'}`}>
              <Home className={`${dark ? 'text-staywize-blue' : 'text-white'} w-6 h-6`} />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${dark ? 'text-white' : 'text-staywize-blue'}`}>
              Stay<span className="text-staywize-teal">wize</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => onNavigate?.('home')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'home' 
                  ? (dark ? 'text-white border-b-2 border-white pb-1' : 'text-staywize-blue border-b-2 border-staywize-blue pb-1 font-bold') 
                  : (dark ? 'text-white/80 hover:text-white' : 'text-staywize-gray-800 hover:text-staywize-blue')
              }`}
            >
              Book a Condo
            </button>
            <button 
              onClick={() => onNavigate?.('services')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'services' 
                  ? (dark ? 'text-white border-b-2 border-white pb-1' : 'text-staywize-blue border-b-2 border-staywize-blue pb-1 font-bold') 
                  : (dark ? 'text-white/80 hover:text-white' : 'text-staywize-gray-800 hover:text-staywize-blue')
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => onNavigate?.('dashboard')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'dashboard' 
                  ? (dark ? 'text-white border-b-2 border-white pb-1' : 'text-staywize-blue border-b-2 border-staywize-blue pb-1 font-bold') 
                  : (dark ? 'text-white/80 hover:text-white' : 'text-staywize-gray-800 hover:text-staywize-blue')
              }`}
            >
              Owner Dashboard
            </button>
            <button 
              onClick={() => onNavigate?.('marketing')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'marketing' 
                  ? (dark ? 'text-white border-b-2 border-white pb-1' : 'text-staywize-blue border-b-2 border-staywize-blue pb-1 font-bold') 
                  : (dark ? 'text-white/80 hover:text-white' : 'text-staywize-gray-800 hover:text-staywize-blue')
              }`}
            >
              Marketing
            </button>
            <button 
              onClick={() => onNavigate?.('referrals')}
              className={`text-sm font-medium transition-colors ${
                currentPage === 'referrals' 
                  ? (dark ? 'text-white border-b-2 border-white pb-1' : 'text-staywize-blue border-b-2 border-staywize-blue pb-1 font-bold') 
                  : (dark ? 'text-white/80 hover:text-white' : 'text-staywize-gray-800 hover:text-staywize-blue')
              }`}
            >
              Referrals
            </button>
            <button 
              onClick={() => onNavigate?.('enroll')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                currentPage === 'enroll'
                  ? 'bg-staywize-teal text-white shadow-lg'
                  : (dark ? 'bg-white/10 text-white hover:bg-white/20' : 'bg-staywize-blue text-white hover:bg-staywize-blue/90')
              }`}
            >
              Enroll Property
            </button>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className={`flex items-center gap-3 pl-4 border-l ${dark ? 'border-white/10' : 'border-staywize-gray-200'}`}>
                <div className="text-right hidden sm:block">
                  <p className={`text-xs font-semibold ${dark ? 'text-white' : 'text-staywize-gray-900'}`}>{user.name}</p>
                  <p className="text-[10px] font-medium text-staywize-teal uppercase tracking-wider">{user.tier} Member</p>
                </div>
                <div className="relative group">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className={`w-10 h-10 rounded-full border-2 overflow-hidden cursor-pointer ${dark ? 'border-white/20' : 'border-staywize-blue'}`}
                  >
                    <img src={user.avatar} alt="User" className="w-full h-full object-cover" />
                  </motion.div>
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-staywize-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    <div className="p-4 border-b border-staywize-gray-100">
                      <p className="text-sm font-bold text-staywize-blue">{user.name}</p>
                      <p className="text-xs text-staywize-gray-500 truncate">{user.email}</p>
                    </div>
                    <button 
                      onClick={onLogout}
                      className="w-full text-left px-4 py-3 text-sm text-staywize-purple font-bold hover:bg-staywize-gray-50 flex items-center gap-2 rounded-b-xl"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <button 
                onClick={onLogin}
                className={`flex items-center gap-2 px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                  dark ? 'bg-white text-staywize-blue hover:bg-staywize-gray-100' : 'bg-staywize-blue text-white hover:bg-staywize-blue/90'
                }`}
              >
                <LogIn className="w-4 h-4" />
                Sign In
              </button>
            )}
            
            <button className={`md:hidden p-2 ${dark ? 'text-white' : 'text-staywize-gray-800'}`}>
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
