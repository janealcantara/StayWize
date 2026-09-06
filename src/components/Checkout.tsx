import React, { useState } from 'react';
import { ArrowLeft, Calendar, Users, CreditCard, ShieldCheck, Info, ChevronRight, Star } from 'lucide-react';
import { Property } from '../types';
import { motion } from 'motion/react';
import { Navbar } from './Navbar';

interface CheckoutProps {
  property: Property;
  onBack: () => void;
  onComplete: () => void;
  onNavigate?: (page: 'home' | 'services') => void;
}

export const Checkout: React.FC<CheckoutProps> = ({ property, onBack, onComplete, onNavigate }) => {
  const [step, setStep] = useState(1);
  const [guests, setGuests] = useState(1);
  const [checkIn, setCheckIn] = useState('2024-04-15');
  const [checkOut, setCheckOut] = useState('2024-04-20');

  const nights = 5;
  const basePrice = property.price;
  const serviceFee = 1500;
  const tax = (basePrice * nights + serviceFee) * 0.12;
  const total = basePrice * nights + serviceFee + tax;

  return (
    <div className="bg-staywize-gray-50 min-h-screen">
      <Navbar dark onNavigate={onNavigate} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-staywize-gray-800 hover:text-staywize-blue font-bold mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Property</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-staywize-gray-200">
              <h2 className="text-2xl font-bold text-staywize-blue mb-8">Confirm and Pay</h2>
              
              <div className="space-y-8">
                {/* Your Trip Section */}
                <section>
                  <h3 className="text-lg font-bold text-staywize-gray-900 mb-4">Your Trip</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex justify-between items-center p-4 rounded-2xl bg-staywize-gray-50 border border-staywize-gray-200">
                      <div>
                        <p className="text-xs font-bold text-staywize-gray-800 uppercase tracking-wider mb-1">Dates</p>
                        <p className="text-sm text-staywize-gray-900 font-medium">Apr 15 – 20, 2024</p>
                      </div>
                      <button className="text-staywize-blue font-bold text-sm hover:underline">Edit</button>
                    </div>
                    <div className="flex justify-between items-center p-4 rounded-2xl bg-staywize-gray-50 border border-staywize-gray-200">
                      <div>
                        <p className="text-xs font-bold text-staywize-gray-800 uppercase tracking-wider mb-1">Guests</p>
                        <p className="text-sm text-staywize-gray-900 font-medium">{guests} guest{guests > 1 ? 's' : ''}</p>
                      </div>
                      <button className="text-staywize-blue font-bold text-sm hover:underline">Edit</button>
                    </div>
                  </div>
                </section>

                <hr className="border-staywize-gray-100" />

                {/* Payment Section */}
                <section>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-staywize-gray-900">Pay with</h3>
                    <div className="flex gap-2">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="relative">
                      <select className="w-full p-4 rounded-2xl bg-staywize-gray-50 border border-staywize-gray-200 text-staywize-gray-900 font-medium focus:ring-2 focus:ring-staywize-blue outline-none appearance-none">
                        <option>Credit or Debit Card</option>
                        <option>GCash</option>
                        <option>Maya</option>
                        <option>Bank Transfer</option>
                      </select>
                      <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-staywize-gray-800 rotate-90" />
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                      <input 
                        type="text" 
                        placeholder="Card number" 
                        className="w-full p-4 rounded-2xl bg-staywize-gray-50 border border-staywize-gray-200 focus:ring-2 focus:ring-staywize-blue outline-none"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <input 
                          type="text" 
                          placeholder="Expiration" 
                          className="w-full p-4 rounded-2xl bg-staywize-gray-50 border border-staywize-gray-200 focus:ring-2 focus:ring-staywize-blue outline-none"
                        />
                        <input 
                          type="text" 
                          placeholder="CVV" 
                          className="w-full p-4 rounded-2xl bg-staywize-gray-50 border border-staywize-gray-200 focus:ring-2 focus:ring-staywize-blue outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </section>

                <hr className="border-staywize-gray-100" />

                {/* Ground Rules */}
                <section>
                  <h3 className="text-lg font-bold text-staywize-gray-900 mb-4">Ground Rules</h3>
                  <p className="text-sm text-staywize-gray-800 mb-4">
                    We ask every guest to remember a few simple things about what makes a great guest.
                  </p>
                  <ul className="space-y-2 text-sm text-staywize-gray-800">
                    <li>• Follow the house rules</li>
                    <li>• Treat the host's home like your own</li>
                  </ul>
                </section>

                <div className="pt-4">
                  <p className="text-[10px] text-staywize-gray-800 mb-6 leading-relaxed">
                    By selecting the button below, I agree to the <span className="underline font-bold">Host's House Rules</span>, <span className="underline font-bold">StayWize's Ground Rules for Guests</span>, and that StayWize can charge my payment method if I'm responsible for damage.
                  </p>
                  <button 
                    onClick={onComplete}
                    className="w-full bg-staywize-blue hover:bg-staywize-blue/90 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-staywize-blue/20 transition-all active:scale-95"
                  >
                    Confirm and Pay
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Price Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-staywize-gray-200 sticky top-24">
              <div className="flex gap-4 mb-6">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-24 h-24 rounded-2xl object-cover"
                />
                <div>
                  <p className="text-[10px] font-bold text-staywize-gray-800 uppercase tracking-widest mb-1">{property.location}</p>
                  <h4 className="text-sm font-bold text-staywize-gray-900 mb-1">{property.title}</h4>
                  <div className="flex items-center gap-1 text-xs text-staywize-gray-800">
                    <Star className="w-3 h-3 text-staywize-teal fill-current" />
                    <span className="font-bold">4.92</span>
                    <span className="opacity-60">(128 reviews)</span>
                  </div>
                </div>
              </div>

              <hr className="border-staywize-gray-100 mb-6" />

              <h3 className="text-lg font-bold text-staywize-gray-900 mb-4">Price Details</h3>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm text-staywize-gray-800">
                  <span>Php {basePrice.toLocaleString()} x {nights} nights</span>
                  <span>Php {(basePrice * nights).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-staywize-gray-800">
                  <span className="underline">StayWize service fee</span>
                  <span>Php {serviceFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-staywize-gray-800">
                  <span>Taxes</span>
                  <span>Php {Math.round(tax).toLocaleString()}</span>
                </div>
              </div>

              <hr className="border-staywize-gray-100 mb-6" />

              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-bold text-staywize-gray-900">Total (PHP)</span>
                <span className="text-lg font-bold text-staywize-gray-900">Php {Math.round(total).toLocaleString()}</span>
              </div>

              <div className="bg-staywize-gray-50 p-4 rounded-2xl border border-staywize-gray-200 flex gap-3">
                <ShieldCheck className="w-6 h-6 text-staywize-teal shrink-0" />
                <div>
                  <p className="text-xs font-bold text-staywize-gray-900 mb-1">StayWize Protection</p>
                  <p className="text-[10px] text-staywize-gray-800 leading-relaxed">Your booking is protected by our comprehensive coverage for peace of mind.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
