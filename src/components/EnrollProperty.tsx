import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Camera, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Info,
  ShieldCheck,
  Zap,
  DollarSign,
  Layout,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface EnrollPropertyProps {
  onBack?: () => void;
  onSuccess?: (data: any) => void;
}

export const EnrollProperty: React.FC<EnrollPropertyProps> = ({ onBack, onSuccess }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    type: 'condo',
    listingType: 'rent',
    address: '',
    city: 'Pasig City',
    price: '',
    description: '',
    bedrooms: '1',
    bathrooms: '1',
    sqm: '',
    amenities: [] as string[],
  });

  const amenitiesList = [
    'Swimming Pool', 'Gym', '24/7 Security', 'Parking', 'Balcony', 
    'Pet Friendly', 'Air Conditioning', 'Wi-Fi', 'Furnished'
  ];

  const handleAmenityToggle = (amenity: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      nextStep();
    } else {
      setIsSubmitting(true);
      try {
        await onSuccess?.(formData);
      } catch (error) {
        console.error("Submission failed:", error);
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-staywize-gray-50 pb-20">
      {/* Header */}
      <div className="bg-staywize-blue py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-staywize-teal/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Enroll Your Property</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Join the Philippines' leading proptech ecosystem. List your property in minutes and reach thousands of potential tenants and buyers.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-10 relative z-20">
        {/* Progress Bar */}
        <div className="bg-white p-6 rounded-3xl shadow-xl border border-staywize-gray-200 mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold text-staywize-gray-800 uppercase tracking-widest">Step {step} of 4</span>
            <span className="text-xs font-bold text-staywize-blue uppercase tracking-widest">
              {step === 1 ? 'Basic Information' : step === 2 ? 'Property Details' : step === 3 ? 'Amenities & Media' : 'Review & Submit'}
            </span>
          </div>
          <div className="h-2 bg-staywize-gray-100 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(step / 4) * 100}%` }}
              className="h-full bg-staywize-teal"
            ></motion.div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-staywize-gray-200"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-staywize-blue/10 rounded-2xl flex items-center justify-center text-staywize-blue">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-staywize-gray-900">Basic Information</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-staywize-gray-800 uppercase tracking-widest">Property Title</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Modern Studio at Shore Residences"
                      className="w-full px-6 py-4 rounded-2xl bg-staywize-gray-50 border border-staywize-gray-200 focus:outline-none focus:ring-2 focus:ring-staywize-blue transition-all"
                      value={formData.title}
                      onChange={e => setFormData({...formData, title: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-staywize-gray-800 uppercase tracking-widest">Property Type</label>
                    <select 
                      className="w-full px-6 py-4 rounded-2xl bg-staywize-gray-50 border border-staywize-gray-200 focus:outline-none focus:ring-2 focus:ring-staywize-blue transition-all appearance-none cursor-pointer"
                      value={formData.type}
                      onChange={e => setFormData({...formData, type: e.target.value})}
                    >
                      <option value="condo">Condominium</option>
                      <option value="house">House & Lot</option>
                      <option value="apartment">Apartment</option>
                      <option value="commercial">Commercial Space</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-staywize-gray-800 uppercase tracking-widest">Listing Type</label>
                    <div className="grid grid-cols-3 gap-2">
                      {['rent', 'sale', 'resale'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({...formData, listingType: type})}
                          className={`py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                            formData.listingType === type 
                              ? 'bg-staywize-blue text-white border-staywize-blue shadow-md' 
                              : 'bg-white text-staywize-gray-800 border-staywize-gray-200 hover:bg-staywize-gray-50'
                          }`}
                        >
                          For {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-staywize-gray-800 uppercase tracking-widest">Price (PHP)</label>
                    <div className="relative">
                      <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-staywize-gray-400" />
                      <input 
                        required
                        type="number" 
                        placeholder="0.00"
                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-staywize-gray-50 border border-staywize-gray-200 focus:outline-none focus:ring-2 focus:ring-staywize-blue transition-all"
                        value={formData.price}
                        onChange={e => setFormData({...formData, price: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-staywize-gray-200"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-staywize-teal/10 rounded-2xl flex items-center justify-center text-staywize-teal">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-staywize-gray-900">Property Details</h2>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-staywize-gray-800 uppercase tracking-widest">Full Address</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Street, Building, Unit Number"
                      className="w-full px-6 py-4 rounded-2xl bg-staywize-gray-50 border border-staywize-gray-200 focus:outline-none focus:ring-2 focus:ring-staywize-blue transition-all"
                      value={formData.address}
                      onChange={e => setFormData({...formData, address: e.target.value})}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-staywize-gray-800 uppercase tracking-widest">Bedrooms</label>
                      <select 
                        className="w-full px-6 py-4 rounded-2xl bg-staywize-gray-50 border border-staywize-gray-200 focus:outline-none focus:ring-2 focus:ring-staywize-blue transition-all appearance-none cursor-pointer"
                        value={formData.bedrooms}
                        onChange={e => setFormData({...formData, bedrooms: e.target.value})}
                      >
                        <option value="studio">Studio</option>
                        <option value="1">1 Bedroom</option>
                        <option value="2">2 Bedrooms</option>
                        <option value="3">3+ Bedrooms</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-staywize-gray-800 uppercase tracking-widest">Bathrooms</label>
                      <select 
                        className="w-full px-6 py-4 rounded-2xl bg-staywize-gray-50 border border-staywize-gray-200 focus:outline-none focus:ring-2 focus:ring-staywize-blue transition-all appearance-none cursor-pointer"
                        value={formData.bathrooms}
                        onChange={e => setFormData({...formData, bathrooms: e.target.value})}
                      >
                        <option value="1">1 Bathroom</option>
                        <option value="2">2 Bathrooms</option>
                        <option value="3">3+ Bathrooms</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-staywize-gray-800 uppercase tracking-widest">Floor Area (sqm)</label>
                      <input 
                        required
                        type="number" 
                        placeholder="e.g. 28"
                        className="w-full px-6 py-4 rounded-2xl bg-staywize-gray-50 border border-staywize-gray-200 focus:outline-none focus:ring-2 focus:ring-staywize-blue transition-all"
                        value={formData.sqm}
                        onChange={e => setFormData({...formData, sqm: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-staywize-gray-800 uppercase tracking-widest">Description</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Describe your property's best features..."
                      className="w-full px-6 py-4 rounded-2xl bg-staywize-gray-50 border border-staywize-gray-200 focus:outline-none focus:ring-2 focus:ring-staywize-blue transition-all resize-none"
                      value={formData.description}
                      onChange={e => setFormData({...formData, description: e.target.value})}
                    ></textarea>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-staywize-gray-200"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-staywize-purple/10 rounded-2xl flex items-center justify-center text-staywize-purple">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-staywize-gray-900">Amenities & Media</h2>
                </div>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <label className="text-xs font-bold text-staywize-gray-800 uppercase tracking-widest">Select Amenities</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {amenitiesList.map((amenity) => (
                        <button
                          key={amenity}
                          type="button"
                          onClick={() => handleAmenityToggle(amenity)}
                          className={`flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-bold transition-all border ${
                            formData.amenities.includes(amenity)
                              ? 'bg-staywize-teal/10 text-staywize-teal border-staywize-teal'
                              : 'bg-staywize-gray-50 text-staywize-gray-600 border-staywize-gray-200 hover:border-staywize-teal/30'
                          }`}
                        >
                          <CheckCircle2 className={`w-4 h-4 ${formData.amenities.includes(amenity) ? 'opacity-100' : 'opacity-20'}`} />
                          {amenity}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-bold text-staywize-gray-800 uppercase tracking-widest">Property Photos</label>
                    <div className="border-2 border-dashed border-staywize-gray-200 rounded-[32px] p-12 text-center hover:border-staywize-blue transition-all cursor-pointer group">
                      <div className="w-16 h-16 bg-staywize-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-staywize-blue/10 group-hover:text-staywize-blue transition-all">
                        <Camera className="w-8 h-8" />
                      </div>
                      <p className="text-staywize-gray-900 font-bold mb-1">Click or drag photos to upload</p>
                      <p className="text-staywize-gray-500 text-xs">PNG, JPG up to 10MB each. Minimum 5 photos recommended.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-staywize-gray-200"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-staywize-teal/10 rounded-2xl flex items-center justify-center text-staywize-teal">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-staywize-gray-900">Review & Submit</h2>
                </div>

                <div className="space-y-6">
                  <div className="p-6 bg-staywize-gray-50 rounded-3xl border border-staywize-gray-100 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-staywize-gray-900">{formData.title || 'Untitled Property'}</h3>
                        <p className="text-staywize-gray-600 text-sm flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" /> {formData.address}, {formData.city}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-black text-staywize-blue">PHP {Number(formData.price).toLocaleString()}</p>
                        <p className="text-[10px] font-bold text-staywize-gray-400 uppercase tracking-widest">For {formData.listingType}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-staywize-gray-200">
                      <div className="text-center">
                        <p className="text-xs font-bold text-staywize-gray-400 uppercase tracking-widest mb-1">Type</p>
                        <p className="font-bold text-staywize-gray-900 capitalize">{formData.type}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-bold text-staywize-gray-400 uppercase tracking-widest mb-1">Layout</p>
                        <p className="font-bold text-staywize-gray-900">{formData.bedrooms} BR / {formData.bathrooms} BA</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-bold text-staywize-gray-400 uppercase tracking-widest mb-1">Area</p>
                        <p className="font-bold text-staywize-gray-900">{formData.sqm} sqm</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                    <Info className="w-5 h-5 text-staywize-blue flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-staywize-blue leading-relaxed">
                      By submitting, you agree to Staywize's terms of service. Your property will be reviewed by our team before going live. This usually takes 24-48 hours.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center gap-4">
            {step > 1 ? (
              <button 
                type="button"
                onClick={prevStep}
                className="px-8 py-4 rounded-2xl font-bold text-staywize-gray-600 hover:bg-staywize-gray-100 transition-all flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Previous
              </button>
            ) : (
              <div></div>
            )}

            <button 
              type="submit"
              disabled={isSubmitting}
              className={`bg-staywize-blue hover:bg-staywize-blue/90 text-white px-10 py-4 rounded-2xl font-bold transition-all active:scale-95 shadow-xl shadow-staywize-blue/20 flex items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  Submitting...
                </>
              ) : (
                <>
                  {step === 4 ? 'Submit Enrollment' : 'Continue'}
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Info Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-staywize-gray-200 shadow-sm">
            <div className="w-10 h-10 bg-staywize-teal/10 rounded-xl flex items-center justify-center text-staywize-teal mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-staywize-gray-900 mb-2">Fast Approval</h4>
            <p className="text-staywize-gray-600 text-xs leading-relaxed">Our AI-driven verification process ensures your listing goes live faster than traditional platforms.</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-staywize-gray-200 shadow-sm">
            <div className="w-10 h-10 bg-staywize-blue/10 rounded-xl flex items-center justify-center text-staywize-blue mb-4">
              <Layout className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-staywize-gray-900 mb-2">Omnichannel Exposure</h4>
            <p className="text-staywize-gray-600 text-xs leading-relaxed">Your property automatically gets listed on Facebook, TikTok, and our partner e-commerce sites.</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-staywize-gray-200 shadow-sm">
            <div className="w-10 h-10 bg-staywize-purple/10 rounded-xl flex items-center justify-center text-staywize-purple mb-4">
              <FileText className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-staywize-gray-900 mb-2">Smart Contracts</h4>
            <p className="text-staywize-gray-600 text-xs leading-relaxed">Secure digital leasing and sales agreements handled directly through the platform.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
