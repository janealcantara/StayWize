import React from 'react';
import { ArrowLeft, MapPin, Shield, Building, Info, Facebook, Twitter, Instagram, Youtube, MessageCircle, PhoneCall, Home } from 'lucide-react';
import { Property } from '../types';
import { motion } from 'motion/react';
import { Navbar } from './Navbar';

interface PropertyDetailProps {
  property: Property;
  onBack: () => void;
  onNavigate?: (page: 'home' | 'services') => void;
  onBook?: () => void;
}

export const PropertyDetail: React.FC<PropertyDetailProps> = ({ property, onBack, onNavigate, onBook }) => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar dark onNavigate={onNavigate} />
      {/* Property Header/Hero */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <img 
          src="https://picsum.photos/seed/fairlane-hero/1920/1080" 
          alt="Fairlane Residences" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center">
          <div className="bg-white/90 p-8 rounded-lg shadow-2xl text-center backdrop-blur-sm">
             <h1 className="text-4xl font-bold tracking-[0.2em] text-staywize-blue mb-2 uppercase">Fairlane</h1>
             <p className="text-sm font-medium tracking-[0.4em] text-staywize-gray-800 uppercase">Residences</p>
          </div>
        </div>
        <button 
          onClick={onBack}
          className="absolute top-8 left-8 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all active:scale-95 flex items-center gap-2 text-staywize-blue font-bold"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Listings</span>
        </button>
      </div>

      {/* Property Details Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-bold text-staywize-blue mb-6">Property Details</h2>
            <p className="text-staywize-gray-800 leading-relaxed mb-8">
              Elevate your way of living and experience rare exclusivity with DMCI Homes' newest residential landmark in Kapitolyo, Pasig City. Standing proud along West Capitol Drive, Fairlane Residences features modern tropical design and thoughtfully designed spacious units that suit your lifestyle needs.
            </p>
            
            <div className="border-t border-staywize-gray-200">
              <div className="flex justify-between py-4 border-b border-staywize-gray-100">
                <span className="font-bold text-staywize-gray-800">Architectural Theme</span>
                <span className="text-staywize-gray-900">Modern Tropical</span>
              </div>
              <div className="flex justify-between py-4 border-b border-staywize-gray-100">
                <span className="font-bold text-staywize-gray-800">Development Type</span>
                <span className="text-staywize-gray-900">High Rise Condominiums</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-staywize-gray-900">
            <div className="absolute top-4 left-4 z-10 bg-white p-4 rounded-xl shadow-lg max-w-[200px]">
              <h4 className="font-bold text-xs mb-1">Location</h4>
              <p className="text-[10px] text-staywize-gray-800">West Capitol, Kapitolyo, Pasig City</p>
            </div>
            <img 
              src="https://picsum.photos/seed/map-pasig/800/600" 
              alt="Map Location" 
              className="w-full h-full object-cover grayscale-[0.5]"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
               <div className="relative">
                  <div className="w-12 h-12 bg-staywize-teal/20 rounded-full animate-ping absolute -inset-0"></div>
                  <div className="w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center relative border-2 border-staywize-teal">
                    <MapPin className="w-6 h-6 text-staywize-teal fill-current" />
                  </div>
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-staywize-gray-900 text-white text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    FAIRLANE
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Units */}
      <section className="bg-staywize-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-staywize-blue mb-12">Available Units on Fairlane Residences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Bare Unit', price: 'Php 28,000 - 40,000 /mo', img: 'https://picsum.photos/seed/unit1/600/400' },
              { title: 'Semi-furnished', price: 'Php 35,000 - 40,000 /mo', img: 'https://picsum.photos/seed/unit2/600/400' },
              { title: 'Fully Furnished', price: 'Php 40,000 - 50,000 /mo', img: 'https://picsum.photos/seed/unit3/600/400' }
            ].map((unit, i) => (
              <div key={i} className="relative h-64 rounded-3xl overflow-hidden group">
                <img src={unit.img} alt={unit.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-staywize-blue/60 flex flex-col items-center justify-center text-white p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">{unit.title}</h3>
                  <p className="text-sm mb-6 opacity-90">{unit.price}</p>
                  <button 
                    onClick={onBook}
                    className="px-8 py-3 bg-white text-staywize-blue rounded-full text-xs font-bold hover:bg-staywize-teal hover:text-white transition-all shadow-lg active:scale-95"
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 mb-16">
             <div className="lg:w-1/2">
                <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
                   <img src="https://picsum.photos/seed/amenities-main/800/1200" alt="Building" className="w-full h-full object-cover" />
                   <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white/90 p-6 rounded-2xl backdrop-blur-md shadow-xl text-center">
                      <h3 className="text-2xl font-bold tracking-[0.2em] text-staywize-blue uppercase">Fairlane</h3>
                      <p className="text-xs font-medium tracking-[0.4em] text-staywize-gray-800 uppercase">Residences</p>
                   </div>
                </div>
             </div>
             <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold text-staywize-blue mb-8">Amenities</h2>
                <p className="text-staywize-gray-800 leading-relaxed mb-12">
                  DMCI Homes communities are designed to provide a healthy and relaxing environment by fusing charming architecture and expansive spaces with impressive amenities that cater to different lifestyles. At DMCI Homes, we also ensure that convenience, safety and comfort are paramount to our clients by providing building facilities and security features that give everyone peace of mind.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div>
                      <h4 className="font-bold text-staywize-blue mb-6 border-b-2 border-staywize-teal inline-block">General Facilities</h4>
                      <ul className="space-y-2 text-sm text-staywize-gray-800">
                        <li>• 24-hour Security</li>
                        <li>• Drop-Off Area</li>
                        <li>• Multi-Purpose Court</li>
                        <li>• Children's Playground</li>
                        <li>• Audio-Video Room</li>
                        <li>• Fitness Gym</li>
                        <li>• Game Area</li>
                        <li>• Interactive Water Play</li>
                        <li>• Linear Park</li>
                        <li>• Kiddie Pool</li>
                        <li>• Landscaped Gardens</li>
                        <li>• Lap Pool</li>
                        <li>• Laundry Station</li>
                      </ul>
                   </div>
                   <div>
                      <ul className="space-y-2 text-sm text-staywize-gray-800 mt-12">
                        <li>• Lounge Pool</li>
                        <li>• Open Lounge</li>
                        <li>• Main Entrance Gate</li>
                        <li>• Picnic and BBQ Area</li>
                        <li>• Perimeter Fence</li>
                        <li>• Pool Deck</li>
                        <li>• Pool Shower Area</li>
                        <li>• Rock Slide</li>
                        <li>• Provision for CCTV Cameras</li>
                        <li>• Roof Deck</li>
                        <li>• Standby Electric Generator</li>
                        <li>• Water Station</li>
                        <li>• WiFi Access</li>
                      </ul>
                   </div>
                </div>
             </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
             <img src="https://picsum.photos/seed/gym/600/400" alt="Gym" className="rounded-3xl w-full aspect-[4/3] object-cover shadow-lg hover:scale-105 transition-transform" />
             <img src="https://picsum.photos/seed/pool/600/400" alt="Pool" className="rounded-3xl w-full aspect-[4/3] object-cover shadow-lg hover:scale-105 transition-transform" />
             <img src="https://picsum.photos/seed/court/600/400" alt="Court" className="rounded-3xl w-full aspect-[4/3] object-cover shadow-lg hover:scale-105 transition-transform" />
             <img src="https://picsum.photos/seed/game/600/400" alt="Game" className="rounded-3xl w-full aspect-[4/3] object-cover shadow-lg hover:scale-105 transition-transform" />
             <img src="https://picsum.photos/seed/play/600/400" alt="Play" className="rounded-3xl w-full aspect-[4/3] object-cover shadow-lg hover:scale-105 transition-transform" />
             <img src="https://picsum.photos/seed/parking/600/400" alt="Parking" className="rounded-3xl w-full aspect-[4/3] object-cover shadow-lg hover:scale-105 transition-transform" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
             <div>
                <h4 className="font-bold text-staywize-blue mb-6 border-b-2 border-staywize-teal inline-block">Unit Facilities</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-staywize-gray-800">
                  <li>• Fire Alarm & Sprinkler System</li>
                  <li>• Provision for CATV</li>
                  <li>• Provision for Metered Utility</li>
                  <li>• Provision for Phone Line</li>
                </ul>
             </div>
             <div>
                <h4 className="font-bold text-staywize-blue mb-6 border-b-2 border-staywize-teal inline-block">Building Facilities</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-staywize-gray-800">
                  <li>• Deck Utility/ Service Area</li>
                  <li>• Fire Alarm & Automatic Sprinkler System</li>
                  <li>• Fire Cabinets</li>
                  <li>• Fire Exit</li>
                  <li>• Garbage Rooms</li>
                  <li>• Landscaped Atriums</li>
                  <li>• Parking Space</li>
                  <li>• Passenger Elevators</li>
                  <li>• Provision for CCTV</li>
                  <li>• Reception Lobby</li>
                  <li>• Sky Patio (Lumiventt Technology)</li>
                </ul>
             </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-staywize-gray-100 p-8 rounded-3xl border border-staywize-gray-200 text-[10px] text-staywize-gray-800 leading-relaxed italic">
            Disclaimer: In its continuing desire to improve, DMCI Homes and/or Lessor reserves the right to change product and/or service features, prices, and terms without prior notice and approval. Displayed photos/images are intended to provide visual reference and may not totally capture other salient features of the unit or property. In the event of any discrepancy between the information contained herein and actual site viewing, the information from the latter shall prevail. Further, floor plans and perspectives depicted by DMCI Homes are for demonstration purposes only and should not be relied upon as final project plans. Contact us for the most updated project information.
          </div>
        </div>
      </section>

      {/* Detail Footer */}
      <footer className="bg-staywize-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-1 md:col-span-1">
                 <div className="flex items-center gap-2 mb-6">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                      <Home className="text-staywize-blue w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight">StayWise</span>
                 </div>
                 <p className="text-xs text-staywize-gray-200 leading-relaxed">
                   List on global marketplaces, automate tasks, and monitor returns—instantly.
                 </p>
              </div>

              <div>
                 <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Head Office</h4>
                 <p className="text-xs text-staywize-gray-200 leading-relaxed mb-4">
                   DMCI Homes Corporate Center, 1321 Apolinario Street, Bangkal, Makati City, Metro Manila, PH 1233
                 </p>
                 <div className="space-y-2 text-xs text-staywize-gray-200">
                    <p>Sales +63 (2) 53248888</p>
                    <p>Leasing +63 (2) 85557777 local 7368</p>
                    <p>Employment +63 (2) 85557777</p>
                    <p>Customer Care +63 (2) 85557700</p>
                    <p>Others +63 (2) 85557777</p>
                 </div>
              </div>

              <div>
                 <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Links</h4>
                 <ul className="space-y-3 text-xs text-staywize-gray-200">
                    <li><a href="#" className="hover:text-staywize-teal transition-colors">Dashboard</a></li>
                    <li><a href="#" className="hover:text-staywize-teal transition-colors">About DMCI</a></li>
                    <li><a href="#" className="hover:text-staywize-teal transition-colors">Services</a></li>
                    <li><a href="#" className="hover:text-staywize-teal transition-colors">Properties</a></li>
                    <li><a href="#" className="hover:text-staywize-teal transition-colors">Maintenance</a></li>
                    <li><a href="#" className="hover:text-staywize-teal transition-colors">What's New</a></li>
                    <li><a href="#" className="hover:text-staywize-teal transition-colors">Reports</a></li>
                    <li><a href="#" className="hover:text-staywize-teal transition-colors">Terms</a></li>
                    <li><a href="#" className="hover:text-staywize-teal transition-colors">Privacy</a></li>
                 </ul>
              </div>

              <div>
                 <h4 className="font-bold mb-6 text-sm uppercase tracking-widest">Social Links</h4>
                 <ul className="space-y-3 text-xs text-staywize-gray-200">
                    <li className="flex items-center gap-2"><Facebook className="w-4 h-4" /> Facebook</li>
                    <li className="flex items-center gap-2"><Twitter className="w-4 h-4" /> Twitter</li>
                    <li className="flex items-center gap-2"><Instagram className="w-4 h-4" /> Instagram</li>
                    <li className="flex items-center gap-2"><Youtube className="w-4 h-4" /> YouTube</li>
                    <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> WeChat</li>
                    <li className="flex items-center gap-2"><PhoneCall className="w-4 h-4" /> Viber</li>
                 </ul>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
};
