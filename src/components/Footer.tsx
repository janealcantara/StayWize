import React from 'react';
import { Home, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-staywize-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-staywize-blue rounded-xl flex items-center justify-center">
                <Home className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Stay<span className="text-staywize-teal">wize</span>
              </span>
            </div>
            <p className="text-staywize-gray-200 text-sm leading-relaxed">
              The Philippines' first AI-powered Proptech Superplatform. Integrating real estate, travel, and lifestyle into one seamless digital ecosystem.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-staywize-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-staywize-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-staywize-blue transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-staywize-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-staywize-gray-200 text-sm">
              <li><a href="#" className="hover:text-staywize-teal transition-colors">Property Search</a></li>
              <li><a href="#" className="hover:text-staywize-teal transition-colors">Travel Bookings</a></li>
              <li><a href="#" className="hover:text-staywize-teal transition-colors">Lifestyle Shop</a></li>
              <li><a href="#" className="hover:text-staywize-teal transition-colors">Insurance Plans</a></li>
              <li><a href="#" className="hover:text-staywize-teal transition-colors">Referral Program</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-staywize-gray-200 text-sm">
              <li><a href="#" className="hover:text-staywize-teal transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-staywize-teal transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-staywize-teal transition-colors">Press & Media</a></li>
              <li><a href="#" className="hover:text-staywize-teal transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-staywize-teal transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-staywize-gray-200 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-staywize-teal shrink-0" />
                <span>123 Tech Tower, BGC, Taguig City, Metro Manila, Philippines</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-staywize-teal shrink-0" />
                <span>+63 (2) 8888-WIZE</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-staywize-teal shrink-0" />
                <span>support@staywize.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-staywize-gray-200">
          <p>© 2026 Staywize Proptech Corp. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
