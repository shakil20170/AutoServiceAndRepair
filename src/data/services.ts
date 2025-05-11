import { 
  Settings, 
  Gauge, 
  Battery, 
  AirVent, 
  Flame, 
  Car, 
  Wrench,
  AlertTriangle,
  FileCheck
} from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: any;
}

export const servicesData: Service[] = [
 
  {
    id: 1,
    title: 'Brake System Service',
    description: 'Comprehensive brake inspection and repair services to keep you safe on the road.',
    features: [
      'Brake pad replacement',
      'Rotor resurfacing & replacement',
      'Brake fluid flush',
      'ABS system diagnostics'
    ],
    image: 'https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg',
    icon: Gauge
  },
  {
    id: 2,
    title: 'Basic Electrical System Repair',
    description: 'Troubleshooting and repair of all automotive electrical systems and components.',
    features: [
      'Battery testing & replacement',
      'Alternator & starter repair',
      'Electrical diagnostics',
      'Wiring repairs'
    ],
    image: 'https://images.pexels.com/photos/12050899/pexels-photo-12050899.jpeg',
    icon: Battery
  },

  {
    id: 3,
    title: 'Transmission Service',
    description: 'Expert transmission maintenance, diagnostics and repair for smooth, reliable shifting.',
    features: [
      'Transmission fluid change',
      'Filter replacement'
    ],
    image: 'https://images.pexels.com/photos/7659802/pexels-photo-7659802.jpeg',
    icon: Flame
  },
  {
    id: 4,
    title: 'Scheduled Maintenance',
    description: 'Factory-recommended maintenance services to keep your vehicle running at its best.',
    features: [
      'Oil & filter changes',
      'Multi-point inspections',
      'Fluid checks & top-ups',
      'Filter replacements'
    ],
    image: 'https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg',
    icon: FileCheck
  },
  {
    id: 5,
    title: 'Suspension & Steering',
    description: 'Expert repair and maintenance of suspension and steering components for a smooth ride.',
    features: [
      'Shock & strut replacement',
      'Wheel alignment',
      'Steering rack repleacement',
      'Ball joint replacement'
    ],
    image: 'https://images.pexels.com/photos/3807192/pexels-photo-3807192.jpeg',
    icon: Wrench
  },
  {
    id: 6,
    title: 'Emergency Roadside Service',
    description: 'Fast, reliable roadside assistance when you need it most.',
    features: [
      'Jump starts',
      'Tire changes'
    ],
    image: 'https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg',
    icon: AlertTriangle
  },
  {
    id: 7,
    title: 'Vehicle Inspections',
    description: 'Comprehensive vehicle inspections to ensure your car is safe and reliable.',
    features: [
      'Pre-purchase inspections',
      'Safety inspections'
    ],
    image: 'https://images.pexels.com/photos/3806252/pexels-photo-3806252.jpeg',
    icon: Car
  },
];