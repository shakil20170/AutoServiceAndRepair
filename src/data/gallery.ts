export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: 'Engine Rebuild',
    description: 'Complete engine rebuild for a classic Mustang',
    image: 'https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg',
  },
  {
    id: 2,
    title: 'Brake System Upgrade',
    description: 'Performance brake system installation',
    image: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg',
  },
  {
    id: 3,
    title: 'Electrical Diagnostics',
    description: 'Advanced computer diagnostics for electrical systems',
    image: 'https://images.pexels.com/photos/3807162/pexels-photo-3807162.jpeg',
  },
  {
    id: 4,
    title: 'Suspension Overhaul',
    description: 'Complete suspension rebuild for improved handling',
    image: 'https://images.pexels.com/photos/3807176/pexels-photo-3807176.jpeg',
  },
  {
    id: 5,
    title: 'Transmission Service',
    description: 'Automatic transmission rebuild and fluid change',
    image: 'https://images.pexels.com/photos/3807157/pexels-photo-3807157.jpeg',
  },
  {
    id: 6,
    title: 'Oil Change Service',
    description: 'Regular maintenance with premium synthetic oil',
    image: 'https://images.pexels.com/photos/4480505/pexels-photo-4480505.jpeg',
  },
];