export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  rating: number;
  avatar: string;
  vehicle: string;
}

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: 'Michael Rodriguez',
    quote: `I've been taking my BMW to AutoCare for years. Their attention to detail and technical expertise is unmatched. They diagnosed and fixed an issue that two other shops couldn't figure out.`,
    rating: 5,
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    vehicle: 'BMW 5 Series'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    quote: `The team at AutoCare went above and beyond when my car broke down on the highway. They sent immediate roadside assistance and kept me updated throughout the repair process. Exceptional service!`,
    rating: 5,
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    vehicle: 'Honda Accord'
  },
  {
    id: 3,
    name: 'David Thompson',
    quote: `As someone who knows very little about cars, I appreciate how the mechanics take time to explain issues in terms I can understand. They never push unnecessary services and their prices are fair.`,
    rating: 5,
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    vehicle: 'Toyota Camry'
  },
  {
    id: 4,
    name: 'Jennifer Martinez',
    quote: `I was skeptical about trying a new auto shop, but AutoCare exceeded my expectations. They completed the work on my Mercedes ahead of schedule and even detailed the interior as a courtesy.`,
    rating: 5,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    vehicle: 'Mercedes-Benz C-Class'
  },
  {
    id: 5,
    name: 'Robert Chen',
    quote: `The preventative maintenance program at AutoCare has saved me thousands in potential repairs. Their thorough inspections catch issues before they become major problems. Highly recommended!`,
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    vehicle: 'Audi Q5'
  }
];