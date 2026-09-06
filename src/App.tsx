import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CityQuickOptions } from './components/CityQuickOptions';
import { PropertyCard } from './components/PropertyCard';
import { PropertyDetail } from './components/PropertyDetail';
import { Services } from './components/Services';
import { Dashboard } from './components/Dashboard';
import { MarketingExposure } from './components/MarketingExposure';
import { Checkout } from './components/Checkout';
import { Features } from './components/Features';
import { Loyalty } from './components/Loyalty';
import { Footer } from './components/Footer';
import { CondoListings } from './components/CondoListings';
import { EnrollProperty } from './components/EnrollProperty';
import { Referrals } from './components/Referrals';
import { PROPERTIES } from './constants';
import { Property, PropertyEnrollment, User } from './types';
import { Filter, ChevronDown, LayoutGrid, List, LogIn, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { auth, db, googleProvider, signInWithPopup, signOut, onAuthStateChanged } from './firebase';
import { collection, query, where, onSnapshot, addDoc, serverTimestamp, doc, getDoc, setDoc } from 'firebase/firestore';

export default function App() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'sale' | 'rent' | 'resale'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [currentPage, setCurrentPage] = useState<'home' | 'services' | 'dashboard' | 'marketing' | 'condos' | 'enroll' | 'referrals'>('home');
  const [isCheckout, setIsCheckout] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [enrollSuccess, setEnrollSuccess] = useState(false);
  const [myEnrollments, setMyEnrollments] = useState<PropertyEnrollment[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Check if user document exists in Firestore
        const userDocRef = doc(db, 'users', firebaseUser.uid);
        const userDoc = await getDoc(userDocRef);
        
        if (!userDoc.exists()) {
          // Create user document
          const newUser: User = {
            name: firebaseUser.displayName || 'Anonymous',
            email: firebaseUser.email || '',
            avatar: firebaseUser.photoURL || `https://api.dicebear.com/7.x/avataaars/svg?seed=${firebaseUser.uid}`,
            points: 0,
            tier: 'Silver',
            nextTierPoints: 1000
          };
          await setDoc(userDocRef, { ...newUser, uid: firebaseUser.uid, role: 'user' });
          setUser(newUser);
        } else {
          setUser(userDoc.data() as User);
        }
      } else {
        setUser(null);
      }
      setIsAuthReady(true);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user && isAuthReady) {
      const q = query(collection(db, 'enrollments'), where('userId', '==', auth.currentUser?.uid));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const enrollments: PropertyEnrollment[] = [];
        snapshot.forEach((doc) => {
          enrollments.push({ id: doc.id, ...doc.data() } as PropertyEnrollment);
        });
        setMyEnrollments(enrollments);
      }, (error) => {
        console.error("Error fetching enrollments: ", error);
      });

      return () => unsubscribe();
    } else {
      setMyEnrollments([]);
    }
  }, [user, isAuthReady]);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Login failed: ", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      handleNavigate('home');
    } catch (error) {
      console.error("Logout failed: ", error);
    }
  };

  const filteredProperties = activeFilter === 'all' 
    ? PROPERTIES 
    : PROPERTIES.filter(p => p.type === activeFilter);

  const handleNavigate = (page: 'home' | 'services' | 'dashboard' | 'marketing' | 'condos' | 'enroll' | 'referrals') => {
    if (page === 'dashboard' && !user) {
      handleLogin();
      return;
    }
    setCurrentPage(page);
    setSelectedProperty(null);
    setIsCheckout(false);
    setBookingSuccess(false);
    setEnrollSuccess(false);
    window.scrollTo(0, 0);
  };

  const handleEnrollSuccess = async (data: any) => {
    if (!auth.currentUser) return;

    try {
      const newEnrollment = {
        userId: auth.currentUser.uid,
        title: data.title,
        type: data.type,
        listingType: data.listingType,
        address: data.address,
        city: data.city,
        price: Number(data.price),
        description: data.description,
        bedrooms: data.bedrooms,
        bathrooms: data.bathrooms,
        sqm: Number(data.sqm),
        amenities: data.amenities,
        status: 'pending',
        createdAt: new Date().toISOString(),
      };
      
      await addDoc(collection(db, 'enrollments'), newEnrollment);
      setEnrollSuccess(true);
    } catch (error) {
      console.error("Error adding enrollment: ", error);
    }
  };

  if (!isAuthReady) {
    return (
      <div className="min-h-screen bg-staywize-gray-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-staywize-blue/20 border-t-staywize-blue rounded-full animate-spin"></div>
      </div>
    );
  }

  if (bookingSuccess) {
    return (
      <div className="min-h-screen bg-staywize-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-12 rounded-[40px] shadow-2xl text-center max-w-md border border-staywize-gray-200">
          <div className="w-24 h-24 bg-staywize-teal/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <div className="w-16 h-16 bg-staywize-teal rounded-full flex items-center justify-center text-white">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-staywize-blue mb-4">Booking Confirmed!</h2>
          <p className="text-staywize-gray-800 mb-10 leading-relaxed">
            Your reservation has been successfully processed. Check your email for the booking details and next steps.
          </p>
          <button 
            onClick={() => handleNavigate('home')}
            className="w-full bg-staywize-blue hover:bg-staywize-blue/90 text-white py-4 rounded-2xl font-bold shadow-lg transition-all active:scale-95"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  if (enrollSuccess) {
    return (
      <div className="min-h-screen bg-staywize-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-12 rounded-[40px] shadow-2xl text-center max-w-md border border-staywize-gray-200">
          <div className="w-24 h-24 bg-staywize-teal/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <div className="w-16 h-16 bg-staywize-teal rounded-full flex items-center justify-center text-white">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-staywize-blue mb-4">Property Enrolled!</h2>
          <p className="text-staywize-gray-800 mb-10 leading-relaxed">
            Your property has been successfully submitted for review. Our team will verify the details and get back to you within 24-48 hours.
          </p>
          <button 
            onClick={() => handleNavigate('dashboard')}
            className="w-full bg-staywize-blue hover:bg-staywize-blue/90 text-white py-4 rounded-2xl font-bold shadow-lg transition-all active:scale-95"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (selectedProperty) {
    if (isCheckout) {
      return (
        <Checkout 
          property={selectedProperty}
          onBack={() => setIsCheckout(false)}
          onComplete={() => setBookingSuccess(true)}
          onNavigate={handleNavigate}
        />
      );
    }

    return (
      <PropertyDetail 
        property={selectedProperty} 
        onBack={() => setSelectedProperty(null)} 
        onNavigate={handleNavigate}
        onBook={() => setIsCheckout(true)}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        onNavigate={handleNavigate} 
        currentPage={currentPage} 
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
      />
      
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <CityQuickOptions onSelect={() => handleNavigate('condos')} />
            <Features />

            {/* Property Section */}
            <section className="py-24 bg-staywize-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                  <div>
                    <h2 className="text-3xl font-bold text-staywize-gray-900 mb-2">Featured Properties</h2>
                    <p className="text-staywize-gray-800">Discover hand-picked residences across the Philippines.</p>
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
                    <div className="flex bg-white p-1 rounded-xl border border-staywize-gray-200 shadow-sm">
                      {(['all', 'sale', 'rent', 'resale'] as const).map((filter) => (
                        <button
                          key={filter}
                          onClick={() => setActiveFilter(filter)}
                          className={`px-4 py-2 rounded-lg text-sm font-bold transition-all capitalize ${
                            activeFilter === filter 
                              ? 'bg-staywize-blue text-white shadow-md' 
                              : 'text-staywize-gray-800 hover:bg-staywize-gray-100'
                          }`}
                        >
                          {filter}
                        </button>
                      ))}
                    </div>

                    <div className="flex bg-white p-1 rounded-xl border border-staywize-gray-200 shadow-sm ml-auto md:ml-0">
                      <button 
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-staywize-gray-100 text-staywize-blue' : 'text-staywize-gray-800'}`}
                      >
                        <LayoutGrid className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-staywize-gray-100 text-staywize-blue' : 'text-staywize-gray-800'}`}
                      >
                        <List className="w-5 h-5" />
                      </button>
                    </div>

                    <button className="btn-secondary py-2 px-4 text-sm">
                      <Filter className="w-4 h-4" />
                      <span>More Filters</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <motion.div 
                  layout
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  <AnimatePresence mode="popLayout">
                    {filteredProperties.map((property) => (
                      <motion.div
                        key={property.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedProperty(property)}
                        className="cursor-pointer"
                      >
                        <PropertyCard property={property} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>

                <div className="mt-16 text-center">
                  <button className="btn-secondary px-10">
                    View All Properties
                  </button>
                </div>
              </div>
            </section>

            <Loyalty user={user} onLogin={handleLogin} />
          </>
        ) : currentPage === 'services' ? (
          <Services />
        ) : currentPage === 'marketing' ? (
          <MarketingExposure onNavigate={handleNavigate} />
        ) : currentPage === 'enroll' ? (
          <EnrollProperty onBack={() => handleNavigate('dashboard')} onSuccess={handleEnrollSuccess} />
        ) : currentPage === 'condos' ? (
          <CondoListings />
        ) : currentPage === 'referrals' ? (
          <Referrals />
        ) : (
          <Dashboard 
            onNavigate={handleNavigate} 
            myEnrollments={myEnrollments}
            user={user}
            onLogout={handleLogout}
          />
        )}

        {/* Newsletter / CTA */}
        <section className="py-24 bg-staywize-blue relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white blur-[100px] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-staywize-teal blur-[100px] rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to start your journey?</h2>
            <p className="text-white/80 text-lg mb-10">
              Join 50,000+ users who are already experiencing the future of proptech. Get personalized recommendations and exclusive deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-staywize-teal w-full sm:w-80 backdrop-blur-md"
              />
              <button className="bg-staywize-teal hover:bg-staywize-teal/90 text-white px-8 py-4 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-staywize-teal/20">
                Get Started Free
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

