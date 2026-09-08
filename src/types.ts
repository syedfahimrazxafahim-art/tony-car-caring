export type ServiceId =
  | 'mobile-car-wash'
  | 'exterior-wash'
  | 'interior-cleaning'
  | 'full-detail'
  | 'wax-shine'
  | 'premium-detailing';

export interface ServiceItem {
  id: ServiceId;
  name: string;
  shortDescription: string;
  details: string[];
  recommendedFor: string;
  iconName: 'Car' | 'Sparkles' | 'Shield' | 'Flame' | 'Droplets' | 'Crown';
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  src: string;
  fallbackSrc?: string;
  alt: string;
  category: 'Exterior' | 'Interior' | 'Mobile Service' | 'Wax & Gloss';
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  serviceUsed: string;
  isSample: boolean;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  service: ServiceId | '';
  locationOrZip: string;
  vehicleDetails: string;
  notes: string;
}
