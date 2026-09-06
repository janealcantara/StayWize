export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  type: 'sale' | 'rent' | 'resale';
  category: 'condo' | 'house' | 'land' | 'commercial';
  beds: number;
  baths: number;
  area: number;
  image: string;
  rating: number;
  isVIP?: boolean;
}

export interface Service {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  icon?: string;
  color?: string;
}

export interface User {
  name: string;
  email: string;
  avatar: string;
  points: number;
  tier: 'Silver' | 'Gold' | 'Platinum' | 'Diamond';
  nextTierPoints: number;
}

export interface PropertyEnrollment {
  id: string;
  userId: string;
  title: string;
  type: string;
  listingType: string;
  address: string;
  city: string;
  price: number;
  description: string;
  bedrooms: string;
  bathrooms: string;
  sqm: number;
  amenities: string[];
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}
