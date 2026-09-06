import { Property, Service, User } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Azure Sky Residences',
    location: 'Makati City, Metro Manila',
    price: 12500000,
    type: 'sale',
    category: 'condo',
    beds: 2,
    baths: 2,
    area: 85,
    image: 'https://picsum.photos/seed/condo1/800/600',
    rating: 4.8,
    isVIP: true,
  },
  {
    id: '2',
    title: 'Emerald Garden Villa',
    location: 'Tagaytay, Cavite',
    price: 45000,
    type: 'rent',
    category: 'house',
    beds: 4,
    baths: 3,
    area: 250,
    image: 'https://picsum.photos/seed/villa1/800/600',
    rating: 4.9,
  },
  {
    id: '3',
    title: 'The Grand Horizon',
    location: 'BGC, Taguig',
    price: 28000000,
    type: 'resale',
    category: 'condo',
    beds: 3,
    baths: 3,
    area: 120,
    image: 'https://picsum.photos/seed/bgc1/800/600',
    rating: 4.7,
    isVIP: true,
  },
  {
    id: '4',
    title: 'Seaside Serenity Loft',
    location: 'Siargao, Surigao del Norte',
    price: 8500,
    type: 'rent',
    category: 'condo',
    beds: 1,
    baths: 1,
    area: 45,
    image: 'https://picsum.photos/seed/loft1/800/600',
    rating: 4.6,
  },
  {
    id: '5',
    title: 'Modern Minimalist Estate',
    location: 'Quezon City, Metro Manila',
    price: 18500000,
    type: 'sale',
    category: 'house',
    beds: 5,
    baths: 4,
    area: 350,
    image: 'https://picsum.photos/seed/house1/800/600',
    rating: 4.9,
    isVIP: true,
  },
  {
    id: '6',
    title: 'Urban Pulse Studio',
    location: 'Cebu City, Cebu',
    price: 3500000,
    type: 'sale',
    category: 'condo',
    beds: 1,
    baths: 1,
    area: 32,
    image: 'https://picsum.photos/seed/studio1/800/600',
    rating: 4.5,
  }
];

export const SERVICES: Service[] = [
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'Buy, sell, or rent properties with AI-driven valuation and seamless digital closing.',
    category: 'Ecosystem',
    price: 0,
    image: '',
    icon: 'Home',
    color: 'staywize-blue'
  },
  {
    id: 'travel',
    title: 'Travel & Stays',
    description: 'Book unique stays and travel experiences with exclusive member discounts.',
    category: 'Ecosystem',
    price: 0,
    image: '',
    icon: 'Plane',
    color: 'staywize-teal'
  },
  {
    id: 'lifestyle',
    title: 'Lifestyle Shop',
    description: 'Curated e-commerce for your home and lifestyle, integrated with your property.',
    category: 'Ecosystem',
    price: 0,
    image: '',
    icon: 'ShoppingBag',
    color: 'staywize-purple'
  },
  {
    id: 'insurance',
    title: 'StaySafe Insurance',
    description: 'Built-in protection for your property, travel, and belongings in one click.',
    category: 'Ecosystem',
    price: 0,
    image: '',
    icon: 'ShieldCheck',
    color: 'staywize-blue'
  }
];

export const PREMIUM_SERVICES: Service[] = [
  {
    id: '1',
    title: 'Appliance & Fixture Repairs',
    price: 1200,
    description: 'Expert repair services for all your home appliances and fixtures. Quick response and guaranteed quality.',
    category: 'Repairs & Maintenance',
    image: 'https://picsum.photos/seed/repair/800/600'
  },
  {
    id: '2',
    title: 'Guest Welcome Kit & Orientation',
    price: 2500,
    description: 'Provide your guests with a warm welcome including essential toiletries, local snacks, and a property guide.',
    category: 'Hospitality Services',
    image: 'https://picsum.photos/seed/welcome/800/600'
  },
  {
    id: '3',
    title: 'Deep Cleaning Service',
    price: 3500,
    description: 'Thorough cleaning of every corner of your unit, including windows, upholstery, and hard-to-reach areas.',
    category: 'Cleaning & Housekeeping',
    image: 'https://picsum.photos/seed/cleaning/800/600'
  },
  {
    id: '4',
    title: 'Furnishing Packages',
    price: 150000,
    description: 'Complete interior design and furnishing solutions to make your property ready for rental or move-in.',
    category: 'Interior Design',
    image: 'https://picsum.photos/seed/furnishing/800/600'
  },
  {
    id: '5',
    title: 'Automated Income & Expense Statements',
    price: 500,
    description: 'Track your property\'s financial performance with monthly automated reports and tax-ready statements.',
    category: 'Financial Management',
    image: 'https://picsum.photos/seed/finance/800/600'
  },
  {
    id: '6',
    title: 'Digital Lease Agreement Generation & Signing',
    price: 1000,
    description: 'Legally binding digital lease agreements customized for your property, with secure e-signature support.',
    category: 'Legal & Compliance',
    image: 'https://picsum.photos/seed/legal/800/600'
  },
  {
    id: '7',
    title: 'Professional Listing Photo & Video Shoots',
    price: 8000,
    description: 'High-quality photography and video tours to make your property stand out in the competitive market.',
    category: 'Marketing Services',
    image: 'https://picsum.photos/seed/photo/800/600'
  },
  {
    id: '8',
    title: 'Preventive Maintenance Inspections',
    price: 2000,
    description: 'Regular inspections to identify and fix potential issues before they become costly repairs.',
    category: 'Maintenance',
    image: 'https://picsum.photos/seed/inspection/800/600'
  },
  {
    id: '9',
    title: 'Local Experience Booking Assistance',
    price: 1500,
    description: 'Help your guests discover and book the best local tours, restaurants, and activities.',
    category: 'Concierge Services',
    image: 'https://picsum.photos/seed/concierge/800/600'
  }
];

export const PASIG_CONDOS = [
  {
    id: 'p1',
    title: 'Fairlane Residences',
    price: '₱6.5M - ₱12M',
    location: 'West Capitol Drive, Kapitolyo, Pasig',
    image: 'https://picsum.photos/seed/fairlane/400/300',
    description: 'Modern high-rise living in the heart of Kapitolyo.',
    coords: { x: 42, y: 58 }
  },
  {
    id: 'p2',
    title: 'Levina Place',
    price: '₱4.2M - ₱8.5M',
    location: 'Jenny\'s Ave, Rosario, Pasig',
    image: 'https://picsum.photos/seed/levina/400/300',
    description: 'Asian boutique condo with resort-style amenities.',
    coords: { x: 65, y: 45 }
  },
  {
    id: 'p3',
    title: 'Mirea Residences',
    price: '₱5.1M - ₱9.8M',
    location: 'Amang Rodriguez Ave, Santolan, Pasig',
    image: 'https://picsum.photos/seed/mirea/400/300',
    description: 'Neo-Asian minimalist theme in a serene community.',
    coords: { x: 70, y: 30 }
  },
  {
    id: 'p4',
    title: 'Mayfield Park Residences',
    price: '₱3.8M - ₱7.2M',
    location: 'Felix Ave, Karangalan Village, Pasig',
    image: 'https://picsum.photos/seed/mayfield/400/300',
    description: 'Zen-inspired sanctuary with lush gardens.',
    coords: { x: 85, y: 35 }
  },
  {
    id: 'p5',
    title: 'Satori Residences',
    price: '₱4.8M - ₱10.5M',
    location: 'F. Pasco Ave, Santolan, Pasig',
    image: 'https://picsum.photos/seed/satori/400/300',
    description: 'A new high-rise development with a modern tropical feel.',
    coords: { x: 72, y: 25 }
  },
  {
    id: 'p6',
    title: 'Sheridan Towers',
    price: '₱5.5M - ₱11.2M',
    location: 'Sheridan St, Highway Hills, Pasig',
    image: 'https://picsum.photos/seed/sheridan/400/300',
    description: 'Strategically located near the Ortigas and BGC districts.',
    coords: { x: 38, y: 62 }
  },
  {
    id: 'p7',
    title: 'Lumiere Residences',
    price: '₱5.8M - ₱11.5M',
    location: 'Pasig Blvd cor Shaw Blvd, Pasig',
    image: 'https://picsum.photos/seed/lumiere/400/300',
    description: 'Modern tropical high-rise with panoramic city views.',
    coords: { x: 45, y: 65 }
  },
  {
    id: 'p8',
    title: 'Prisma Residences',
    price: '₱4.5M - ₱10.2M',
    location: 'Pasig Blvd, Bagong Ilog, Pasig',
    image: 'https://picsum.photos/seed/prisma/400/300',
    description: 'Vibrant living in a master-planned community.',
    coords: { x: 48, y: 70 }
  }
];
